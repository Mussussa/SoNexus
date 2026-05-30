import React from 'react';
import './ChatbotSection.css';

function ChatbotSection() {
  const features = [
    { icon: "bi-chat-square-dots", title: "Atendimento Instantâneo", desc: "Respostas imediatas sem deixar o cliente à espera." },
    { icon: "bi-whatsapp", title: "Integração Total", desc: "Conectado diretamente ao seu WhatsApp, Instagram e Website." },
    { icon: "bi-graph-up", title: "Captação de Leads", desc: "Qualifica potenciais clientes e filtra os contactos automaticamente." },
    { icon: "bi-clock-history", title: "Disponibilidade 24/7", desc: "O seu negócio aberto e vendendo mesmo durante a madrugada." }
  ];

  return (
    <div className="chatbot-wrapper p-3 d-flex flex-column justify-content-between h-100">
      
      {/* Cabeçalho do Bloco */}
      <div className="chatbot-header text-center text-md-start mb-2 flex-shrink-0">
        <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-1">
          <span className="badge-online"></span>
          <small className="text-uppercase tracking-wider text-pink fw-bold">Automação Avançada</small>
        </div>
        <h3 className="fw-bold text-white fs-4 mb-1">Chatbot Especial 24h</h3>
        <p className="  small mb-0">Atenda, conquiste e venda em piloto automático todos os dias.</p>
      </div>

      {/* Área Central: O Robô Inteligente Visual */}
      <div className="bot-display-box my-2 p-2 rounded w-100 text-center d-flex align-items-center justify-content-center gap-3 flex-shrink-0">
        <div className="bot-avatar-container flex-shrink-0">
          <i className="bi bi-robot bot-icon-pulse"></i>
        </div>
        <div className="text-start flex-grow-1">
          <div className="bot-bubble-msg p-2 rounded w-100">
            <span className="small text-white fw-medium">Olá! Como posso automatizar as vendas do seu negócio hoje? 🚀</span>
          </div>
        </div>
      </div>

      {/* Lista de Vantagens - Garante visibilidade total via Scroll Interno */}
      <div className="chatbot-features-grid flex-grow-1">
        <div className="row g-2 align-content-start">
          {features.map((feat, index) => (
            <div className="col-12 col-sm-6 d-flex" key={index}>
              <div className="feature-mini-card p-2 rounded d-flex align-items-center gap-2 w-100">
                <div className="feat-icon-box d-flex align-items-center justify-content-center flex-shrink-0">
                  <i className={`bi ${feat.icon}`}></i>
                </div>
                <div className="min-w-0 flex-grow-1">
                  {/* Removido o text-truncate para o título não ser cortado */}
                  <h6 className="fw-bold mb-0 text-white miniature-title">{feat.title}</h6>
                  <p className="text-secondary mb-0 miniature-desc">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ChatbotSection;