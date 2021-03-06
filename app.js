const inquirer = require('inquirer');
const db = require('./db/connection');

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log(`
  ======================================
  Connected to Employee Tracker Database
  Press Ctrl + C to Quit
  ======================================
  `)
  promptUser();
});

// Initial Prompt Section

const promptUser = function() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: "What would you like to do?",
      choices: [
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "View employees by Managers",
        "View employees by Departments",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee's Role",
        "Update Employee's Manager",
        "Delete a Department",
        "Delete a Role",
        "Delete an Employee",
        "View Total Utilized Budget",
      ]
    },
  ]).then( list => {
    switch(list.choice) {
      case "View all Departments":
        viewAllDepartments();
        break;
      case "View all Roles":
        viewAllRoles();
        break;
      case "View all Employees":
        viewAllEmployees();
        break;
      case "View employees by Managers":
        viewEmployeesByManagers();
        break;
      case "View employees by Departments":
        viewEmployeesByDepartment();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "Add Role":
        addRole();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Update Employee's Role":
        updateEmployeeRole();
        break;
      case "Update Employee's Manager":
        updateEmployeeManager();
        break;
      case "Delete a Department":
        deleteDepartment();
        break;
      case "Delete a Role":
        deleteRole();
        break;
      case "Delete an Employee":
        deleteEmployee();
        break;
      case "View Total Utilized Budget":
        viewTotalUtilizedBudget();
        break;
    }
  })
}

// Functions Section For Each Choice

function viewAllDepartments() {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
    promptUser();
  })
};

function viewAllRoles() {
  const sql = `SELECT role.id, role.title, role.salary, role.department_id, department.name AS department
              FROM role
              LEFT JOIN department ON department.id = role.department_id`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
    promptUser();
  })
};

