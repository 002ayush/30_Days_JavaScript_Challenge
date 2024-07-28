const readline = require('readline-sync') 

let num = 10;
if (num > 0) {console.log("Positive");}
let num2 = -10;
if (num < 0) console.log("Negative");
if (num === 0) console.log("Zero");




//To find the largest of three numbers
let age = readline.question("Enter the number");
if (age >= 18) console.log("Eligible to Vote");
else{
    console.log("Not Eligible to Vote");
}

let num3 = readline.question("Enter the three numbers separated by space");
let [a,b,c] = num3.split(" ");
if (a > b){
    if (a > c){
        console.log(a);
    }else{
        console.log(c);
    }
}else{
    if (b > c){
        console.log(b);
    }else{
        console.log(c);
    }
}

//Switch Case

let day = readline.questionInt("Enter the day number");
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        
        break;
    case 2:
        console.log("Tuesday");
        
        break;
    case 3:
        console.log("Wednesday");
        
        break;
    case 4:
        console.log("Thursday");
        
        break;
    case 5:
        console.log("Friday");
        
        break;
    case 6:
        console.log("Saturday");
        
        break;

    default:
        break;
}


const marks = readline.questionInt("Enter the marks??");
switch (marks) {
    case (marks >= 90):
        console.log('A');
        break;
    case (marks >= 80 && marks < 90):
        console.log('B');
        break;
    case (marks >= 70 && marks < 80):
        console.log('C');
        break;
    case marks < 70 && marks >= 40:
        console.log('D');
        break;
    case marks < 40:
        console.log('E');
        break;

    default:
        break;
}


let checkEven = 24;
console.log((checkEven % 2) ? "odd" : "Even");

//To check the leap year
let year = 2004;
if (year % 4 == 0 && year % 100 != 0){
    console.log("Leap Year");
}else if(year % 400 == 0){
    console.log("Leap Year");
}else{
    console.log("Not a Leap year");
}