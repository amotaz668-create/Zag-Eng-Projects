// ================= Problem 1 ==================
let s = prompt("Enter");
console.log(s.length);
console.log(s[0]);
console.log(s[s.length - 1]);

// ================= Problem 2 ==================
let s = prompt("Enter");
console.log(s.trim());
console.log(s.trim().toLowerCase());

// ================= Problem 3 ==================
let n1 = Number(prompt("Enter"));
let n2 = Number(prompt("Enter"));
let n3 = Number(prompt("Enter"));
let n4 = Number(prompt("Enter"));
let n5 = Number(prompt("Enter"));

let arr = [];
arr.push(n1);
arr.push(n2);
arr.push(n3);
arr.push(n4);
arr.push(n5);

console.log(arr);
console.log(arr.length);
console.log(`First Element: ${arr[0]} , Last Element: ${arr[arr.length - 1]}`);

// ================= Problem 4 ==================
for (let i = 1; i <= 20; i++) {
  if (i == 10) continue;
  console.log(i);
}

// ================= Problem 5 ==================
let n1 = Number(prompt("Enter"));
let n2 = Number(prompt("Enter"));
let n3 = Number(prompt("Enter"));
let n4 = Number(prompt("Enter"));
let n5 = Number(prompt("Enter"));

let arr = [n1, n2, n3, n4, n5];
for (let x of arr) {
  if (x > 6) console.log(x);
}

// ================= Problem 6 ==================
let n = Number(prompt("Enter"));
if (n > 0) console.log("Positive");
else if (n < 0) console.log("Negative");
else console.log("Zero");

// ================= Problem 7 ==================
let value = [];
for (let i = 0; i < 6; i++) {
  value.push(prompt("Enter"));
}
for (let v of value) {
  console.log(Number(v));
}

// ================= Problem 8 ==================
let s = prompt("Enter");
if (s.includes("JavaScript")) console.log("Found");
else console.log("Not Found");

// ================= Problem 9 ==================
let n1 = prompt("Enter");
let n2 = prompt("Enter");
let n3 = prompt("Enter");
console.log(n1 + "\n" + n2 + "\n" + n3);

// ================= Problem 10 =================
console.log(Math.floor(Math.random() * 10));

// ================= Problem 11 =================
let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Number(prompt("Enter")));
}
for (let age of arr) {
  if (age >= 18) console.log(age);
}

// ================= Problem 12 =================
let s = prompt("Enter");
console.log(s.length);

// ================= Problem 13 =================
let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Number(prompt("Enter")));
}
for (let d of arr) {
  if (Math.round(d) >= 8) console.log("Pass");
  else console.log("Fail");
}

// ================= Problem 14 =================
for (let i = 1; i <= 30; i++) {
  console.log(i);
}

// ================= Problem 15 =================
let n = prompt("Enter");
if (Number(n) % 2 == 0) console.log("Even");
else console.log("Odd");

// ================= Problem 16 =================
let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Number(prompt("Enter")));
}
console.log(Math.max(...arr));
console.log(Math.min(...arr));

// ================= Problem 17 =================
let s = prompt("Enter");
let words = s.split(" ");
for (let w of words) {
  console.log(w);
}

// ================= Problem 18 =================
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// ================= Problem 19 =================
let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Number(prompt("Enter")));
}
let sum = 0;
for (let n of arr) {
  sum += n;
}
console.log(sum);

// ================= Problem 20 =================
let s = prompt("Enter");
if (s.startsWith("J")) console.log("Yes");
else console.log("No");

// ================= Problem 21 =================
console.log(Math.floor(Math.random() * 6));

// ================= Problem 22 =================
let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Number(prompt("Enter")));
}
for (let x of arr) {
  console.log(x * 2);
}

// ================= Problem 23 =================
let s = prompt("Enter");
for (let char of s) {
  console.log(char);
}

// ================= Problem 24 =================
let n = Number(prompt("Enter"));
if (n % 3 == 0 && n % 5 == 0) console.log("Yes");
else console.log("No");

// ================= Problem 25 =================
let s = prompt("Enter");
console.log(s.replaceAll(" ", ""));

// ================= Problem 26 =================
let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Number(prompt("Enter")));
}
let count = 0;
for (let n of arr) {
  if (n > 10) count++;
}
console.log(count);

// ================= Problem 27 =================
while (true) {
  let randNum = Math.floor(Math.random() * 10);
  console.log(randNum);
  if (randNum === 7) break;
}

// ================= Problem 28 =================
let s = prompt("Enter");
console.log(s.replaceAll("JS", "JavaScript"));

// ================= Problem 29 =================
let s = prompt("Enter");
console.log(s.indexOf("a"));

// ================= Problem 30 =================
let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(prompt("Enter"));
}
for (let x of arr) {
  if (typeof x === "string") console.log(x);
}

// ================= Problem 31 =================
function Fibonacci(n) {
  let res = [];
  if (n <= 0) return res;
  if (n === 1) return [0];
    res = [0, 1];
    for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res;
}

let n = Number(prompt("Enter"));
console.log(Fibonacci(n));

// ================= Problem 2 ==================
function rArr(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
console.log(rArr([1, 2, 3, 4]));// [4, 3, 2, 1]

console.log(rArr(["a", "b", "c"]));// ["c", "b", "a"]

// ================= Problem 3 ==================
function dt(arr) {
    let res = new Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                res[i] = j - i;
                break;
            }
        }
    }
    return res;
}

console.log(dt([73, 74, 75, 71, 69, 72, 76, 73]));// [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dt([30, 40, 50, 60]));// [1, 1, 1, 0]

// ================= Problem 4 ==================
function sc(s) {
    if (s === s.toUpperCase()) return true;
    if (s === s.toLowerCase()) return true;
    return false;
}

// Test
console.log(sc("heLLo")); // true
console.log(sc("Hello")); // false
console.log(sc("HELLO")); // true

// ================= Problem 5 ==================
function maxLength(str1, str2) {
    if (str1.length > str2.length) {
        return str1.length;
    } else {
        return str2.length;
    }
}
console.log(maxLength("Ahmad", "Mohammad")); // 8
console.log(maxLength("Khalid", "Asma"));    // 6
