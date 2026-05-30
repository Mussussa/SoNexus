import React from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
  const differentials = [
    { icon: "bi-graph-up-arrow", title: "Foco em Resultados", desc: "Estratégias totalmente orientadas para gerar crescimento escalável e retorno real sobre o seu investimento." },
    { icon: "bi-person-check", title: "Atendimento Personalizado", desc: "Entendemos a fundo o seu modelo de negócio para criar soluções exclusivas e moldadas às suas necessidades." },
    { icon: "bi-lightbulb", title: "Criatividade & Inovação", desc: "Ideias disruptivas e soluções modernas para destacar e posicionar a sua marca com autoridade no mercado." },
    { icon: "bi-shield-padded", title: "Transparência & Compromisso", desc: "Relatórios claros, objetivos e uma comunicação constante em cada etapa do desenvolvimento do seu projeto." },
    { icon: "bi-handshake", title: "Parceria de Verdade", desc: "Mais do que prestadores de serviços, somos parceiros estratégicos focados no sucesso contínuo do seu negócio." }
  ];

  return (
    <div className="why-choose-us-wrapper p-3 d-flex flex-column justify-content-between h-100">
      
      {/* Cabeçalho Otimizado */}
      <div className="text-center mb-3">
        <h3 className="fw-bold text-uppercase fs-4 mb-1 text-white">Por Que Escolher a SoNexus?</h3>
        <p className="  small mb-0">Valores fundamentais, integridade e a confiança necessária para transformar a sua visão em realidade.</p>
        <div className="gradient-line mx-auto mt-2"></div>
      </div>

      {/* Grid de Diferenciais Otimizado */}
      <div className="differentials-container">
        <div className="row g-2 justify-content-center">
          {differentials.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg" key={index}>
              <div className="diff-card p-3 rounded text-center h-100 d-flex flex-column align-items-center justify-content-center">
                
                {/* Ícone Estilizado */}
                <div className="diff-icon-wrapper mb-2 d-flex align-items-center justify-content-center">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                {/* Textos */}
                <h6 className="fw-bold text-white diff-title mb-1">{item.title}</h6>
                <p className="text-secondary mb-0 diff-desc">{item.desc}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default WhyChooseUs;