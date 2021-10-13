// My age in human years
const myAge = 24;

//First two years of life converted to Dog years
let earlyYears = 2;
earlyYears *= 10.5;

//other years of life after the initial 2yrs converted to dog years
let laterYears = myAge- 2;
laterYears *= 4;

// My human age in dog years; if dogs could live this long 
let MyAgeInDogYears = earlyYears + laterYears;

// for some reason i'm writing my name then changing it to lowercase using code
myName = "Michael".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${MyAgeInDogYears} years old in dog years.`);



