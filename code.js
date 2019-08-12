// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input){
    // if(parseFloat(input)){
    //     return "Input cannot be a number."
    if(input === undefined || typeof input === 'boolean'|| input ===""){
        return "Hello, World!"
    }else {
        return "Hello, " + input + "!";
    }
}
// console.log(sayHello(2.3));

