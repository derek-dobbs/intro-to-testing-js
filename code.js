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

    if (isNaN(sum)) {
        return NaN;
    }
    return sum;
    /*
    * The above code works properly. When I changed "return NaN" to "return 'not a number' and
    * adjusted the test, it passed. The problem seems to be with the function returning "NaN".
    * Find a work around to make the test pass.
    * Per Jay:
    * "It has also come to my attention that the very last test of exercise #13 has an error.
    * We cannot expect the return value to equal NaN. In other words NaN === NaN  will not work.
    * Gary and Adam have found a work around".
    * */
}
