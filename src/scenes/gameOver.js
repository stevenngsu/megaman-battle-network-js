import k from "../kaplayCtx";
import { scale } from "../constants";

export default function gameOver(sfx) {
    // sfx.paused = true;
    let bestScore = k.getData("best-score");
    const currentScore = k.getData("current-score");

    const rankGrades = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "S"];
    const rankValues = [ 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400];

    let currentRank = 1;
    let bestRank = 1;

    for (let i = 0; i < rankValues.length; i++) {
        if (rankValues[i] < currentScore) {
            currentRank = rankGrades[i];
        }

        if (rankValues[i] < bestScore) {
            bestRank = rankGrades[i];
        }
    }

    if (bestScore < currentScore) {
        k.setData("best-score", currentScore);
        bestScore = currentScore;
        bestRank = currentRank;
    }

    k.add([
        k.text("Game Over", { font: "font", size: 24 }),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y - 150),
    ]);

    k.add([
        k.text(`Best Score: ${bestScore}`, {
            font: "font",
            size: 20,
        }),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y - 100),
    ])

    k.add([
        k.text(`Current Score: ${currentScore}`, {
            font: "font",
            size: 20,
        }),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y - 200),
    ]);

    const bestRankBox = k.add([
        k.rect(400, 400, { radius: scale }),
        k.color(0, 0, 0),
        k.area(),
        k.anchor("center"),
        k.outline(6, k.Color.fromArray([255, 255, 255])),
        k.pos(k.center().x - 200, k.center().y + 50),
    ]);

    bestRankBox.add([
        k.text(bestRank, { font: "font", size: 20 }),
        k.anchor("center"),
    ]);
}