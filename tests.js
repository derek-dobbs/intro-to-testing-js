// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function'); //the helloWorld here is the definition. We are not calling it here. That is why there are no parenthesis.
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Write a test function named 'sayHello'.
describe('sayHello', function () {
    it('should be defined as a function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should never return undefined', function(){
        expect(typeof sayHello()).not.toBe('undefined');
    });
    it('should return a greeting for the input', function () {
        expect(sayHello('Derek')).toBe('Hello Derek');
    });
});

//Exercise 10
describe('isFive', function () {
    it('should be defined as a function', function (){
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when the number 5 is passed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when the string "5" is passed', function () {
        expect(isFive("5")).toBe(true);
    });
});

//Exercise 11
describe('isEven', function () {
    it('should defined as a function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when the number 2 is passed in', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when the number -4 is passed in', function (){
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when the number 3 is passed in', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when the word "banana" is passed in', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when the string "8" is passed in', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when "Infinity" is passed in', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when a boolean such as "true" or "false" is passed in', function () {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should retrn false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
});

//Exercise 12
describe('isVowel', function () {
    it('should defined as a function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should always return a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when "a" is passed in', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when "A" is passed in', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false if "y" is passed in', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false if "4" is passed in', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false if true or false is passed in.', function () {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when "banana" is passed in', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when isVowel is called with an empty argument', function () {
        expect(isVowel()).toBe(false);
    });
});
