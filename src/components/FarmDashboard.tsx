import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sprout,
  Activity,
  ShieldCheck,
  QrCode,
  Scan,
  CloudSun,
  Tractor,
  BarChart3,
  TrendingUp,
  Layers,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Sparkles,
  Filter,
  Search,
  Download,
  AlertTriangle,
  Droplets,
  Thermometer,
  Wind,
  Check,
  Eye,
  Sliders,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  ShoppingBag,
  Volume2,
  LogOut,
  UserCheck
} from 'lucide-react';

import { PRESET_PASSPORTS, SoilPassportRecord } from './DigitalSoilPassportModal';
import { apiService, SoilScanPayload, SoilScanResult } from '../services/apiService';
import { speakAiText } from '../data/languages';
import { UserProfile } from '../services/authService';

interface FarmDashboardProps {
  onBackToLanding: () => void;
  onOpenRegisterModal: (type: 'local' | 'enterprise') => void;
  onOpenPassportModal: (passportId?: string) => void;
  onOpenScannerModal: () => void;
  onOpenClimateModal: () => void;
  selectedLang: string;
  user?: UserProfile | null;
  onLogout?: () => void;
}

interface FarmProfile {
  id: string;
  name: string;
  location: string;
  state: string;
  crop: string;
  size: string;
  passportId: string;
  healthIndex: number;
  soc: number;
  moisture: number;
  status: 'Optimal' | 'Caution' | 'Attention';
}

const FARM_PROFILES: FarmProfile[] = [
  {
    id: 'farm-1',
    name: 'Kaduna Grain & Maize Cluster #4',
    location: 'Zaria Agro Corridor',
    state: 'Kaduna State',
    crop: 'Hybrid White Maize (SAMMAZ-15)',
    size: '12.4 Hectares',
    passportId: 'NG-SOIL-2026-KANO-104',
    healthIndex: 88.5,
    soc: 2.75,
    moisture: 28.2,
    status: 'Optimal',
  },
  {
    id: 'farm-2',
    name: 'Oyo Bio-Fortified Cassava Estate',
    location: 'Iseyin Valley',
    state: 'Oyo State',
    crop: 'Pro-Vitamin A Cassava (TME-419)',
    size: '18.0 Hectares',
    passportId: 'NG-SOIL-2026-OGUN-302',
    healthIndex: 79.2,
    soc: 2.15,
    moisture: 32.0,
    status: 'Optimal',
  },
  {
    id: 'farm-3',
    name: 'Benue River Basin Yam & Soy Hub',
    location: 'Gboko Agricultural Zone',
    state: 'Benue State',
    crop: 'Export Grade White Yam',
    size: '8.5 Hectares',
    passportId: 'NG-SOIL-2026-BENUE-512',
    healthIndex: 91.0,
    soc: 3.10,
    moisture: 24.8,
    status: 'Optimal',
  },
  {
    id: 'farm-4',
    name: 'Bwari Ecological Agroforestry Plot',
    location: 'Bwari Extension Zone',
    state: 'FCT Abuja',
    crop: 'Maize & Intercropped Legumes',
    size: '5.4 Hectares',
    passportId: 'NG-SOIL-2026-8849',
    healthIndex: 84.0,
    soc: 2.80,
    moisture: 26.5,
    status: 'Optimal',
  },
];

