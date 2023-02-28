# TPC Aula Teorica 1 (28 fev 2023)

import json
import time

f = open("dataset-extra1.json")
dataset = json.load(f)

#print(dataset)

i = 0 
for data in dataset['pessoas']:
    #print(data)
    id = "p"+str(i)
    i += 1
    data["id"] = id # ordem nao interessa mas melhoria seria por isto em primeiro !!!


fwrite = open("datasetAlterado.json","w")
#fwrite.write(dataset) # escrevemos para um ficheiro diferente para evitar perda do dataset

json.dump(dataset,fwrite)