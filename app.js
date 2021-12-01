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
      ]
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter Manager's ID",
      validate: idInput => {
        if (isNaN(idInput)) {
          console.log("Please enter the manager's ID.");
          return false;
        } else {
          return true;
        }
      }
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
      
    }
  })
}

// Functions Section For Each Choice

function viewAllDepartments() {

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


