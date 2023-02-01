Eu, como stakeholder, gostaria de visualizar os cenários de teste referente as 3 histórias (Cadastrar, Editar e Listar produtos)

Link das histórias:

https://dev.azure.com/DevOps-ClearTech/ClearTech/_boards/board/t/Backlog%20Modelo/Stories/?workitem=2392
https://dev.azure.com/DevOps-ClearTech/ClearTech/_boards/board/t/Backlog%20Modelo/Stories/?workitem=2395
https://dev.azure.com/DevOps-ClearTech/ClearTech/_boards/board/t/Backlog%20Modelo/Stories/?workitem=2430
Critérios de aceite:

Desenvolver em BDDs cenários de teste baseados nos critérios de aceite das histórias utilizando análise de Valor e Risco;
Criar planejamento de testes;
Criar as massas de teste;
Mapear cenários de testes regressivos

DESAFIO - SPRINT 4 - PARTE 1

Como lojista
Eu quero cadastrar produtos
Então poderei ofertar em minha loja

Campos necessários:
Nome do produto (obrigatório - 128 caracteres - alfanumerico)
Descrição do produto (obrigatório - 512 caracteres - alfanumerico)
Peso (obrigatório - decimal 0,00)
Altura (obrigatório - decimal 0,00)
Largura (obrigatório - decimal 0,00)
Comprimento (obrigatório - decimal 0,00)
Valor (obrigatório - decimal 0,00)
Quantidade em estoque (obrigatório - inteiro)
Centro de distribuição (obrigatório)
Categoria/subcategoria (obrigatório)

Critérios de aceite
Todo produto cadastrado deve ser registrado com o status de ativo.
Todo produto cadastrado deve ser registrado com a data e hora de criação.
Não é possível cadastrar o produto em uma categoria e subcategoria inativa.
Uma vez associado um produto a uma categoria/subcategoria ativa, não é possível inativar essa categoria/subcategoria.


DESAFIO - SPRINT 4 - PARTE 2

Como lojista
Eu quero editar produtos
Então poderei atualizar as informações em minha loja

Campos necessários:
Nome do produto (128 caracteres - alfanumérico)
Descrição do produto (512 caracteres - alfanumérico)
Peso (decimal 0,00)
Altura (decimal 0,00)
Largura (decimal 0,00)
Comprimento (decimal 0,00)
Valor (decimal 0,00)
Quantidade em estoque (inteiro)
Centro de distribuição
Categoria/subcategoria
Status

Critérios de aceite:
Um produto pode ser alterado para ativo ou inativo.
Todo produto alterado deve ser registrado com a data e hora de modificação.


DESAFIO - SPRINT 4 - PARTE 3

Como lojista
Eu quero pesquisar produtos
Então poderei visualizar as informações que preciso

Campos de pesquisa:
Nome do produto (128 caracteres - alfanumérico - mínimo 3 caracteres)
Peso (decimal 0,00)
Altura (decimal 0,00)
Largura (decimal 0,00)
Comprimento (decimal 0,00)
Valor (decimal 0,00)
Quantidade em estoque (inteiro)
Centro de distribuição (um ou mais)
Categoria/subcategoria (uma ou mais)
Status (Todos, Ativos, Inativos)

Campos de visualização:
Id de registro
Nome do produto
Valor
Quantidade em estoque
Centro de distribuição
Categoria/subcategoria
Status
Data de criação
Data de modificação

Critérios de aceite:
Exibir paginação configurável (opção de determinar quantos registros exibir por página).
