// Aqui vao ser precisas ser geradas duas paginas, 
// uma que e` a pagina principal, seguindo a estrutura dita na aula
// uma de criar um utilizador


// Sera necessaria esta pagina?? rever post
exports.sucessPage = function(mode,data) {
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

exports.mainPage = function(d){
    pagHTML = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Main Page</title>
        </head>
        <body>`
    
    //https://www.w3schools.com/w3css/w3css_layout.asp


    // Form introducao de dados
    pagHTML +=`
   
    <div class="w3-container w3-blue">
    <p>Hello W3.CSS Layout.</p>
    </div>    
    </div>
    `

    // lista de tarefas a realizar
    pagHTML +=`
    <div class="w3-cell-row" style="width:100%">
        <div class="w3-container w3-red w3-cell">
            <p>Hello W3.CSS Layout.</p>
        </div>


    `

    // lista de tarefas realizadas
    pagHTML +=`
    <div class="w3-container w3-green w3-cell">
        <p>Hello W3.CSS Layout.</p>
    </div>
    </div>
    `

    pagHTML += `
    <footer class="w3-container w3-teal">
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