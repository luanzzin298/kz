# React + Vite

🛒 LOJA-REACT-LK

Aplicação de loja virtual desenvolvida com React + Vite + Electron, com sistema de carrinho, autenticação e integração com banco de dados via Supabase.

🚀 Tecnologias Utilizadas
⚛️ React
⚡ Vite
🖥️ Electron (app desktop)
🔥 Supabase (backend / banco de dados)
🎨 CSS
📂 Estrutura do Projeto
LOJA-REACT-LK/
│
├── dist/                # Build do React
├── dist_electron/       # Build do Electron
├── node_modules/        # Dependências
├── out/                 # Saída de builds
├── public/              # Arquivos públicos
│
├── src/
│   ├── components/      # Componentes da aplicação
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ProductList.jsx
│   │
│   ├── context/         # Context API
│   │   └── CartContext.jsx
│   │
│   ├── lib/             # Integrações externas
│   │   └── supabase.js
│   │
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Entrada do React
│   ├── main.js          # Entrada do Electron
│   └── styles.css       # Estilos globais
│
├── .env                 # Variáveis de ambiente
├── index.html
├── package.json
├── vite.config.js
└── README.md
✨ Funcionalidades
🛍️ Listagem de produtos
➕ Cadastro de produtos
🛒 Carrinho de compras
🔐 Sistema de login
🔄 Gerenciamento global de estado com Context API
☁️ Integração com Supabase
🖥️ Execução como aplicativo desktop (Electron)
