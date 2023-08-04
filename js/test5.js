let digit = parseInt(prompt("Enter two-digit number"));
let number_2 = digit % 10;
let number_1 = (digit - number_2) / 10;
if (number_1 > number_2){
    console.log("First number is bigger");
} else if (number_1 < number_2){
    console.log("Second number is bigger");
} else {
    console.log("Numbers are equal");
}