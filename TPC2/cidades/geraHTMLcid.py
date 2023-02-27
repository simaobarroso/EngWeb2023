import json
import time

def ordCidade(c):
    return c['nome']


f = open("../mapa.json")
mapa = json.load(f)
cidades = mapa["cidades"]
ligações = mapa["ligações"]
cidades.sort(key=ordCidade)


cid = dict()

# Assumo que o dataset nao tem ligacoes erradas nem o mesmo id para cidades diferentes

# otimizacao?
# percorro a mesma estrutura de dados varias vezes? big o
for c in cidades:
    # if c['id'] in cid.keys() : print("Erro Cidade repetida") # ou usar um pass, para ignorar e apenas ter em considerecao a primeira
    # dependia do metodo logo nao considerei
    cid.update({c['id'] : c['nome'] })


# exemplo :
# 'c34': 'Esposende', 'c31': 'Estarreja',


lig = dict() # ter um dicionario com todas

# para as ligacoes serem bidirecionais
for l in ligações:
    if cid[l['origem']] in lig.keys():
        lig[cid[l['origem']]] += [(l['destino'],cid[l['destino']],l['distância'])]
    else :
        lig.update({cid[l['origem']] : [(l['destino'],cid[l['destino']],l['distância'])]})       
    # vamos fazer las biderecionais
    if cid[l['destino']] in lig.keys():
        lig[cid[l['destino']]] += [(l['origem'], cid[l['origem']],l['distância'])]
    else :
        lig.update({cid[l['destino']] : [(l['origem'], cid[l['origem']],l['distância'])]})       

# simplificar

# print(lig)

# exemplo :
# 'Braga' : [('Lisboa',250), ...]


# compliquei demais ? muito provalvemente


for c in cidades:
        # da reset 
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
    ligs = lig[c['nome']]        
    for s in ligs:
                pagHTML += f""" <ul>
                    <li><a href="{s[0]}">{s[1]}</a> - {s[2]} Km</li>
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
