class LaserBeam {
    static all = [];

    constructor(position) {
        this.startingPosition(position);
        this.color = 'yellow';
        LaserBeam.all.push(this);
    }

    startingPosition() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width = 4, this.height = 10)
    }

    update() {

    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    static drawAll() {
        LaserBeam.all.forEach(laserbeam => this.draw());
    }
}