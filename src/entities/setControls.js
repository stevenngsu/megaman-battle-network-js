

export default function setControls( k, spawnpoints, player) {
    let grid = {
        x: 2,
        y: 2,
    }

    k.onKeyDown((key) => {
        if (player.state !== "idleState") return;
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
           }
    })

    let action = true;
    k.onKeyPress((key) => {
        if (action !== true) return;
        switch (key) {
            case "j":
            player.enterState("shootState");
            action = false;
            setTimeout(() => {
                action = true;
            }, "100");
            break;
        case "k":
            player.enterState("slashState");
            action = false;
            setTimeout(() => {
                action = true;
            }, "500");
            break;
        }          
    })
    player.enterState("idleState");
}