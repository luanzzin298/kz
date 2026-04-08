import React from 'react';
import Swal from 'sweetalert2';

const Sobre = () => {

  const abrirModalFeedback = () => {
    Swal.fire({
      title: 'Enviar Feedback',
      input: 'textarea',
      inputLabel: 'Encontrou algum bug ou tem uma sugestão de melhoria?',
      inputPlaceholder: 'Digite sua mensagem para Luan e Kauã aqui...',
      inputAttributes: {
        'aria-label': 'Digite sua mensagem aqui'
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar para Engenharia',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: 'var(--primary)',
      cancelButtonColor: '#EF4444'
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        Swal.fire({
          icon: 'success',
          title: 'Feedback Enviado!',
          text: 'Obrigado! Sua mensagem foi encaminhada para nossa equipe.',
          confirmButtonColor: 'var(--primary)'
        });
      } else if (result.isConfirmed && !result.value) {
        Swal.fire({
          icon: 'error',
          title: 'Ops!',
          text: 'Você precisa digitar alguma coisa antes de enviar.',
          confirmButtonColor: 'var(--primary)'
        });
      }
    });
  };

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title">Sobre o Sistema L&K</h1>
          <p className="page-subtitle">A inteligência corporativa por trás do Mercado Irmãos L&K.</p>
        </div>
        <button className="primary-button" onClick={abrirModalFeedback} style={{ backgroundColor: '#111827' }}>
          💬 Enviar Sugestão
        </button>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Nossa História e Visão</h2>
        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>
          O <strong>Mercado Irmãos L&K</strong> foi fundado com um propósito claro: modernizar o varejo de bairro, combinando o atendimento caloroso que nossos clientes amam com a eficiência tecnológica das grandes redes. O que começou como uma pequena operação rapidamente expôs a necessidade de um controle rigoroso. Ferramentas de mercado eram lentas ou complexas demais. 
        </p>
        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>
          Foi assim que Luan e Kauã decidiram construir o <strong>Sistema L&K</strong> do zero. Uma plataforma proprietária, desenhada milímetro a milímetro para as nossas necessidades, garantindo que o caixa nunca pare, o estoque nunca fure e a gestão tenha dados em tempo real para tomada de decisões.
        </p>

        <div className="grid-cards" style={{ marginTop: '30px' }}>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Nossos Valores</h3>
            <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6' }}>
              <li><strong>Agilidade Extrema:</strong> O cliente não pode esperar na fila.</li>
              <li><strong>Precisão de Dados:</strong> Cada centavo e cada grama importam.</li>
              <li><strong>Resiliência:</strong> O sistema funciona mesmo sem internet.</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Segurança e Privacidade</h3>
            <ul style={{ color: 'var(--text-muted)', fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6' }}>
              <li>Bancos de dados criptografados localmente.</li>
              <li>Controle de acesso por níveis de usuário (Caixa, Gerente, Admin).</li>
              <li>Backups automáticos em nuvem a cada 4 horas.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Equipe de Engenharia e Stack Tecnológica</h2>
        
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '20px' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>👨‍💻 Os Fundadores & Desenvolvedores</h3>
            <div style={{ marginTop: '15px' }}>
              <p style={{ margin: '0 0 10px 0', color: 'var(--text-main)', fontSize: '15px' }}><strong>Luan (Arquitetura e Backend)</strong></p>
              <p style={{ margin: '0 0 20px 0', color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>Especialista na estruturação do banco de dados, lógica de inventário e sincronização em nuvem.</p>
              
              <p style={{ margin: '0 0 10px 0', color: 'var(--text-main)', fontSize: '15px' }}><strong>Kauã (Interface e UX/UI)</strong></p>
              <p style={{ margin: '0 0 0 0', color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6' }}>Especialista na experiência do usuário. Desenhou o Ponto de Venda para ser operado inteiramente por atalhos de teclado.</p>
            </div>
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>🛠️ Stack Oficial do Sistema</h3>
            <table className="data-table">
              <tbody>
                <tr><th>Framework Core</th><td>Electron.js v28+</td></tr>
                <tr><th>Frontend UI</th><td>React 18 + JSX + Vite</td></tr>
                <tr><th>Banco de Dados Local</th><td>SQLite3 (Alta performance offline)</td></tr>
                <tr><th>Componentes Interativos</th><td>SweetAlert2</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;