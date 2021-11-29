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

Go to [Node's website](https://nodejs.org/en/) and follow the download instructions for your appropriate setup. NPM, or Node Package Manager, is the default package manager for Node.js. It is distributed with Node.js. Do not forget to npm init if you are using it for the very first time.

Check that your system has the following npm:
- [Node Package Manager](https://nodejs.org/en/)
  - Run `npm install` in order to install the following npm package dependencies as specified in the `package.json`.
  - This will also help install express on your system and manage any other dependencies in your script.
- [Express](https://www.npmjs.com/package/express)
  - Express is a back end web application framework for Node.js. Released as free and open-source software under the MIT License. Designed for building web applications and APIs. Many users use it as a standard server framework for Node.js.
- [Inquirer](https://www.npmjs.com/package/inquirer)
  - Inquirer provides an easy way to capture user input in your Node.jS. Provides several methods for asking questions and returning answers form the user that can be accessed by a `.then` promise function.

Uses MySQL and MySQL2 tools for this application:

- [MySQL](https://www.mysql.com/)
  - Considered the most reliable, scaleable, and developer-friendly open source relational dtabase management system. It powers the back end of many popular social, streaming, and service web applications.
- [MySQL2](https://www.npmjs.com/package/mysql2)
  - An npm package for Node.js with a focus on performance. Connects Node.js applications to the MySQL database.

`npm init`

`npm install inquirer`

`npm install express`

`npm install express mysql2`

## Usage

:computer:

mySQL prompts:

`mysql -u root -p`

`USE election;`

Command-line prompts:

Run `npm start` in the command line to start the server.



After filling out the manager's name, employee ID, email address, and office number, you will be prompted the option to add an engineer or intern to finish building the team.

If `engineer` was selected, you will be prompted for the engineer's name, ID, email, and Github username.

If `intern` was selected, you will be prompted for the intern's name, ID, email, and school.

After finishing your inputs, the app will generate an HTML page and copy a sourced CSS file. The files can be found within the `dist` folder.

A demonstration can be found below:

![!demo gif](./assets/images/team_generator_demo.gif)


## Contributing

:octocat:

[paperpatch](https://github.com/paperpatch)

## License

:receipt:

This project is licensed under MIT.