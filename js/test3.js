firstDigit = parseInt(prompt("Enter the first number"));
secondDigit = parseInt(prompt("Enter the second number"));

if (firstDigit === secondDigit){
    console.log("Numbers are equal");
}   else if (firstDigit % secondDigit === 0){
    console.log("The first number isn't the divisor");
    console.log("The second number is the divisor");
}   else if(secondDigit % firstDigit === 0){
    console.log("The first number is the divisor");
    console.log("The second number isn't the divisor");
}   else{
    console.log("Both numbers are not divisor");
}


