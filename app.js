const inquirer = require('inquirer');
const db = require('./db/connection');

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  promptUser();
});

// Initial Prompt Section

const promptUser = function() {
  console.log(`
  ======================================
  Connected to Employee Tracker Database
  ======================================
  `)
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: "What would you like to do?",
      choices: [
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee's Role",
        "Update Employee's Manager",
        "View all employees by Departments",
        "Delete a Department",
        "Delete a Role",
        "Delete an Employee",
        "View Total Utilized Budget",
        "Quit"
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
      case "View all employees by Departments":
        viewEmployeesByDepartment();
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
      case "Quit":
        break;
    }
  })
}

// Functions Section For Each Choice

function viewAllDepartments() {
  const sql = "SELECT * FROM department"
  db.connect.query(sql, (err, result) => {
    if (err) throw err;
    console.table(result);
    startPrompt();
  })
};

function viewAllRoles() {

};

function viewAllEmployees() {

};

function addDepartment() {

};
function addRole() {

};
function addEmployee() {

};
function updateEmployeeRole() {

};
function updateEmployeeManager() {

};
function viewEmployeesByDepartment() {

};
function deleteDepartment() {

};
function deleteRole() {

};
function deleteEmployee() {

};
function viewTotalUtilizedBudget() {

};


