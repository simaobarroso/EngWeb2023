from random import randint


# ficheiro criado para demonstrar o que foi aprendido na primeira aula pratica
# geracao de ficheiros HTML a partir de python

listaRandom = ['''<iframe width="560" height="315" src="https://www.youtube.com/embed/yKQ_sQKBASM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>''' ,
               '''<iframe width="560" height="315" src="https://www.youtube.com/embed/T8XeDvKqI4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>''',
               '''<iframe width="560" height="315" src="https://www.youtube.com/embed/iSmkqocn0oQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>''',
               '''<iframe width="560" height="315" src="https://www.youtube.com/embed/f_6YwTLXqXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>''',
               '''<iframe width="560" height="315" src="https://www.youtube.com/embed/tas0O586t80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'''
               ]

#print(listaRandom[randint(0,5)]) 

pagHTML = """
<html>
    <head>
        <!--configs-->
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <title>Iogurte</title>
        <meta charset="utf-8">
        <!--links-->
        <link rel="stylesheet" href="style.css"> 
        <style>
            table, th, td {
              border: 1px solid black;
            }
        </style>

    </head>
<body bgcolor="#ADD8E6">

    <nav class="navbar">
    <!--<h3>Indice</h3>-->
    <div class = "trab">Iogurtes</div>
    <div class="navbar-links">
        <ul class="nav-bar">
            <li><a href="#intro">Intro</a></li>
            <li><a href="#hist">Historia do Iogurte</a></li>
            <li><a href="#prop">Propriedades e Caracteristicas dos Iogurtes</a></li>
            <li><a href="#iogPort">Iogurtes Populares em Portugal</a></li>
            <li><a href="#Notas">Notas</a></li>
            <li><a href="#Spanish Inquisition">Spanish Inquisition</a></li>
    </ul>
    </div>
    </nav>
    </body>
<hr>    

    <div class="corpo">

    <a name="intro"></a>
    <h3>Introduc??o</h3>
    <p>O iogurte (do turco yo??urt,"denso" ou "tornar denso") ?? uma forma de leite em que o a????car (a lactose) foi transformado em ??cido l??ctico, por fermenta????o bacteriana. 
        Pode ser s??lido ou um liquido.
        O iogurte ?? um alimento que tem origem nos Balc??s e, tal como outros produtos derivados do leite fermentado, como o leben ??rabe, o koumis russo, o jugurt turco ou o kefir caucasiano, remontam h?? milhares de anos. 
        A sua comercializa????o, no entanto, teve in??cio a partir da constata????o feita pelo m??dico russo Ilya Ilyich Mechnikov, premiado com o Nobel da Fisiologia ou Medicina em 1908. 
    </p>


    
    <a name="hist"></a>
    <h3>Historia do Iogurte</h3>
    <p>
        O iogurte tem feito parte da dieta humana por milhares de anos. As refer??ncias aos benef??cios desse alimento para a sa??de remontam ao ano 6000 AC, nos escritos ayurv??dicos indianos. Por??m, foi somente no s??culo XX que Stamen Grigorov, um estudante de medicina b??lgaro, constatou cientificamente os benef??cios ??s bact??rias do ??cido l??tico.
    </p>
    <p>
        A hist??ria do iogurte come??ou provavelmente no Oriente M??dio. 
        Em regi??es do deserto onde havia domestica????o de gado, o leite era armazenado em jarros de barro. 
        As temperaturas elevadas auxiliavam no desenvolvimento de microrganismos l??cteos presentes no pr??prio leite, fermentando parcialmente a lactose. 
        Isso levava ?? acidifica????o do produto, com aumento da intera????o entre suas prote??nas, o que modificava a sua textura.
    </p>
    <p>
        O trabalho do cientista detalhando a composi????o precisa do iogurte acabou sendo usado pelo bi??logo russo e ganhador do Pr??mio Nobel <i> ??lie Metchnikoff</i>. 
        No seu livro <i>The Prolongation of Life </i>(O prolongamento da vida, em tradu????o livre), de 1908, Metchnikoff estabeleceu uma liga????o entre o alto consumo de iogurte por camponeses b??lgaros e sua alta expectativa de vida.
Essa ideia de que o iogurte prolonga a vida alimentou um modismo do consumo de iogurte em pa??ses europeus, como Fran??a, Su????a, Alemanha, Espanha e Gr??-Bretanha.
    </p>

    <a name="prop"></a>
    <h3>Propriedades e Caracteristicas dos Iogurtes</h3>
        <h4>Ingredientes de um Iogurte</h4>
        <dl>
            <dt>Leite</dt> 
                <dd>Seja de origem animal ou de outra origem, o leite ?? fundamental ao Iogurte por causa da fermenta????o</dd>
            <dt>A????car</dt>
                <dd>Porque tudo na vida precisa de um doce</dd>
            <dt>Leite em p?? desnatado</dt>
                <dd>Para ajudar no sabor</dd>
            <dt>Polpa de frutas</dt>
                <dd>A adi????o do preparado ?? base de polpa de frutas ?? feita ap??s a fermenta????o, caracterizando um ponto cr??tico de controle. 
                    Por esse motivo ?? fundamental a escolha de um preparado de qualidade garantida, caso contr??rio, os riscos de problemas de contamina????o s??o muito altos.</dd>
            <dt>Culturas l??cticas</dt>
                <dd>S??o microorganismos selecionados que se empregam na ind??stria de latic??nios para a elabora????o de queijos, iogurtes e outros produtos fermentados.</dd>        
                    <!--MELHORAR ESTA LISTA COM CSS-->
        </dl>
    <h4>Motivos para consumir</h4>
        <ol>
            <li>Melhora o funcionamento do intestino</li>
            <li>Fortalece os ossos, m??sculos e dentes</li>
            <li>?? fonte de prote??nas</li>
            <li>?? rico em vitaminas do complexo B, C e D</li>
            <li>Melhora a sa??de dos sistemas nervoso e imunol??gico</li>
            <li>Auxilia em dietas para a perda de gordura corporal</li>
        </ol> 
    
    
    
    <a name="iogPort"></a>
    <h3>Iogurtes Populares em Portugal</h3> 
             
<table style="width: 100%;">
    <tr>
        <th>Imagem</th>
        <th>Nome</th>
        <th>Descri????o</th>
    </tr>
    <tr>
        <td align="center"><img src="https://www.danone.pt/content/img/marca-danonino.jpg" width="200"></td>
        <td align="center"><a href="https://www.danone.pt/marcas/danonino">Danonino</a></td>
        <td align="center">O Iogurte favorito dos portugueses, desde os maiores aos mais pequenos.</td>
    </tr>
    <tr>
        <td align="center"><img src="https://www.auchan.pt/dw/image/v2/BFRC_PRD/on/demandware.static/-/Sites-auchan-pt-master-catalog/default/dw2b26dc06/images/hi-res/003521453.jpg" width="200"></td>
        <td align="center"><a href="https://www.auchan.pt/pt/alimentacao/produtos-lacteos/iogurtes/cremosos-gregos/iogurte-grego-oikos-natural-900gr/3521453.html">Iogurte Grego</a></td>
        <td align="center">Infelizmente n??o percebo como ?? que ?? t??o popular.</td>
    </tr>
    <tr>
        <td align="center"><img src="https://saboreiaavida.nestle.pt/sites/default/files/styles/product_630x630/public/2021-12/Nesquik-Petit_6x60_ar.png?itok=w1vCLKyQ" width="200"></td>
        <td align="center"><a href="https://saboreiaavida.nestle.pt/produtos/lacteos-e-sobremesas/nesquik-petit">Nesquik Petit</a></td>
        <td align="center">O mais saboroso e pequeno momento que temos na vida.</td>
    </tr>
    <tr>
        <td align="center"><img src="https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw9638a767/images/col/607/6078857-frente.jpg?sw=2000&sh=2000" width="200"></td>
        <td align="center"><a href="https://www.continente.pt/produto/iogurte-liquido-morango-yoggi-6078857.html?cgid=laticinios-iogurtes-liquidos">Iogurte L??quido</a></td>
        <td align="center">Semelhantes aos outros iogurtes, mas em formato l??quido. Popularmente usado como bebida complementar a uma 
            refei????o. Ajuda no balanco do dia a dia, e traz a t??o amada calma.</td>
    </tr>
</table>

    <a name="Notas"></a>
    <h3>Notas</h3>
    <ul>
        <li>Todas as informac??es foram retiradas do <a href="https://pt.wikipedia.org/wiki/Iogurte"> Wikipedia</a>, <a href="https://laticiniosholandes.com.br/conheca-a-historia-do-iogurte/">Laticinios Holandes</a> e 
        <a href="https://aditivosingredientes.com/artigos/laticinios/o-saudavel-mercado-dos-iogurtes">Aditivos Ingredientes</a></li>
        <li>Erros gramaticais devido ao uso do teclado em ingles</li>

    </ul>
"""
pagHTML += f"""<a name="Spanish Inquisition"></a>
    <center> {listaRandom[randint(0,4)]}  </center>
    </div>
    """

pagHTML+="""    
    <br>
    <center>
        <p>Pagina realizada para a UC de Engenharia Web (3 ano, 2 semestre) - Universidade do Minho</p>
        <p>Sim??o Barroso (a96834)</p>
        <img src="img/EEUM_logo_EN.png" width="100">
    </center>
    </body></html>    
    """

#python geraHTML.py > final.html

print(pagHTML)