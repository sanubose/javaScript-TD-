function first(){
    var name="sanu"
    function inner(){
        console.log(name)
    }
    return inner;
}
let global = first()
global()