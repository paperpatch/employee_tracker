const inquirer = require('inquirer');
const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes/');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  promptUser();
});

// Initial Prompt Section
const promptUser = function() {
  console.log(`
  ==========================
  Connected to MySQL Prompts
  ==========================
  `)
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "Enter Manager's name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name.");
          return false;
        }
      }
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
    {
      type: 'input',
      name: 'email',
      message: "Enter Manager's email",
      validate: emailInput => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
        if (valid) {
          return true;
        } else {
          console.log("Please enter a valid email address.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Enter Manager's office number",
      validate: officeInput => {
        if (isNaN(officeInput)) {
          console.log("Please enter the manager's office number.");
          return false;
        } else {
          return true;
        }
      }
    },
  ])
  .then(managerData => {
    const {name, id, email, officeNumber} = managerData;
    const manager = new Manager(name, id, email, officeNumber);

    team.push(manager);
    console.log(manager);
  })
}

const addEmployee = function() {
  console.log(`
  ========================
  Add Employee to the Team
  ========================
  `)
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Enter Employee's role",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "Enter Employee's name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter Employee's ID",
      validate: idInput => {
        if (isNaN(idInput)) {
          console.log("Please enter the employee's ID.");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter Employee's email",
      validate: emailInput => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
        if (valid) {
          return true;
        } else {
          console.log("Please enter a valid email address.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Enter Engineer's github username",
      when: (input) => input.role === "Engineer",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter Engineer's github username.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "Enter Intern's school or education",
      when: (input) => input.role === "Intern",
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter intern's school or education.");
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add more team members?',
      default: false,
    }
  ])

  .then(employeeData => {
    let {role, name, id, email, github, school, confirmAddEmployee} = employeeData;

    if (role === "Engineer") {
      employee = new Engineer(name, id, email, github);
      console.log(employee);

    } else if (role === "Intern") {
      employee = new Intern(name, id, email, school);
      console.log(employee);
    }

    team.push(employee);

    if (confirmAddEmployee) {
      return addEmployee(team);
    } else {
      return team;
    }
  })
}