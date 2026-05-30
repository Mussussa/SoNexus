import React from 'react';
import { FiHome, FiLayers, FiCpu, FiPhone } from 'react-icons/fi';
import './Navbar.css';
import logoImg from '../assets/logo.jpeg'; // Ajuste o caminho da pasta de imagens conforme o seu projeto

function Navbar() {
  return (
    <nav className="sonexus-navbar">
      <div className="sonexus-container">
        
        {/* Logótipo Ajustado para Receber Imagem */}
        <div className="logo-wrapper logotipo">
          <a className="sonexus-logo" href="#inicio">
            <img src={logoImg} alt="SoNexus Soluções" className="navbar-logo-img" />
            <span className="logo-text">SoNexus soluções<span className="logo-dot">.</span></span>
          </a>
        </div>

        {/* Links de Navegação */}
        <div className="sonexus-nav-links">
          <a className="sonexus-link active" href="#inicio">
            <FiHome className="nav-icon" /> <span>Início</span>
          </a>
          <a className="sonexus-link" href="#servicos">
            <FiLayers className="nav-icon" /> <span>Serviços</span>
          </a>
          <a className="sonexus-link" href="#metodologia">
            <FiCpu className="nav-icon" /> <span>Metodologia</span>
          </a>
          <a className="sonexus-link" href="#contactos">
            <FiPhone className="nav-icon" /> <span>Contactos</span>
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;