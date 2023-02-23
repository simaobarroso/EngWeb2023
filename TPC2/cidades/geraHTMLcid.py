import json


def ordCidade(c):
    return c['nome']


f = open("../mapa.json")
mapa = json.load(f)
cidades = mapa["cidades"]
ligações = mapa["ligações"]
cidades.sort(key=ordCidade)