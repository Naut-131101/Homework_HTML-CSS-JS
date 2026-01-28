function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = new Address("x", "y", "z");
const address2 = new Address("x", "y", "z");

function areSame(address1, address2) {
    if(address1 === address2) {
      return console.log(`Cùng tham chiếu: ${true}`);
    } else return console.log(`Cùng tham chiếu: ${false}`);
}

function areEqual(address1, address2) {
    if (address1.street === address2.street) {
      console.log(`Street(Giống nhau): Address 1(${address1.street}) bằng với Address 2 (${address2.street})`)
    } else console.log(`Street(Khác nhau): Address 1(${address1.street}) không bằng với Address 2 (${address2.street})`)

    if (address1.city === address2.city) {
        console.log(`City(Giống nhau): Address 1(${address1.city}) bằng với Address 2 (${address2.city})`)
    } else console.log(`City(Khác nhau): Address 1(${address1.city}) không bằng với Address 2 (${address2.city})`)

    if (address1.zipCode === address2.zipCode) {
        console.log(`Zip Code(Giống nhau): Address 1(${address1.zipCode}) bằng với Address 2 (${address2.zipCode})`)
    } else console.log(`Zip Code(Khác nhau): Address 1(${address1.zipCode}) không bằng với Address 2 (${address2.zipCode})`)
}

areSame(address1, address2);
areEqual(address1, address2)