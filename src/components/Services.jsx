import React from 'react';
import './Services.css';

function Services() {
  const listServices = [
    // --- TECNOLOGIA, SOFTWARE E AUTOMAÇÃO ---
    { icon: "bi-laptop", title: "Dev Web & Mobile", desc: "Websites premium, landing pages e plataformas totalmente responsivos sob medida." },
    { icon: "bi-code-slash", title: "Dev de Software", desc: "Criação de soluções tecnológicas personalizadas e sistemas exclusivos para sua empresa." },
    { icon: "bi-robot", title: "Automação & Chatbots", desc: "Assistentes virtuais inteligentes integrados ao WhatsApp que vendem 24h por dia." },
    { icon: "bi-cpu", title: "Sistemas de Gestão", desc: "Soluções para otimizar processos internos, fluxos de trabalho e eficiência." },
    { icon: "bi-shield-check", title: "Suporte & Monitoria", desc: "Assistência contínua e monitoramento em tempo real para total estabilidade." },

    // --- MARKETING DIGITAL & PRESENÇA ONLINE ---
    { icon: "bi-people", title: "Gestão de Redes Sociais", desc: "Criação de conteúdo estratégico e construção de presença digital forte." },
    { icon: "bi-graph-up-arrow", title: "Tráfego Pago & Ads", desc: "Anúncios estratégicos no Facebook, Instagram e Google para multiplicar vendas." },
    { icon: "bi-search", title: "SEO - Google", desc: "Melhoria do posicionamento do seu site para que o encontrem organicamente." },
    { icon: "bi-geo-alt", title: "Google Maps Local", desc: "SEO Local e ações direcionadas para atrair clientes da sua região." },
    { icon: "bi-envelope-paper", title: "E-mail Marketing", desc: "Campanhas personalizadas para nutrir leads e aumentar conversões." },

    // --- DESIGN, BRANDING & MARKETING FÍSICO ---
    { icon: "bi-palette", title: "Design & Branding", desc: "Identidades visuais de impacto, logótipos e artes que valorizam a sua marca." },
    { icon: "bi-journal-text", title: "Marketing Físico", desc: "Divulgação com cartazes, flyers, menus, placas e roll-ups profissionais." },

    // --- CONSULTORIA & CAPACITAÇÃO ---
    { icon: "bi-lightbulb", title: "Consultoria Estratégica", desc: "Análise de mercado e planeamento para a transformação digital do seu negócio." },
    { icon: "bi-mortarboard", title: "Formação & Equipas", desc: "Treinamentos especializados para capacitar equipas e desenvolver talentos." }
  ];

  return (
    <section id="servicos" className="services-section py-3">
      <div className="container-fluid px-3">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center mb-3">
          <h2 className="fw-bold text-uppercase section-title mb-1">O Que Fazemos</h2>
          <h4 className=" small mb-2">Soluções Inteligentes, Resultados Reais!</h4>
          <div className="accent-line mx-auto"></div>
        </div>

        {/* Caixa de Scroll com a Row interna reajustada para centralização perfeita */}
        <div className="services-scroll-container">
          <div className="row g-2">
            {listServices.map((service, index) => (
              /* col-12: 1 coluna em telas < 500px 
                 col-sm-6: 2 colunas a partir de 500px 
                 col-lg-4: 3 colunas em telas de computadores */
              <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <div className="service-card p-3 rounded">
                  <div className="card-flex-container">
                    <div className="icon-box d-flex align-items-center justify-content-center mx-auto">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <div className="service-content">
                      <h5 className="fw-bold mb-1 text-white service-card-title text-center">{service.title}</h5>
                      <p className="text-secondary mb-0 service-card-desc text-center">{service.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;