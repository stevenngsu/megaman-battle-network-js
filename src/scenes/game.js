import k from "../kaplayCtx";
import { scale, screenWidth } from "../constants";
import gameContent from "./gameContent";
import makePlatform from "../platform";
import makePlayer from "../entities/player";
import makeArmadillo from "../entities/armadillo";
import makePoint from "../entities/point";

export default function game() {
    gameContent();
    
    const platform = makePlatform(k).then(platformData => {
        let gameSpeed = 100;
        k.loop(1, () => {
            gameSpeed += 20;
        })

        let playerHealth = 100;
        let enemyHealth = 100;

        // gathering points
        let score = 0;
        let scoreMultiplier = 1;
        const scoreText = k.add([
            k.text("SCORE: 0", { font: "font", size: 36 }),
            k.pos(screenWidth - 300, 10),
        ]);

        const spawnArmadillo = () => {
            let num = Math.floor(Math.random() * 3) + 1
            
            const armadillo = makeArmadillo(
                k,
                enemyHealth,
                platformData.spawnPoints[`6x-${num}y`][0].x / scale,
                platformData.spawnPoints[`6x-${num}y`][0].y / scale,
                platformData.spawnPoints
            )
    
            armadillo.onUpdate(() => {
                if (gameSpeed < 1000) {
                    armadillo.move(-(gameSpeed + gameSpeed), 0)
                    return;
                }
    
                armadillo.move(-gameSpeed, 0);
            })
    
            armadillo.onExitScreen(() => {
                if (armadillo.pos.x < 0) k.destroy(armadillo);
            })

            armadillo.onDeath(() => {
                score += 1;
                scoreText.text = `SCORE: ${score}`;
            })

            const waitTime = k.rand(1, 3);
            k.wait(waitTime, spawnArmadillo);    
        }
        spawnArmadillo();

        const spawnOrderPoint = () => {
            let x1 = Math.floor(Math.random() * 3) + 1
            let x2 = Math.floor(Math.random() * 3) + 1
            let y1 = Math.floor(Math.random() * 3) + 1
            let y2 = Math.floor(Math.random() * 3) + 1
            
            const orderPoint = makePoint(
                k,
                platformData.spawnPoints[`${x1}x-${y1}y`][0].x / scale,
                platformData.spawnPoints[`${x2}x-${y2}y`][0].y / scale,
                platformData.spawnPoints,
            )

            orderPoint.onDestroy(() => {
                score += 5;
                scoreText.text = `SCORE: ${score}`;
            })

            const waitTime = 3;
            k.wait(waitTime, spawnOrderPoint);
        }
        spawnOrderPoint();
            
        const spawnMegaman = () => {
            const megaman = makePlayer(
                k,
                playerHealth,
                platformData.spawnPoints["2x-2y"][0].x / scale,
                platformData.spawnPoints["2x-2y"][0].y / scale,
                platformData.spawnPoints,
            )

            megaman.onDeath(() => {
                k.play("deleted");
                k.setData("currentScore", score);
            });
        }
        spawnMegaman();
    });
} 