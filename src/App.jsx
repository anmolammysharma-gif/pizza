import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import MenuModal from './components/MenuModal';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileAppNavBar from './components/MobileAppNavBar';
import WhatsAppCTA from './components/WhatsAppCTA';

export default function App() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [initialMenuTab, setInitialMenuTab] = useState(0);

  const handleOpenMenuModal = (tabIndex = 0) => {
    setInitialMenuTab(tabIndex);
    setMenuModalOpen(true);
  };

  const handleCloseMenuModal = () => {
    setMenuModalOpen(false);
  };

  return (
    <div className="app-layout">
      {/* 1. Header */}
      <Header onOpenMenuModal={handleOpenMenuModal} />

      <main>
        {/* 2. Hero */}
        <Hero onOpenMenuModal={handleOpenMenuModal} />

        {/* 3. Menu */}
        <Menu onOpenMenuModal={handleOpenMenuModal} />

        {/* 4. About */}
        <About />

        {/* 5. Gallery */}
        <Gallery />

        {/* 6. Contact + Location */}
        <Contact />
      </main>

      {/* 7. Footer */}
      <Footer onOpenMenuModal={handleOpenMenuModal} />

      {/* Interactive Full Menu Modal */}
      <MenuModal
        isOpen={menuModalOpen}
        onClose={handleCloseMenuModal}
        initialTab={initialMenuTab}
      />

      {/* Floating WhatsApp CTA */}
      <WhatsAppCTA />

      {/* Mobile App Bottom Navigation Bar */}
      <MobileAppNavBar onOpenMenuModal={handleOpenMenuModal} />
    </div>
  );
}
