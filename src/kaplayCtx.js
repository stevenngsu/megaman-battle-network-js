import kaplay from "kaplay";
import { scale } from "./constants";

const k = kaplay({
	width: 240 * scale,
	height: 180 * scale,
	letterbox: true,
    global: false,
    pixelDensity: devicePixelRatio,
    background: [0, 0, 0],
    touchToMouse: true,
    buttons: {
        play: {
            keyboard: ["space"],
        },
    },
    debugKey: "o",
    debug: false,
});

export default k;