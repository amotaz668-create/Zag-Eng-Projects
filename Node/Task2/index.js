const express = require("express");
const app = express();
const port = 3005;

const { students, getNextId } = require("./data/students");
const logger = require("./middleware/logger");

app.use(express.json());
app.use(logger);

const getStudents = (req, res) => {
  res.status(200).json(students);
};

const getStudentById = (req, res) => {
  const id = +req.params.id;
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json(student);
};

const searchStudents = (req, res) => {
const searchDept = req.query.dept;

const matchedStudents = students.filter(
  student => student.department === searchDept,
);


if (matchedStudents.length === 0) {
  return res.status(404).json({ message: "Student not found" });
}

res.status(200).json(matchedStudents);
};

const createStudent = (req, res) => {
  const { name, age, department } = req.body;
  if (!name || !department || age === undefined || age <= 15) {
    return res.status(400).json({ error: "Validation failed" });
  }
  const newStudent = {
    id: getNextId(),
    name,
    age,
    department,
  };
  students.push(newStudent);
  res
    .status(201)
    .json({ message: "Student created successfully", student: newStudent });
};

const updateStudent = (req, res) => {
  const id = +req.params.id;
  const { name, age, department } = req.body;
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  student.name = name;
  student.age = age;
  student.department = department;
  res.status(200).json({ message: "Student updated successfully", student });
};

const deleteStudent = (req, res) => {
  const id = +req.params.id;

  const studentIndex = students.findIndex((s) => s.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(studentIndex, 1);

  res.status(200).json({ message: "Student deleted successfully" });
};

app.get("/students", getStudents);
app.get("/students/search", searchStudents);
app.get("/students/:id", getStudentById);
app.post("/students", createStudent);
app.patch("/students/:id", updateStudent);
app.delete("/students/:id", deleteStudent);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
