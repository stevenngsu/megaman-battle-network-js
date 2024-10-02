

export default function setControls( k, spawnpoints, player) {
    // Player starts in middle of left grid
    let grid = {
        x: 2,
        y: 2,
    }

    // Card select menu open every x seconds
    let menuTween;
    let pauseTween;

    // const pauseMenu = k.add([
    //     k.rect(300, 400),
    //     k.color(255, 255, 255),
    //     k.outline(4),
    //     k.anchor("center"),
    //     k.pos(center().add(0, 700)),
    // ]);

    let go = false;
    let seconds = 0;
    function incrementSeconds() {
        seconds += 1;
    }
    function custom() {
        if (go) {

        } else {
        console.log('paused!')
        }
    }
    // Controls on key press
    k.onKeyPress((key) => {
        switch (key) {
            case "a":
                // Should traverse left when not paused, move left in card select screen (pause menu)
                if (grid.x > 1) {
                    player.enterState("moveState");
                    grid.x -= 1;
                    player.moveTo(
                        spawnpoints[`${grid.x}x-${grid.y}y`][0].x, 
                        spawnpoints[`${grid.x}x-${grid.y}y`][0].y
                    );
                    break;
                }
                break;
            case "d":
                // Should traverse right when not paused, move right in card select screen (pause menu)
                if (grid.x < 3) {
                    player.enterState("moveState");
                    grid.x += 1;
                    player.moveTo(
                        spawnpoints[`${grid.x}x-${grid.y}y`][0].x, 
                        spawnpoints[`${grid.x}x-${grid.y}y`][0].y
                    );
                    break;
                }
                break;
            case "w":
                if (grid.y > 1) {
                    player.enterState("moveState");
                    grid.y -= 1
                    player.moveTo(
                        spawnpoints[`${grid.x}x-${grid.y}y`][0].x, 
                        spawnpoints[`${grid.x}x-${grid.y}y`][0].y
                    );
                    break;
                };
                break;
            case "s":
                if (grid.y < 3) {
                    player.enterState("moveState");
                    grid.y += 1;
                    player.moveTo(
                        spawnpoints[`${grid.x}x-${grid.y}y`][0].x, 
                        spawnpoints[`${grid.x}x-${grid.y}y`][0].y
                    );
                    break;
                };
                break;
            case "x":
                player.enterState("attackState");
                player.play("shoot");
                break;
            case "z":
                player.enterState("attackState");
                player.play("slash");
                break;
            case "q": 
            if (go) {
                menuTween = k.tween(
                        int.pos,
                        k.vec2(0,0),
                        0.25,
                        (val) => int.pos = val,
                        k.easings.easeOutCubic,
                    );
            }
            console.log(seconds)
            break;
            case "e":
                if(menuTween) {
                    menuTween = k.tween(
                        int.pos,
                        k.vec2(-120 * scale,0),
                        0.25,
                        (val) => int.pos = val,
                        k.easings.easeOutCubic,
                    );
                    menuTween = null;
                    seconds = 0;
                }
            break;
        }
        console.log(player.pos)
    })
}