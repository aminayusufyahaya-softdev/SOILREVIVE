import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  WifiOff,
  Mic,
  Volume2,
  Users,
  ShieldCheck,
  Map,
  Radio,
  Layers,
  Cpu,
  FileCheck,
  Play,
  Pause,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Tractor,
  Wifi,
  Link,
  RefreshCw,
  Sliders,
  Check,
  Zap,
  Activity,
  Droplets
} from 'lucide-react';

import { AI_VOICE_SAMPLES, SUPPORTED_LANGUAGES, speakAiText } from '../data/languages';

interface DualPathSectionProps {
  onOpenModal: (type: 'local' | 'enterprise') => void;
  selectedLang: string;
}

export const DualPathSection: React.FC<DualPathSectionProps> = ({
  onOpenModal,
  selectedLang
}) => {
  // Set activeTab default to 'modern' as requested by user
  const [activeTab, setActiveTab] = useState<'local' | 'modern'>('modern');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeVoiceLang, setActiveVoiceLang] = useState<string>(selectedLang || 'ig');

  // Modern Farm Tool Connectivity State
  const [connectedTools, setConnectedTools] = useState<Record<string, boolean>>({
    tractor: true,
    drone: true,
    irrigation: true,
    erp: true
  });

  const [syncingId, setSyncingId] = useState<string | null>(null);

  React.useEffect(() => {
    if (selectedLang) {
      setActiveVoiceLang(selectedLang);
    }
  }, [selectedLang]);

  const voiceSampleTexts = AI_VOICE_SAMPLES;

  const toggleAudio = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } else {
      setIsPlayingAudio(true);
      const sample = voiceSampleTexts[activeVoiceLang] || voiceSampleTexts.en;
      speakAiText(sample.text, activeVoiceLang);
      setTimeout(() => {
        setIsPlayingAudio(false);
      }, 7000);
    }
  };

  const toggleToolConnection = (toolId: string) => {
    setSyncingId(toolId);
    setTimeout(() => {
      setConnectedTools(prev => ({ ...prev, [toolId]: !prev[toolId] }));
      setSyncingId(null);
    }, 800);
  };

  return (
    <section id="dual-path" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-soil-primary/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900 border border-blue-500/40 text-xs font-bold text-blue-300 shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Dual-Path Value Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Tailored Soil Intelligence for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
              Every Nigerian Scale & Capability
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-200 font-medium">
            Whether managing a 0.5-hectare smallholder plot via voice USSD or orchestrating a 50-hectare commercial farm with connected machinery & digital tool suites.
          </p>

          {/* Interactive Toggle Switch */}
          <div className="pt-4 flex justify-center">
            <div className="bg-slate-900/90 p-2 rounded-2xl border border-slate-700 flex items-center space-x-2 shadow-2xl backdrop-blur-lg">
              <button
                onClick={() => setActiveTab('local')}
                className={`flex items-center space-x-2.5 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeTab === 'local'
                    ? 'bg-gradient-to-r from-soil-primary to-emerald-700 text-white shadow-lg shadow-soil-primary/30 ring-2 ring-emerald-400/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>Local Farmer (Voice & USSD Hub)</span>
              </button>

              <button
                onClick={() => setActiveTab('modern')}
                className={`flex items-center space-x-2.5 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeTab === 'modern'
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 text-white shadow-xl shadow-blue-600/40 ring-2 ring-blue-400/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Tractor className="w-4 h-4 text-blue-300" />
                <span>Modern Farmer (Connected Equipment Hub)</span>
                <span className="ml-1 text-[10px] bg-blue-500 text-slate-950 px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                  Active
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Card Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'local' ? (
            <motion.div
              key="local-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Info Column */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-emerald-500/40 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Smartphone className="w-64 h-64 text-emerald-400" />
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-300">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400 block">
                        Hub-and-Spoke Model
                      </span>
                      <h3 className="text-2xl font-bold font-display text-white">
                        Smallholder & Cooperative Suite
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-100 text-sm leading-relaxed mb-6 font-medium">
                    Empowering rural communities with zero internet barriers. Local Soil Champions conduct rapid proximal scanning sensing, broadcasting localized voice recommendations directly to farmers' mobile phones.
                  </p>

                  <div className="space-y-4 mb-8">
                    {/* Key Feature 1 */}
                    <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 mt-0.5">
                        <WifiOff className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Offline-First & USSD Supported (*384*55#)</h4>
                        <p className="text-xs text-slate-300 mt-0.5 font-medium">Works in zero 3G/4G coverage zones. Receive recommendations via SMS or automated interactive voice calls.</p>
                      </div>
                    </div>

                    {/* Key Feature 2 */}
                    <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 mt-0.5">
                        <Mic className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Native Voice Advice (13+ Languages & Dialects)</h4>
                        <p className="text-xs text-slate-300 mt-0.5 font-medium">AI translates soil analytics into spoken native dialect instructions in Hausa, Yoruba, Igbo, Pidgin, and more.</p>
                      </div>
                    </div>

                    {/* Key Feature 3 */}
                    <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Counterfeit-Free Subsidized Marketplace</h4>
                        <p className="text-xs text-slate-300 mt-0.5 font-medium">Direct connection to verified fertilizer blending plants with QR verification codes eliminating fake inputs.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenModal('local')}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-soil-primary to-emerald-700 hover:from-soil-primaryHover hover:to-emerald-800 text-white font-bold text-sm shadow-xl flex items-center justify-center space-x-2 transition-all"
                >
                  <Users className="w-4 h-4" />
                  <span>Join Local Farmer Network</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Interactive Column: Native Voice Player Demo */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Volume2 className="w-4 h-4" />
                      Interactive Voice Note Simulator
                    </span>
                    <span className="text-[10px] px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                      LIVE AI AUDIO
                    </span>
                  </div>

                  {/* Multilingual Language Selector Pills */}
                  <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setActiveVoiceLang(lang.code);
                          setIsPlayingAudio(false);
                        }}
                        className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center space-x-1.5 ${
                          activeVoiceLang === lang.code
                            ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                            : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Voice Player Box */}
                  <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/40 relative overflow-hidden shadow-inner">
                    <div className="flex items-center space-x-4 mb-4">
                      <button
                        onClick={toggleAudio}
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${
                          isPlayingAudio
                            ? 'bg-amber-400 text-slate-950 animate-pulse'
                            : 'bg-emerald-400 hover:bg-emerald-300 text-slate-950'
                        }`}
                        aria-label="Play Voice Advice Demo"
                      >
                        {isPlayingAudio ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
                      </button>

                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {voiceSampleTexts[activeVoiceLang]?.title}
                        </h4>
                        <p className="text-xs text-emerald-400 font-mono mt-0.5 font-bold">
                          {voiceSampleTexts[activeVoiceLang]?.audioDesc}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-200 italic leading-relaxed bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      "{voiceSampleTexts[activeVoiceLang]?.text}"
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold">IITA Verified Advice</span>
                  </div>
                  <span className="text-emerald-400 font-bold">100% Offline Compatible</span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* MODERN FARMER ACTIVE SUITE: CONNECTED MACHINERY & DIGITAL TOOLS HUB */
            <motion.div
              key="modern-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Column: Modern Farm Suite Overview & Capabilities */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-blue-500/50 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Tractor className="w-64 h-64 text-blue-400" />
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-300 shadow-md">
                      <Tractor className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-black tracking-widest text-blue-400 block">
                        Commercial Agribusiness
                      </span>
                      <h3 className="text-2xl font-bold font-display text-white">
                        Modern Farm Suite & Machinery Integration
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-100 text-sm leading-relaxed mb-6 font-medium">
                    Designed for modern agribusinesses and commercial operations (10 to 500+ hectares). Unlike local voice channels, modern farmers connect their tractors, drones, automated irrigation, and farm ERP software directly to SOILREVIVE's Proximal Scanning AI.
                  </p>

                  {/* Modern Farm Capability Highlights */}
                  <div className="space-y-4 mb-8">
                    {/* Capability 1 */}
                    <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-slate-950 border border-blue-500/30">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300 mt-0.5">
                        <Radio className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Direct Machine-to-Machine (M2M) Telemetry</h4>
                        <p className="text-xs text-slate-300 mt-0.5 font-medium">Stream high-frequency root-zone scan data straight into tractor ISOBUS consoles & automated sprayers.</p>
                      </div>
                    </div>

                    {/* Capability 2 */}
                    <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-slate-950 border border-blue-500/30">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300 mt-0.5">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Variable-Rate Application (VRA) Shapefile (.SHP) Export</h4>
                        <p className="text-xs text-slate-300 mt-0.5 font-medium">Automatically generate prescriptions for John Deere Operations Center, Trimble, and Massey Ferguson consoles.</p>
                      </div>
                    </div>

                    {/* Capability 3 */}
                    <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-slate-950 border border-blue-500/30">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300 mt-0.5">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">NAQS Export Clearance & Certified Passports</h4>
                        <p className="text-xs text-slate-300 mt-0.5 font-medium">Auto-generate compliance certificates for grain export and commercial supply contracts.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenModal('enterprise')}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm shadow-xl flex items-center justify-center space-x-2 transition-all hover:scale-[1.01]"
                >
                  <Tractor className="w-4 h-4" />
                  <span>Request Enterprise Suite & Machinery API Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Column: ACTIVE MODERN FARM MACHINERY & TOOLS CONNECTIVITY HUB */}
              <div className="lg:col-span-7 bg-slate-900 border border-blue-500/40 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  {/* Connectivity Header Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 mb-6 gap-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <Wifi className="w-4 h-4 text-emerald-400 animate-pulse" />
                        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
                          Live Farm Tech Connection Hub
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-display text-white mt-1">
                        Connected Modern Equipment & Software
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold self-start sm:self-auto flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      4 Tools Linked & Active
                    </span>
                  </div>

                  <p className="text-xs text-slate-200 mb-6 font-medium">
                    Click any modern farm tool below to test connecting, disconnecting, or syncing live field telemetry with SOILREVIVE:
                  </p>

                  {/* Modern Tools Connection Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    
                    {/* Tool 1: John Deere & Tractor ISOBUS VRA */}
                    <div
                      className={`p-4 rounded-2xl border transition-all ${
                        connectedTools.tractor
                          ? 'bg-slate-950 border-blue-500/60 text-white shadow-lg'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
                          <Tractor className="w-5 h-5" />
                        </div>
                        <button
                          onClick={() => toggleToolConnection('tractor')}
                          disabled={syncingId === 'tractor'}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                            connectedTools.tractor
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/40'
                              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                          }`}
                        >
                          {syncingId === 'tractor' ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : connectedTools.tractor ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Connected</span>
                            </>
                          ) : (
                            <>
                              <Link className="w-3.5 h-3.5" />
                              <span>Connect Tool</span>
                            </>
                          )}
                        </button>
                      </div>

                      <h4 className="text-sm font-bold text-white font-display">
                        John Deere & ISOBUS Tractors
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-1 font-medium">
                        Auto-sync Variable-Rate Prescriptions (.SHP & XML) directly to tractor cabin displays.
                      </p>

                      <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400">Protocol: ISOBUS 11783</span>
                        <span className={connectedTools.tractor ? "text-emerald-400 font-bold" : "text-slate-500"}>
                          {connectedTools.tractor ? "● Active Sync" : "○ Disconnected"}
                        </span>
                      </div>
                    </div>

                    {/* Tool 2: DJI Agriculture Drones & UAV Scanners */}
                    <div
                      className={`p-4 rounded-2xl border transition-all ${
                        connectedTools.drone
                          ? 'bg-slate-950 border-teal-500/60 text-white shadow-lg'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
                          <Radio className="w-5 h-5" />
                        </div>
                        <button
                          onClick={() => toggleToolConnection('drone')}
                          disabled={syncingId === 'drone'}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                            connectedTools.drone
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/40'
                              : 'bg-teal-600 text-white hover:bg-teal-700 shadow-md'
                          }`}
                        >
                          {syncingId === 'drone' ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : connectedTools.drone ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Connected</span>
                            </>
                          ) : (
                            <>
                              <Link className="w-3.5 h-3.5" />
                              <span>Connect Tool</span>
                            </>
                          )}
                        </button>
                      </div>

                      <h4 className="text-sm font-bold text-white font-display">
                        DJI Agras & Sentera UAV Drones
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-1 font-medium">
                        Multispectral aerial field scan integration with proximal soil root-zone telemetry.
                      </p>

                      <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400">Telemetry: RTK Flight Sync</span>
                        <span className={connectedTools.drone ? "text-emerald-400 font-bold" : "text-slate-500"}>
                          {connectedTools.drone ? "● Active Sync" : "○ Disconnected"}
                        </span>
                      </div>
                    </div>

                    {/* Tool 3: Smart Automated Drip Fertigation & Valve Solenoids */}
                    <div
                      className={`p-4 rounded-2xl border transition-all ${
                        connectedTools.irrigation
                          ? 'bg-slate-950 border-cyan-500/60 text-white shadow-lg'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                          <Droplets className="w-5 h-5" />
                        </div>
                        <button
                          onClick={() => toggleToolConnection('irrigation')}
                          disabled={syncingId === 'irrigation'}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                            connectedTools.irrigation
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/40'
                              : 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-md'
                          }`}
                        >
                          {syncingId === 'irrigation' ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : connectedTools.irrigation ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Connected</span>
                            </>
                          ) : (
                            <>
                              <Link className="w-3.5 h-3.5" />
                              <span>Connect Tool</span>
                            </>
                          )}
                        </button>
                      </div>

                      <h4 className="text-sm font-bold text-white font-display">
                        Netafim & Smart Fertigation Valves
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-1 font-medium">
                        Automated liquid fertilizer dosing valves triggered by proximal soil nitrogen scans.
                      </p>

                      <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400">Control: Solenoid Dosing</span>
                        <span className={connectedTools.irrigation ? "text-emerald-400 font-bold" : "text-slate-500"}>
                          {connectedTools.irrigation ? "● Active Sync" : "○ Disconnected"}
                        </span>
                      </div>
                    </div>

                    {/* Tool 4: Climate FieldView & Agribusiness ERP */}
                    <div
                      className={`p-4 rounded-2xl border transition-all ${
                        connectedTools.erp
                          ? 'bg-slate-950 border-purple-500/60 text-white shadow-lg'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                          <Activity className="w-5 h-5" />
                        </div>
                        <button
                          onClick={() => toggleToolConnection('erp')}
                          disabled={syncingId === 'erp'}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                            connectedTools.erp
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/40'
                              : 'bg-purple-600 text-white hover:bg-purple-700 shadow-md'
                          }`}
                        >
                          {syncingId === 'erp' ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : connectedTools.erp ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Connected</span>
                            </>
                          ) : (
                            <>
                              <Link className="w-3.5 h-3.5" />
                              <span>Connect Tool</span>
                            </>
                          )}
                        </button>
                      </div>

                      <h4 className="text-sm font-bold text-white font-display">
                        Climate FieldView & Farm ERP
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-1 font-medium">
                        Seamless reporting, yield forecasting, and NAQS soil compliance passport generation.
                      </p>

                      <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400">API: REST & GraphQL</span>
                        <span className={connectedTools.erp ? "text-emerald-400 font-bold" : "text-slate-500"}>
                          {connectedTools.erp ? "● Active Sync" : "○ Disconnected"}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Live Telemetry Log Output Box */}
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-bold text-blue-300 flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-amber-400" />
                        Live Equipment Data Stream (Zaria Farm Plot #12):
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">99.8% Sync Rate</span>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-200 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-400">&gt; John Deere Tractor VRA File:</span>
                        <span className="text-emerald-300 font-bold">SOILREVIVE_VRA_Zaria_ZoneA.SHP (Sent)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">&gt; DJI Agras Drone Spraying Dosing:</span>
                        <span className="text-blue-300 font-bold">NPK Liquid Fertigation 180kg/ha</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">&gt; NAQS Export Certification Status:</span>
                        <span className="text-teal-300 font-bold">APPROVED (IITA Soil Quality Stamp)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-blue-400" />
                    <span className="font-bold text-white">Full ISOBUS & Agribusiness API Support</span>
                  </div>
                  <span className="text-blue-300 font-extrabold">Instant Machinery Integration</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
