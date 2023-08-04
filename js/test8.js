let digit = parseInt(prompt("Enter six-digit number"));
let number_6 = digit % 10;
digit = (digit - number_6) / 10;
let number_5 = digit % 10;
digit = (digit - number_5) / 10;
let number_4 = digit % 10;
digit = (digit - number_4) / 10;
let number_3 = digit % 10;
digit = (digit - number_3) / 10;
let number_2 = digit % 10;
let number_1 = (digit - number_2) / 10;

if(number_1 === number_6 && number_2 === number_5 && number_3 === number_4){
    console.log("This is a mirror number.");
} else {
    console.log("This isn't a mirror number.");
}