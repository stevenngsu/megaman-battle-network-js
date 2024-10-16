import { scale } from "../constants";
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
    })

    megaman.onStateEnter("slashState", () => {
        megaman.play("slash", {
            onEnd: () => megaman.enterState("idleState"),
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