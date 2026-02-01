function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

const address = createAddress("Lê Đại Hành", "HCM", "100000");
console.log(address);

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address2 = new Address("456 Nguyen Trai", "HCM", "700000");
console.log(address2);