import json
import time
import icu # pip install PyICU

collator = icu.Collator.createInstance(icu.Locale('pt_PT.UTF-8'))


def ordCidade(c):
    return c['nome']


f = open("mapa.json")
mapa = json.load(f)
cidades = mapa["cidades"]
ligações = mapa["ligações"]
cidades.sort(key=ordCidade)
# key=collator.getSortKey
#print(cidades)


pagHTML = """
<!DOCTYPE html>
<html>
    <head>
        <title>TPC2</title>
        <meta charset = "utf-8"/>
    </head>
    <body>
    <h3>Distritos</h3>
"""

# pensar em maneiras mais eficientes
# github
distritos = dict()

for c in cidades:
    if c['distrito'] in distritos.keys():
        distritos[c['distrito']] += [(c['nome'],c['id'])]

    else :
        distritos.update({c['distrito'] : [(c['nome'],c['id'])]})
 


#colocar os distritos por ordem alfabetica
sorted_keys = sorted(distritos.keys(), key=collator.getSortKey)
distritos = {key:distritos[key] for key in sorted_keys}
#tratar do caso de Evora estar em ultimo por causa do acento !

for d in distritos:
    pagHTML += f"""
        <h4>{d}</h4><ul>"""
    for n in distritos[d]:
        pagHTML += f"""<li><a href="{n[1]}">{n[0]}</a></li>
        """       
    pagHTML += """</ul>"""


pagHTML += """</body>
</html>"""

print(pagHTML)

