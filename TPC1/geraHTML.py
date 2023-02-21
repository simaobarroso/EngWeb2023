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

pagHTML = f"""
    <html><head>


    <meta http-equiv="content-type" content="text/html; charset=UTF-8"><title>Iogurte</title><meta charset="utf-8"><link rel="stylesheet" href="style.css"> </head><body bgcolor="#ADD8E6">

    <nav class="navbar">
    <!--<h3>Indice</h3>-->
    <div class = "trab">Iogurtes</div>
    <div class="navbar-links">
        <ul class="nav-bar">
            <li><a href="#intro">Intro</a></li>
            <li><a href="#hist">Historia do Iogurte</a></li>
            <li><a href="#prop">Propriedades e Caracteristicas dos Iogurtes</a></li>
            <li><a href="#tipos">Tipos de Iogurtes</a></li>
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
    <h3>Introducao</h3>
    <p>O iogurte (do turco yoğurt,"denso" ou "tornar denso") é uma forma de leite em que o açúcar (a lactose) foi transformado em ácido láctico, por fermentação bacteriana. 
        Pode ser sólido ou um liquido.
        O iogurte é um alimento que tem origem nos Balcãs e, tal como outros produtos derivados do leite fermentado, como o leben árabe, o koumis russo, o jugurt turco ou o kefir caucasiano, remontam há milhares de anos. 
        A sua comercialização, no entanto, teve início a partir da constatação feita pelo médico russo Ilya Ilyich Mechnikov, premiado com o Nobel da Fisiologia ou Medicina em 1908. 
    </p>


    
    <a name="hist"></a>
    <h3>Historia do Iogurte</h3>
    <p>
        O iogurte tem feito parte da dieta humana por milhares de anos. As referências aos benefícios desse alimento para a saúde remontam ao ano 6000 AC, nos escritos ayurvédicos indianos. Porém, foi somente no século XX que Stamen Grigorov, um estudante de medicina búlgaro, constatou cientificamente os benefícios às bactérias do ácido lático.
    </p>
    <p>
        A história do iogurte começou provavelmente no Oriente Médio. 
        Em regiões do deserto onde havia domesticação de gado, o leite era armazenado em jarros de barro. 
        As temperaturas elevadas auxiliavam no desenvolvimento de microrganismos lácteos presentes no próprio leite, fermentando parcialmente a lactose. 
        Isso levava à acidificação do produto, com aumento da interação entre suas proteínas, o que modificava a sua textura.
    </p>
    <p>
        O trabalho do cientista detalhando a composição precisa do iogurte acabou sendo usado pelo biólogo russo e ganhador do Prêmio Nobel <i> Élie Metchnikoff</i>. 
        No seu livro <i>The Prolongation of Life </i>(O prolongamento da vida, em tradução livre), de 1908, Metchnikoff estabeleceu uma ligação entre o alto consumo de iogurte por camponeses búlgaros e sua alta expectativa de vida.
Essa ideia de que o iogurte prolonga a vida alimentou um modismo do consumo de iogurte em países europeus, como França, Suíça, Alemanha, Espanha e Grã-Bretanha.
    </p>

    <a name="prop"></a>
    <h3>Propriedades e Caracteristicas dos Iogurtes</h3>
        <h4>Ingredientes de um Iogurte</h4>
        <dl>
            <dt>Leite</dt> 
                <dd>Seja de origem animal ou de outra origem, o leite e fundamental ao Iogurte por causa da fermentação</dd>
            <dt>Açúcar</dt>
                <dd>Porque tudo na vida precisa de um doce</dd>
            <dt>Leite em pó desnatado</dt>
                <dd>Para ajudar no sabor</dd>
            <dt>Polpa de frutas</dt>
                <dd>A adição do preparado à base de polpa de frutas é feita após a fermentação, caracterizando um ponto crítico de controle. 
                    Por esse motivo é fundamental a escolha de um preparado de qualidade garantida, caso contrário, os riscos de problemas de contaminação são muito altos.</dd>
            <dt>Culturas lácticas</dt>
                <dd>São microorganismos selecionados que se empregam na indústria de laticínios para a elaboração de queijos, iogurtes e outros produtos fermentados.</dd>        
                    <!--MELHORAR ESTA LISTA COM CSS-->
        </dl>
    <h4>Motivos para consumir</h4>
        <ol>
            <li>Melhora o funcionamento do intestino</li>
            <li>Fortalece os ossos, músculos e dentes</li>
            <li>É fonte de proteínas</li>
            <li>É rico em vitaminas do complexo B, C e D</li>
            <li>Melhora a saúde dos sistemas nervoso e imunológico</li>
            <li>Auxilia em dietas para a perda de gordura corporal</li>
        </ol> 
    
    <a name="tipos"></a>
    <h3>Tipos de Iogurtes</h3>   
    
    
    <a name="iogPort"></a>
    <h3>Iogurtes Populares em Portugal</h3> 
             
<table style="width: 100%;">
    <tr>
        <th>Imagem</th>
        <th>Nome</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td align="center"><img src="https://www.danone.pt/content/img/marca-danonino.jpg" width="200"></td>
        <td align="center"><a href="https://www.danone.pt/marcas/danonino">Danonino</a></td>
        <td align="center">O Iogurte favorito dos portugueses, desde os maiores aos mais pequenos.</td>
    </tr>
    <tr>
        <td align="center"><img src="https://www.auchan.pt/dw/image/v2/BFRC_PRD/on/demandware.static/-/Sites-auchan-pt-master-catalog/default/dw2b26dc06/images/hi-res/003521453.jpg" width="200"></td>
        <td align="center"><a href="https://www.auchan.pt/pt/alimentacao/produtos-lacteos/iogurtes/cremosos-gregos/iogurte-grego-oikos-natural-900gr/3521453.html">Iogurte Grego</a></td>
        <td align="center">Infelizmente nao percebo como e que e tao popular.</td>
    </tr>
    <tr>
        <td align="center"><img src="https://saboreiaavida.nestle.pt/sites/default/files/styles/product_630x630/public/2021-12/Nesquik-Petit_6x60_ar.png?itok=w1vCLKyQ" width="200"></td>
        <td align="center"><a href="https://saboreiaavida.nestle.pt/produtos/lacteos-e-sobremesas/nesquik-petit">Nesquik Petit</a></td>
        <td align="center">O mais saboroso e pequeno momento que temos na vida.</td>
    </tr>
    <tr>
        <td align="center"><img src="https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw9638a767/images/col/607/6078857-frente.jpg?sw=2000&sh=2000" width="200"></td>
        <td align="center"><a href="https://www.continente.pt/produto/iogurte-liquido-morango-yoggi-6078857.html?cgid=laticinios-iogurtes-liquidos">Iogurte Líquido</a></td>
        <td align="center">Semelhantes aos outros iogurtes, mas em formato líquido. Popularmente usado como bebida complementar a uma 
            refeição. Ajuda no balanco do dia a dia, e traz a tao amada calma.</td>
    </tr>
</table>

    <a name="Notas"></a>
    <h3>Notas</h3>
    <ul>
        <li>Todas as informacoes foram retiradas do <a href="https://pt.wikipedia.org/wiki/Iogurte"> wikipedia</a></li>
        <li>Erros gramaticais devido ao uso do teclado em ingles</li>
        <li>https://laticiniosholandes.com.br/conheca-a-historia-do-iogurte/</li>
        <li>https://aditivosingredientes.com/artigos/laticinios/o-saudavel-mercado-dos-iogurtes</li>
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
        <p>Simao Barroso (a96834)</p>
    </center>
    </body></html>    
    """

#python geraHTML.py > final.html

print(pagHTML)