import kaplay from "kaplay";
import { scale } from "./constants";

const k = kaplay({
	width: 240 * scale,
	height: 180 * scale,
	letterbox: true,
	background: [0, 0, 0],
    global: false,
    scale,
    touchToMouse: true,
    buttons: {
        up: {
            keyboard: ["w", "up"],
        },
        right: {
            keyboard: ["d", "right"],
        },
        down: {
            keyboard: ["s", "down"],
        },
        left: {
            keyboard: ["a", "left"],
        },
        play: {
            keyboard: ["space"],
        },
        shoot: {
            keyboard: ["x"],
        },
        slash: {
            keyboard: ["c"],
        },
    },
    debugKey: "p",
    debug: true,
});

export default k;