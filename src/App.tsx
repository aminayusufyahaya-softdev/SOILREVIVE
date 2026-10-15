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
import { DigitalSoilPassportModal } from './components/DigitalSoilPassportModal';
import { ProximalSensingScannerModal } from './components/ProximalSensingScannerModal';
import { FarmDashboard } from './components/FarmDashboard';
import { AuthModal } from './components/AuthModal';
import { authService, UserProfile, DEMO_USERS } from './services/authService';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'landing' | 'console'>('landing');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'local' | 'enterprise'>('local');
  const [selectedLang, setSelectedLang] = useState<string>('ig');

  // Authentication & session state
  const [user, setUser] = useState<UserProfile | null>(() => authService.getCurrentUser());
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [authMessage, setAuthMessage] = useState<string | undefined>(undefined);

  // Active module states
  const [climateModalOpen, setClimateModalOpen] = useState(false);
  const [passportModalOpen, setPassportModalOpen] = useState(false);
  const [scannerModalOpen, setScannerModalOpen] = useState(false);
  const [passportTargetId, setPassportTargetId] = useState<string>('NG-SOIL-2026-8849');
  const [aiChatPrompt, setAiChatPrompt] = useState<string | null>(null);

  const handleOpenAuth = (mode: 'login' | 'signup', msg?: string) => {
    setAuthMode(mode);
    setAuthMessage(msg);
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = (authenticatedUser: UserProfile) => {
    setUser(authenticatedUser);
    setAuthModalOpen(false);
    setActiveView('console');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    setActiveView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchConsole = () => {
    if (user) {
      setActiveView('console');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleOpenAuth(
        'signup',
        '🔒 Registration Required: Please register or sign in with SoilRevive to access the Farm Console Dashboard.'
      );
    }
  };

  const handleQuickDemoLogin = async () => {
    const demo = DEMO_USERS[0];
    const loggedUser = await authService.login(demo.email);
    handleAuthSuccess(loggedUser);
  };

  const handleOpenModal = (type: 'local' | 'enterprise') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleSelectLang = (lang: string) => {
    setSelectedLang(lang);
  };

  const handleOpenScanner = () => {
    if (!user) {
      handleOpenAuth(
        'signup',
        '🔒 Registration Required: Please register or sign in with SoilRevive to use the AI Proximal Soil Scanner.'
      );
      return;
    }
    setScannerModalOpen(true);
  };

  const handleOpenPassportWithId = (id?: string) => {
    if (!user) {
      handleOpenAuth(
        'signup',
        '🔒 Registration Required: Please register or sign in with SoilRevive to view and verify Digital Soil Passports.'
      );
      return;
    }
    if (id) setPassportTargetId(id);
    setPassportModalOpen(true);
  };

  const handleOpenClimateAlert = () => {
    if (!user) {
      handleOpenAuth(
        'signup',
        '🔒 Registration Required: Please register or sign in with SoilRevive to access real-time Climate & Irrigation Alerts.'
      );
      return;
    }
    setClimateModalOpen(true);
  };

  const handleOpenChatWithDiagnosis = (reportText: string) => {
    if (!user) {
      handleOpenAuth(
        'signup',
        '🔒 Registration Required: Please register or sign in with SoilRevive to access AI Diagnostics & Chat.'
      );
      return;
    }
    setAiChatPrompt(reportText);
  };

  return (
    <div className="min-h-screen bg-[#07190f] font-sans text-slate-100 selection:bg-emerald-800 selection:text-emerald-100 relative">
      {/* Top Navbar */}
      <Navbar
        onOpenModal={handleOpenModal}
        selectedLang={selectedLang}
        onSelectLang={handleSelectLang}
        onOpenClimateAlert={handleOpenClimateAlert}
        onOpenPassport={() => handleOpenPassportWithId()}
        onOpenScanner={handleOpenScanner}
        activeView={activeView}
        onViewChange={(view) => {
          if (view === 'console' && !user) {
            handleOpenAuth(
              'signup',
              '🔒 Registration Required: Please register or sign in to access the Farm Console Dashboard.'
            );
            return;
          }
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        user={user}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
      />

      {/* Main Page Structure: Single Introductory Landing Page vs Farm Dashboard */}
      <main>
        {activeView === 'landing' ? (
          <>
            {/* 1. Hero Section (Introduction to the Web Platform) */}
            <HeroSection
              onOpenModal={handleOpenModal}
              selectedLang={selectedLang}
              onOpenPassport={() => handleOpenPassportWithId()}
              onOpenClimateAlert={handleOpenClimateAlert}
              onOpenScanner={handleOpenScanner}
              onLaunchConsole={handleLaunchConsole}
              user={user}
              onOpenAuth={handleOpenAuth}
              onQuickDemoLogin={handleQuickDemoLogin}
            />

            {/* 2. Dual-Path Value Proposition */}
            <DualPathSection
              onOpenModal={handleOpenModal}
              selectedLang={selectedLang}
            />

            {/* 3. How It Works (The Technology Stack) */}
            <HowItWorksSection onOpenScanner={handleOpenScanner} />

            {/* 4. Feature Grid (Bento Box Style) */}
            <FeatureGridBento
              onOpenModal={handleOpenModal}
              onOpenClimateAlert={handleOpenClimateAlert}
              onOpenPassport={() => handleOpenPassportWithId()}
              onOpenScanner={handleOpenScanner}
            />

            {/* 5. User Journeys (Storytelling Section) */}
            <UserJourneysSection onOpenModal={handleOpenModal} />

            {/* 6. Trust & Partnerships */}
            <TrustAndPartnershipsSection />
          </>
        ) : (
          /* Interactive Farm Console Workspace (Gated by Auth) */
          <FarmDashboard
            onBackToLanding={() => {
              setActiveView('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenRegisterModal={handleOpenModal}
            onOpenPassportModal={(id) => handleOpenPassportWithId(id)}
            onOpenScannerModal={handleOpenScanner}
            onOpenClimateModal={handleOpenClimateAlert}
            selectedLang={selectedLang}
            user={user}
            onLogout={handleLogout}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        selectedLang={selectedLang}
        onSelectLang={handleSelectLang}
        onOpenModal={handleOpenModal}
      />

      {/* User Login & Sign-Up Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        onAuthSuccess={handleAuthSuccess}
        message={authMessage}
      />

      {/* Active Live Proximal Sensing & AI Diagnostic Scanner Modal (Gated) */}
      <ProximalSensingScannerModal
        isOpen={scannerModalOpen && !!user}
        onClose={() => setScannerModalOpen(false)}
        selectedLang={selectedLang}
        onOpenPassport={(id) => handleOpenPassportWithId(id)}
        onOpenChatWithReport={(report) => handleOpenChatWithDiagnosis(report)}
      />

      {/* Active Climate & Irrigation Precision Suite Modal (Gated) */}
      <ClimateIrrigationAlert
        isOpen={climateModalOpen && !!user}
        onClose={() => setClimateModalOpen(false)}
        selectedLang={selectedLang}
      />

      {/* Active Digital Soil Passport Verification Modal (Gated) */}
      <DigitalSoilPassportModal
        isOpen={passportModalOpen && !!user}
        onClose={() => setPassportModalOpen(false)}
        initialPassportId={passportTargetId}
        selectedLang={selectedLang}
      />

      {/* Global Interactive Registration / Enterprise Demo Modal */}
      <FarmerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />

      {/* Floating Multilingual AI Chat Widget (Gated) */}
      <MultilingualAiChat
        selectedLang={selectedLang}
        onSelectLang={handleSelectLang}
        onOpenScanner={handleOpenScanner}
        externalPrompt={aiChatPrompt}
        onClearExternalPrompt={() => setAiChatPrompt(null)}
        user={user}
        onRequireAuth={(msg) => handleOpenAuth('signup', msg)}
      />
    </div>
  );
};

export default App;
