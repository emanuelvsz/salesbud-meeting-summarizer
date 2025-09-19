# Salesbud Meeting Summarizer

Aplicação para resumir textos enviados pelo usuário utilizando LLMs (OpenAI). O projeto possui **frontend** em React + Ant Design e **backend** em Node.js + Express.

---

## Estrutura do Projeto

```

salesbud-meeting-summarizer/
├── backend/                  # Backend Node.js
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
├── frontend/                 # Frontend React
│   ├── src/
│   │   ├── apps/web/
│   │   │   └── .env          # Configuração do frontend
│   │   ├── components/
│   │   └── pages/
│   └── package.json
└── README.md

```

---

## Configuração do Frontend

O frontend utiliza uma variável de ambiente para saber onde está rodando o backend.

Crie o arquivo `.env` em:

```

src/apps/web/.env

```

Com o seguinte conteúdo:

```

WEB\_API\_URL=[http://localhost:4000](http://localhost:4000)

```

> ⚠️ **Importante:** O `WEB_API_URL` deve apontar para a URL do backend.

---

## Configuração do Backend

No backend, você precisa criar um arquivo `.env` na raiz do backend (`backend/.env`) com as seguintes variáveis:

```

PORT=4000
FRONTEND\_URL=[http://localhost:3000](http://localhost:3000)
OPENAI\_API\_KEY=\<SUA\_API\_KEY\_OPENAI>

````

Substitua `<SUA_API_KEY_OPENAI>` pela sua chave da OpenAI.

---

## Instalação e Execução

### Backend

1. Entre na pasta do backend:

```bash
cd backend
````

2. Instale as dependências:

```bash
npm install
```

3. Rode o servidor:

```bash
npm run dev
```

O backend estará disponível em `http://localhost:4000`.

---

### Frontend

1. Entre na pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o frontend:

```bash
npm run dev
```

O frontend estará disponível em `http://localhost:3000`.

---

## Observações

* O frontend consome a API do backend via `WEB_API_URL`.
* Certifique-se de que **backend e frontend estejam rodando** simultaneamente.
* Qualquer alteração nas variáveis de ambiente requer reiniciar o servidor correspondente.

---

## Tecnologias Utilizadas

* Frontend: React, TypeScript, Ant Design, Emotion
* Backend: Node.js, Express, OpenAI API
* Monorepo simplificado para desenvolvimento local
