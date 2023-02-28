class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}


class Filter {
    constructor(field, operation, value) {
        this.field = field;
        this.operation = operation;
        this.value = value;
    }
}

function checkQuery(product, query) {
    let flag = true;
    let filter = new Filter(
        query.split('-')[0],
        query.split('-')[1],
        query.split('-')[2]
    )

    switch (filter.field) {
        case 'name':
        case 'description':
            if (filter.operation === 'starts') {
                flag *= product[filter.field].startsWith(filter.value);
            }

            if (filter.operation === 'contains') {
                flag *= product[filter.field].includes(filter.value);
            }

            if (filter.operation === 'ends') {
                flag *= product[filter.field].endsWith(filter.value);
            }

            return flag;

        case 'quantity':
        case 'price':
            if (filter.operation === '>') {
                flag *= product[filter.field] > +filter.value;
            }
            if (filter.operation === '>=') {
                flag *= product[filter.field] >= +filter.value;
            }
            if (filter.operation === '=') {
                flag *= product[filter.field] === +filter.value;
            }
            if (filter.operation === '<=') {
                flag *= product[filter.field] <= +filter.value;
            }
            if (filter.operation === '<') {
                flag *= product[filter.field] < +filter.value;
            }
            return flag;
    }

    return flag;
}

function checkMultipleQueries(product, multipleQueries) {
    const queries = multipleQueries.split('&');
    let flag = true;

    for (let i = 0; i < queries.length; i++) {
        flag *= checkQuery(product, queries[i])
    }

    return flag;
}

function filterProducts(products, query) {
    let resProducts = []

    for (let i = 0; i < products.length; i++) {
        if (checkMultipleQueries(products[i], query)) {
            resProducts.push(products[i]);
        }
    }

    return resProducts
}

let p1 = new Product('яблоко', 25, 200, "фрукт")
let p2 = new Product('томат', 20, 500, "овощ")
let p3 = new Product('банан', 45, 100, "фрукт")
let p4 = new Product('огурец', 40, 435, "овощ")
let p5 = new Product('ананас', 50, 333, "фрукт")

let s = "name-contains-о&price->=-2&quantity->-1&description-contains-ощ";

console.log(filterProducts([p1, p2, p3, p4, p5], s))
