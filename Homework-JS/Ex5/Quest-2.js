const circle = {
    radius: 0,
    get Radius() {
        return this.radius;
    },

    set Radius(value) {
        this.radius = value;
    },

    get area() {
        return Math.round(Math.PI * this.radius * this.radius);
    }
};

circle.radius = 5;
console.log(circle.radius); // 5
console.log(circle.area);   // 79