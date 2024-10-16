import { scale } from "../constants";

export function makeArmadillo(k, health, posX, posY, spawnpoints) {
    const armadillo = k.add([
        k.sprite("armadillo", {
            flipX: true,
        }),
        k.state("patrolState"),
        k.area({
            shape: new k.Rect(k.vec2(0, 0), 30, 15),
        }),
        k.anchor("bot"),
        k.body(),
        k.pos(posX * scale, posY * scale),
        k.scale(scale),
        k.health(health),
        k.z(0.1),
        k.offscreen(),
        "enemy",  
    ])

    armadillo.onStateEnter("patrolState", () => {
        armadillo.play("idle");
    })

    return armadillo;
}