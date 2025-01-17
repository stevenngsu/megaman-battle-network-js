import { scale } from "../constants";

export default function makeArmadillo(k, health, posX, posY, spawnpoints) {
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
        k.offscreen(),
        {
            hpUI: health,
        },
        "enemy",  
    ])

    armadillo.onStateEnter("patrolState", () => {
        armadillo.play("idle");
    });

    armadillo.hpUI = armadillo.add([
        k.text(armadillo.hp(), { font: "font", size: 8 }),
        k.color(255, 255, 255),
        k.anchor("center"),
        k.pos(0, 1),
    ])

    armadillo.onHurt(() => {
        k.destroy(armadillo.hpUI);
        armadillo.hpUI = armadillo.add([
            k.text(armadillo.hp(), { font: "font", size: 8 }),
            k.color(255, 255, 255),
            k.anchor("center"),
            k.pos(0, 1),
        ])
    })

    armadillo.onDeath(() => {
        k.destroy(armadillo);
    });

    return armadillo;
}