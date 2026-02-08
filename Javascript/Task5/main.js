// ===================== Problem 1 =====================
let students = [];

function addStudent() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let grade = document.getElementById("grade").value;

  let student = { name, age, grade };
  students.push(student);

  let li = document.createElement("li");
  li.innerText = name + " " + age + " " + grade;
  document.getElementById("list").appendChild(li);
}

function saveJSON() {
  let json = JSON.stringify(students);
  console.log(json);
  document.getElementById("json").value = json;
}

function loadJSON() {
  let json = document.getElementById("json").value;
  students = JSON.parse(json);

  let ul = document.getElementById("list");
  ul.innerHTML = "";

  for (let s of students) {
    let li = document.createElement("li");
    li.innerText = s.name + " " + s.age + " " + s.grade;
    ul.appendChild(li);
  }
}
// ===================== Problem 2 =====================
function getUser(callback) {
  setTimeout(function () {
    callback();
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(function () {
    callback();
  }, 1000);
}

function getOrderDetails(orderId, callback) {
  setTimeout(function () {
    callback();
  }, 1000);
}

getUser(function () {
  console.log("User loaded");

  getOrders(1, function () {
    console.log("Orders loaded");

    getOrderDetails(1, function () {
      console.log("Details loaded");
    });
  });
});
// ===================== Problem 3 =====================
function getUser() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
}

function getOrderDetails(orderId) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
}

getUser()
  .then(function () {
    console.log("User loaded");
    return getOrders(1);
  })
  .then(function () {
    console.log("Orders loaded");
    return getOrderDetails(1);
  })
  .then(function () {
    console.log("Details loaded");
  });
// ===================== Problem 4 =====================
function getUser() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

function getOrderDetails(orderId) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

/* when page loads */
async function start() {
  await getUser();
  console.log("User loaded");

  await getOrders(1);
  console.log("Orders loaded");

  await getOrderDetails(1);
  console.log("Details loaded");
}

start();
// ===================== Problem 5 =====================
// Why does it print undefined?
// setTimeout runs later
// Fix using Callback
function getData(callback) {
  setTimeout(() => {
    callback("Data Loaded");
  }, 1000);
}

getData((result) => {
  console.log(result);
});

// Fix using Promise
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 1000);
  });
}

getData().then((result) => {
  console.log(result);
});

// Fix using async / await
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 1000);
  });
}

async function start() {
  let result = await getData();
  console.log(result);
}

start();

// ===================== Problem 6 =====================
// Rewrite using Promises
function login() {
  return new Promise((resolve) => {
    resolve({ id: 1 });
  });
}

function getProfile(userId) {
  return new Promise((resolve) => {
    resolve({ id: 10 });
  });
}

function getSettings(profileId) {
  return new Promise((resolve) => {
    resolve("Settings loaded");
  });
}

login()
  .then((user) => getProfile(user.id))
  .then((profile) => getSettings(profile.id))
  .then((settings) => {
    console.log(settings);
  });

// Rewrite using async / await
function login() {
  return new Promise((resolve) => {
    resolve({ id: 1 });
  });
}

function getProfile(userId) {
  return new Promise((resolve) => {
    resolve({ id: 10 });
  });
}

function getSettings(profileId) {
  return new Promise((resolve) => {
    resolve("Settings loaded");
  });
}

async function start() {
  let user = await login();
  let profile = await getProfile(user.id);
  let settings = await getSettings(profile.id);
  console.log(settings);
}

start();
// ===================== Problem 7 =====================
let jsonData = "[]";
// 1
let data = JSON.parse(jsonData);
// 2
data.push({ id: 1, title: "Item 1" });
// 3
jsonData = JSON.stringify(data);
// 4
console.log(jsonData);
// ===================== Problem 8 =====================
function delay(message, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, time);
  });
}

async function start() {
  await delay(1, 1000);
  await delay(2, 1000);
  await delay(3, 1000);
  await delay(4, 1000);
}

start();
// ===================== Problem 9 =====================
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Positive");
    } else if (num === 0) {
      resolve("Zero");
    } else {
      reject("Negative");
    }
  });
}
// 1
checkNumber(5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// 2
async function start() {
  try {
    let result = await checkNumber(-3);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

start();