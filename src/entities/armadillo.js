import { scale } from "../constants";

export function makeArmadillo(k, health, posX, posY, spawnpoints) {
    const armadillo = k.add([
        k.sprite("armadillo", {
            flipX: true,
        }),
        k.state("patrolState", ["patrolState", "attackState"], {
            "patrolState": "attackState",
            "attackState": "patrolState",
        }),
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

    armadillo.onStateEnter("attackState", () => {
        armadillo.play("attack", {
            pingpong: true,
            onEnd: () => setTimeout(() => armadillo.enterState("patrolState"), 0.001),
        })
    })

    let direction = 'up';

    armadillo.onStateUpdate("patrolState", () => {
        if (direction === 'up') {
            armadillo.moveTo(
                spawnpoints[`5x-1y`][0].x, 
                spawnpoints[`5x-1y`][0].y,
                50
            )
            if (armadillo.pos.y === spawnpoints[`5x-1y`][0].y) {
                direction = 'down';
            }
        } else if (direction === 'down') {
            armadillo.moveTo(
                spawnpoints[`5x-3y`][0].x, 
                spawnpoints[`5x-3y`][0].y,
                50
            )
            if (armadillo.pos.y === spawnpoints[`5x-3y`][0].y) {
                direction = 'up';
            }
        }
    })

    return armadillo;
}