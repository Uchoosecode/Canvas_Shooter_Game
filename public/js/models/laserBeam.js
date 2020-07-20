class LaserBeam {
    static all = [];

    constructor(position) {
        this.color = 'yellow';
        this.position = position;
        LaserBeam.all.push(this);
    }
}