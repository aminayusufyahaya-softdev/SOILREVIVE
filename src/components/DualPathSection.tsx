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
  Satellite,
  Layers,
  Cpu,
  FileCheck,
  Play,
  Pause,
  CheckCircle2,
  Sparkles,
  ArrowRight
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
  const [activeTab, setActiveTab] = useState<'local' | 'modern'>('local');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeVoiceLang, setActiveVoiceLang] = useState<string>(selectedLang || 'ig');

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

  return (
    <section id="dual-path" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-soil-primary/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dual-Path Value Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Tailored Soil Intelligence for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
              Every Nigerian Scale & Capability
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Whether managing a 0.5-hectare smallholder plot via feature phone or orchestrating a 50-hectare commercial farm with autonomous machinery.
          </p>

          {/* Interactive Toggle Switch */}
          <div className="pt-4 flex justify-center">
            <div className="bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 flex items-center space-x-2 shadow-2xl backdrop-blur-lg">
              <button
                onClick={() => setActiveTab('local')}
                className={`flex items-center space-x-2.5 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                  activeTab === 'local'
                    ? 'bg-gradient-to-r from-soil-primary to-emerald-700 text-white shadow-lg shadow-soil-primary/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Local Farmer (Hub-and-Spoke)</span>
              </button>

              <button
                onClick={() => setActiveTab('modern')}
                className={`flex items-center space-x-2.5 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                  activeTab === 'modern'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Satellite className="w-4 h-4" />
                <span>Modern Farmer (Precision Suite)</span>
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
              <div className="lg:col-span-6 bg-slate-900/80 border border-emerald-500/30 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Smartphone className="w-64 h-64 text-emerald-500" />
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 block">
                        Hub-and-Spoke Model
                      </span>
                      <h3 className="text-2xl font-bold font-display text-white">
                        Smallholder & Cooperative Suite
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Empowering rural communities with zero internet barriers. Local Soil Champions conduct rapid Bluetooth diagnostic scans, broadcasting localized voice recommendations directly to farmers' mobile phones.
                  </p>

                  <div className="space-y-4 mb-8">
                    {/* Key Feature 1 */}
                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 mt-0.5">
                        <WifiOff className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Offline-First & USSD Supported (*384*55#)</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Works in zero 3G/4G coverage zones. Receive recommendations via SMS or automated interactive voice calls.</p>
                      </div>
                    </div>

                    {/* Key Feature 2 */}
                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 mt-0.5">
                        <Mic className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Native Voice Advice (Hausa, Yoruba, Igbo)</h4>
                        <p className="text-xs text-slate-400 mt-0.5">AI translates soil analytics into spoken native dialect instructions so literacy is never a barrier.</p>
                      </div>
                    </div>

                    {/* Key Feature 3 */}
                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Counterfeit-Free Subsidized Marketplace</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Direct connection to verified fertilizer blending plants with QR verification codes eliminating fake inputs.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenModal('local')}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-soil-primary to-emerald-700 hover:from-soil-primaryHover hover:to-emerald-800 text-white font-semibold text-sm shadow-xl flex items-center justify-center space-x-2 transition-all"
                >
                  <Users className="w-4 h-4" />
                  <span>Join Local Farmer Network</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Interactive Column: Native Voice Player Demo */}
              <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Volume2 className="w-4 h-4" />
                      Interactive Voice Note Simulator
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
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
                        className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 flex items-center space-x-1.5 ${
                          activeVoiceLang === lang.code
                            ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Voice Player Box */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-emerald-500/40 relative overflow-hidden shadow-inner">
                    <div className="flex items-center space-x-4 mb-4">
                      <button
                        onClick={toggleAudio}
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${
                          isPlayingAudio
                            ? 'bg-amber-500 text-slate-950 animate-pulse'
                            : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                        }`}
                        aria-label="Play Voice Advice Demo"
                      >
                        {isPlayingAudio ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
                      </button>

                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {voiceSampleTexts[activeVoiceLang]?.title}
                        </h4>
                        <p className="text-xs text-emerald-400 font-mono mt-0.5">
                          {voiceSampleTexts[activeVoiceLang]?.audioDesc}
                        </p>
                      </div>
                    </div>

                    {/* Audio Wave Visualizer */}
                    <div className="flex items-center justify-between space-x-1 h-8 my-4 bg-slate-900 px-4 rounded-xl border border-slate-800">
                      {[40, 75, 30, 90, 60, 100, 45, 80, 50, 95, 35, 70, 40, 85, 60, 30, 90, 50].map((h, i) => (
                        <motion.div
                          key={i}
                          animate={isPlayingAudio ? { height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] } : { height: '20%' }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.05 }}
                          className={`w-1.5 rounded-full ${isPlayingAudio ? 'bg-emerald-400' : 'bg-slate-700'}`}
                        />
                      ))}
                    </div>

                    <p className="text-xs text-slate-300 font-serif italic border-l-2 border-emerald-500 pl-3 py-1">
                      {voiceSampleTexts[activeVoiceLang]?.text}
                    </p>
                  </div>
                </div>

                {/* Local Champion Info */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span>3,400+ Verified Community Soil Champions in 18 States</span>
                  </div>
                  <span className="text-emerald-400 font-bold">100% Verified</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="modern-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Info Column */}
              <div className="lg:col-span-6 bg-slate-900/80 border border-blue-500/30 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Satellite className="w-64 h-64 text-blue-500" />
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                      <Satellite className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-blue-400 block">
                        Precision Suite
                      </span>
                      <h3 className="text-2xl font-bold font-display text-white">
                        Commercial & Agribusiness Engine
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Built for large-scale operations (10 to 500+ hectares). Seamlessly blend Sentinel-2 multi-spectral satellite telemetry with real-time ground soil probes to map spatial fertility variations down to 10-meter resolution.
                  </p>

                  <div className="space-y-4 mb-8">
                    {/* Key Feature 1 */}
                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 mt-0.5">
                        <Map className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Sentinel-2 NDVI & Soil Organic Carbon Heatmaps</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Monitor crop vigor, nitrogen stress, and moisture retention daily across whole farm perimeters.</p>
                      </div>
                    </div>

                    {/* Key Feature 2 */}
                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 mt-0.5">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Variable-Rate Application (VRA) Maps & Tractor API</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Export shapefiles (.SHP) and ISOBUS XML directly to John Deere & Massey Ferguson tractors to cut fertilizer costs by up to 25%.</p>
                      </div>
                    </div>

                    {/* Key Feature 3 */}
                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 mt-0.5">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">NAQS Export & EU Deforestation Compliance Reporting</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Auto-generate verified soil health passports required for export clearance and carbon credit trading.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenModal('enterprise')}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm shadow-xl flex items-center justify-center space-x-2 transition-all"
                >
                  <Tractor className="w-4 h-4" />
                  <span>Request Enterprise Precision Suite Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Interactive Column: Satellite NDVI Heatmap Simulator */}
              <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                      <Satellite className="w-4 h-4" />
                      Live NDVI & VRA Heatmap Telemetry
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
                      SENTINEL-2 L2A SYNC
                    </span>
                  </div>

                  {/* Heatmap Visualizer Box */}
                  <div className="p-5 rounded-2xl bg-slate-950 border border-blue-500/40 relative overflow-hidden shadow-inner space-y-4">
                    
                    {/* Simulated Satellite Heatmap Grid */}
                    <div className="relative h-48 w-full rounded-xl overflow-hidden border border-slate-800 grid grid-cols-6 grid-rows-4 gap-1 p-1 bg-slate-900">
                      {/* Grid cells with color variation */}
                      {[
                        'bg-emerald-600', 'bg-emerald-500', 'bg-emerald-600', 'bg-yellow-500', 'bg-red-500', 'bg-emerald-500',
                        'bg-emerald-500', 'bg-emerald-600', 'bg-yellow-500', 'bg-yellow-600', 'bg-red-500', 'bg-emerald-600',
                        'bg-emerald-600', 'bg-emerald-600', 'bg-emerald-500', 'bg-emerald-500', 'bg-yellow-500', 'bg-emerald-500',
                        'bg-emerald-500', 'bg-emerald-600', 'bg-emerald-600', 'bg-emerald-600', 'bg-emerald-500', 'bg-emerald-600',
                      ].map((colorClass, idx) => (
                        <div
                          key={idx}
                          className={`${colorClass} opacity-85 hover:opacity-100 transition-opacity rounded-sm relative group cursor-pointer flex items-center justify-center`}
                        >
                          <span className="opacity-0 group-hover:opacity-100 text-[9px] font-mono text-slate-950 bg-white/90 px-1 rounded font-bold transition-opacity">
                            #{idx + 1}
                          </span>
                        </div>
                      ))}
                      
                      {/* Scan Sweep overlay */}
                      <motion.div
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-x-0 h-8 bg-gradient-to-b from-blue-500/0 via-blue-400/30 to-blue-500/0 pointer-events-none"
                      />
                    </div>

                    {/* Legend */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          <span>Optimal (NDVI &gt; 0.7)</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                          <span>Moderate Deficient</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                          <span>Severe K Stress</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Tractor VRA Export File:</span>
                        <span className="text-blue-300 font-mono font-semibold">SOILREVIVE_VRA_Kaduna_Plot04.SHP</span>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 font-semibold text-[10px]">
                        ISOBUS Ready
                      </span>
                    </div>

                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-blue-400" />
                    <span>Integrates with John Deere Operations Center & Climate FieldView</span>
                  </div>
                  <span className="text-blue-400 font-bold">API v2.4 Active</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
