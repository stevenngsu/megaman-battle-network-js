import k from "./kaplayCtx";
import mainMenu from "./scenes/mainMenu";
import game from "./scenes/game";
import gameOver from "./scenes/gameOver";

k.loadFont("font", "sprites/fonts/Mega-Man-Battle-Network.ttf");

k.loadSprite("battleground", "sprites/battleground.png");

k.loadSprite("ACDCbg", "sprites/backgrounds/ACDCbg.png", {
	sliceX: 2,
	sliceY: 4,
	anims: {
		flicker: { from: 0, to: 6, loop: true, speed: 4 },
	}
})
k.loadSprite("megaman", "sprites/player/MMspritesheet.png", {
	sliceX: 10,
	sliceY: 24,
	anims: {
		idle: 0,
		hurt: { from: 1, to: 8, speed: 30 },
		delete: 1,
		move: { from: 10, to: 16, speed: 60 },
		shoot: { from: 63, to: 67, speed: 60 },
		slash: { from: 30, to: 33, speed: 15 },
	}
});

k.loadSprite("armadillo", "sprites/enemies/armadillo.png", {
	sliceX: 5,
	sliceY: 4,
	anims: {
		idle: { from: 0, to: 3, loop: true},
		attack: { from: 5, to: 9 },
	}
});

k.loadSprite("orderPoint", "sprites/battleUI/orderPoints.png", {
	sliceX: 3,
	anims: {
		flicker: { from: 0, to: 2, loop: true},
	}
});

k.scene("main-menu", mainMenu);
k.scene("game", game);
k.scene("gameover", gameOver);

k.go("main-menu");