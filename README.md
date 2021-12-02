# Employee Tracker
![Github license](http://img.shields.io/badge/license-MIT-blue.svg)

Created a command-line application to manage a company's employee database using Node.js, Inquirer, and MySQL. Uses Content Management Systems (CMS) to view and interact with information stored in databases.

## Table of Contents

* [Setup](#setup)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

## Setup
:floppy_disk:

Go to [Node's website](https://nodejs.org/en/) and follow the download instructions for your appropriate setup. NPM, or Node Package Manager, is the default package manager for Node.js. It is distributed with Node.js.

The database uses the following npm:
- [Node Package Manager](https://nodejs.org/en/)
  - Run `npm install` in order to install the following npm package dependencies as specified in the `package.json`.
  - This will also help install express on your system and manage any other dependencies in your script.
- [Inquirer](https://www.npmjs.com/package/inquirer)
  - Inquirer provides an easy way to capture user input in your Node.jS. Provides several methods for asking questions and returning answers form the user that can be accessed by a `.then` promise function.
- [Console Table](https://www.npmjs.com/package/console.table)
  - Adds console.table method for convenience. Prints MySQL rows to the console.

Uses MySQL and MySQL2 tools for this application:

- [MySQL](https://www.mysql.com/)
  - Considered the most reliable, scaleable, and developer-friendly open source relational dtabase management system. It powers the back end of many popular social, streaming, and service web applications.
- [MySQL2](https://www.npmjs.com/package/mysql2)
  - An npm package for Node.js with a focus on performance. Connects Node.js applications to the MySQL database.

`npm init`

`npm install inquirer`

`npm install --save mysql2`

To access the SQL database, create and use the database by opening up the correct path terminal. Source populates the data in your database. In your terminal, type:

`mysql -u root -p` and enter the password `sql21` when prompt.

`CREATE DATABASE employee_tracker;`

`USE employee_tracker;`

`source db/schema.sql;`

`source db/seeds.sql;`

`SELECT * FROM employee;`

`SELECT * FROM role;`

`SELECT * FROM department;`

## Usage

:computer:

mySQL prompts to start (see above for setup instructions):

`mysql -u root -p` (Use password `sql21` for this exercise)

`USE election;`


Command-line prompts:

Run `npm start` or `node app.js` in the command line to start the prompts.

The following choices will be displayed to you:

`View all Departments`

`View all Roles`

`View all Employees`

`View employees by Managers`

`View employees by Departments`

`Add Department`

`Add Role`

`Add Employee`

`Update Employee's Role`

`Update Employee's Manager`

`Delete a Department`

`Delete a Role`

`Delete an Employee`

`View Total Utilized Budget`

Each choice will either display table of data values or prompt you into selecting further choices, such as selecting an Employee's ID to delete an Employee. A demonstration can be found below:

![!demo gif](./assets/employee_tracker_demo.gif)


## Contributing

:octocat:

[paperpatch](https://github.com/paperpatch)

## License

:receipt:

This project is licensed under MIT.