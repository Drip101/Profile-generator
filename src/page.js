function generate(team) {
    function generateManager(manager) {
        return `
        <h1>${manager.getName()} </h1>
        <h2> ${manager.getId()} </h2>
        `

    }
    function generateIntern(intern) {
        return `
        <h1>${intern.getName()} </h1>
        <h2> ${intern.getId()} </h2>
`
    }
    function generateEngineer() {

    }

    return [generateManager(team[0]), generateIntern(team[1])].join('')
}


module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${generate(team)}
</body>
</html>`
}