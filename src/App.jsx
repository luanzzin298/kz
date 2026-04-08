import { useState } from 'react';
import Sobre from './componentes/Sobre';
import Instalacao from './componentes/Instalacao';
import './style.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('sobre');

  return (
    <div className="app-layout">
      
      {/* Menu Lateral Elegante */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 style={{ fontSize: '20px', margin: 0, color: '#111827' }}>
            Irmãos <span style={{ color: 'var(--primary)' }}>L&K</span>
          </h1>
          <p style={{ fontSize: '11px', color: '#6B7280', marginTop: '4px', letterSpacing: '0.5px' }}>
            SISTEMA DE GESTÃO
          </p>
        </div>

        <nav className="nav-menu">
          <button 
            className={`nav-btn ${paginaAtual === 'sobre' ? 'active' : ''}`}
            onClick={() => setPaginaAtual('sobre')}
          >
            🏢 Sobre a Empresa
          </button>
          
          <button 
            className={`nav-btn ${paginaAtual === 'instalacao' ? 'active' : ''}`}
            onClick={() => setPaginaAtual('instalacao')}
          >
            ⚙️ Instalação
          </button>
        </nav>
      </aside>

      {/* Área onde as páginas aparecem */}
      <main className="content-area">
        {paginaAtual === 'sobre' && <Sobre />}
        {paginaAtual === 'instalacao' && <Instalacao />}
      </main>

    </div>
  );
}

export default App;