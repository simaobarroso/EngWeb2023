import json


def ordCidade(c):
    return c['nome']


f = open("../mapa.json")
mapa = json.load(f)
cidades = mapa["cidades"]
ligações = mapa["ligações"]
cidades.sort(key=ordCidade)

# usar a funcao open para criar um ficheiro novo

#print(cidades)

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
i = 1
for c in cidades:
    if i == 1:      
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
    i+=1

print(pagHTML)
