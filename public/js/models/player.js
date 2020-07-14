class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xspeed = 0;
        this.yspeed = 0;
        this.color = 'white';
        this.width = 20;
        this.height = 20;
        document.addEventListener('keydown', this.move);
        document.addEventListener('keyup', this.stop);
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    draw() {
        this.update();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move = (e) => {
        e.preventDefault();
        // .which is the keyCode number
        switch(e.which) {
            case UP_ARROW:
                this.yspeed = -1;
                break;

            case DOWN_ARROW:
                this.yspeed = 1;
                break;

            case LEFT_ARROW:
                this.xspeed = -1;
                break;

            case RIGHT_ARROW:
                this.xspeed = 1;
                break;
                
        }
    }

    stop = (e) => {
        e.preventDefault();
        // .which is the keyCode number
        switch(e.which) {
            case UP_ARROW:
                this.yspeed = 0;
                break;

            case DOWN_ARROW:
                this.yspeed = 0;
                break;

            case LEFT_ARROW:
                this.xspeed = 0;
                break;

            case RIGHT_ARROW:
                this.xspeed = 0;
                break;

        }
    }
}