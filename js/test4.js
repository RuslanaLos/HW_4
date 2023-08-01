let digit = parseInt(prompt("Enter the number"));
digit = digit % 10;
if(digit % 2 === 0){
    console.log("It is a paired number");
    console.log(digit);
} else {
    console.log("It is not a paired number");
    console.log(digit);
}