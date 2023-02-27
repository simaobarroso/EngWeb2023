<h1>TPC2 - EW</h2>

<p><b>Fazer CSS????????</b></p>

<p>Neste exercicio tinhamos que combinar o aprendido nas duas aulas praticas anteriores: gerar paginas HTML a partir do python e criar um servidor NodeJs</p>

<p>Comecando pela ultima, apenas precisamos de juntar componentes dos exercicios feitos na aula. Em particular era essencial saber como dar <i>parse</i> ao url, bem como ler ficheiros (estes gerei a partir de python - explicado mais em baixo). Relativamente ao resto, menciona-se a escolha da porta 8888 uma vez que nao ha nenhuma outra aplicacao que a use, portanto evitando inconvenientes. Os console logs sao apenas para efeitos de debug, assim como demonstrado na aula.</p>

<p>Em relacao a geracao de paginas, este processo e` bastante semelhante ao da aula pratica 1. Optei por criar dois programas. Um que gere a pagina index (quase identico ao exercicio da aula 1, so que sem o index) e um segundo programa que cria cada uma das paginas das varias cidades. Usei a funcao do python <b>open</b> para criar varios ficheiros e colocar o codigo HTML la com a funcao write. Os nomes dos ficheiros estao de acordo o estabelicido no trabalho de casa para depois possibilitar a interligacao destas paginas atraves do nodejs.</p>

Para rodar o programa basta:

<ul>
<li>python geraHTMLindex.py > index.html </li>
<li>python geraHTmLcid.py </li>
<li><b>node servidor.js</b></li>
</ul>

<p>E preciso ter:</p> 
<ul>
<li>python</li>
<li href="https://stackoverflow.com/questions/1097908/how-do-i-sort-unicode-strings-alphabetically-in-python">PyICU</li>
<li>NodeJS</li>
</ul>
