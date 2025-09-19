# Meeting Summarizer

Este projeto permite **resumir o conteúdo de arquivos de texto** utilizando um modelo LLM da OpenAI. O front-end em React/Ant Design permite upload de arquivos `.txt` e exibe os resultados em markdown, enquanto o back-end em Node.js/Express realiza a chamada à API da OpenAI.

---

## Estrutura do Projeto

```
backend/
├── src/
│   ├── config/
│   │   └── env.ts                # Configurações de ambiente
│   ├── context/
│   │   └── context.txt           # Contexto do LLM
│   ├── controllers/
│   │   └── message.controller.ts
│   ├── routes/
│   │   └── message.routes.ts
│   ├── services/
│   │   └── llm.service.ts
│   ├── utils/
│   │   └── logger.ts
│   └── index.ts                  # Entrada do backend
frontend/
├── src/
│   ├── components/
│   │   ├── file-upload-section.tsx
│   │   └── result-card-section.tsx
│   ├── hooks/
│   │   └── use-send-message.ts
│   └── pages/
│       └── home.tsx
.env                              # Variáveis de ambiente
package.json
tsconfig.json
```

---

## Requisitos

* Node.js >= 20
* npm >= 9
* Conta OpenAI com API Key

---

## Configuração do Backend

1. Acesse a pasta `backend`:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do backend:

```
PORT=4000
FRONTEND_URL=http://localhost:3000
OPENAI_API_KEY=sua_openai_api_key_aqui
```

4. Estrutura de contexto do LLM:

* O arquivo `src/context/context.txt` contém instruções de **prompt engineering** e contexto para o modelo gerar melhores resumos.
* Exemplo de conteúdo:

```
Você é um assistente especializado em resumir textos técnicos de forma clara e concisa, sempre destacando pontos importantes e mantendo uma linguagem objetiva.
```

5. Execute o backend:

```bash
npm run dev
```

* O backend ficará disponível em: `http://localhost:4000`

---

## Configuração do Frontend

1. Acesse a pasta `frontend`:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do frontend (se necessário):

```
VITE_BACKEND_URL=http://localhost:4000
```

4. Execute o frontend:

```bash
npm run dev
```

* O frontend ficará disponível em `http://localhost:3000`

---

## Fluxo de Uso

1. Abra o navegador em `http://localhost:3000`
2. Faça upload de um arquivo `.txt` contendo o texto que deseja resumir.
3. O conteúdo será enviado ao backend, processado pelo LLM, e o resultado será exibido no painel direito.
4. É possível copiar ou limpar o resultado usando os botões disponíveis.

---

## Principais Funcionalidades

* Upload de arquivos `.txt` com validação de tamanho (<2MB)
* Exibição do resultado em Markdown com scroll e formatação
* Botões de copiar e limpar conteúdo
* LLM com contexto customizado via arquivo `context.txt`
* Backend estruturado em `controllers`, `routes` e `services`

---

## Estrutura dos Componentes

### Frontend

* `FileUploadSection`: Componente para upload de arquivos com feedback visual e mensagens de erro.
* `ResultCardSection`: Componente que mostra o resultado do LLM. Quando não há texto, exibe `Empty` centralizado.

### Backend

* `llm.service.ts`: Serviço que encapsula a chamada à OpenAI.
* `message.controller.ts`: Controla os endpoints `/send` e `/summarize`.
* `routes/message.routes.ts`: Define as rotas do backend.

---

## Scripts Disponíveis

**Backend:**

* `npm run dev` → Inicia o backend em modo desenvolvimento (nodemon + ts-node)

**Frontend:**

* `npm run dev` → Inicia o frontend com Vite

---

## Variáveis de Ambiente

| Variável           | Descrição                   |
| ------------------ | --------------------------- |
| `PORT`             | Porta do backend            |
| `FRONTEND_URL`     | URL do frontend (para CORS) |
| `OPENAI_API_KEY`   | Chave da OpenAI             |
| `VITE_BACKEND_URL` | URL do backend (frontend)   |

---

## Observações

* Certifique-se de que o `.env` esteja carregado antes de iniciar o backend.
* O LLM foi configurado para usar **GPT-4o-mini**, mas pode ser alterado em `llm.service.ts`.
* O contexto em `context.txt` é importante para gerar resumos mais precisos e objetivos.

---

