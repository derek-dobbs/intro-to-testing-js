// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//Exercises 1-9
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

//Exercise 12
function isVowel (input) {
    if(input === "a" || input === "A"){
        return true;
    }else {
        return false;
    }
}

//Exercise 13
function add(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let sum = num1 + num2;
    return sum;
}
