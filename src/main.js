import k from "./kaplayCtx";
import { scale } from "./constants";
import mainMenu from "./mainMenu";

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
			shoot: 20,
			move: { from: 10, to: 16, speed: 60 },
			hit: { from: 1, to: 8, speed: 60 },
			slash: { from: 30, to: 33, speed: 60 },
		}
	});
	k.loadSprite("armadillo", "sprites/enemies/armadillo.png", {
		sliceX: 5,
		sliceY: 4,
		anims: {
			idle: { from: 0, to: 3, loop: true},
			attack: { from: 5, to: 9 },
		}
	})
	k.loadFont("font", "sprites/fonts/Mega-Man-Battle-Network.ttf")
	k.loadSprite("battleground", "sprites/battleground.png")
	k.loadSpriteAtlas("sprites/battleUI/CrossScreen.png", {
		"cardSelectScreen": {
			x: 104,
			y: 6,
			width: 120,
			height: 160,
		},
	})
	k.loadSpriteAtlas("sprites/battleUI/misc.png", {
		"customBar": {
			x: 255,
			y: 63,
			width: 144,
			height: 15,
		},
		"fullCustom": {
			x: 255,
			y: 87,
			width: 144,
			height: 72,
			sliceY: 4,
			anims: {
				full: { from: 0, to: 3 },
			}
		},
		"hp": {
			x: 127,
			y: 173,
			width: 44,
			height: 18,
		},
	})
	k.loadSpriteAtlas("sprites/battleUI/portraits.png", {
		"MMportrait": {
			x: 0,
			y: 0,
			width: 35,
			height: 140,
			sliceY: 7,
			anims: {
				neutral: 0,
				counter: 1,
			}
		},
		"portraitNum" : {
			x: 22,
			y: 242,
			width: 176,
			height: 16,
			sliceX: 11,
			anims: {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				5: 6,
				7: 7,
				8: 8,
				9: 9,
				"none": 10,
			}
		}
	})

	k.scene("main-menu", mainMenu)

	k.scene("gameover", () => {

	})

	k.go("main-menu");

// 	k.scene("game", async () => {
// 		k.add([
// 			k.rect(k.width(), k.height()),
// 			k.color(k.Color.fromHex("#808080")),
// 			k.fixed(),
// 		])

// 		k.add(battleground);

		
// 		// pause menu

// 		let curTween = null;

// 		k.onKeyPress("p", () => {
// 			pause();
// 		});

// 		const pauseMenu = k.add([
// 			k.rect(300, 400),
// 			k.color(255, 255, 255),
// 			k.outline(4),
// 			// k.anchor("center"),
// 			// k.pos(center().add(0, 700)),
// 		]);

// 		pauseMenu.hidden = true;
// 		pauseMenu.paused = true;
		

// 		const ui = makeUI(k, -120, 0);
		
// 		const player = makePlayer(
// 			k,
// 			bgspawnPoints["2x-2y"][0].x / scale,
// 			bgspawnPoints["2x-2y"][0].y / scale,
// 		);

// 		const enemy = makeEnemy(
// 			k,
// 			bgspawnPoints["5x-2y"][0].x / scale,
// 			bgspawnPoints["5x-2y"][0].y / scale,
// 			player,
// 			bgspawnPoints,
// 		)

// 		setControls(k, bgspawnPoints, player, ui);
// 		k.add(ui);
// 		k.add(player);
// 		k.add(enemy);
// 	});