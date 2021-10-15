// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    return 'Hello ' + input;
}

//Exercise 10
function isFive(input) {
    return input == 5;
}

//Exercise 11
function isEven(input) {
    if(typeof input != 'boolean') {
        return input % 2 == 0;
    }else {
        return false;
    }
}
