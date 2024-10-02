import { scale } from "./constants";
import k from "./kaplayCtx";
import { makePlatform } from "./platform";
import makePlayer from "./entities/player";

export default async function mainMenu() {
    if (!k.getData("best-score")) k.setData("best-score", 0);
    k.onButtonPress(" ", () => k.go("game"));

    const bgPieceWidth = 128;
    const bgPieceHeight = 64;
    const bgPieces = [
        // 0
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(-bgPieceWidth * scale * 2, -bgPieceHeight * scale), k.scale(scale), k.opacity(0.8)]),
        // 1
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(-bgPieceWidth * scale, -bgPieceHeight * scale), k.scale(scale), k.opacity(0.8)]),
        // 2
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(0, -bgPieceHeight * scale), k.scale(scale), k.opacity(0.8)]),
        // 3
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(bgPieceWidth * scale, -bgPieceHeight * scale), k.scale(scale), k.opacity(0.8)]),
        // 4
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(-bgPieceWidth * scale * 2, 0), k.scale(scale), k.opacity(0.8)]),
        // 5
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(-bgPieceWidth * scale, 0), k.scale(scale), k.opacity(0.8)]),
        // 6
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(0, 0), k.scale(scale), k.opacity(0.8)]),
        // 7
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(bgPieceWidth * scale, 0), k.scale(scale), k.opacity(0.8)]),
        // 8
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(-bgPieceWidth * scale * 2, bgPieceHeight * scale), k.scale(scale), k.opacity(0.8)]),
        // 9
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(-bgPieceWidth * scale, bgPieceHeight * scale), k.scale(scale), k.opacity(0.8)]),
        // 10
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(0, bgPieceHeight * scale), k.scale(scale), k.opacity(0.8)]),
        // 11
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(bgPieceWidth * scale, bgPieceHeight * scale), k.scale(scale), k.opacity(0.8)]),
        // 12
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(-bgPieceWidth * scale *2, bgPieceHeight * scale * 2), k.scale(scale), k.opacity(0.8)]),
        // 13
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(-bgPieceWidth * scale, bgPieceHeight * scale * 2), k.scale(scale), k.opacity(0.8),]),
        // 14
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(0, bgPieceHeight * scale * 2), k.scale(scale), k.opacity(0.8)]),
        // 15
        k.add([k.sprite("ACDCbg", { anim: "flicker" }), k.pos(bgPieceWidth * scale, bgPieceHeight * scale * 2), k.scale(scale), k.opacity(0.8),]),

    ];

    const platform = makePlatform(k).then(platformData => {
        makePlayer(
            k,
            platformData.spawnPoints["2x-2y"][0].x / 4,
            platformData.spawnPoints["2x-2y"][0].y / 4,
            platformData,
        )
    });

    console.log(platform);

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