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
