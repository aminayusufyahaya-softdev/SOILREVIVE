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
import { ClimateIrrigationAlert } from './components/ClimateIrrigationAlert';
import { OfflineArchitectureBar } from './components/OfflineArchitectureBar';
import { DigitalSoilPassportModal } from './components/DigitalSoilPassportModal';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'local' | 'enterprise'>('local');
  const [selectedLang, setSelectedLang] = useState<string>('ig');

  // Active module states
  const [climateModalOpen, setClimateModalOpen] = useState(false);
  const [passportModalOpen, setPassportModalOpen] = useState(false);

  const handleOpenModal = (type: 'local' | 'enterprise') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleSelectLang = (lang: string) => {
    setSelectedLang(lang);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-900 selection:bg-soil-primary selection:text-white relative">
      {/* Top Navbar */}
      <Navbar
        onOpenModal={handleOpenModal}
        selectedLang={selectedLang}
        onSelectLang={handleSelectLang}
        onOpenClimateAlert={() => setClimateModalOpen(true)}
        onOpenPassport={() => setPassportModalOpen(true)}
      />

      {/* Main Page Structure */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenModal={handleOpenModal}
          selectedLang={selectedLang}
          onOpenPassport={() => setPassportModalOpen(true)}
          onOpenClimateAlert={() => setClimateModalOpen(true)}
        />

        {/* 2. Dual-Path Value Proposition */}
        <DualPathSection
          onOpenModal={handleOpenModal}
          selectedLang={selectedLang}
        />

        {/* 3. How It Works (The Technology Stack) */}
        <HowItWorksSection />

        {/* 4. Feature Grid (Bento Box Style) */}
        <FeatureGridBento
          onOpenModal={handleOpenModal}
          onOpenClimateAlert={() => setClimateModalOpen(true)}
          onOpenPassport={() => setPassportModalOpen(true)}
        />

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

      {/* Active Global Offline-First Architecture Bar & USSD Simulator */}
      <OfflineArchitectureBar
        selectedLang={selectedLang}
      />

      {/* Active Climate & Irrigation Precision Suite Modal */}
      <ClimateIrrigationAlert
        isOpen={climateModalOpen}
        onClose={() => setClimateModalOpen(false)}
        selectedLang={selectedLang}
      />

      {/* Active Digital Soil Passport Verification Modal */}
      <DigitalSoilPassportModal
        isOpen={passportModalOpen}
        onClose={() => setPassportModalOpen(false)}
        selectedLang={selectedLang}
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
