import json
import time
import icu # pip install PyICU
from operator import itemgetter

def ordCidade(c):
    return c['nome']


f = open("../mapa.json")
mapa = json.load(f)
cidades = mapa["cidades"]
ligações = mapa["ligações"]
cidades.sort(key=ordCidade)

collator = icu.Collator.createInstance(icu.Locale('pt_PT.UTF-8'))

lig = dict()
cities = dict()

for c in cidades:
    cities.update({c['id']:c['nome']})
    lig.update({c['id']: list()})

if 1 == 1:
    for l in ligações:
        o = l['origem']
        dest = l['destino']
        dist = l['distância']
        for c in cities:
            #print(c)
            if c == o and (cities[o],str(dist)) not in lig[c] :
                #print("ola")
                lig[c] += [(cities[dest],str(dist))]
            elif c == o and (cities[o],str(dist)) not in lig[c]:
                #print("adeus")
                lig[c] += [(cities[o],str(dist))]     
            
for l in lig:
    array = lig[l]
    array.sort(key=lambda x: x[0])




for c in cidades:
            # da reset 
    pagHTML = f"""<!DOCTYPE html> 
            <html>
            <head>
                <title>{c['nome']}</title>
                <meta charset = "utf-8"/>
            </head>
            <body>
                <center>
                    <h1>Cidade</h1>
                </center>
            """    
    nomefich = str(c['id'])+".html"
    f = open(nomefich,"w")    
    pagHTML += f"""
                            <a name="{c['id']}"></a>
                            <h3>{c['nome']}</h3>
                            <p><b>População</b> {c['população']}</p>
                            <p><b>Descrição:</b>{c['descrição']}</p>
                            <p><b>Distrito:</b>{c['distrito']}</p>
                            <h3> Ligações:</h3>
                            <ul>
                """
    #ligs = lig[c['nome']]        
    for l in ligações:
        if l['origem'] == c['id']:
            for s in cidades:
                if s['id']==l['destino']:
                    pagHTML += f""" 
                        <li><a href="#{s['id']}">{s['nome']}</a> - {l['distância']} Km</li>
        """

        elif l["destino"] == c["id"]:
            for s in cidades:
                if s['id']==l['origem']:
                    pagHTML += f""" 
                        <li><a href="#{s['id']}">{s['nome']}</a> - {l['distância']} Km</li>

    `"""
    pagHTML += f"""</ul>
                    <adress><a href="/"> [voltar ao Indice] </a>                
                        </body>
                    </html>"""
    f.write(pagHTML)
    f.close()
    #time.sleep(2)

#print(pagHTML)
