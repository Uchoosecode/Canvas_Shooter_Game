class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xspeed = 0;
        this.yspeed = 0;
        this.color = 'white';
        this.width = 20;
        this.height = 20;
        this.facingPosition = {
            up: true,
            left: false,
            down: false,
            right: false
        }

        this.laserBeamPosition = {
            x: this.x + (this.width / 2) - 2,
            y: this.y - 5.5,
            width: 4,
            height: 4
        }
        

        document.addEventListener('keydown', this.move);
        document.addEventListener('keyup', this.stop);
    }

    resetFacingPosition() {
        this.facingPosition = {
            up: false,
            left: false,
            down: false,
            right: false
        }
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.updateLaserBeamPosition();
    }

    draw() {
        this.update();
        this.drawLaserBeamPosition();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move = (e) => {
        e.preventDefault();

        // .which is the keyCode number
        switch(e.which) {
            case UP_ARROW:
                this.resetFacingPosition();
                this.yspeed = -1;
                this.facingPosition.up = true;
            break;
                
            case DOWN_ARROW:
                this.resetFacingPosition();
                this.yspeed = 1;
                this.facingPosition.down = true;
            break;
                    
            case LEFT_ARROW:
                this.resetFacingPosition();
                this.xspeed = -1;
                this.facingPosition.left = true;
            break;
                        
            case RIGHT_ARROW:
                this.resetFacingPosition();
                this.xspeed = 1;
                this.facingPosition.right = true;
            break;

            case SPACEBAR:
                this.fireLaserBeam();
            break;
                
        }
    }

    stop = (e) => {
        e.preventDefault();
        
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

    drawLaserBeamPosition() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.laserBeamPosition.x, this.laserBeamPosition.y, 
                     this.laserBeamPosition.width, this.laserBeamPosition.height);
    }

    updateLaserBeamPosition() {
        if(this.facingPosition.up) {
            this.laserBeamPosition = {
                x: this.x + (this.width / 2) - 2,
                y: this.y - 5.5,
                width: 4,
                height: 4
            }
        } else if(this.facingPosition.down) {
            this.laserBeamPosition = {
                x: this.x + (this.width / 2) - 2,
                y: this.y + this.height + 2.75,
                width: 4,
                height: 4
            }
        } else if(this.facingPosition.left) {
            this.laserBeamPosition = {
                x: this.x - 5.5,
                y: this.y + (this.height / 2) - 2,
                width: 4,
                height: 4
            } 
        } else if(this.facingPosition.right) {
            this.laserBeamPosition = {
                x: this.x + this.width + 2.75,
                y: this.y + (this.height / 2) - 2,
                width: 4,
                height: 4
            }
        } 

    }

    fireLaserBeam() {
        console.log('firing laser beam')
        if(this.facingPosition.up) {
            new LaserBeam({
                x: this.laserBeamPosition.x,
                y: this.laserBeamPosition.y + this.laserBeamPosition.height,
                facing: 'up'
            })
        } else if (this.facingPosition.down) {
            new LaserBeam({
                x: this.laserBeamPosition.x,
                y: this.laserBeamPosition.y + this.laserBeamPosition.height,
                facing: 'down'
            })
        } else if (this.facingPosition.left) {
            new LaserBeam({
                x: this.laserBeamPosition.x,
                y: this.laserBeamPosition.y,
                facing: 'left'
            })
        }
    } 
}

