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
        {
            enemiesDefeatedUI: null,
        },
            "megaman",
    ])

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

    megaman.onStateEnter("shootState", () => {
        megaman.play("shoot", {
            onEnd: () => megaman.enterState("idleState"),
        })

        const bullet = k.add([
            k.pos(megaman.pos),
            k.move(360, 3000),
            k.rect(0, 0),
            k.area(),
            k.offscreen({ destroy: true }),
            "bullet",
        ])
        
        bullet.onCollide("enemy", (enemy) => {
            k.destroy(enemy);
            k.destroy(bullet);
        })
    })

    megaman.onStateEnter("slashState", () => {
        megaman.play("slash", {
            onEnd: () => megaman.enterState("idleState"),
        })

        const sword = k.add([
            k.pos(megaman.pos.x + 80, megaman.pos.y - 170),
            k.move(360, 0),
            k.rect(0,0),
            k.scale(scale),
            k.area({ shape: new k.Rect(k.vec2(0, 0), 40, 75) }),
            "sword",
        ])
        
        sword.onCollide("enemy", (enemy) => {
            k.destroy(enemy);
        })
        
        k.wait(0.25, () => {
            k.destroy(sword);
       })
    })

    megaman.onCollide("enemy", (enemy) => {
        megaman.enterState("hurtState");
        megaman.hurt(100);
        megaman.onDeath(() => {
            megaman.play("delete");
            k.go("gameover");
        })
    })
    
    megaman.enemiesDefeatedUI = megaman.add([
        k.text("", { font: "font", size: 12 }),
        k.color(255, 255, 0),
        k.anchor("center"),
        k.pos(30, -10),
    ])

    setControls(k, spawnpoints, megaman)

    return megaman;
}