Eu, como lojista, quero realizar os testes de performance necessários para garantir a funcionalidade da aplicação.

Critérios de aceite:

Assistir e ler os conteúdos da trilha e utilizá-los para montar um planejamento de como e quais testes utilizar e executar na API de (categoria/sub/produto);
Montar um script com o relatório (reporte) e enviar por e-mail - ENTREGÁVEL PRÉ-REVIEW 
Apresentar e executar o script enviado anteriormente, explicando os motivos do planejamento - ENTREGÁVEL NA REVIEW



1. Teste de Carga (Load Test)
Testa o software sob as condições normais de uso, para identificar o comportamento 
do sistema sob uma carga específica esperada. O que pode ser, 
quantidade de usuários simultâneos, tempos de respostas, quantidade de requesições atendidas por segundo ou minuto, etc. 

2. Teste de Estresse (Stress Test)
Testa o software sob condições extremas de uso, para verificar a robustez 
do sistema com o objetivo de encontrar o limite da aplicação.

3. Teste de Estabilidade (Soak testing)
Testa o software com uma carga contínua durante longos períodos de tempo, para determinar se o 
sistema terá um comportamento adequado na utilização de memória durante o teste.

como realizar o teste de performance / Api Vladmir

Voce vai precisar
- Git Bash
- MySQL Woekbench
- Postman
- visual studio code
- visual studio 2022
- siga os passos para instalacao do chocolatey (https://chocolatey.org/install) 
- baixe a versao do k6 com extensao .msi (https://github.com/grafana/k6/releases)  

Clone o repositorio contendo api necessaria 
Abra o projeto e insira os dados necessarios para criacao do banco de dados na pasta appsettings.json
Realize o processo para as duas pastas usuariosApi e categoriaApi
Apague a pasta Migration
Realize o processo para as duas pastas usuariosApi e categoriaApi
Utilize o nuget manager console com os comandos (add-migration "nomeMigration" e update-database)
Realize o processo para as duas pastas usuariosApi e categoriaApi
Inicie as duas partes da Api  
Abra o Postman e configure a request para login com ("email": "admin@admin.com",  "password": "Admin123!")
Crie a request para cadastrar categoria e utilize o token gerado no passo anterior.
Cadastre a quantidade necessaria de categorias para o teste
Crie uma pasta para realizar o projeto de testes de perfomance
Abra a pasta dentro do Visual Studio Code
Crie os arquivos necessarios para seu teste utilizando o K6
Inicie o Terminal 
Utilize o comando choco install k6
Utilize o comando k6 run index.js para realizar o teste.
Faca a instalacao do export HTML para o k6 e utilize a versao com frontend result


Teste realizado

Para esta Api utilize o teste de stress
Realize testes com 5 segundos, 10 segundos e 30 segundos.
Falando do teste utilizando 5 segundos observamos que:
Simulando 10 usuarios temos o minimo de 10 VU's e o maximo de 10 VU's
Simulando 50 usuarios temos o minimo de 50 VU's e o maximo de 50 VU's
Simulando 100 usuarios temos o minimo de 100 VU's e o maximo de 100 VU's
Simulando 300 usuarios temos o minimo de 300 VU's e o maximo de 300 VU's
Simulando 500 usuarios temos o minimo de 500 VU's e o maximo de 500 VU's
Simulando 700 usuarios temos o minimo de 700 VU's e o maximo de 700 VU's
Simulando 800 usuarios temos o minimo de 783 VU's e o maximo de 800 VU's
Simulando 1000 usuarios temos o minimo de 802 VU's e o maximo de 1000 VU's

Percebe-se que o numero minimo e o maximo de virtual users deixa de ser igual entre 700 e 800 usuarios simultaneos
Ou seja, apos diversos testes escalando o aumento de usuarios podemos identificar que o sistema gera diferenca a partir desse momento.
O tempo medio para realizacao da requisicao foi de 11,03 com 700 VU's para 22,35 com 800 VU's. 
