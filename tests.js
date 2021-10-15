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
