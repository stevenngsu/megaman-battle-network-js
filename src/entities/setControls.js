

export default function setControls( k, spawnpoints, player) {
    let grid = {
        x: 2,
        y: 2,
    }

    k.onKeyPress((key) => {
        switch (key) {
            case "a":
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
                player.enterState("shootState");
                break;
            case "c":
                player.enterState("slashState");
                break;
           }
    })
    
    player.enterState("idleState");
}