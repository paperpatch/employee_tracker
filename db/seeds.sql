INSERT INTO department
  (name)
VALUES
  ('Marketing'),
  ('Finance'),
  ('Operations'),
  ('Human Resource'),
  ('IT');

INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Marketing Manager', 175300.50, 1),
  ('Content Writing', 110843.18, 1),
  ('Graphic Design', 56240.88, 1),
  ('Actuary', 123468.43, 2),
  ('Financial Analyst', 68942.23, 2),
  ('Economic Analyst', 62432.47, 2),
  ('Operations Coordinator', 48542.31, 3),
  ('Operations Analyst', 71872.90, 3),
  ('Project Manager', 87430.21, 3),
  ('Human resources Manager', 71320.00, 4),
  ('Human Resources Specialist', 54149.00, 4),
  ('Recruitment Manager', 70365, 4),
  ('Web Developer', 72040.14, 5),
  ('IT technician', 74664.89, 5),
  ('Software Engineer', 105090.77, 5);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Random0', 'Random0', 15, 0)
  ('Random1', 'Random1', 3, 0)
  ('Random2', 'Random2', 10, 0)
  ('Random3', 'Random3', 4, 0)
  ('Random4', 'Random4', 1, 0)
  ('Random5', 'Random5', 7, 0)
