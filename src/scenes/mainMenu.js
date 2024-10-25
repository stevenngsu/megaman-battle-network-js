import k from "../kaplayCtx";
import { scale } from "../constants";
import gameContent from "./gameContent";
import makePlatform from "../platform";
import makePlayer from "../entities/player";

export default function mainMenu() {
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
        k.text("Megaman.EXE Endless Armadillos", { font: "font", size: 48}),
        k.anchor("center"),
        k.pos(k.center().x, 100),
    ])
    k.add([
        k.text("Press Space to Play", { font: "font", size: 36}),
        k.anchor("center"),
        k.pos(k.center().x, 200),
    ])
}