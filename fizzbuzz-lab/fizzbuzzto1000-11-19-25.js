let integerNumber = 0;

while (integerNumber < 1000) {
    integerNumber++;
    if (integerNumber%15 == 0) {
        console.log("FizzBuzz");
    }

    else if (integerNumber%3 == 0 && integerNumber%5 != 0) {
        console.log("Fizz");
    }
    else if (integerNumber%5 == 0 && integerNumber%3 != 0) {
        console.log("Buzz");
    }
    else {
        console.log(integerNumber);
    }
} 

