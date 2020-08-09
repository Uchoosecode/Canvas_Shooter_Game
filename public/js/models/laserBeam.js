class LaserBeam {
    static all = [];

    constructor(position) {
        this.startingPosition(position);
        this.color = 'yellow';
        LaserBeam.all.push(this);
    }

    startingPosition(position) {
        console.log(position)
        if (position.facing == "up") {
            this.x = position.x,
            this.y = position.y,
            this.width = 4,
            this.height = 8
        }
    }

    update() {

    }

    draw() {
        console.log('drawing laserbeam')
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    static drawAll() {
        LaserBeam.all.forEach(laserbeam => laserbeam.draw());
    }
}