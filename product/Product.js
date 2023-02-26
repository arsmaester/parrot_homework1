class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

let s = "name-contains-fd&price-=2&quantity->5&description-ends-abc";

function filterProducts(str) {
    const filters = str.split('&')
}