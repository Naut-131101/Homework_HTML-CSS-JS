function showProperties(object) {
    for (const key in object) {
        if (typeof object[key] === "string") {
            console.log(`${key}: ${object[key]}`);
        }
    }
}

let car = {
    Name: "Car Not Moto",
    Year: 2026,
    Color: "White"
};

showProperties(car);