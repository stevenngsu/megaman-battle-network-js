import k from "../kaplayCtx";
import { scale } from "../constants";

export default function gameContent() {
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
}