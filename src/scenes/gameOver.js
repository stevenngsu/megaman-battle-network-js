import k from "../kaplayCtx";
import { scale } from "../constants";

export default function gameOver(sfx) {
    // sfx.paused = true;
    let bestScore = k.getData("bestScore");
    const currentScore = k.getData("currentScore");

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
        k.setData("bestScore", currentScore);
        bestScore = currentScore;
        bestRank = currentRank;
    }

    k.add([
        k.text("Game Over", { font: "font", size: 48 }),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y - 200),
    ]);

    k.add([
        k.text(`Best Score: ${bestScore}`, {
            font: "font",
            size: 36,
        }),
        k.anchor("center"),
        k.pos(k.center().x - 200, k.center().y - 100),
    ])

    const bestRankBox = k.add([
        k.rect(200, 200, { radius: scale }),
        k.color(0, 0, 0),
        k.area(),
        k.anchor("center"),
        k.outline(6, k.Color.fromArray([255, 255, 255])),
        k.pos(k.center().x - 200, k.center().y + 50),
    ]);

    bestRankBox.add([
        k.text(bestRank, { font: "font", size: 48 }),
        k.anchor("center"),
    ]);

    k.add([
        k.text(`Current Score: ${currentScore}`, {
            font: "font",
            size: 36,
        }),
        k.anchor("center"),
        k.pos(k.center().x + 200, k.center().y - 100),
    ]);

    const currentRankBox = k.add([
        k.rect(200, 200, { radius: scale }),
        k.color(0, 0, 0),
        k.area(),
        k.anchor("center"),
        k.outline(6, k.Color.fromArray([255, 255, 255])),
        k.pos(k.center().x + 200, k.center().y + 50),
    ]);

    currentRankBox.add([
        k.text(currentRank, { font: "font", size: 48 }),
        k.anchor("center"),
    ]);

    k.wait(1, () => {
        k.add([
            k.text("Press Space to Play Again", {
                font: "font",
                size: 24,
            }),
            k.anchor("center"),
            k.pos(k.center().x, k.center().y + 250),
        ]);
        k.onButtonPress("play", () => k.go("game"));
    });
}