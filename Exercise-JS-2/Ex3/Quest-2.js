function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

const address = createAddress("Pham Dinh Ho", "HCM", "100000");
console.log(address);