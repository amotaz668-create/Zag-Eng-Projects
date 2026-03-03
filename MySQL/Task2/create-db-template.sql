-- =========================== Scenario 1 ===========================
CREATE DATABASE IF NOT EXISTS tables;
USE tables;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price INT NOT NULL CHECK (price >= 0),
  stock_quantity INT NOT NULL CHECK (stock_quantity >= 0),
  date_added DATE NOT NULL
);

INSERT INTO products (name, category, price, stock_quantity, date_added) VALUES
('Laptop', 'Electronics', 999.99, 10, '2024-01-15'),
('Smartphone', 'Electronics', 499.99, 25, '2024-02-20'),
('Headphones', 'Accessories', 199.99, 50, '2024-03-05'),
('Coffee Maker', 'Home Appliances', 79.99, 30, '2024-04-10'),
('Gaming Console', 'Electronics', 399.99, 15, '2024-05-01'),
('Blender', 'Home Appliances', 59.99, 20, '2024-06-01'),
('Smartwatch', 'Electronics', 299.99, 40, '2024-07-15'),
('Camera', 'Electronics', 899.99, 5, '2024-08-20'),
('Vacuum Cleaner', 'Home Appliances', 149.99, 25, '2024-09-10'),
('Wireless Charger', 'Accessories', 49.99, 60, '2024-10-05'),
('Tablet', 'Electronics', 299.99, 20, '2024-11-01'),
('Air Fryer', 'Home Appliances', 129.99, 15, '2024-12-15'),
('Bluetooth Speaker', 'Accessories', 89.99, 35, '2025-01-10'),
('Monitor', 'Electronics', 199.99, 10, '2025-02-05'),
('Electric Kettle', 'Home Appliances', 39.99, 25, '2025-03-01');

CREATE TABLE sales (
  sale_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  quantity_sold INT NOT NULL CHECK (quantity_sold > 0),
  sale_date DATE NOT NULL
);

INSERT INTO sales (product_id, quantity_sold, sale_date) VALUES
(1, 2, '2024-06-01'),
(2, 5, '2024-06-02'),
(3, 10, '2024-06-03'),
(4, 3, '2024-06-04'),
(5, 1, '2024-06-05');
-- ============ Task 1 ===============

SELECT name , price
FROM products 
WHERE category = 'Electronics'
ORDER BY price DESC
LIMIT 3;

-- ============ Task 2 ===============

SELECT category,
COUNT(*) AS product_count,
AVG(price) AS average_price,
SUM(stock_quantity * price) AS total_stock
FROM products 
GROUP BY category
HAVING COUNT(*) > 5;

-- ============ Task 3 ===============

SELECT name,
UPPER(name) AS name_upper,
LEFT (name ,10) AS short_desc,
DATEDIFF(NOW(), date_added) AS days_since_added
FROM products;

-- ============ Task 4 ===============

ALTER TABLE products
ADD COLUMN discount_rate FLOAT;

UPDATE products
SET discount_rate = 0.10
WHERE category = 'Accessories';

DELETE FROM products
WHERE stock_quantity = 0;

DROP TEMPORARY TABLE IF EXISTS old_inventory;

-- =========================== Scenario 2 ===========================
CREATE DATABASE IF NOT EXISTS hospital;
USE hospital;
CREATE TABLE doctors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  specialization VARCHAR(100) NOT NULL,
  hire_date DATE NOT NULL,
  salary INT NOT NULL CHECK (salary > 0),
  consultations_count INT NOT NULL DEFAULT 0
);

CREATE TABLE patients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT NOT NULL CHECK (age > 0),
  gender VARCHAR(20) NOT NULL,
  admission_date DATE NOT NULL,
  room_type VARCHAR(50) NOT NULL,
  bill_amount INT NOT NULL CHECK (bill_amount >= 0),
  status VARCHAR(20) NOT NULL
);

INSERT INTO doctors (name, specialization, hire_date, salary) VALUES
('Dr. Smith', 'Cardiology', '2021-05-10', 150000),
('Dr. Johnson', 'Neurology', '2022-03-15', 140000),
('Dr. Williams', 'Pediatrics', '2023-01-20', 130000),
('Dr. Brown', 'Orthopedics', '2020-11-05', 160000),
('Dr. Jones', 'Dermatology', '2022-07-25', 135000),
('Dr. Miller', 'Gastroenterology', '2021-09-30', 145000),
('Dr. Davis', 'Oncology', '2023-02-10', 155000),
('Dr. Garcia', 'Endocrinology', '2020-12-01', 125000),
('Dr. Martinez', 'Psychiatry', '2022-11-20', 130000),
('Dr. Wilson', 'Ophthalmology', '2021-04-15', 140000);

INSERT INTO patients (name, age, gender, admission_date, room_type, bill_amount, status) VALUES
('Alice', 30, 'Female', '2024-01-10', 'Single', 5000, 'Admitted'),
('Bob', 45, 'Male', '2024-02-20', 'Shared', 3000, 'Discharged'),
('Charlie', 25, 'Male', '2024-03-15', 'Single', 7000, 'Admitted'),
('Diana', 60, 'Female', '2024-04-05', 'Shared', 4000, 'Admitted'),
('Eve', 35, 'Female', '2024-05-01', 'Single', 6000, 'Discharged'),
('Frank', 50, 'Male', '2024-06-10', 'Shared', 3500, 'Admitted'),
('Grace', 28, 'Female', '2024-07-20', 'Single', 8000, 'Admitted'),
('Heidi', 40, 'Female', '2024-08-15', 'Shared', 4500, 'Discharged'),
('Ivan', 55, 'Male', '2024-09-05', 'Single', 7500, 'Admitted'),
('Judy', 32, 'Female', '2024-10-01', 'Shared', 5500, 'Admitted');

-- ============ Task 1 ===============

SELECT name, specialization , salary 
FROM doctors 
WHERE hire_date > '2022-01-01'
ORDER BY salary DESC
LIMIT 5;

-- ============ Task 2 ===============

SELECT
  room_type,
  COUNT(*) AS total_patients,
  MAX(bill_amount) AS max_bill,
  MIN(bill_amount) AS min_bill,
  SUM(bill_amount) AS total_revenue
FROM patients
GROUP BY room_type
HAVING SUM(bill_amount) > 5000;

-- ============ Task 3 ===============

SELECT
  name,
  LENGTH(name) AS name_length,
  DATEDIFF(CURDATE(), admission_date) AS days_in_hospital
FROM patients;

SELECT
  name,
  LOWER(specialization) AS specialization_lower
FROM doctors;

-- ============ Task 4 ===============

ALTER TABLE doctors
ADD COLUMN email VARCHAR(255);

UPDATE doctors
SET salary = ROUND(salary * 1.10)
WHERE specialization = 'Cardiology';

DELETE FROM patients
WHERE status = 'Discharged';

ALTER TABLE patients
MODIFY bill_amount DECIMAL(10,2);