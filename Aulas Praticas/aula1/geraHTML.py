<html><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"></head><body>import json

def ordCidade(cidade):
    return cidade['nome']

f = open("mapa.json")
mapa = json.load(f)
cidades = mapa['cidades']
cidades.sort(key=ordCidade)

pagHTML = """


    
        <title>Mapa Virtual</title>
        <meta charset="utf-8">
    
    
        <h1>Mapa Virtual</h1>
        <table>
            <tbody><tr>
                <!-- Coluna do índice -->
                <td width="30%" valign="top">
                    <a name="indice">
                    <h3>Índice</h3>
                    </a><ol><a name="indice">
"""

for c in cidades:
    pagHTML += f"</a><li><a name="indice"></a><a href="#{c[" id']}'="">{c['nome']}</a></li>"

pagHTML += """
</ol>
                </td>
                <!-- Coluna do conteúdo -->
                <td width="70%">
"""

for c in cidades:
    pagHTML += f"""
                    <a name="{c['id']}">
                    <h3>{c['nome']}</h3>
                    <p><b>Distrito:</b> {c['distrito']}</p>
                    <p><b>População:</b> {c['população']}</p>
                    <p><b>Descrição:</b> {c['descrição']}</p>
                    <adress>[</adress></a><a href="#indice">Voltar ao índice</a>]
                    <center>
                        <hr width="80%">
                    </center>
    """

pagHTML += """
                </td>
            </tr>
        </tbody></table>
    

"""

print(pagHTML)</body></html>