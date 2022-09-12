# Projeto App de Delivery!

## Este projeto é um desenvolvimento de uma loja online de bebidas.
- Ferramentas Utilizadas: React.js, Hooks, Express, Sequelize, JWT.

### O que foi desenvolvido:

- Login e Cadastro de Clientes.
- Rotas diferentes com autenticação para Administrador, Vendedor e Comprador.
- Manipulação da compra no carrinho, e validações de dados de entrada usando a lib JOI.
- Tela de detalhes do produto com status: Pendente, Preparando ou Entregue.
- O vendedor pode ver todos os pedidos feitos por ele, e manipular o status dos pedidos.
- O usuário administrador pode cadastrar novos Vendedores.

### Instruções de visualização do projeto

1. Clone o repositório

- `git clone git@github.com:lorenepecci/Delivery-App.git`
- Entre na pasta do repositório que você acabou de clonar
- Entre na pasta ProjectOnlineStore

2. Crie uma pasta .env com suas variáveis de ambiente (MYSQL)

- Entre na pasta back-end:
  - `cd back-end`
  - `cd src`
- Crie uma pasta .env:
  - `touch .env`
- Copie o arquivo .env.example e edite com suas credenciais MYSQL

3. Instale as dependências e inicialize o projeto em Back

- Entre na pasta back-end:
  - `cd back-end`
- Instale as dependências:
  - `npm install`
- Inicialize o projeto:
  - `npm start` (uma nova página deve abrir no seu navegador)

4. Instale as dependências e inicialize o projeto em Front

- Entre na pasta front-end:
  - `cd front-end`
- Instale as dependências:
  - `npm install`
- Inicialize o projeto:
  - `npm start` (uma nova página deve abrir no seu navegador)




