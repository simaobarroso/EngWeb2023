<h1>TPC 3 DE ENGENHARIA WEB</h1>

<h3>Enunciado</h3>

<p>TPC3: Completar o serviço iniciado na aula com o seguinte:
            </p>
              <li>Criar uma resposta ao pedido: <code>localhost:porta/</code> que responde 
              com uma página contendo uma lista de links para várias coisas: <ol>
                <li>Lista de pessoas</li>
                <li>Lista de pessoas ordenada</li>
                <li>Distribuição por sexo: faz um pedido ao servidor que responde com uma 
                  página onde se pode consultar numa tabela quantas pessoas de cada sexo estão 
                  registadas, ao clicar no número de pessoas deverá fazer novo pedido ao
                  servidor que responderá com uma lista dessas pessoas;
                </li>
                <li>Distribuição por desporto: faz um pedido ao servidor que responde com uma 
                  página onde se pode consultar numa tabela quantas pessoas que praticam cada desporto estão 
                  registadas, ao clicar no número de pessoas deverá fazer novo pedido ao
                  servidor que responderá com uma lista dessas pessoas;
                </li>
                <li>
                  Top10 de profissões: faz um pedido ao servidor que responde com uma 
                  página onde se pode consultar numa tabela as 10 profissões mais exercidas, 
                  ao clicar no número de pessoas deverá fazer novo pedido ao
                  servidor que responderá com uma lista dessas pessoas.
                </li>
              </ol></li>
              <li>
                Na página da lista de pessoas, ao clicar no nome duma pessoa deverá fazer um
                pedido ao serviço que deverá responder com a página individual da pessoa com 
                a sua informação.
              </li>
              <li>Extra: Utilizem o dataset grande, ou juntem-nos todos obtendo um dataset com 
                16000 pessoas. Os resultados serão mais interessantes.
              </li>

<h3>Resolucao</h3>

<p><i>Disclaimer</i>: erros gramaticais devido a problemas no teclado</p>

<p>A resolucao dos dois primeiros items foi uma utilizacao direta do aprendido na aula pratica e teorica. Optei por usar o metodo sort do js em vez do pedido ao servidor, porque eram uma maneira de aprender melhor a programar em JS.</p>

<p>Relativamente aos pontos 3 e 4 sao quase a mesma resolucao, apenas muda o parametro da resolucao. Na parte de gerar a pagina, crio um dicionario com as varias entradas. Percorro os dados todos e adiciono um ao valor que corresponde a chave daquele parametro. De seguida dou sort pelo numero de vezes, assim fica mais facil percorrer a lista.</p>

<p>No ultimo ponto, a estrutura e` a mesma dos 2 anteriores, mas limita-se a apresentacao das 10 keys do dicionario com maior valor.</p>

<p>EXTRA: Testei com o dataset maior (20000 entradas) e a performance diminui. A otimizacao para melhorar isto podia ser principal relativa ao percorrer 2 vezes uma mesma estrutura, quando so precisava de ser uma. Era algo que precisava de passar mais tempo a raciocinar. E` tambem de notar que isto prova que json talvez nao seja a melhor maneira para guardar dados, algo que (talvez) servira de ponto de partida a proxima aula (mongoDB).</p>
