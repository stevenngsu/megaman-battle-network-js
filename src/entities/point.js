import k from "../kaplayCtx";
import { scale } from "../constants";

export default function makePoint(k, posX, posY, spawnPoints) {
    const orderPoint = k.add([
        k.sprite("orderPoint", {anim: "flicker"}),
        k.area({ shape: new k.Rect(k.vec2(0, 0), 30, 15) }),
        k.scale(scale),
        k.anchor("bot"),
        k.pos(posX * scale, posY * scale),
        k.offscreen(),
        "orderPoint",
    ])

    k.wait(4, () => {
        k.destroy(orderPoint);
    })

    return orderPoint;
}