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
        k.text("Megaman.EXE Endless Armadillos", { font: "font", size: 24}),
        k.anchor("center"),
        k.pos(k.center().x, 100),
    ])
    k.add([
        k.text("Press Space/Click/Touch to Play", { font: "font", size: 14}),
        k.anchor("center"),
        k.pos(k.center().x, 150),
    ])
}