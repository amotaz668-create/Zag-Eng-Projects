let students = [
  {
    id: 1,
    name: "Moataz",
    age: 19,
    department: "Computer Science",
  },
  {
    id: 2,
    name: "Ali",
    age: 22,
    department: "Computer Science",
  },
];

let nextId = 3;

const getNextId = () => nextId++;

module.exports = { students, getNextId };
