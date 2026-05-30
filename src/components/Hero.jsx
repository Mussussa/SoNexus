import React from 'react';
import "./Hero.css";

function Hero() {
  return (
    <div id="sonexusHeroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
      <div className="carousel-inner heroo">
        
        {/* Slide 1: Posicionamento Principal */}
        <div className="carousel-item active">
          <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop" className="d-block w-100 hero-img" alt="SoNexus Tecnologia" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="caption-overlay p-4 rounded text-center">
              <h1 className="fw-bold text-uppercase brand-title">SoNexus Soluções</h1>
              <p className="lead fs-4 subtitle-text">Conectamos ideias, criamos soluções, entregamos resultados.</p>
              <a href="#servicos" className="btn btn-sonexus-premium btn-lg mt-2 fw-semibold">Nossos Serviços</a>
            </div>
          </div>
        </div>

        {/* Slide 2: Promessa de Valor */}
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" className="d-block w-100 hero-img" alt="Soluções Inteligentes" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="caption-overlay p-4 rounded text-center">
              <h2 className="fw-bold text-uppercase section-title">Soluções Inteligentes</h2>
              <p className="lead fs-4 subtitle-text">A sua visão. A nossa solução. O sucesso é o nosso objetivo!</p>
              <a href="#contacto" className="btn btn-sonexus-premium btn-lg mt-2 fw-semibold">Fale Connosco</a>
            </div>
          </div>
        </div>

        {/* Slide 3: Automação & Chatbot */}
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" className="d-block w-100 hero-img" alt="Automação e Chatbot Inteligente" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="caption-overlay p-4 rounded text-center">
              <h2 className="fw-bold text-uppercase section-title">Automação & Chatbot 24h</h2>
              <p className="lead fs-4 subtitle-text">Atenda, conquiste e venda 24 horas por dia com assistentes virtuais inteligentes.</p>
              <a href="https://wa.me/258852896649" target="_blank" rel="noreferrer" className="btn btn-sonexus-whatsapp btn-lg mt-2 fw-semibold">
                <i className="bi bi-whatsapp me-2"></i> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Controlos de Navegação */}
      <button className="carousel-control-prev" type="button" data-bs-target="#sonexusHeroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#sonexusHeroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
}

export default Hero;