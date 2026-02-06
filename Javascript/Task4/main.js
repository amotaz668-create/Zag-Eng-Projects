// ====================== Problem 1 ======================
let students = [];

let name = document.getElementById("name");
let age = document.getElementById("age");
let grade = document.getElementById("grade");
let list = document.getElementById("list");

document.getElementById("add").onclick = function () {
    let student = {
        name: name.value,
        age: age.value,
        grade: grade.value
    };
    students.push(student);

    let li = document.createElement("li");
    li.innerText = student.name + " - " + student.age + " - " + student.grade;

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.onclick = function () {
        list.removeChild(li);
        students.splice(students.indexOf(student), 1);
    };
    li.appendChild(del);
    list.appendChild(li);
};
// ====================== Problem 2 ======================
let tasks = [];
let task = document.getElementById("task");
let list = document.getElementById("list");
document.getElementById("add").onclick = function () {
    let t = task.value;
    tasks.push(t);
    let li = document.createElement("li");
    li.innerText = t;
    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    let r = document.createElement("button");
    r.innerText = "Remove";
    r.onclick = function () {
        list.removeChild(li);
        tasks.splice(tasks.indexOf(t), 1);
    };
    li.appendChild(r);
    list.appendChild(li);
};
// ====================== Problem 3 ======================
let images = [
    "images/download.jpg"
];
let index = 0;
let img = document.getElementById("img");
img.src = images[0];
document.getElementById("next").onclick = function () {
  index++;
  if (index == images.length) {
    index = 0;
  }
  img.src = images[index];
};
document.getElementById("prev").onclick = function () {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  img.src = images[index];
};
document.getElementById("reset").onclick = function () {
  index = 0;
  img.src = images[0];
};
// ====================== Problem 4 ====================== 
let products = [
  { name: "Apple" },
  { name: "Banana" },
  { name: "Orange" },
  { name: "Mango" }
];

let search = document.getElementById("search");
let list = document.getElementById("list");
let msg = document.getElementById("msg");

function showAll() {
  list.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let li = document.createElement("li");
    li.innerText = products[i].name;
    list.appendChild(li);
  }
}

showAll();

search.oninput = function () {
  let value = search.value.toLowerCase();
  list.innerHTML = "";

  let found = 0;

  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(value)) {
      let li = document.createElement("li");
      li.innerText = products[i].name;
      list.appendChild(li);
      found++;
    }
  }

  if (found == 0) {
    list.style.display = "none";
    msg.innerText = "No results found";
  } else {
    list.style.display = "block";
    msg.innerText = "";
  }
};