// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
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
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should never return "null" when called,', function(){
        expect(sayHello()).not.toBe("null");
    });
    it('should return string "Hello Alex!" when when Alex is input', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return string "Hello Pat!" when when Pat is input', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is boolean true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input is boolean false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should not accept an empty string when executed',function() {
        expect(sayHello()).not.toBe("");
    });
    // it('should return "Input cannot be a number" if passed a number or numeric string', function() {
    //     expect(sayHello(parseFloat)).toBe("Input cannot be a number.");
    // });
});