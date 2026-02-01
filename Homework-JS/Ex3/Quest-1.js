const address = {
    street: "Lê Đại Hành",
    city: "HCM",
    zipCode: "100000"
};

function showAddress(address) {
    for (const key in address) {
        console.log(`${key}: ${address[key]}`)
    }
}

showAddress(address);