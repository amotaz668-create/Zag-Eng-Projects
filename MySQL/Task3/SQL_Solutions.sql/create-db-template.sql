-- ================== Problem 1 ===============
SELECT NAME
FROM CITY
WHERE COUNTRYCODE = 'JPN';
-- ================== Problem 2 ===============
SELECT ROUND(SUM(LAT_N), 2), ROUND(SUM(LONG_W), 2)
FROM STATION;
-- ================== Problem 3 ===============
SELECT DISTINCT CITY
FROM STATION
WHERE CITY NOT LIKE 'A%'
  AND CITY NOT LIKE 'I%'
  AND CITY NOT LIKE 'O%'
  AND CITY NOT LIKE 'U%'
  AND CITY NOT LIKE 'E%';
-- ================== Problem 4 ===============
SELECT DISTINCT CITY
FROM STATION
WHERE CITY NOT LIKE '%A'
  AND CITY NOT LIKE '%O'
  AND CITY NOT LIKE '%I'
  AND CITY NOT LIKE '%U'
  AND CITY NOT LIKE '%E';
-- ================== Problem 5 ===============
SELECT DISTINCT CITY
FROM STATION
WHERE CITY NOT LIKE '%A'
  AND CITY NOT LIKE '%O'
  AND CITY NOT LIKE '%I'
  AND CITY NOT LIKE '%U'
  AND CITY NOT LIKE '%E'
  AND CITY NOT LIKE 'A%'
  AND CITY NOT LIKE 'I%'
  AND CITY NOT LIKE 'O%'
  AND CITY NOT LIKE 'U%'
  AND CITY NOT LIKE 'E%';
-- ================== Problem 6 ===============
SELECT FLOOR(AVG(POPULATION))
FROM CITY;
-- ================== Problem 7 ===============
SELECT 
C.company_code,
C.founder,
COUNT(DISTINCT L.lead_manager_code), 
COUNT(DISTINCT S.senior_manager_code),
COUNT(DISTINCT M.manager_code),
COUNT(DISTINCT E.employee_code )
FROM Company C
LEFT JOIN Lead_Manager L ON C.company_code = L.company_code
LEFT JOIN Senior_Manager S ON C.company_code = S.company_code
LEFT JOIN Manager M ON C.company_code = M.company_code
LEFT JOIN Employee E ON C.company_code = E.company_code
GROUP BY C.company_code,C.founder
ORDER BY C.company_code
-- ================== JOIN 1 ===============
SELECT w.id, wp.age, w.coins_needed, w.power
FROM Wands w
JOIN Wands_Property wp ON w.code = wp.code
WHERE wp.is_evil = 0
  AND w.coins_needed = (
    SELECT MIN(w2.coins_needed)
    FROM Wands w2
    JOIN Wands_Property wp2 ON w2.code = wp2.code
    WHERE wp2.is_evil = 0
      AND w2.power = w.power
      AND wp2.age = wp.age
  )
ORDER BY w.power DESC, wp.age DESC;

-- ================== JOIN 2 ===============
SELECT IF(G.Grade < 8, 'NULL', S.Name), G.Grade, S.Marks
FROM Students S
JOIN Grades G
  ON S.Marks BETWEEN G.Min_Mark AND G.Max_Mark
ORDER BY G.Grade DESC,
         IF(G.Grade >= 8, S.Name, NULL) ASC,
         IF(G.Grade < 8, S.Marks, NULL) ASC;
-- ================== JOIN 3 ===============
SELECT f1.X, f1.Y
FROM Functions f1
JOIN Functions f2
    ON f1.X = f2.Y
   AND f1.Y = f2.X
WHERE f1.X <= f1.Y
GROUP BY f1.X, f1.Y
HAVING COUNT(*) > 1 OR f1.X < f1.Y
ORDER BY f1.X;