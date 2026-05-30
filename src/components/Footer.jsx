import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-wrapper p-3 d-flex flex-column justify-content-between h-100">
      <div className="row g-3 align-items-center h-100">
        
        {/* Coluna 1: Identidade e Slogan */}
        <div className="col-12 col-md-4 text-center text-md-start d-flex flex-column justify-content-center">
          <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
            <i className="bi bi-infinity text-info fs-3"></i>
            <h4 className="fw-bold text-white mb-0 tracking-wider">SoNexus</h4>
          </div>
          <p className="  small mb-2 text-uppercase fw-semibold tracking-wider text-info">
            Conectamos Ideias, Criamos Soluções, Entregamos Resultados!
          </p>
          <p className="text-secondary miniature-desc mb-0 d-none d-md-block">
            Do digital ao físico, nós fazemos a conexão que transforma o seu negócio!
          </p>
        </div>

        {/* Coluna 2: Contactos Oficiais do Cartaz */}
        <div className="col-12 col-md-4">
          <div className="contact-links-box p-2 rounded">
            <h6 className="text-white fw-bold small text-uppercase mb-2 text-center text-md-start tracking-wider">
              Canais de Atendimento
            </h6>
            <div className="d-flex flex-column gap-1">
              <a href="tel:+258852896649" className="footer-link d-flex align-items-center gap-2">
                <i className="bi bi-telephone text-info"></i>
                <span>+258 852 896 649 / +258 852 896 649</span>
              </a>
              <a href="tel:+258860717318" className="footer-link d-flex align-items-center gap-2">
                <i className="bi bi-whatsapp text-success"></i>
                <span>860 717 318 / 841 008 432</span>
              </a>
              <a href="mailto:contato@sonexussolucoes.com" className="footer-link d-flex align-items-center gap-2">
                <i className="bi bi-envelope text-danger"></i>
                <span className="text-truncate">contato@sonexussolucoes.com</span>
              </a>
              <div className="footer-link d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt text-warning"></i>
                <span className="text-truncate">Munhava Centro, Beira, Moçambique</span>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2 pt-2 border-top border-secondary border-opacity-25">
              <a href="https://instagram.com/sonexus.solucoes" target="_blank" rel="noreferrer" className="social-icon-btn text-info"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon-btn text-info"><i className="bi bi-facebook"></i></a>
              <a href="http://www.sonexussolucoes.com" target="_blank" rel="noreferrer" className="social-icon-btn text-info"><i className="bi bi-globe"></i></a>
            </div>
          </div>
        </div>

        {/* Coluna 3: Mapa Dinâmico Embutido */}
        <div className="col-12 col-md-4 h-100 map-wrapper">
          <div className="map-container rounded overflow-hidden h-100 border border-secondary border-opacity-25">
            <iframe 
              title="SoNexus Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.321482937746!2d34.843603400000004!3d-19.8153406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f3b392eeeaebc07%3A0xa19f56b57956372e!2sMunhava%2C%20Beira%2C%20Mo%C3%A7ambique!5e0!3m2!1spt-PT!2s!4v1716900000000!5m2!1spt-PT!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

      </div>

      {/* Direitos Autorais Compactos */}
      <div className="text-center mt-2 pt-2 border-top border-secondary border-opacity-10">
        <p className="  mb-0 copyright-text">
          &copy; {new Date().getFullYear()} SoNexus Soluções. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default Footer;