let digit = parseInt(prompt("Enter three-digit number"));

let number_3 = digit % 10;
digit = (digit - number_3) / 10;
number_2 = digit % 10;
number_1 = (digit - number_2) / 10;

let sumOfNumbers = number_1 + number_2 + number_3;
let productOfNumbers = number_1 * number_2 * number_3;

if(sumOfNumbers % 2 === 0){
    console.log("Sum is a pair number.");
} else {
    console.log("Sum isn't a pair number.");
}

if(sumOfNumbers % 5 === 0){
    console.log("Sum of this numbers is multiple of five.");
} else {
    console.log("Sum of this numbers isn't multiple of five.");
}

if(productOfNumbers > 100){
    console.log("The product of numbers is greater than 100.");
} else{
    console.log("The product of numbers is less than 100.");
}