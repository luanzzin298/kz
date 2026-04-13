import React from 'react';
import Swal from 'sweetalert2';

const Instalacao = () => {

  const iniciarDownload = () => {
    Swal.fire({
      title: 'Preparando Download',
      html: 'Redirecionando para o servidor seguro...<br/>Por favor, aguarde...',
      timer: 2000,
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    }).then((result) => {
      // Quando o timer terminar, ele executa esta ação:
      if (result.dismiss === Swal.DismissReason.timer) {
        
        // 🔥 LINK ATUALIZADO AQUI
    window.open('https://drive.google.com/uc?export=download&id=1phuIEC24mjEJEFs1z_v9TX33MiIgdJt3', '_blank');
    
        // Mostra o alerta de sucesso atualizado
        Swal.fire({
          icon: 'info',
          title: 'Página Aberta!',
          text: 'Uma nova aba do Google Drive foi aberta. Clique no botão de Download lá para baixar o instalador.',
          confirmButtonColor: '#16A34A',
          confirmButtonText: 'Entendido'
        });
      }
    });
  };

  return (
    <div className="fade-in">
      <h1 className="page-title">Manual de Implantação e Instalação</h1>
      <p className="page-subtitle">Instruções técnicas para setup dos terminais de caixa e servidores locais.</p>

      {/* Área de Download com SweetAlert2 conectada ao Google Drive */}
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }}>
        <div>
          <h2 style={{ marginTop: 0, marginBottom: '8px', color: '#166534' }}>
            Versão de Produção Atual <span className="badge" style={{ backgroundColor: '#DCFCE7', color: '#166534' }}>v1.2.4</span>
          </h2>
          <p style={{ margin: 0, color: '#15803D', fontSize: '14px' }}>
            Lançada em 15 de Abril de 2026. Sistema testado e homologado para terminais de operação intensiva.
          </p>
        </div>
        <button 
          className="primary-button" 
          style={{ backgroundColor: '#16A34A' }} 
          onClick={iniciarDownload}
        >
          <span style={{ fontSize: '20px' }}>⬇️</span> Download LK-Setup.exe
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
        
        {/* Coluna da Esquerda */}
        <div>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Roteiro de Instalação (Software)</h2>
            <div className="step-card">
              <div className="step-number">1</div>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Preparação do Windows</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  Certifique-se de que o Windows Update está em dia. Desative temporariamente o SmartScreen do Windows Defender se ele bloquear o instalador desconhecido.
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Execução Silenciosa</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  Execute o <code>LK-Setup.exe</code>. O Electron fará a instalação na pasta <code>AppData/Local/LK_Sistema</code>. Nenhum reinício é necessário.
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Criação do Banco Local</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  Ao abrir pela primeira vez, o sistema criará o arquivo <code>database.sqlite</code>. Aguarde a tela de "Sincronização Inicial de Catálogo" chegar a 100%.
                </p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Autenticação do Terminal</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  Insira o Token da Loja (fornecido por Luan) para vincular este computador à rede principal do Mercado Irmãos L&K.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>Requisitos de Hardware</h2>
            <table className="data-table">
              <tbody>
                <tr><th>Sistema Operacional</th><td>Windows 10 Pro ou 11 (64-bits)</td></tr>
                <tr><th>Processador</th><td>Intel Core i3 8ª Ger. / AMD Ryzen 3</td></tr>
                <tr><th>Memória RAM</th><td>Mínimo 4GB (Recomendado 8GB)</td></tr>
                <tr><th>Armazenamento</th><td>SSD NVMe com 5GB livres</td></tr>
                <tr><th>Rede</th><td>Ethernet Cabeada 100/1000 Mbps</td></tr>
                <tr><th>Monitor</th><td>Resolução mínima de 1366x768</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Coluna da Direita */}
        <div>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Setup de Periféricos (Hardware)</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ border: '1px solid var(--border)', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 5px 0' }}>📠 Impressoras Térmicas (NFC-e)</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  Modelos homologados: Epson TM-T20X, Bematech MP-4200, Elgin i9. Instale os drivers de spooler originais da fabricante.
                </p>
              </div>
              <div style={{ border: '1px solid var(--border)', padding: '15px', borderRadius: '8px' }}>
                <h4 style={{ margin: '0 0 5px 0' }}>🔫 Leitores de Código de Barras</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>
                  Qualquer leitor Plug-and-Play USB. Configure o leitor manual para enviar o comando <strong>"ENTER"</strong> após cada leitura.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>Troubleshooting Avançado</h2>
            <div className="faq-item">
              <h3 className="faq-question">O banco de dados corrompeu após queda de energia.</h3>
              <p className="faq-answer">
                O sistema possui auto-recovery. Vá na pasta do sistema, apague o arquivo <code>database.sqlite-shm</code> e <code>-wal</code> e abra como Administrador.
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--primary)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 10px 0', color: 'var(--text-main)' }}>Precisa de Ajuda Técnica?</h3>
            <p style={{ margin: '0 0 15px 0', color: 'var(--text-muted)', fontSize: '14px' }}>
              Apenas caixas autorizados podem solicitar suporte avançado.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <span style={{ backgroundColor: '#F3F4F6', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' }}>Ramal: 400</span>
              <span style={{ backgroundColor: '#F3F4F6', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', fontSize: '14px' }}>suporte@irmaoslk.local</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instalacao;