-- ================= Scenario 1 E-Commerce Store ===============
CREATE DATABASE IF NOT EXISTS E_COMMERCE_STORE;
USE E_COMMERCE_STORE;

CREATE TABLE products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  stock_quantity INT NOT NULL CHECK (stock_quantity >= 0)
);

CREATE TABLE orders (
  order_id INT AUTO_INCREMENT PRIMARY KEY,
  order_date DATETIME NOT NULL,
  status VARCHAR(50) NOT NULL
);

CREATE TABLE order_items (
  order_id INT,
  product_id INT,
  quantity INT NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

ALTER TABLE products
ADD COLUMN discount DECIMAL(10, 2) DEFAULT 0.00;

SELECT O.order_id,
SUM(quantity * unit_price) AS total_revenue
FROM orders O
INNER JOIN order_items Oi
ON O.order_id = Oi.order_id
GROUP BY O.order_id

-- ================= Scenario 2: Hospital Management System===============

CREATE DATABASE IF NOT EXISTS Hospital_Management_System;
USE Hospital_Management_System;

CREATE TABLE departments (
  dept_id INT AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(255) NOT NULL,
  head_doctor_id INT NULL
);

CREATE TABLE doctors (
  doctor_id INT AUTO_INCREMENT PRIMARY KEY,
  doctor_name VARCHAR(255) NOT NULL,
  specialization VARCHAR(255) NOT NULL,
  dept_id INT NOT NULL,
  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

ALTER TABLE departments
ADD FOREIGN KEY (head_doctor_id) REFERENCES doctors(doctor_id);

CREATE TABLE patients (
  patient_id INT AUTO_INCREMENT PRIMARY KEY,
  patient_name VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  phone_number VARCHAR(20) NOT NULL
);

CREATE TABLE appointments (
  appointment_id INT AUTO_INCREMENT PRIMARY KEY,
  doctor_id INT NOT NULL,
  patient_id INT NOT NULL,
  appointment_date DATE NOT NULL,
  diagnosis VARCHAR(255) NOT NULL,
  fee INT NOT NULL,
  FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id),
  FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
);

SELECT d.dept_id, d.dept_name, do.doctor_name AS head_doctor
FROM departments d 
LEFT JOIN doctors do ON d.head_doctor_id = do.doctor_id;

SELECT do.doctor_name,
SUM(a.fee) AS total_revenue
FROM doctors do
LEFT JOIN appointments a ON do.doctor_id = a.doctor_id
GROUP BY do.doctor_id, do.doctor_name;

SELECT AVG(a.fee) AS average_fee
FROM appointments a
JOIN doctors do ON a.doctor_id = do.doctor_id
JOIN departments d ON do.dept_id = d.dept_id
WHERE d.dept_name = 'Cardiology';

