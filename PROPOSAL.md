# TRABALHO PRÁTICO – CONSUMO DE API COM JAVASCRIPT
## Objetivo:
Desenvolver uma página web que consome dados de uma API pública utilizando 
JavaScript moderno, aplicando boas práticas de organização de código, uso de fetch, 
async/await, debounce, cache com localStorage, separação de lógica, uso de módulos e 
paginação simples.
Resultado esperado:
## Uma página HTML com:
- Campo de busca de usuários
- Lista de resultados obtidos de uma API
- Paginação simples (mostrar 5 por vez)
- Dados armazenados em cache (localStorage)
- Aviso visual de quando os dados são do cache ou da API
- Use try/catch em todos os async
- Valide os dados recebidos
- Evitar Hardcode de URLs e Strings
## Requisitos técnicos:
- HTML
- JavaScript (ES6+)
- Nenhum framework (apenas JavaScript puro)
### API sugerida: utilize qualquer API pública que utilize devolva um array de objetos para que o trabalho possa conter debounce (html com campo de busca) e paginação do resultado.
## Passo a passo:
1. Estrutura básica: crie os arquivos index.html, main.js, api.js e utils.js.
2. Interface HTML: crie uma estrutura básica com um campo de busca, lista de usuários e 
elementos de feedback.
3. utils.js: implemente as funções debounce e createElement.
4. api.js: implemente o consumo da API e o uso de localStorage com verificação de 
validade (5 minutos).
5. main.js: implemente a lógica principal com busca, paginação e controle de exibição de 
mensagens de erro ou carregamento.
## Entrega esperada:
- Código organizado e comentado
- Paginação funcional
- Campo de busca com debounce
- Uso de localStorage com verificação de validade
- Separação dos arquivos e responsabilidade entre main.js, api.js e utils.js
Como entregar:
- Compactar os arquivos em .zip
- Enviar via TEAMs da disciplina até a data limite
- Criar um repositório no GitHub e enviar o link na mesma atividade