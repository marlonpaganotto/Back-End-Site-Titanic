# Projeto Backend em Node.js

Este é o backend de um projeto desenvolvido com Node.js, Prisma e MongoDB Atlas. O objetivo deste repositório é fornecer as APIs necessárias para a aplicação. Abaixo estão as instruções para configurar e rodar o projeto localmente.

## 🚀 Tecnologias Utilizadas
- **Node.js**
- **Express**
- **Prisma**
- **MongoDB Atlas**

## ⚙️ Configuração do Ambiente

Certifique-se de ter o seguinte instalado na sua máquina:
1. **Node.js** (v16 ou superior)
2. **NPM** ou **Yarn**
3. **MongoDB Atlas** (ou outro serviço de banco de dados compatível com Prisma/MongoDB)

### Instalação
1. Clone o repositório para sua máquina local.
   - Instale as dependências do projeto:
npm install
 ou
yarn

2.  Configure as variáveis de ambiente criando o arquivo .env:
 -  DATABASE_URL="SuaURL"
 - SECRET_KEY=sua-chave-secreta-aqui (esse é o padrão)
   
3.  Execute as migrações do Prisma:
- npx prisma generate


### Inicie o servidor:
npm run dev
ou
yarn dev

### Notas
Certifique-se de ter configurado corretamente o arquivo .env com sua URL de conexão ao banco de dados antes de iniciar o servidor. Se encontrar problemas ou bugs, fique à vontade para abrir uma issue.