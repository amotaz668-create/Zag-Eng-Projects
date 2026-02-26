CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    subject VARCHAR(50),
    salary INT,
    gender CHAR(1),
    hire_date DATE
);

INSERT INTO teachers (name, email, age, subject, salary, gender, hire_date) VALUES
('Ahmed Hassan',   'ahmed@school.com',   35, 'Math',      8000, 'M', '2020-09-10'),
('Sara Ali',       'sara@school.com',    29, 'English',   7500, 'F', '2021-02-15'),
('Mona Samir',     'mona@school.com',    40, 'Physics',   9000, 'F', '2018-06-01'),
('Omar Khaled',    'omar@school.com',    32, 'Math',      8200, 'M', '2019-11-20'),
('Laila Adel',     'laila@school.com',   27, 'Chemistry', 7200, 'F', '2022-01-12'),
('Youssef Nabil',  'youssef@school.com', 45, 'Biology',   9500, 'M', '2017-03-05');

SELECT * FROM teachers;

SELECT name, subject
FROM teachers;

SELECT *
FROM teachers
WHERE age > 30;

SELECT *
FROM teachers
WHERE subject = 'Math';

SELECT *
FROM teachers
WHERE salary BETWEEN 7000 AND 9000;

UPDATE teachers
SET salary = 8000
WHERE name = 'Sara Ali';

SELECT *
FROM teachers
WHERE LOWER(name) LIKE '%a%';