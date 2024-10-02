import { scale } from "../constants";
import setControls from "./setControls";

export default function makePlayer(k, posX, posY, data) {
    const megaman = k.add([
        k.sprite("megaman", {anim: "idle"}),
        k.scale(scale),
        k.area({ shape: new k.Rect(k.vec2(0, 10), 30, 20) }),
        k.anchor("bot"),
        k.pos(posX * scale, posY * scale),
        k.health(1000),
        k.opacity(1),
        k.state("idleState", ["idleState", "moveState", "attackState"]),
        
        "megaman",
    ])

    setControls(k, data.spawnPoints, megaman)
}