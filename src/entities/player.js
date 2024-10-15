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
        k.state("idleState", ["idleState", "moveState", "shootState", "slashState"]),        
        "megaman",
    ])

    megaman.onStateEnter("idleState", () => {
        megaman.play("idle")
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

    setControls(k, spawnpoints, megaman)
}