-- ======================== problem 1 ========================
CREATE DATABASE IF NOT EXISTS school;
USE school;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    class VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    grade VARCHAR(50) CHECK (grade BETWEEN 0 AND 100),
    gender CHAR(1) DEFAULT 'M',
    register_date DATE
);

INSERT INTO students (name, age, class, city, grade, gender, register_date) VALUES
('Ahmed Ali', 20, '1A', 'Cairo', 88, 'M', '2023-09-01'),
('Sara Hassan', 21, '2B', 'Giza', 92, 'F', '2023-09-03'),
('Omar Samir', 19, '1A', 'Cairo', 75, 'M', '2023-09-05'),
('Mona Adel', 22, '3C', 'Alex', 81, 'F', '2023-09-07'),
('Youssef Khaled', 23, '2B', 'Giza', 90, 'M', '2023-09-10');

SELECT * FROM students;

SELECT name, age FROM students;

SELECT * FROM students WHERE age > 20;

SELECT * FROM students WHERE class = '1A';

SELECT * FROM students WHERE grade > 85;

UPDATE students SET grade = 95 WHERE name = 'Omar Samir';

SELECT * FROM students WHERE city = 'Cairo';

DROP TABLE students;
-- ======================== problem 2 ========================

CREATE DATABASE IF NOT EXISTS training_center;
USE training_center;

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    instructor VARCHAR(100) NOT NULL,
    hours INT CHECK (hours >= 10),
    price INT CHECK (price >= 0),
    level VARCHAR(50) DEFAULT 'Beginner',
    start_date DATE
);

INSERT INTO courses (course_name, instructor, hours, price, level, start_date) VALUES
('Database Basics', 'Ahmed Tarek', 30, 1200, 'Beginner', '2024-02-01'),
('Web Development', 'Sara Ali', 45, 2000, 'Intermediate', '2024-03-10'),
('Algorithms', 'Mona Samir', 40, 1800, 'Advanced', '2024-04-05'),
('Networking', 'Omar Khaled', 35, 1500, 'Beginner', '2024-05-01');

SELECT * FROM courses;

SELECT course_name, instructor FROM courses;

SELECT * FROM courses WHERE price > 1500;

SELECT * FROM courses WHERE level = 'Beginner';

SELECT * FROM courses WHERE hours BETWEEN 30 AND 40;

UPDATE courses SET price = 2500 WHERE course_name = 'Algorithms';

SELECT * FROM courses WHERE instructor LIKE '%a%';


DROP TABLE courses;


-- ======================== problem 3 ========================
CREATE DATABASE IF NOT EXISTS library;
USE library;

CREATE TABLE Sections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_name VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    pages INT CHECK (pages > 50),
    category VARCHAR(50) DEFAULT 'General',
    price DECIMAL(10,2) CHECK (price >= 0),
    publish_date DATE
);

INSERT INTO Sections (book_name, author, pages, category, price, publish_date) VALUES
('Clean Code', 'Robert Martin', 450, 'Programming', 500, '2008-08-01'),
('Atomic Habits', 'James Clear', 320, 'Self Development', 350, '2018-10-16'),
('Deep Work', 'Cal Newport', 300, 'Productivity',300, '2016-01-05'),
('Design Patterns', 'GoF', 395, 'Programming', 600, '1994-10-21');

SELECT * FROM Sections;

SELECT book_name, author FROM Sections;

SELECT * FROM Sections WHERE price < 400;

SELECT * FROM Sections WHERE category = 'Programming';


SELECT * FROM Sections WHERE pages BETWEEN 300 AND 500;


UPDATE Sections SET price = 550 WHERE book_name = 'Deep Work';


SELECT * FROM Sections WHERE book_name LIKE '%o%';

DROP TABLE courses;
