var a = 5;
{
    let t = "Ayush";
    console.log(t);
}
console.log(`The value of a  ${a}`);

const boolValue = false;
console.log(boolValue);

let num = 10;
let str = "string";
let boolval = true;
let obj = {
    name : "Ayush",
    sub : "Maths"
}
let arr = [1,2,3,4,5,6] ;
console.log(typeof num);
console.log(typeof str);

console.log(typeof boolval);

console.log(typeof obj);

console.log(typeof arr);

//Reassigning a variable
let ab = 10;
console.log(`The previous value ${ab}`);
ab = 100;
console.log(`The new value ${ab}`);


//Observing the error while assigning the const variable
const c = 10;
c = 20;
console.error(c);