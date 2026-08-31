import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Tractor, ArrowRight, ShieldCheck, Radio, Cpu, Sparkles, Activity, Award, CloudSun, Database, Scan, BrainCircuit, Wifi } from 'lucide-react';

import { AI_VOICE_SAMPLES, speakAiText } from '../data/languages';

interface HeroSectionProps {
  onOpenModal: (type: 'local' | 'enterprise') => void;
  selectedLang?: string;
  onOpenPassport?: () => void;
  onOpenClimateAlert?: () => void;
  onOpenScanner?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenModal,
  selectedLang = 'en',
  onOpenPassport,
  onOpenClimateAlert,
  onOpenScanner
}) => {
  const currentVoiceSample = AI_VOICE_SAMPLES[selectedLang] || AI_VOICE_SAMPLES.en;
  const [isPlaying, setIsPlaying] = useState(false);
  const [telemetryMode, setTelemetryMode] = useState<'farmer' | 'enterprise'>('enterprise');

  const handlePlayHeroVoice = () => {
    setIsPlaying(true);
    speakAiText(currentVoiceSample.text, selectedLang);
    setTimeout(() => setIsPlaying(false), 6000);
  };

  return (
    <section className="relative min-h-[95vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Hero Visual with Data Grid Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Unsplash High Quality Image of African Farmer with Mobile Soil Probe */}
        <img
          src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?q=80&w=2000&auto=format&fit=crop"
          alt="Nigerian farmer testing soil content with proximal sensing probe"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform filter contrast-110 brightness-90"
        />

        {/* Gradient overlays for readability and Earth-Tech styling */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
        
        {/* Animated Tech Data Grid Overlay */}
        <div className="absolute inset-0 tech-grid-overlay opacity-30 mix-blend-overlay pointer-events-none" />

        {/* Floating animated soil data particles */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-soil-primary/20 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 25, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl pointer-events-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Pill Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={onOpenScanner}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 backdrop-blur-md shadow-lg cursor-pointer hover:border-emerald-400 transition-colors"
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <Scan className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-semibold tracking-wide text-emerald-200">
                  AI Proximal Soil Scanner
                </span>
              </motion.div>

              {/* Online Cloud Telemetry Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-blue-500/40 backdrop-blur-md text-xs font-semibold text-blue-300"
              >
                <Wifi className="w-3.5 h-3.5 text-blue-400" />
                <span>100% Online Cloud Synced</span>
              </motion.div>
            </div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-white"
            >
              Inspect Soil Content via{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                Proximal Sensing.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              AI-powered proximal soil sensing, optical root-zone telemetry, and verified input marketplaces for every Nigerian farmer—from smallholder plots to 50-hectare commercial farms.
            </motion.p>

            {/* Action Buttons (Visible Before Scrolling) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              {/* Primary CTA: Launch Live Proximal Scanner */}
              <button
                onClick={onOpenScanner}
                className="group flex items-center justify-center space-x-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Scan className="w-4 h-4 text-emerald-200 animate-pulse" />
                <span>Launch Soil Scanner</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* ENTERPRISE SUITE BUTTON: Immediately Visible Above the Fold */}
              <button
                onClick={() => onOpenModal('enterprise')}
                className="group flex items-center justify-center space-x-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 ring-1 ring-blue-400/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Tractor className="w-4 h-4 text-cyan-200 group-hover:rotate-6 transition-transform" />
                <span>Enterprise Suite Demo</span>
                <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-md uppercase font-black tracking-wider">
                  Live
                </span>
              </button>

              {/* Secondary CTA: Soil Passport */}
              <button
                onClick={onOpenPassport}
                className="group flex items-center justify-center space-x-2 px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-slate-500 text-slate-200 hover:bg-slate-800 font-semibold text-sm backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Award className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>Soil Passport</span>
              </button>
            </motion.div>

            {/* Trust Signals Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-5 border-t border-slate-800/80"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Scientifically Validated & Compliant Infrastructure
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-300 text-xs font-semibold">
                {/* Trust Badge 1 */}
                <div
                  onClick={onOpenScanner}
                  className="flex items-center space-x-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-emerald-500/40 transition-colors cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Backed by IITA</span>
                </div>

                {/* Trust Badge 2 */}
                <div
                  onClick={onOpenPassport}
                  className="flex items-center space-x-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-colors cursor-pointer"
                >
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span>NAQS Compliant</span>
                </div>

                {/* Trust Badge 3 */}
                <div
                  onClick={onOpenClimateAlert}
                  className="flex items-center space-x-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-blue-500/40 transition-colors cursor-pointer"
                >
                  <Radio className="w-4 h-4 text-blue-400" />
                  <span>Online Telemetry</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Soil Data & Enterprise Telemetry Card (Visible Above Fold) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-blue-500/50 p-5 sm:p-6 shadow-2xl backdrop-blur-xl transition-all"
            >
              {/* Telemetry View Switcher: Farmer vs Enterprise Suite */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center space-x-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setTelemetryMode('farmer')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      telemetryMode === 'farmer'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Plot Level
                  </button>
                  <button
                    onClick={() => setTelemetryMode('enterprise')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                      telemetryMode === 'enterprise'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Tractor className="w-3 h-3 text-cyan-300" />
                    <span>Enterprise Suite</span>
                  </button>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold font-mono">
                  ONLINE LIVE
                </span>
              </div>

              {/* Header Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <div>
                    <span className="text-xs font-bold text-slate-100 block">
                      {telemetryMode === 'enterprise' ? 'Commercial 50-Ha Grain Cluster (Zaria)' : 'Enugu Cassava Field #42'}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {telemetryMode === 'enterprise' ? 'ISOBUS Telemetry & Precision VRA Active' : 'Optical Proximal Sensing Telemetry'}
                    </span>
                  </div>
                </div>

                {telemetryMode === 'enterprise' && (
                  <button
                    onClick={() => onOpenModal('enterprise')}
                    className="text-[10px] font-bold text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Open Suite →
                  </button>
                )}
              </div>

              {/* Sensor Gauge Telemetry Grid */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block font-semibold">Nitrogen (N)</span>
                  <span className="text-lg font-bold font-display text-emerald-400">142 <span className="text-[10px] text-slate-400 font-normal">mg/kg</span></span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block font-semibold">Phosphorus (P)</span>
                  <span className="text-lg font-bold font-display text-blue-400">38 <span className="text-[10px] text-slate-400 font-normal">mg/kg</span></span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block font-semibold">Potassium (K)</span>
                  <span className="text-lg font-bold font-display text-amber-400">210 <span className="text-[10px] text-slate-400 font-normal">mg/kg</span></span>
                </div>
              </div>

              {/* Soil Health Score Bar */}
              <div className="space-y-1.5 mb-4">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    AI Soil Health Index
                  </span>
                  <span className="text-emerald-400 font-bold">88.4 / 100 (Grade A)</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '88.4%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-emerald-600 via-teal-400 to-blue-500 rounded-full"
                  />
                </div>
              </div>

              {/* PRESCRIPTIVE AI RECOMMENDATION BOX (Sleek Dark Aesthetic Logo & Styling) */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl text-xs space-y-2 relative overflow-hidden"
              >
                {/* Prescriptive AI Header with DARK LOGO */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {/* Prescriptive AI Logo in Dark Container */}
                    <div className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shadow-md">
                      <BrainCircuit className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="font-extrabold text-slate-100 text-xs tracking-tight">
                      Prescriptive AI
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 font-mono">
                      Engine v2.4
                    </span>
                  </div>

                  <button
                    onClick={handlePlayHeroVoice}
                    className={`text-[10px] px-2 py-0.5 rounded-md font-bold transition-all flex items-center gap-1 ${
                      isPlaying
                        ? 'bg-emerald-500 text-slate-950 animate-pulse'
                        : 'bg-slate-900 text-emerald-300 border border-slate-700 hover:bg-slate-800'
                    }`}
                  >
                    <span>🔊 {currentVoiceSample.badge}</span>
                  </button>
                </div>

                <p className="text-slate-300 text-[11px] leading-relaxed italic bg-slate-900/80 p-2.5 rounded-xl border border-slate-800/80">
                  "{currentVoiceSample.text}"
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
