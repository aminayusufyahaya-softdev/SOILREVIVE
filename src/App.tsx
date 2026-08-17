import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DualPathSection } from './components/DualPathSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FeatureGridBento } from './components/FeatureGridBento';
import { UserJourneysSection } from './components/UserJourneysSection';
import { TrustAndPartnershipsSection } from './components/TrustAndPartnershipsSection';
import { Footer } from './components/Footer';
import { FarmerModal } from './components/FarmerModal';
import { MultilingualAiChat } from './components/MultilingualAiChat';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'local' | 'enterprise'>('local');
  const [selectedLang, setSelectedLang] = useState<string>('ig');

  const handleOpenModal = (type: 'local' | 'enterprise') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleSelectLang = (lang: string) => {
    setSelectedLang(lang);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-900 selection:bg-soil-primary selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenModal={handleOpenModal}
        selectedLang={selectedLang}
        onSelectLang={handleSelectLang}
      />

      {/* Main Page Structure */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenModal={handleOpenModal} selectedLang={selectedLang} />

        {/* 2. Dual-Path Value Proposition */}
        <DualPathSection
          onOpenModal={handleOpenModal}
          selectedLang={selectedLang}
        />

        {/* 3. How It Works (The Technology Stack) */}
        <HowItWorksSection />

        {/* 4. Feature Grid (Bento Box Style) */}
        <FeatureGridBento onOpenModal={handleOpenModal} />

        {/* 5. User Journeys (Storytelling Section) */}
        <UserJourneysSection onOpenModal={handleOpenModal} />

        {/* 6. Trust & Partnerships */}
        <TrustAndPartnershipsSection />
      </main>

      {/* 7. Footer */}
      <Footer
        selectedLang={selectedLang}
        onSelectLang={handleSelectLang}
        onOpenModal={handleOpenModal}
      />

      {/* Global Interactive Registration / Enterprise Demo Modal */}
      <FarmerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />

      {/* Floating Multilingual AI Chat Widget */}
      <MultilingualAiChat
        selectedLang={selectedLang}
        onSelectLang={handleSelectLang}
      />
    </div>
  );
};

export default App;
