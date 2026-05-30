import React from 'react';
import './Methodology.css';

function Methodology() {
  const steps = [
    { num: "01", icon: "bi-search", title: "Análise", desc: "Entendemos a fundo o seu modelo de negócio e o comportamento do mercado." },
    { num: "02", icon: "bi-clipboard-check", title: "Planeamento", desc: "Criamos estratégias exclusivas e personalizadas para os seus objetivos." },
    { num: "03", icon: "bi-rocket-takeoff", title: "Execução", desc: "Colocamos o plano em prática com as melhores tecnologias e ferramentas." },
    { num: "04", icon: "bi-graph-up-arrow", title: "Acompanhamento", desc: "Monitorizamos métricas e ajustamos campanhas para garantir a máxima performance." },
    { num: "05", icon: "bi-trophy", title: "Crescimento", desc: "O seu negócio escala de forma contínua, sustentável e com resultados reais." }
  ];

  return (
    <div className="methodology-wrapper p-3 d-flex flex-column justify-content-between h-100">
      
      {/* Cabeçalho */}
      <div className="text-center mb-3">
        <h3 className="fw-bold text-uppercase fs-4 mb-1 text-white">Estratégia que Gera Resultados</h3>
        <p className="  small mb-0">Do Digital ao Físico, transformamos os seus desafios em grandes oportunidades através do nosso ecossistema passo a passo.</p>
        <div className="methodology-line mx-auto mt-2"></div>
      </div>

      {/* Grid Iterativo do Fluxo */}
      <div className="steps-container">
        <div className="row g-2 justify-content-center">
          {steps.map((step, index) => (
            <div className="col-12 col-md-4 col-lg" key={index}>
              <div className="step-card p-3 rounded h-100 text-center position-relative">
                
                {/* Indicador Numérico Flutuante */}
                <span className="step-number">{step.num}</span>
                
                {/* Ícone */}
                <div className="step-icon-box mx-auto mb-2 d-flex align-items-center justify-content-center">
                  <i className={`bi ${step.icon}`}></i>
                </div>

                {/* Título e Texto */}
                <h5 className="fw-bold text-white step-title mb-1">{step.title}</h5>
                <p className="text-secondary mb-0 step-desc">{step.desc}</p>

                {/* Seta indicativa invisível no último elemento */}
                {index < steps.length - 1 && (
                  <div className="step-arrow d-none d-lg-block">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Methodology;