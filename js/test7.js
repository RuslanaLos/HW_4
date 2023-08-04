let digit = parseInt(prompt("Enter three-digit number"));

let number_3 = digit % 10;
digit = (digit - number_3) / 10;
let number_2 = digit % 10;
let number_1 = (digit - number_2) / 10;

if(number_1 === number_2 && number_2 === number_3){
    console.log("All numbers are the same.");
}   else {
    console.log("All numbers aren't the same.");
}

if(number_1 === number_2 || number_1 === number_3  || number_2 === number_3){
    console.log("There are the same numbers.");
}   else{
    console.log("There aren't the same numbers.")
}