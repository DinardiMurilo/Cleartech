[QA] DESAFIO - Sprint 3 - Parte 2

Eu, como stakeholder, gostaria de visualizar os cenários de teste referente às 2 histórias (Cadastrar e Editar Subcategorias).

Link das histórias:

https://dev.azure.com/DevOps-ClearTech/ClearTech/_boards/board/t/Backlog%20Modelo/Stories/?workitem=1694
https://dev.azure.com/DevOps-ClearTech/ClearTech/_boards/board/t/Backlog%20Modelo/Stories/?workitem=1695
Critérios de aceite:

Desenvolver em BDDs cenários de teste baseados nos critérios de aceite das histórias utilizando análise de Valor e Risco;
Criar planejamento de testes;
Criar as massas de teste;
Mapear cenários de testes regressivos 
Utilizar conteúdos da trilha para criação dos cenários.

Como lojista
Eu quero cadastrar uma subcategoria
Entao poderei organizar os produtos

Campos necessarios:
Nome da subcategoria (obrigatario - 128 caracteres - somente alfabeto).

Criterios de aceite:
Cadastrar apenas 1 subcategoria.
Toda subcategoria cadastrada deve ser registrada com o status de ativo;
Toda subcategoria cadastrada deve ser registrada com a data e hora de criacao;
Nao e possivel cadastrar uma subcategoria com nome vazio;
Deve ser lancado uma excecao quando entrar nesse caso;
Criar propriedades Get Set;
Criar os metodos de subcategoria;
Criar os atributos de subcategoria.

Como lojista
Eu quero editar a subcategoria
Entao poderei alterar a organizacao dos produtos

Campos necessarios:
Nome da categoria (128 caracteres - somente alfabeto).

Criterios de aceite
Deve ser possivel ativar e inativar a subcategoria;
Deve ser possivel alterar o nome da subcategoria;
Toda subcategoria alterada deve ser registrada com a data e hora de modificacao;
Caso o nome da subcategoria seja editado para um nome vazio, deve ser lancado uma excecao.