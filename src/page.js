const Engineer = require("../lib/Engineer")

function generate(team) {
  function generateManager(manager) {
    return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${manager.getId()}</h6>
          <a href="#" class="card-link">${manager.getEmail()}</a>
          <a href="#" class="card-link">${manager.getOfficeNumber()}</a>
        </div>
      </div>
        `


  }
  function generateIntern(intern) {
    return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${intern.getId()}</h6>
          <a href="#" class="card-link">${intern.getEmail()}</a>
          <a href="#" class="card-link">${intern.getSchool()}</a>
        </div>
      </div>

`
  }
  function generateEngineer(engineer) {
    return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${engineer.getId()}}</h6>
          <a href="#" class="card-link">${engineer.getEmail()}</a>
          <a href="#" class="card-link">${engineer.getGithub()}</a>
        </div>
      </div>
        `

  }

  return [generateManager(team[0]), generateEngineer(team[2]), generateIntern(team[1])].join('')
}


module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    ${generate(team)}
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
</body>
</html>`
}