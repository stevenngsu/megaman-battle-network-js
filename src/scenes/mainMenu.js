import k from "../kaplayCtx";
import { scale } from "../constants";
import gameContent from "./gameContent";
import makePlatform from "../platform";
import makePlayer from "../entities/player";

export default async function mainMenu() {
    if (!k.getData("best-score")) k.setData("best-score", 0);
    k.onButtonPress("play", () => k.go("game"));

    gameContent();

    const platform = makePlatform(k).then(platformData => {
        const megaman = makePlayer(
            k,
            1000,
            platformData.spawnPoints["2x-2y"][0].x / scale,
            platformData.spawnPoints["2x-2y"][0].y / scale,
            platformData.spawnPoints,
        )
    });

    k.add([
        k.text("Megaman.EXE Virus Horde", { font: "font", size: 24}),
        k.anchor("center"),
        k.pos(k.center().x, 100),
    ])
    k.add([
        k.text("Press Space/Click/Touch to Play", { font: "font", size: 14}),
        k.anchor("center"),
        k.pos(k.center().x, 150),
    ])


    // const player = makePlayer(
    //     k,
    //     spawnPoints["2x-2y"][0].x / scale,
    //     spawnPoints["2x-2y"][0].y / scale,
    // )
    // Moving Background
    // k.onUpdate(() => {
        // for (num in bgPieces) {
        //     console.log(worldPos(bgPieces[num]))
            // if (bgPieces[num].pos.x >= bgPieces[num].pos.x + bgPieceWidth) { 
                // if (num % 4 === 0) {
                //     bgPieces[num].moveTo(-bgPieceWidth * scale * 2, -bgPieceHeight * scale);
                //     console.log(moveCount)
                //     moveCount ++;
                //     console.log(moveCount)
                // }
                // if (num % 4 === 1) {
                //     bgPieces[num].moveTo(-bgPieceWidth * scale, -bgPieceHeight * scale);
                // }
                // if (num % 4 === 2) {
                //     bgPieces[num].moveTo(0, -bgPieceHeight * scale);
                // }
                // if (num % 4 === 3) {
                //     bgPieces[num].moveTo(bgPieceWidth * scale, -bgPieceHeight * scale);
                // }
            // }
            // bgPieces[num].move(100, 100)
        // }
    // });
}