function multiply(a, b) {
    let sign = ""
    if (a[0] === '-' && b[0] !== '-') {
        a = a.substring(1)
        sign = "-"
    } else if (a[0] !== '-' && b[0] === '-') {
        b = b.substring(1)
        sign = "-"
    } else if (a[0] === '-' && b[0] === '-') {
        a = a.substring(1)
        b = b.substring(1)
    }
    const product = Array(a.length + b.length).fill(0);
    for (let i = a.length; i--; null) {
        let carry = 0;
        for (let j = b.length; j--; null) {
            product[1 + i + j] += carry + a[i] * b[j];
            carry = Math.floor(product[1 + i + j] / 10);
            product[1 + i + j] = product[1 + i + j] % 10;
        }
        product[i] += carry;
    }
    return sign + product.join("").replace(/^0*(\d)/, "$1");
}

console.log(multiply("-3", "4"));