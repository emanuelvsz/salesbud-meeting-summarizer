# Salesbud Meeting Summarizer

Neste repositório utilizamos a arquitetura hexagonal e até o momento está implementada somente uma porta de entrada: uma interface de usuário web que utiliza o Framework [ViteJS v5](https://vitejs.dev/).

## Como executar?

Os passos abaixo assumem que você já fez/tem:

1. O clone (`git clone`) do projeto no seu computador e tem um terminal aberto na pasta baixada.

Caso você seja desenvolvedor, você precisará da ferramenta node.js instalada (caso não tenha, clique [aqui](https://nodejs.org/en/download/) para ir para a documentação de instalação). Após isso, você pode pular para [essa etapa da documentação](#para-testes-de-qualidade-qa).

Caso você seja do time de QA, você precisará da ferramenta docker instalada (caso não tenha, clique [aqui](https://www.docker.com/) para ir para a página de instalação)

### **Para Desenvolvimento**

Se você é um membro do time de desenvolvimento desse projeto, siga os passos abaixo para executar as configurações apropriadas:

1. Execute o comando `npm install` ou `yarn` para baixar as dependências do projeto;
2. Dentro da pasta `src/apps/web`, copie todo o conteúdo do arquivo `.env.example` e cole em um novo arquivo chamado `.env.development`;
3. No arquivo criado (`.env.development`) defina o valor da variável `WEB_API_URL="<url-do-backend>"`, onde `<url-do-backend>` será a URL do backend a ser utilizada no desenvolvimento (peça a URL ao seu gerente de projeto).

Pronto! O projeto está configurado. A partir de agora, toda vez que quiser iniciar o projeto basta executar o comando `npm run dev` ou `yarn dev`. Assim, o projeto estará disponível no endereço `http://localhost:3000`.
