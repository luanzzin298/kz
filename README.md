# 🛒 LOJA-REACT-LK

Aplicação de loja virtual desktop desenvolvida com **React + Vite + Electron**, com sistema de carrinho, autenticação e integração com banco de dados via **Supabase**.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ **React** — Interface da aplicação  
- ⚡ **Vite** — Build rápida e moderna  
- 🖥️ **Electron** — Transforma em app desktop  
- 🔥 **Supabase** — Backend e banco de dados  
- 🎨 **CSS** — Estilização  

---

## 📂 Estrutura do Projeto

```bash
LOJA-REACT-LK/
│
├── dist/                # Build do React
├── dist_electron/       # Build do Electron
├── node_modules/        # Dependências
├── out/                 # Saída de builds
├── public/              # Arquivos públicos
│
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ProductList.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── lib/
│   │   └── supabase.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── main.js
│   └── styles.css
│
├── .env
├── index.html
├── package.json
├── vite.config.js
└── README.md


✨ Funcionalidades
🛍️ Listagem de produtos
➕ Cadastro de produtos
🛒 Carrinho de compras
🔐 Sistema de autenticação
🌐 Gerenciamento global com Context API
☁️ Integração com Supabase
🖥️ Execução como aplicativo desktop


⚙️ Como Rodar o Projeto
📥 Clonar repositório
git clone https://github.com/seu-usuario/LOJA-REACT-LK.git
cd LOJA-REACT-LK
📦 Instalar dependências
npm install
🔑 Variáveis de Ambiente

Crie um arquivo .env:

VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_key
▶️ Executar
React
npm run dev
Electron
npm run electron
Build
npm run build
