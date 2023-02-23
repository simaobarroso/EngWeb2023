import json
import time

def ordCidade(c):
    return c['nome']


f = open("../mapa.json")
mapa = json.load(f)
cidades = mapa["cidades"]
ligações = mapa["ligações"]
cidades.sort(key=ordCidade)

# usar a funcao open para criar um ficheiro novo

#print(cidades)



for c in cidades:
    # e` preciso por este pedaco de codigo aqui porque???
    # para dar reset e nao acumular????? 
    pagHTML = """<!DOCTYPE html> 
    <html>
    <head>
        <title>Mapa Virtual</title>
        <meta charset = "utf-8"/>
    </head>
    <body>
        <center>
            <h1>Cidade</h1>
        </center>
    """    
    nomefich = str(c['id'])+".html"
    f = open(nomefich,"x")    
    pagHTML += f"""
                    <a name="{c['id']}"></a>
                    <h3>{c['nome']}</h3>
                    <p><b>População</b> {c['população']}</p>
                    <p><b>Descrição:</b>{c['descrição']}</p>
                    <p><b>Distrito:</b>{c['distrito']}</p>
                    <h3> Ligações:</h3>
        """
        
    for l in ligações:
        if l['origem'] == c['id']:
            for s in cidades:
                if s['id']==l['destino']:
                        pagHTML += f""" <ul>
                            <li><a href="{s['id']}">{s['nome']}</a> - {l['distância']} Km</li>
                            </ul>
                            """
    pagHTML += f"""
            <adress><a href="/"> [voltar ao Indice] </a>                
                </body>
            </html>"""
    f.write(pagHTML)
    f.close()
    #time.sleep(2)

#print(pagHTML)
