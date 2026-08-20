function add(a, b, sub) {
    console.log(a + b);

    console.log(sub(a, b));
}

function sub(a, b) {
    return a - b;
}

add(5, 3, sub);