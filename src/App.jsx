import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ChatbotSection from './components/ChatbotSection';
import Methodology from './components/Methodology';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="site-grid-container">
      {/* 1. Cabeçalho / Header */}
      <header className="grid-section header-section">
        
        <Navbar/>
      </header>

      {/* 2. Seção Hero */}
      <section className="grid-section hero-section pt-5" id='inicio'>
        
        <Hero/>
      </section>

      {/* 3. Seção "O Que Fazemos" */}
      <section className="grid-section o-que-fazemos-section">
        <Services/>
      </section>

      {/* 4. Seção "Nossos Serviços" */}


      {/* 5. Seção Especial Chatbot */}
      <section className="grid-section chatbot-section">
        <ChatbotSection/>
      </section>

      {/* 6. Seção Metodologia */}
      <section className="grid-section servicos-section ">
        <Methodology />
      </section>

      {/* 7. Seção "Por que escolher a SoNexus" */}
      <section className="grid-section diferenciais-section">
        <WhyChooseUs />
      </section>

      {/* 8. Rodapé / Footer */}
      <footer className="grid-section footer-section">
        <Footer />
      </footer>
    </div>
  );
}

export default App;