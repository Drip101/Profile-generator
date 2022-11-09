const inquirer = require('inquirer')
const Employee = require('./lib/Employees')
const Manager = require('./lib/Manager')

function start() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the manager`s name?',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is their id',
            name: 'managerId'
        }
    ]).then((data) => {
        console.log(data);
        const manager = new Manager(data.managerName, data.managerId, )
    })
}
start()

// Ask the user all the questions for the manager
// THen we are going to create the class of the manager with the user's input