import { scale, tileWidth, tileHeight } from "../constants";
import setControls from "./setControls";

export default async function makePlayer(k, health, posX, posY, spawnpoints) {
    const megaman = k.add([
        k.sprite("megaman", {anim: "idle"}),
        k.scale(scale),
        k.area({ shape: new k.Rect(k.vec2(0, 0), 30, 15) }),
        k.anchor("bot"),
        k.pos(posX * scale, posY * scale),
        k.health(health),
        k.state("idleState", ["idleState", "hurtState", "moveState", "shootState", "slashState"]),
        "megaman",
    ])

    // state transitions
    megaman.onStateEnter("idleState", () => {
        megaman.play("idle");
    })
    megaman.onStateEnter("hurtState", () => {
        megaman.play("hurt", {
            onEnd: () => megaman.enterState("idleState"),
        })
    })
    megaman.onStateEnter("moveState", () => {
        megaman.play("move", {
            onEnd: () => megaman.enterState("idleState"),
        })
    })
    
    // collisions
    megaman.onCollide("enemy", (enemy) => {
        megaman.enterState("hurtState");
        megaman.hurt(100);
        megaman.onDeath(() => {
            // megaman.play("delete");
            k.go("gameover");
        })
    })

    // gathering points
    let score = 0;
    let scoreMultiplier = 0;

    const scoreText = k.add([
        k.text("Score: 0", { font: "font", size: 18 }),
        k.pos(20, 20),
    ]);

    megaman.onCollide("orderPoint", (point) => {
        // k.play("collect");
        k.destroy(point);
        score += 5;
        scoreText.text = `SCORE : ${score}`;
    })

    megaman.onStateEnter("shootState", () => {
        megaman.play("shoot", {
            onEnd: () => megaman.enterState("idleState"),
        })

        const bullet = k.add([
            k.pos(megaman.pos.x + 80, megaman.pos.y - 60),
            k.move(360, 3000),
            k.scale(scale),
            k.rect(0, 0),
            k.area({ shape: new k.Rect(k.vec2(0, 0), 30, 15) }),
            k.offscreen({ destroy: true }),
            "bullet",
        ])
        
        bullet.onCollide("enemy", (enemy) => {
            enemy.hurt(50);
            console.log(enemy);
        })
    })

    megaman.onStateEnter("slashState", () => {
        megaman.play("slash", {
            onEnd: () => megaman.enterState("idleState"),
        })

        const sword = k.add([
            k.pos(megaman.pos.x + 80, megaman.pos.y - 170),
            k.move(360, 0),
            k.scale(scale),
            k.rect(0,0),
            k.area({ shape: new k.Rect(k.vec2(0, 0), 40, 75) }),
            "sword",
        ])
        
        sword.onCollide("enemy", (enemy) => {
            enemy.hurt(100);
        })
        
        k.wait(0.1, () => {
            k.destroy(sword);
       })
    })

    setControls(k, spawnpoints, megaman)

    return megaman;
}