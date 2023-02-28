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

function isAlphaNumeric(str) {
    let code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
}

function countUniqueWords(str) {
    str = spaceFix(str)
    const marks = [',', '.', ';', ':', '?', '!']
    marks.forEach(mark => {
        str = str.replaceAll(mark, '')
    })

    let words = str.split(' ')
    let set = new Set(words);
    return set.size;
}

console.log(countUniqueWords(text))

