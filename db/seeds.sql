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
  ('Marketing Manager', 175300, 1),
  ('Content Writing', 110843, 1),
  ('Graphic Design', 56240, 1),
  ('Actuary', 123468, 2),
  ('Financial Analyst', 68942, 2),
  ('Economic Analyst', 62432, 2),
  ('Operations Coordinator', 48542, 3),
  ('Operations Analyst', 71872, 3),
  ('Project Manager', 87430, 3),
  ('Human resources Manager', 71320, 4),
  ('Human Resources Specialist', 54149, 4),
  ('Recruitment Manager', 70365, 4),
  ('Web Developer', 72040, 5),
  ('IT technician', 74664, 5),
  ('Software Engineer', 105090, 5);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Amaya', 'Hale', 15, 0),
  ('Devin', 'Cantu', 3, 0),
  ('Victor', 'Chase', 10, 0),
  ('Justin', 'Meza', 4, 0),
  ('Kiana', 'Bailey', 1, 0),
  ('Noah', 'Matthews', 7, 0);
