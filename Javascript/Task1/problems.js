// ================= Problem 1 =================

let x = 5;
let y = 4;

console.log(x + y);// 9
console.log(x - y); // 1
console.log(x * y + 3); // 23
console.log(x + y * 2); // 13
console.log((x + y) * 2); // 18
console.log(x / y); // 1.25
console.log(x % y); // 1
console.log((x - 2) * (y + 1));// 15

// ================= Problem 2 =================

let a = 10;
let b = "Hello";
let c = true;
let d = { name: "Backend" };

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolean
console.log(typeof d); // object

// ================= Problem 3 =================

let x = 7;
let y = 10;

// Comparison Operators
console.log(x > y); // false
console.log(x >= y); // false
console.log(x < y); // true
console.log(x <= y); // true
console.log(x == y);  // false
console.log(x === y); // false
console.log(x != y); // true
console.log(x !== y);// true

// ================= Problem 4 =================

let a = true;
let b = false;

// Logical Operators
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
console.log(a && !b); // true
console.log(!a || b); // false

// ================= Problem 5 =================

let num = 20; 
let str = " years old";

console.log(num + str); // 20 years old
console.log("Age: " + num); // Age: 20
console.log("Result = " + (num + 5)); // Result = 25
console.log("20" + 10); // 2010
console.log((20 + 10) + " days"); // 30 days
console.log("JS" + " " + "Course"); // JS Course

// ================= Problem 6 =================

let n = 10;

n += 5;      
console.log(n); // 15

n -= 3;      
console.log(n); // 12

n *= 2;      
console.log(n); // 24

n /= 5;       
console.log(n); // 4.8

n %= 4;       
console.log(n); // 0.8


// ================= Problem 7 =================

let x = 8;


console.log(++x); // 9


console.log(x++); // 9
console.log(x);   // 10 


console.log(--x); // 9


console.log(x--); // 9 
console.log(x);   // 8 


// ================= Problem 8 =================

let a = 4;
let b = 2;
let c = "3";


console.log(a + b + c); // 63  


console.log(a + (b + c)); // 423 


console.log((a + b) * Number(c)); // 18


console.log(a + b * c); // 10  