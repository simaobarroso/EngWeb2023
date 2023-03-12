// Aqui vao ser precisas ser geradas duas paginas, 
// uma que e` a pagina principal, seguindo a estrutura dita na aula
// uma de criar um utilizador


// Sera necessaria esta pagina?? rever post
exports.sucessPage = function(d) { //function(mode,data)
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Success!</title>
        </head>
    <body>
        <h1>Success in your task!</h1>
    </body>
    <footer class="w3-container w3-pale-blue">
            <h5>TPC4 EW SIMAO BARROSO ${d} - [<a href="/">Return</a>]</h5>
    </footer>
    `

}

exports.mainPage = function(d,users,tasks){
    pagHTML = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Main Page</title>
        </head>
        `
    
    //https://www.w3schools.com/w3css/w3css_layout.asp


    // Fazer a cena do tasker um drop down bar??
    // FORMA DE GUARDAR A DATA? TEXT???????????????????????????????????
    // Form introducao de dados
    pagHTML +=`
    </head>
    <body>
        <div class="w3-card-4">
            <header class="w3-container w3-pale-blue">
                <h2>TO-DO app!</h2>
        </header>

    <div class="w3-container w3-padding-32">
    <form class="w3-container" method="POST">
    <fieldset>
        <legend>Register To-do!</legend>
        <label>Due Date</label>
        <input class="w3-input w3-round" type="text" name="due_date"/>
        <label>Who</label>
        <input class="w3-input w3-round" type="text" name="who"/>
        <label>What Task</label>
        <input class="w3-input w3-round" type="text" name="what_task"/>
    </fieldset>
    <br/>
    <button class="w3-btn w3-pale-green w3-mb-2" type="submit">Submit!</button>
    </form>
    <form action="/register/user" method="get">
        <button class="w3-btn w3-pale-green w3-mb-2" type="button" onclick="location.href='/register/user';">AddTasker</button>
    </form>
    <hr>

    </div>    
    `
    // confirmar se o user existe ou nao!!! + Mudar localizao butoes e cenas assim


    // lista de tarefas a realizar
    pagHTML +=`
    <div class="w3-cell-row" style="width:100%">
        <div class="w3-container  w3-cell">
        <ul>
    `
          // CSS 
    for(let i = 0; i<tasks.length;i++){
        if(tasks[i].done == 0){
                pagHTML += `<li>${tasks[i].what_task} - ${tasks[i].due_date} - ${tasks[i].who} </li>`
                // falta adicionar aqui butao de done e edit !!! 
                // Botao de edit e done vaao ser um put (da para modificar)
                // diferenca e que o done e automatico
            }
    }    
    pagHTML +=`
    </ul>
    </div>
    <div class="w3-container w3-cell">
    `
    
    // lista de tarefas realizadas
    for(let i = 0; i< tasks.length;i++){
        if(tasks[i].done == 1){
            pagHTML += `<li>${tasks[i].what_task} - ${tasks[i].due_date} - ${tasks[i].who} </li>`
            // falta adicionar aqui butao de done e edit !!! 
    }
    }
    
    pagHTML+=`    
    </div>
    </div>
    `

    pagHTML += `
    <footer class="w3-container w3-pale-blue">
        <h5>TPC4 EW SIMAO BARROSO ${d} - [<a href="/">Return</a>]</h5>
    </footer>
    </body>
</html>`

    return pagHTML
}

exports.formPage= function(d){
    return `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Register</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-pale-blue">
                    <h2>User TO-DO!</h2>
                </header>
            
                <form class="w3-container" method="POST">
                    <fieldset>
                        <legend>Metadata</legend>
                        <label>Id</label>
                        <input class="w3-input w3-round" type="text" name="id"/>
                        <label>Name</label>
                        <input class="w3-input w3-round" type="text" name="name"/>
                    </fieldset>
                    <br/>
                    <button class="w3-btn w3-pale-green w3-mb-2" type="submit">Register!</button>
                </form>

                <footer class="w3-container w3-pale-blue">
                    <h5>TPC4 EW SIMAO BARROSO ${d} - [<a href="/">Return</a>]</h5>
                </footer>
            
            </div>
            </body>
            </html>
    `
}