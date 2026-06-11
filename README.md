# ⚙️ Backend - Gerenciador de Tarefas (API REST)

Esta é a API RESTful desenvolvida em Node.js para alimentar o aplicativo mobile de Gerenciamento de Tarefas. O sistema realiza as operações completas de CRUD (Criar, Ler, Atualizar e Deletar) e salva os dados localmente utilizando o banco de dados SQLite.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.
- **Express**: Framework para roteamento e gerenciamento de requisições HTTP.
- **SQLite3**: Banco de dados relacional leve e sem necessidade de servidor externo.
- **CORS**: Middleware para permitir requisições de diferentes origens (aplicativo mobile).
- **UUID**: Geração de chaves primárias únicas e seguras para cada tarefa.

## 📁 Estrutura do Projeto

O projeto foi organizado com separação de responsabilidades (MVC parcial):
- `src/models/taskModel.js`: Regras de banco de dados e queries em SQL puro.
- `src/controllers/taskController.js`: Lógica de requisição e resposta (req, res).
- `src/routes/taskRoutes.js`: Definição dos endpoints da API.
- `src/database.js`: Arquivo de conexão e inicialização automática do banco de dados SQLite.
- `src/index.js`: Ponto de entrada e configuração do servidor.

## 🔌 Endpoints da API

A API responde na rota base: `http://localhost:3000/api/tasks`

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/tasks` | Retorna a lista de todas as tarefas. |
| `POST` | `/api/tasks` | Cria uma nova tarefa. Body: `{ "title": "Estudar React" }` |
| `PUT` | `/api/tasks/:id` | Atualiza uma tarefa existente pelo ID. |
| `DELETE` | `/api/tasks/:id` | Remove uma tarefa pelo ID. |

## 🚀 Como Executar o Projeto Localmente

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### 2. Instalação
Clone este repositório e acesse a pasta do projeto:
`git clone <LINK_DO_SEU_REPOSITORIO_BACKEND>`
`cd backend-tarefas`

Instale as dependências:
`npm install`

### 3. Execução
Inicie o servidor de desenvolvimento:
`npm run dev`

O servidor estará rodando na porta `3000`. O arquivo do banco de dados (`tarefas.db`) será criado automaticamente na raiz do projeto durante a primeira execução.
