describe("underAgeDrinking", function() {
   
    describe("lessThan0", function() {
        it("should return an error if 0 is entered", function(){
            expect(test1(0)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
    });
    describe("under18", function() {
        it("should return an message if the number is less than 18", function(){
            expect(test2(14)).toBe("Sorry you are underage! Would you like a mineral?");
        });
    });
    describe("over18", function() {
        it("should return a message saying offering them a choice of drink", function(){
            expect(test3(25)).toBe("Welcome Sir/Madam, what would you like to drink? Beer, Wine, Whiskey?");
        });
    });
});