// ================= Problem 1 ==================
let names = [];
for (let i = 0; i < 2; i++) {
  names.push(prompt("Enter name"));
}
let names2 = names.map(n => n.toUpperCase());
console.log(names2);
// ================= Problem 2 ==================
let arr = [];
for (let i = 0; i < 2; i++) {
  let name = prompt("Enter name");
  let score = Number(prompt("Enter score"));
  arr.push({name, score});
}
let arr2 = arr.map(x => {
  return {
    name: x.name,
    score: x.score,
    passed: x.score >= 50
  };
});
console.log(arr2);
// ================= Problem 3 ==================
let s = [];
for (let i = 0; i < 3; i++) {
  s.push(prompt("Enter string"));
}
let s2 = s.filter(str => str.length >= 4);
console.log(s2);
// ================= Problem 4 ==================
let numbers = [];
for (let i = 0; i < 3; i++) {
  numbers.push(Number(prompt("Enter number")));
}
let avrage = numbers.reduce((sum, x) => sum + x, 0) / numbers.length;
console.log(avrage);
// ================= Problem 5 ==================
let arr = [];
for (let i = 0; i < 3; i++) {
  name = prompt("Enter name");
  age = Number(prompt("Enter age"));
  arr.push({name, age});
}
let arr2 = arr.filter(x => x.age >= 18);
console.log(arr2.map(x => x.name));
// ================= Problem 6 ==================
let n = Number(prompt("Enter number"));
let f = 1;
for (let i = 1; i <= n; i++) {
  f *= i;
}
console.log(f);
// ================= Problem 7 ==================
let nums = [];
for (let i = 0; i < 6; i++) {
  nums.push(Number(prompt("Enter number")));
}
nums.sort((a, b) => a - b);
nums.unshift('a');
nums.push('a');
let n = [];
for (let i = 1; i < nums.length - 1; i++) {
  if (!(nums[i] === nums[i - 1] || nums[i] === nums[i + 1])) {
    n.push(nums[i]);
  }
}
console.log(n);
// ================= Problem 8 ==================
function char(str) {
  let result = '';
  for (let c of str) {
    if (c === '$' || c === '.' || c === '!' || c === '?' || c === '#') {
        continue;
    }
    result += c;
}
return result;
}
let s = prompt("Enter string");
let out = char(s);
console.log(out);
// ================= Problem 9 ==================
function rS(str) {
  if (str.includes(" ")) {
    return str.replaceAll(" ", "#");
  }
  return str;
}

console.log(rS("Hello World")); 
// ================= Problem 10 ==================
function Num(arr) {
  return arr.map(num => {
    if (num % 2 === 0) {
      return num + 1;   // even
    } else {
      return num - 1;   // odd
    }
  });
}

console.log(Num([73, 221, 52, 214]));


