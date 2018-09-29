function test1(num) {
    if(num <= 0) {
        return "Sorry. I can't tell what drink because that age is incorrect!";
    }
    return num;
}

function test2(num) {
    if (num < 18) {
        return "Sorry you are underage! Would you like a mineral?";
    }
}

function test3(num) {
    if (num >= 18) {
        return "Welcome Sir/Madam, what would you like to drink? Beer, Wine, Whiskey?";
    }
}