function viewAllEmployees() {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT(m.first_name, ' ' ,m.last_name) as manager
              FROM employee
              LEFT JOIN role ON employee.role_id = role.id
              LEFT JOIN department ON role.department_id = department.id
              LEFT JOIN employee m ON employee.manager_id = m.id`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
    promptUser();
  })
};

function viewEmployeesByManagers() {
  const sql = `SELECT CONCAT(m.first_name, ' ' ,m.last_name) as manager, employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department 
              FROM employee
              JOIN role ON employee.role_id = role.id
              JOIN department ON role.department_id = department.id
              JOIN employee m ON employee.manager_id = m.id
              ORDER BY employee.manager_id`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
    promptUser();
  });
};

function viewEmployeesByDepartment() {
  const sql = `SELECT department.name AS department, employee.id, employee.first_name, employee.last_name, role.title, role.salary, CONCAT(m.first_name, ' ' ,m.last_name) as manager
              FROM employee
              LEFT JOIN role ON employee.role_id = role.id
              LEFT JOIN department ON role.department_id = department.id
              LEFT JOIN employee m ON employee.manager_id = m.id
              ORDER BY department.name`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
    promptUser();
  });
};

function addDepartment() {
  inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Add a new Department",
    }
  ]).then( res => {
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [res.name];
    db.query(sql, params, (err, result) => {
      if (err) throw err;
      console.log(`
      ============================
      Department Added Succesfully
      ============================
      `)
      promptUser();
    });
  });
};

function addRole() {
  inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "Enter name of new role",
    },
    {
      name: "salary",
      type: "input",
      message: "Enter salary of new role",
      validate: salaryInput => {
        if (isNaN(salaryInput)) {
          console.log("Please enter a valid number.");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      name: "department_id",
      type: "input",
      message: "Enter new role's associated department id",
      validate: departmentIdInput => {
        if (isNaN(departmentIdInput)) {
          console.log("Please enter a valid department id");
          return false;
        } else {
          return true;
        }
      }
    },
  ]).then( res => {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
    const params = [res.title, res.salary, res.department_id];
    db.query(sql, params, (err, result) => {
      if (err) throw err;
      console.log(`
      ======================
      Role Added Succesfully
      ======================
      `)
      promptUser();
    });
  });
};

function addEmployee() {
  inquirer.prompt([
    {
      name: "first_name",
      type: "input",
      message: "Enter new employee's first name",
    },
    {
      name: "last_name",
      type: "input",
      message: "Enter new employee's last name",
    },
    {
      name: "role_id",
      type: "input",
      message: "Enter new employee's associated role id",
      validate: roleIdInput => {
        if (isNaN(roleIdInput)) {
          console.log("Please enter a valid number");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      name: "manager_id",
      type: "input",
      message: "Enter new employee's associated manager's id",
      validate: managerIdInput => {
        if (isNaN(managerIdInput)) {
          console.log("Please enter a valid number");
          return false;
        } else {
          return true;
        }
      }
    },
  ]).then( res => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    const params = [res.first_name, res.last_name, res.role_id, res.manager_id];
    db.query(sql, params, (err, result) => {
      if (err) throw err;
      console.log(`
      ==========================
      Employee Added Succesfully
      ==========================
      `)
      promptUser();
    });
  });
};

function updateEmployeeRole() {
  inquirer.prompt([
    {
      name: "id",
      type: "input",
      message: "Enter employee's id for update",
      validate: employeeIdInput => {
        if (isNaN(employeeIdInput)) {
          console.log("Please enter a valid number");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      name: "role_id",
      type: "input",
      message: "Update employee's new role",
      validate: roleIdInput => {
        if (isNaN(roleIdInput)) {
          console.log("Please enter a valid number");
          return false;
        } else {
          return true;
        }
      }
    },
  ]).then( res => {
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const params = [res.role_id, res.id];
    db.query(sql, params, (err, result) => {
      if (err) throw err;
      console.log(`
      ============================
      Employee Updated Succesfully
      ============================
      `)
      promptUser();
    });
  });
};

function updateEmployeeManager() {
  inquirer.prompt([
    {
      name: "id",
      type: "input",
      message: "Enter employee's id for update",
      validate: employeeIdInput => {
        if (isNaN(employeeIdInput)) {
          console.log("Please enter a valid number");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      name: "manager_id",
      type: "input",
      message: "Update employee's new manager",
      validate: managerIdInput => {
        if (isNaN(managerIdInput)) {
          console.log("Please enter a valid number");
          return false;
        } else {
          return true;
        }
      }
    },
  ]).then( res => {
    const sql = `UPDATE employee SET manager_id = ? WHERE id = ?`;
    const params = [res.manager_id, res.id];
    db.query(sql, params, (err, result) => {
      if (err) throw err;
      console.log(`
      ======================================
      Employee's Manager Updated Succesfully
      ======================================
      `)
      promptUser();
    });
  });
};

function deleteDepartment() {
  inquirer.prompt([
    {
      name: "department_id",
      type: "input",
      message: "Enter Department ID to delete",
      validate: departmentIdInput => {
        if (isNaN(departmentIdInput)) {
          console.log("Please enter a valid id");
          return false;
        } else {
          return true;
        }
      }
    },
  ]).then( res => {
    const sql = `DELETE FROM department WHERE id = ?`;
    const params = [res.department_id];
    db.query(sql, params, (err, result) => {
      if (err) throw err;
      console.log(`
      ==============================
      Department Deleted Succesfully
      ==============================
      `)
      promptUser();
    });
  });
};

function deleteRole() {
  inquirer.prompt([
    {
      name: "role_id",
      type: "input",
      message: "Enter Role ID to delete",
      validate: roleIdInput => {
        if (isNaN(roleIdInput)) {
          console.log("Please enter a valid id");
          return false;
        } else {
          return true;
        }
      }
    },
  ]).then( res => {
    const sql = `DELETE FROM role WHERE id = ?`;
    const params = [res.role_id];
    db.query(sql, params, (err, result) => {
      if (err) throw err;
      console.log(`
      ========================
      Role Deleted Succesfully
      ========================
      `)
      promptUser();
    });
  });
};

function deleteEmployee() {
  inquirer.prompt([
    {
      name: "employee_id",
      type: "input",
      message: "Enter Employee ID to delete",
      validate: employeeIdInput => {
        if (isNaN(employeeIdInput)) {
          console.log("Please enter a valid id");
          return false;
        } else {
          return true;
        }
      }
    },
  ]).then( res => {
    const sql = `DELETE FROM employee WHERE id = ?`;
    const params = [res.employee_id];
    db.query(sql, params, (err, result) => {
      if (err) throw err;
      console.log(`
      ============================
      Employee Deleted Succesfully
      ============================
      `)
      promptUser();
    });
  });
};

function viewTotalUtilizedBudget() {
  const sql = `SELECT SUM(salary) AS Total_Utilized_Budget
              FROM role
              JOIN employee ON employee.role_id = role.id
              WHERE employee.id`
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
    promptUser();
  })
};
