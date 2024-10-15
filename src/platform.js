import { scale } from "./constants";

export default async function makePlatform(k) {
    const platformData = await (await fetch(`./sprites/battleground.json`)).json();

    const platform = k.add([k.sprite("battleground"), k.scale(scale), k.pos(0)])

    const spawnPoints = {}

    for (const layer of platformData.layers) {
        if (layer.name === "spawnpoints") {
            for (const spawnPoint of layer.objects) {
                if (spawnPoints[spawnPoint.name]){
                    spawnPoints[spawnPoint.name].push({
                        x: spawnPoint.x,
                        y: spawnPoint.y,
                    })
                    continue;
                }

                spawnPoints[spawnPoint.name] = [{ x: spawnPoint.x * scale, y: spawnPoint.y * scale}]
            }
        }
    }

    return { platform, spawnPoints };
}