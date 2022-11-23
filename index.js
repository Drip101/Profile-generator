const inquirer = require('inquirer')
const Employee = require('./lib/Employees')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const page = require('./src/page')
const fs = require('fs')
const Engineer = require('./lib/Engineer')
const team = []
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
        },
        {
            type: 'input',
            message: 'What is their email',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'What is their officeNumber',
            name: 'managerOfficeNumber'
        },


    ]).then((data) => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber)
        team.push(manager)
        console.log(team);
        internStart()
    })
}
start()

function internStart() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the intern`s name?',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'What is their id',
            name: 'internId'
        },
        {
            type: 'input',
            message: 'What is their email',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'What is their school',
            name: 'internSchool'
        },
    ]).then(data => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
        team.push(intern)
        console.log(team)
        engineerStart()
    })
}

function engineerStart() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineer`s name?',
            name: 'EngineerName',
        },
        {
            type: 'input',
            message: 'What is their id',
            name: 'EngineerId'
        },
        {
            type: 'input',
            message: 'What is their email',
            name: 'EngineerEmail'
        },
        {
            type: 'input',
            message: 'What is their github',
            name: 'EngineerSchool'
        },
    ]) .then(data => {
        const engineer = new Engineer(data.EngineerName, data.EngineerId, data.EngineerEmail, data.EngineerSchool)
        team.push(engineer)
        console.log(team)
        fs.writeFileSync('./dist/index.html', page(team), 'utf-8')
    })
}

// Ask the user all the questions for the manager
// THen we are going to create the class of the manager with the user's input