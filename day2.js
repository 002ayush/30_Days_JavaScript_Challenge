let add = (a,b) =>{
    return a+b;
}
let subtract = (a,b) =>{
    return a-b;
}
let multiply = (a,b) =>{
    return a*b;
}
let divide = (a,b) =>{
    return a/b;
}
let remainder = (a,b) =>{
    return a%b;
}

console.log(add(2,3));
console.log(subtract(8,3));
console.log(multiply(12,3));
console.log(divide(27,3));
console.log(remainder(20,3));

// 2) Assignment Operator

let a  = 10;
a += 5;
console.log(a);
let b  = 10;
a -= 5;
console.log(b);
//Comparison Operator

let num1 = 8;
let num2 = 810;

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 > num2);

let integer = 2;
let string = '2';

console.log(integer == string);

console.log(integer === string);

console.log(2 > 3 && 3 > 4);
console.log(4 < 5 || 8 < 3);
console.log(!(8 < 5));


console.log((8 > 5) ? "Positive" : "Negative");