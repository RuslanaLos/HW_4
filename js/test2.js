let firstDistance = parseInt(prompt("Enter first distance in kilometers"));
let secondDistance = parseInt(prompt("Enter second distance in feet"));
const km = 1000;
const feet = 0.305;
firstDistance = firstDistance * km;
secondDistance = secondDistance * feet;

if (firstDistance > secondDistance){
    console.log("First distance is bigger")
}   else if (firstDistance < secondDistance){
    console.log("Second distance is bigger");
}   else{
    console.log("Distance are equal");
}