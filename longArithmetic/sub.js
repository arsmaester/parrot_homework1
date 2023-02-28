function sub(max, min) {
    max = max.split('')
        .reverse();
    min = min.split('')
        .reverse();
    let len = max.length,
        result = [];
    for (let i = 0, b = 0, c = 0; i < len; i++) {
        b = max[i] - (min[i] || 0) + c;
        result[i] = b < 0 ? (c = -1, 10 + b) : (c = 0, b)
    }
    return result.reverse()
        .join('')
        .replace(/^0+/, '');
}