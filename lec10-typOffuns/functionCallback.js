function stringMenipulation(str, s) {
    return s(str);
}

function reverseString(s) {
    let reverse = "";

    for (let i = s.length - 1; i >= 0; i--) {
        reverse = reverse + s[i];
    }

    return reverse;
}

console.log(stringMenipulation("hello", reverseString));