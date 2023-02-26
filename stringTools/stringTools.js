function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

let text = "Привет ,    друзья,как    дела дела? "


function spaceFix(str) {
    str = str.replace(/\s+/g, ' ');
    let re = /(\s*([.,:;!?])\s*)/g;
    return str.replace(re, '$2 ').trim();
}

console.log(spaceFix(text))

function countWords(str) {
    return spaceFix(str).split(" ").length;
}

console.log(countWords(text))

function countUniqueWords() {
    return undefined
}