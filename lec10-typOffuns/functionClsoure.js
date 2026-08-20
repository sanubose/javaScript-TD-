
function papa() {
    var x = 5;

    function child() {
        console.log(x);
    }

    return child;
}

let global = papa();

global();