export const FarmDashboard: React.FC<FarmDashboardProps> = ({
  onBackToLanding,
  onOpenRegisterModal,
  onOpenPassportModal,
  onOpenScannerModal,
  onOpenClimateModal,
  selectedLang,
  user,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'scanner' | 'passports' | 'climate' | 'marketplace'>('overview');
  const [selectedFarm, setSelectedFarm] = useState<FarmProfile>(FARM_PROFILES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive Live Scanner State
  const [scanCrop, setScanCrop] = useState('Hybrid White Maize (SAMMAZ-15)');
  const [scanLocation, setScanLocation] = useState('Kaduna Zaria Sector 2');
  const [scanOpticalValue, setScanOpticalValue] = useState(0.82);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<SoilScanResult | null>(null);

  const handleRunLiveScan = async () => {
    setIsScanning(true);
    setScanResult(null);
    try {
      const payload: SoilScanPayload = {
        locationName: scanLocation,
        cropTarget: scanCrop,
        opticalReflectionValue: scanOpticalValue,
        depthCm: 20,
      };
      // Simulate real-time optical sensing delay
      await new Promise((r) => setTimeout(r, 1200));
      const res = await apiService.processSoilScan(payload);
      setScanResult(res);
    } catch {
      // fallback handled inside apiService
    } finally {
      setIsScanning(false);
    }
  };

  const passportsList = Object.values(PRESET_PASSPORTS);
  const filteredPassports = passportsList.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.id.toLowerCase().includes(q) ||
      p.farmerName.toLowerCase().includes(q) ||
      p.state.toLowerCase().includes(q) ||
      p.crop.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-[#06150c] text-slate-100 pb-20 pt-20 sm:pt-24 selection:bg-emerald-700 selection:text-white">
      {/* Top Banner / Breadcrumb & View Mode Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-[#0a2315]/80 to-slate-900/90 border border-emerald-500/25 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToLanding}
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02] shadow-sm"
              title="Return to Public Website"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-0.5 transition-transform" />
              <span>Public Landing Page</span>
            </button>
            <div className="h-6 w-px bg-emerald-800/60 hidden sm:block" />
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <h1 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                  SoilRevive Precision Console
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Live Operational Hub
                  </span>
                </h1>
              </div>
              <p className="text-xs text-emerald-300/70 hidden sm:block">
                Field Telemetry • AI Optical Diagnostics • Verifiable Soil Passports • NAQS Aligned
              </p>
            </div>
          </div>

          {/* Farm Plot Switcher & Quick Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* User Profile Card & Sign Out */}
            {user && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#092213] border border-emerald-500/40 text-xs shadow-md">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-xs shadow-sm">
                  {user.name.charAt(0)}
                </div>
                <div className="text-left hidden sm:block">
                  <div className="font-bold text-white text-xs leading-tight">{user.name}</div>
                  <div className="text-[10px] text-emerald-300/80 leading-none">{user.roleTitle}</div>
                </div>
                {onLogout && (
                  <button
                    onClick={onLogout}
                    className="ml-1 p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 border border-rose-600/40 text-rose-300 hover:text-white transition-all text-xs flex items-center gap-1"
                    title="Sign Out of Farm Dashboard"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span className="hidden md:inline">Sign Out</span>
                  </button>
                )}
              </div>
            )}

            <div className="relative">
              <select
                aria-label="Select Farm Cluster"
                value={selectedFarm.id}
                onChange={(e) => {
                  const f = FARM_PROFILES.find((p) => p.id === e.target.value);
                  if (f) setSelectedFarm(f);
                }}
                className="appearance-none bg-slate-900/90 border border-emerald-500/30 text-emerald-100 text-xs sm:text-sm font-semibold rounded-xl pl-3 pr-8 py-2 focus:outline-none focus:border-emerald-400 cursor-pointer shadow-sm"
              >
                {FARM_PROFILES.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name} ({f.state})
                  </option>
                ))}
              </select>
              <ChevronRight className="w-4 h-4 text-emerald-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
            </div>

            <button
              onClick={() => onOpenRegisterModal('local')}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-emerald-950/50 hover:scale-[1.02]"
            >
              <Tractor className="w-3.5 h-3.5" />
              <span>Enroll New Plot</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin border-b border-emerald-900/40">
          {[
            { id: 'overview', label: 'Telemetry & Health Overview', icon: Activity, badge: 'Realtime' },
            { id: 'scanner', label: 'AI Soil Scanner Sandbox', icon: Scan, badge: 'Live AI' },
            { id: 'passports', label: 'Soil Passports Registry', icon: Award, badge: `${passportsList.length} Active` },
            { id: 'climate', label: 'Agro-Climate Radar', icon: CloudSun, badge: 'NiMet Sync' },
            { id: 'marketplace', label: 'Verified Inputs & Subsidies', icon: ShoppingBag, badge: 'Anti-Counterfeit' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 font-bold'
                    : 'bg-slate-900/60 hover:bg-emerald-950/50 text-slate-300 hover:text-emerald-300 border border-emerald-900/30'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-emerald-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-slate-950/20 text-slate-950'
                        : 'bg-emerald-950 text-emerald-300 border border-emerald-600/30'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Panels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {/* TAB 1: TELEMETRY & HEALTH OVERVIEW */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Top 4 KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#0e2c1a] to-[#091e12] border border-emerald-500/30 shadow-lg">
                  <div className="flex items-center justify-between text-emerald-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300/80">
                      Soil Health Index
                    </span>
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {selectedFarm.healthIndex}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">/ 100</span>
                    <span className="ml-auto text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      Grade A Prime
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-emerald-300/70 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>+4.2% improvement vs baseline</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#0e2c1a] to-[#091e12] border border-emerald-500/30 shadow-lg">
                  <div className="flex items-center justify-between text-amber-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-300/80">
                      Soil Organic Carbon (SOC)
                    </span>
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {selectedFarm.soc}%
                    </span>
                    <span className="text-xs text-amber-300">Target &gt; 2.5%</span>
                    <span className="ml-auto text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Optimal
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-amber-300/70 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Carbon Credits Eligible</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#0e2c1a] to-[#091e12] border border-emerald-500/30 shadow-lg">
                  <div className="flex items-center justify-between text-blue-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-300/80">
                      Root-Zone Moisture
                    </span>
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {selectedFarm.moisture}%
                    </span>
                    <span className="text-xs text-blue-300">Volumetric</span>
                    <span className="ml-auto text-[11px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">
                      Adequate
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-blue-300/70 flex items-center gap-1">
                    <CloudSun className="w-3.5 h-3.5 text-blue-400" />
                    <span>Rain projected in 36h</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#0e2c1a] to-[#091e12] border border-emerald-500/30 shadow-lg">
                  <div className="flex items-center justify-between text-purple-400 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-300/80">
                      Collateral Passport Value
                    </span>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">
                      ₦18.4M
                    </span>
                    <span className="text-xs text-purple-300">Certified</span>
                  </div>
                  <div className="mt-3 text-xs text-purple-300/70 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-purple-400" />
                    <span>Bank Loan Collateral Approved</span>
                  </div>
                </div>
              </div>

              {/* Main 2-Column Telemetry Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: NPK Nutrient Matrix */}
                <div className="lg:col-span-7 p-6 rounded-2xl bg-[#091c11]/80 border border-emerald-500/20 shadow-xl space-y-6">
                  <div className="flex items-center justify-between border-b border-emerald-900/40 pb-4">
                    <div>
                      <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-emerald-400" />
                        Soil Macro-Nutrients & pH Dynamic Matrix
                      </h2>
                      <p className="text-xs text-emerald-300/70">
                        Calibrated for {selectedFarm.crop} in {selectedFarm.state}
                      </p>
                    </div>
                    <button
                      onClick={() => onOpenPassportModal(selectedFarm.passportId)}
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-500/30"
                    >
                      <span>View Passport Certificate</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Nutrients Bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-emerald-200">Available Nitrogen (N)</span>
                        <span className="text-emerald-400 font-bold">168 mg/kg (Optimal - 84%)</span>
                      </div>
                      <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-emerald-900/60">
                        <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full w-[84%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-emerald-200">Available Phosphorus (P) - Bray-1</span>
                        <span className="text-emerald-400 font-bold">44 mg/kg (Optimal - 78%)</span>
                      </div>
                      <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-emerald-900/60">
                        <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-400 rounded-full w-[78%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-emerald-200">Exchangeable Potassium (K)</span>
                        <span className="text-emerald-400 font-bold">220 mg/kg (High - 92%)</span>
                      </div>
                      <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-emerald-900/60">
                        <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-300 rounded-full w-[92%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-emerald-200">Soil Reaction (pH in H₂O)</span>
                        <span className="text-amber-300 font-bold">6.4 (Ideal Crop Growth Zone: 6.0 - 6.8)</span>
                      </div>
                      <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-emerald-900/60">
                        <div className="h-full bg-gradient-to-r from-amber-600 to-emerald-400 rounded-full w-[72%]" />
                      </div>
                    </div>
                  </div>

                  {/* Secondary Micro-nutrients Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-emerald-900/40 text-center">
                      <span className="text-[10px] text-emerald-300/70 block uppercase">Zinc (Zn)</span>
                      <span className="text-sm font-bold text-white">2.4 mg/kg</span>
                      <span className="text-[10px] text-emerald-400 block font-medium">Adequate</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-emerald-900/40 text-center">
                      <span className="text-[10px] text-emerald-300/70 block uppercase">Boron (B)</span>
                      <span className="text-sm font-bold text-white">0.65 mg/kg</span>
                      <span className="text-[10px] text-emerald-400 block font-medium">Good</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-emerald-900/40 text-center">
                      <span className="text-[10px] text-emerald-300/70 block uppercase">Calcium (Ca)</span>
                      <span className="text-sm font-bold text-white">5.8 cmol/kg</span>
                      <span className="text-[10px] text-emerald-400 block font-medium">High</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-emerald-900/40 text-center">
                      <span className="text-[10px] text-emerald-300/70 block uppercase">CEC Capacity</span>
                      <span className="text-sm font-bold text-white">16.2 meq/100g</span>
                      <span className="text-[10px] text-emerald-400 block font-medium">Optimal</span>
                    </div>
                  </div>
                </div>

                {/* Right: AI Prescription & Action Card */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-[#0a2315] to-[#07190f] border border-emerald-500/30 shadow-xl space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-300">
                      <Sparkles className="w-5 h-5 text-amber-400" />
                      <h3 className="font-bold text-white text-base">
                        AI Agronomist Precision Plan
                      </h3>
                    </div>
                    <button
                      onClick={() => speakAiText("Soil organic carbon is thriving at 2.75 percent. Apply split NPK 15-15-15 within 14 days before convective rainfall.", selectedLang)}
                      className="p-1.5 rounded-lg bg-emerald-900/40 hover:bg-emerald-800 text-emerald-300"
                      title="Audio Advisory"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                    "Field telemetry indicates optimal vegetative vigor. To maximize grain weight and starch accumulation for <span className="font-semibold text-white">{selectedFarm.crop}</span>, initiate top-dressing with fortified Urea (46-0-0) prior to projected rainfall."
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <span className="font-bold text-white block">Step 1: Fertilizer Blend Prescription</span>
                        <span className="text-emerald-300/70">NPK 20-10-10 + 2Zn at 150 kg/hectare</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                      <CloudSun className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <span className="font-bold text-white block">Step 2: Weather-Synchronized Timing</span>
                        <span className="text-emerald-300/70">Apply between 06:30 - 09:30 AM before soil temperature peaks</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                      <QrCode className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <span className="font-bold text-white block">Step 3: Anti-Counterfeit Verification</span>
                        <span className="text-emerald-300/70">Scan bag QR code to unlock FMARD subsidy</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      onClick={() => setActiveTab('scanner')}
                      className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Scan className="w-4 h-4" />
                      <span>Run Optical Scan</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('marketplace')}
                      className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 font-semibold text-xs sm:text-sm border border-emerald-500/30 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Order Subsidized Inputs</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: AI SOIL SCANNER SANDBOX */}
          {activeTab === 'scanner' && (
            <motion.div
              key="scanner"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Control Panel */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0a2013] border border-emerald-500/30 shadow-xl space-y-5">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Scan className="w-5 h-5 text-emerald-400" />
                      AI Proximal Spectral Probe
                    </h2>
                    <p className="text-xs text-emerald-300/70 mt-1">
                      Simulate optical NIR reflectance analysis for instant field diagnosis.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-emerald-200 mb-1.5">
                        Target Crop Spectrum
                      </label>
                      <select
                        aria-label="Target Crop Spectrum"
                        value={scanCrop}
                        onChange={(e) => setScanCrop(e.target.value)}
                        className="w-full bg-slate-900 border border-emerald-500/30 text-white rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                      >
                        <option value="Hybrid White Maize (SAMMAZ-15)">Maize / Corn (SAMMAZ-15)</option>
                        <option value="Cassava (TME-419 Biofortified)">Cassava (TME-419)</option>
                        <option value="Export White Yam (Benue)">Export White Yam</option>
                        <option value="Sorghum / Millet (Sahel Zone)">Sorghum / Millet</option>
                        <option value="Irrigated Lowland Rice (FARO-44)">Lowland Rice (FARO-44)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-emerald-200 mb-1.5">
                        Sampling Location / Farm Grid
                      </label>
                      <input
                        type="text"
                        value={scanLocation}
                        onChange={(e) => setScanLocation(e.target.value)}
                        placeholder="e.g. Zaria Sector 2, Kaduna"
                        className="w-full bg-slate-900 border border-emerald-500/30 text-white rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold text-emerald-200 mb-1.5">
                        <span>NIR Optical Reflectance Calibration</span>
                        <span className="text-emerald-400 font-mono font-bold">
                          {(scanOpticalValue * 100).toFixed(0)}% Reflectance
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.3"
                        max="0.95"
                        step="0.01"
                        value={scanOpticalValue}
                        onChange={(e) => setScanOpticalValue(parseFloat(e.target.value))}
                        className="w-full accent-emerald-400 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-emerald-400/60 mt-1">
                        <span>0.30 (Heavily Degraded)</span>
                        <span>0.65 (Average)</span>
                        <span>0.95 (Super Fertile)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleRunLiveScan}
                      disabled={isScanning}
                      className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
                        isScanning
                          ? 'bg-emerald-900 text-emerald-300 cursor-not-allowed'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/50 hover:scale-[1.01]'
                      }`}
                    >
                      {isScanning ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-emerald-300" />
                          <span>Processing NIR Spectral Reflection...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Trigger Live Soil Diagnostic Scan</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-900/40 text-[11px] text-emerald-300/80 flex items-center justify-between">
                    <span>Need to upload raw sensor file or mobile photo?</span>
                    <button
                      onClick={onOpenScannerModal}
                      className="text-emerald-400 font-bold hover:underline"
                    >
                      Launch Camera Probe
                    </button>
                  </div>
                </div>

                {/* Live Diagnostic Output */}
                <div className="lg:col-span-7 p-6 rounded-2xl bg-[#091b11] border border-emerald-500/30 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-emerald-900/40 pb-4 mb-5">
                      <div>
                        <h3 className="font-bold text-white text-base">
                          Live Diagnostic Output
                        </h3>
                        <p className="text-xs text-emerald-300/70">
                          {scanResult ? `Scan Record ID: ${scanResult.scanId}` : 'Awaiting sensor input'}
                        </p>
                      </div>
                      {scanResult && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          {scanResult.grade}
                        </span>
                      )}
                    </div>

                    {isScanning ? (
                      <div className="py-20 flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="w-14 h-14 rounded-full border-4 border-emerald-500/30 border-t-emerald-400 animate-spin" />
                        <p className="text-sm font-semibold text-emerald-200">
                          Analyzing Spectral Bands (NIR 850nm / Red 660nm)...
                        </p>
                        <p className="text-xs text-emerald-400/60 max-w-sm">
                          Calibrating against Nigerian Soil Information System (NSIS) series
                        </p>
                      </div>
                    ) : scanResult ? (
                      <div className="space-y-5">
                        {/* Summary Score Bar */}
                        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950 via-[#0e2c1a] to-slate-900 border border-emerald-500/30 flex items-center justify-between">
                          <div>
                            <span className="text-xs text-emerald-300/80 uppercase font-semibold">
                              Calibrated Health Score
                            </span>
                            <div className="text-3xl font-extrabold text-white">
                              {scanResult.healthIndex} <span className="text-xs text-emerald-400">/ 100</span>
                            </div>
                          </div>
                          <button
                            onClick={() => onOpenPassportModal(scanResult.passportId)}
                            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow"
                          >
                            <Award className="w-4 h-4" />
                            <span>Issue Passport ({scanResult.passportId})</span>
                          </button>
                        </div>

                        {/* Nutrient 6-Box Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          <div className="p-3 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                            <span className="text-[10px] uppercase text-emerald-300/70 font-semibold block">Nitrogen (N)</span>
                            <span className="text-sm font-bold text-white">
                              {scanResult.metrics.nitrogen.value} {scanResult.metrics.nitrogen.unit}
                            </span>
                            <span className="text-[10px] text-emerald-400 block font-semibold">Optimal Range</span>
                          </div>

                          <div className="p-3 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                            <span className="text-[10px] uppercase text-emerald-300/70 font-semibold block">Phosphorus (P)</span>
                            <span className="text-sm font-bold text-white">
                              {scanResult.metrics.phosphorus.value} {scanResult.metrics.phosphorus.unit}
                            </span>
                            <span className="text-[10px] text-emerald-400 block font-semibold">Adequate</span>
                          </div>

                          <div className="p-3 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                            <span className="text-[10px] uppercase text-emerald-300/70 font-semibold block">Potassium (K)</span>
                            <span className="text-sm font-bold text-white">
                              {scanResult.metrics.potassium.value} {scanResult.metrics.potassium.unit}
                            </span>
                            <span className="text-[10px] text-emerald-400 block font-semibold">Optimal</span>
                          </div>

                          <div className="p-3 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                            <span className="text-[10px] uppercase text-emerald-300/70 font-semibold block">Soil Reaction pH</span>
                            <span className="text-sm font-bold text-white">{scanResult.metrics.ph.value}</span>
                            <span className="text-[10px] text-emerald-400 block font-semibold">Near Neutral</span>
                          </div>

                          <div className="p-3 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                            <span className="text-[10px] uppercase text-emerald-300/70 font-semibold block">Moisture Ratio</span>
                            <span className="text-sm font-bold text-white">
                              {scanResult.metrics.moisture.value}%
                            </span>
                            <span className="text-[10px] text-blue-400 block font-semibold">Field Capacity</span>
                          </div>

                          <div className="p-3 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                            <span className="text-[10px] uppercase text-emerald-300/70 font-semibold block">Organic Carbon</span>
                            <span className="text-sm font-bold text-white">
                              {scanResult.metrics.organicCarbon.value}%
                            </span>
                            <span className="text-[10px] text-amber-400 block font-semibold">High Active Matter</span>
                          </div>
                        </div>

                        {/* Prescription Note */}
                        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-emerald-100 space-y-1.5">
                          <span className="font-bold text-white block">Fertilizer Prescription:</span>
                          <p>{scanResult.recommendation.fertilizerPrescription}</p>
                          <div className="flex items-center gap-2 pt-1 text-[11px] text-emerald-400">
                            <TrendingUp className="w-3.5 h-3.5" />
                            <span>Estimated Yield Gain: +{scanResult.recommendation.estimatedYieldGainPercent}%</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="py-20 flex flex-col items-center justify-center space-y-3 text-center">
                        <Scan className="w-12 h-12 text-emerald-500/40" />
                        <h4 className="text-sm font-bold text-white">Ready for Diagnostic Scan</h4>
                        <p className="text-xs text-emerald-300/60 max-w-sm">
                          Select your crop and click "Trigger Live Soil Diagnostic Scan" on the left to evaluate soil fertility and generate an actionable agronomic prescription.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-emerald-900/40 flex items-center justify-between text-xs text-emerald-300/70">
                    <span>Algorithm: SoilRevive Bio-Spectral v2.4</span>
                    <span>Validation: IITA / NAQS Standard</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: DIGITAL SOIL PASSPORTS REGISTRY */}
          {activeTab === 'passports' && (
            <motion.div
              key="passports"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Filter / Search Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#091b11] border border-emerald-500/30">
                <div className="relative w-full sm:w-96">
                  <Search className="w-4 h-4 text-emerald-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by Passport ID, Farmer, State, or Crop..."
                    className="w-full bg-slate-900 border border-emerald-500/30 text-white rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs text-emerald-300/70 hidden md:inline">
                    Showing {filteredPassports.length} Verified Records
                  </span>
                  <button
                    onClick={() => onOpenPassportModal()}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 shadow"
                  >
                    <Award className="w-4 h-4" />
                    <span>Open Passport Modal & Generator</span>
                  </button>
                </div>
              </div>

              {/* Passports Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredPassports.map((passport) => (
                  <div
                    key={passport.id}
                    className="p-6 rounded-2xl bg-[#081d11] border border-emerald-500/25 hover:border-emerald-400/50 transition-all shadow-lg hover:shadow-emerald-950/40 space-y-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-amber-300 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30">
                            {passport.id}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            {passport.creditRating.split(' ')[0]}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-white mt-1.5">
                          {passport.farmName}
                        </h3>
                        <p className="text-xs text-emerald-300/70">
                          {passport.farmerName} • {passport.location}
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] uppercase text-emerald-300/70 font-semibold block">
                          Health Score
                        </span>
                        <span className="text-2xl font-extrabold text-emerald-400">
                          {passport.healthScore}
                          <span className="text-xs text-white">/100</span>
                        </span>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="grid grid-cols-3 gap-2 py-2 border-y border-emerald-900/40 text-xs">
                      <div>
                        <span className="text-[10px] text-emerald-300/60 uppercase block">Crop</span>
                        <span className="font-semibold text-white truncate block">{passport.crop}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-emerald-300/60 uppercase block">Acreage</span>
                        <span className="font-semibold text-white block">{passport.acreage}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-emerald-300/60 uppercase block">Loan Eligibility</span>
                        <span className="font-semibold text-purple-300 block">{passport.eligibleLoanAmount}</span>
                      </div>
                    </div>

                    {/* NPK Indicators */}
                    <div className="flex items-center justify-between text-xs text-emerald-200">
                      <span>NPK: {passport.npkStatus.nitrogen} / {passport.npkStatus.phosphorus} / {passport.npkStatus.potassium}</span>
                      <span className="text-amber-300">pH {passport.npkStatus.pH}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1.5 text-[10px] text-emerald-300/80">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>IITA & NAQS Tamper-Proof</span>
                      </div>
                      <button
                        onClick={() => onOpenPassportModal(passport.id)}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-700/60 hover:bg-emerald-600 text-white text-xs font-semibold transition-all flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Certificate</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 4: AGRO-CLIMATE RADAR */}
          {activeTab === 'climate' && (
            <motion.div
              key="climate"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-[#091e12] border border-emerald-500/30 shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-emerald-900/40 pb-4">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <CloudSun className="w-5 h-5 text-amber-400" />
                      Satellite Agro-Meteorological Radar & Soil Hydrology
                    </h2>
                    <p className="text-xs text-emerald-300/70">
                      Synchronized with Nigerian Meteorological Agency (NiMet) & Sentinel-2 Radar
                    </p>
                  </div>
                  <button
                    onClick={onOpenClimateModal}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow"
                  >
                    <Droplets className="w-4 h-4" />
                    <span>Open Detailed Radar Suite</span>
                  </button>
                </div>

                {/* 4 Weather Metric Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
                      <Thermometer className="w-4 h-4" />
                      <span>Ambient Temperature</span>
                    </div>
                    <span className="text-2xl font-bold text-white">29.4°C</span>
                    <span className="text-[10px] text-emerald-300/70 block mt-1">Normal for Season</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                    <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold mb-1">
                      <Droplets className="w-4 h-4" />
                      <span>Relative Humidity</span>
                    </div>
                    <span className="text-2xl font-bold text-white">64%</span>
                    <span className="text-[10px] text-blue-300 block mt-1">Moderate Transpiration</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                      <Wind className="w-4 h-4" />
                      <span>Evapotranspiration (ET₀)</span>
                    </div>
                    <span className="text-2xl font-bold text-white">4.8 mm/day</span>
                    <span className="text-[10px] text-emerald-300 block mt-1">Balanced Crop Water Demand</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-emerald-900/40">
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold mb-1">
                      <CloudSun className="w-4 h-4" />
                      <span>Rainfall Probability</span>
                    </div>
                    <span className="text-2xl font-bold text-white">78%</span>
                    <span className="text-[10px] text-purple-300 block mt-1">High (Next 36 Hours)</span>
                  </div>
                </div>

                {/* Radar Alert Banner */}
                <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-white block">NiMet Convective Rain Advisory:</span>
                    <p className="text-amber-200/80 mt-0.5">
                      Heavy rainfall cell forming over the Middle Belt & Northern Guinea Savannah. Suspend planned nitrogen broadcasting and delay drip irrigation cycles to prevent fertilizer runoff and soil nutrient leaching.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: VERIFIED INPUTS MARKETPLACE */}
          {activeTab === 'marketplace' && (
            <motion.div
              key="marketplace"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#091e12] border border-emerald-500/30">
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-emerald-400" />
                    Verified Anti-Counterfeit Input Hub
                  </h2>
                  <p className="text-xs text-emerald-300/70">
                    Pre-calibrated fertilizer blends with QR verification and Federal Fertilizer Subsidy Codes.
                  </p>
                </div>
                <button
                  onClick={() => onOpenRegisterModal('enterprise')}
                  className="text-xs font-bold text-emerald-300 hover:text-emerald-200 bg-emerald-950 px-3 py-1.5 rounded-xl border border-emerald-500/30"
                >
                  Bulk Agribusiness Orders
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    name: 'SoilRevive Blend-A (Maize & Cereals)',
                    type: 'Fortified NPK 20-10-10 + 2Zn + 1B',
                    rating: 'Grade A - Certified Anti-Counterfeit',
                    price: '₦22,500 / 50kg bag',
                    subsidizedPrice: '₦18,000 (with Soil Passport)',
                    vendor: 'Notore & Indorama Cluster Hub',
                    code: 'SR-NPK-MZ26',
                  },
                  {
                    name: 'RootMax Blend-B (Cassava & Tubers)',
                    type: 'High Potassium NPK 12-10-24 + 1.5Mg',
                    rating: 'IITA Calibrated for High Starch Yield',
                    price: '₦24,000 / 50kg bag',
                    subsidizedPrice: '₦19,200 (with Soil Passport)',
                    vendor: 'Golden Fertilizer Co-op Hub',
                    code: 'SR-TUBER-CS26',
                  },
                  {
                    name: 'BioCarbon Organic Soil Conditioner',
                    type: 'Microbial Humic Acid & Mycorrhizae',
                    rating: '100% Organic Carbon Regenerator',
                    price: '₦16,000 / 25kg bag',
                    subsidizedPrice: '₦12,800 (with Soil Passport)',
                    vendor: 'SoilRevive Green BioLabs Ibadan',
                    code: 'SR-BIO-ORG26',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#081d11] border border-emerald-500/20 hover:border-emerald-400/40 transition-all shadow-md space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                          {item.code}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded">
                          NAQS Approved
                        </span>
                      </div>
                      <h3 className="font-bold text-white text-base mt-2">{item.name}</h3>
                      <p className="text-xs text-emerald-300/70">{item.type}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/60 border border-emerald-900/40 text-xs">
                      <div className="flex justify-between text-slate-400 line-through text-[11px]">
                        <span>Standard Retail:</span>
                        <span>{item.price}</span>
                      </div>
                      <div className="flex justify-between font-bold text-emerald-300 text-sm mt-0.5">
                        <span>Passport Subsidized:</span>
                        <span>{item.subsidizedPrice}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-emerald-400/80 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Supplied by: {item.vendor}</span>
                    </div>

                    <button
                      onClick={() => onOpenRegisterModal('local')}
                      className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Order with Soil Passport Subsidy</span>
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
