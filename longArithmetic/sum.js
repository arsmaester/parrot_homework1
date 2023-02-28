function sum(first, second) {
    let sum = '';
    let carry = 0;
    let diff = second.length - first.length;
    for (let i = first.length - 1; i >= 0; i--) {
        let temp =
            (Number(first.charAt(i)) % 10) +
            (Number(second.charAt(i + diff)) % 10) +
            carry;
        if (temp >= 10) {
            sum = (temp % 10) + sum;
            carry = Math.floor(temp / 10);
        } else {
            sum = temp + sum;
            carry = 0;
        }
    }
    if (carry) {
        sum = carry + sum;
    }
    return sum;
}


let a = '999999999999999999999999999999999999';
let b = '1';
console.log(sum(a, b))


