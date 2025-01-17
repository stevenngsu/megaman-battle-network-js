import { scale } from "../constants";
import setControls from "./setControls";

export default function makePlayer(k, health, posX, posY, spawnpoints) {
    const megaman = k.add([
        k.sprite("megaman", {anim: "idle"}),
        k.scale(scale),
        k.area({ shape: new k.Rect(k.vec2(0, 0), 30, 15) }),
        k.anchor("bot"),
        k.pos(posX * scale, posY * scale),
        k.health(health),
        k.state("idleState", ["idleState", "hurtState", "moveState", "shootState", "slashState"]),
        {
            hpUI: health,
        },
        "megaman",
    ])

    const playerHealthUI = k.add([
        k.rect(150, 50),
        k.pos(10, 10),
        k.color(58, 80, 100),
        k.outline(4,  k.Color.fromArray([255, 255, 255])),
    ])

    megaman.hpUI = k.add([
        k.text(megaman.hp(), { font: "font", size: 56 }),
        k.pos(142, 11),
        k.anchor("topright"),
    ])

    megaman.onHurt(() => {
        k.destroy(megaman.hpUI),
        megaman.hpUI = k.add([
            k.text(megaman.hp(), { font: "font", size: 56 }),
            k.pos(142, 11),
            k.anchor("topright"),
        ])
    })

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
    
    megaman.onDeath(() => {
        k.go("gameover");
    })
    
    megaman.onCollide("enemy", (enemy) => {
        k.play("hurt");
        megaman.enterState("hurtState");
        megaman.hurt(20);
    })

    megaman.onCollide("orderPoint", (point) => {
        k.play("collect");
        k.destroy(point);
    })

    megaman.onStateEnter("shootState", () => {
        k.play("buster");
        const buster = k.add([
            k.sprite("buster", {anim: "shoot"}),
            k.pos(megaman.pos.x + 30, megaman.pos.y - 155),
            k.scale(scale),
        ])
        megaman.play("shoot", {
            onEnd: () => megaman.enterState("idleState"),
        })
        k.wait(0.1, () => {
            k.destroy(buster);
        })
        const bullet = k.add([
            k.pos(megaman.pos.x + 80, megaman.pos.y - 60),
            k.move(360, 3000),
            k.scale(scale),
            k.rect(0, 0),
            k.area({ shape: new k.Rect(k.vec2(0, 0), 30, 15) }),
            k.offscreen({ destroy: true }),
            "attack",
        ])
        
        bullet.onCollide("enemy", (enemy) => {
            enemy.hurt(50);
            k.destroy(bullet);
        })
    })

    megaman.onStateEnter("slashState", () => { 
        k.play("swordSwing");
        const slash = k.add([
            k.sprite("slashHitBox", {anim: "slashHitBox"}),
            k.pos(megaman.pos.x + 80, megaman.pos.y - 170),
            k.move(360, 0),
            k.scale(scale),
            k.area({ shape: new k.Rect(k.vec2(0, 0), 40, 75) }),
            "attack",
        ])
        
        slash.onCollide("enemy", (enemy) => {
            enemy.hurt(100);
        })
        
        k.wait(0.1, () => {
            k.destroy(slash);
       })

        const sword = k.add([
            k.sprite("sword", {anim: "slash"}),
            k.pos(megaman.pos.x - 100, megaman.pos.y - 240),
            k.scale(scale),
        ])
        megaman.play("slash", {
            onEnd: () => megaman.enterState("idleState"),
        })
        k.wait(0.1, () => {
            k.destroy(sword);
        })
    })

    setControls(k, spawnpoints, megaman)

    return megaman;
}