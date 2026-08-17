import React from 'react';
import { motion } from 'framer-motion';
import { Users, Tractor, ArrowRight, ShieldCheck, Radio, Cpu, Sparkles, Activity } from 'lucide-react';

import { AI_VOICE_SAMPLES, speakAiText } from '../data/languages';

interface HeroSectionProps {
  onOpenModal: (type: 'local' | 'enterprise') => void;
  selectedLang?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal, selectedLang = 'en' }) => {
  const currentVoiceSample = AI_VOICE_SAMPLES[selectedLang] || AI_VOICE_SAMPLES.en;
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayHeroVoice = () => {
    setIsPlaying(true);
    speakAiText(currentVoiceSample.text, selectedLang);
    setTimeout(() => setIsPlaying(false), 6000);
  };
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Hero Visual with Data Grid Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Unsplash High Quality Image of African Farmer with Mobile Soil Probe */}
        <img
          src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?q=80&w=2000&auto=format&fit=crop"
          alt="Nigerian farmer testing soil content with proximal sensing probe"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform filter contrast-110 brightness-90"
        />

        {/* Gradient overlays for readability and Earth-Tech styling */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        
        {/* Animated Tech Data Grid Overlay */}
        <div className="absolute inset-0 tech-grid-overlay opacity-40 mix-blend-overlay pointer-events-none" />

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-lg"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-semibold tracking-wide text-emerald-200">
                Nigeria's #1 AI & Proximal Soil Sensing Platform
              </span>
            </motion.div>

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
              AI-powered proximal soil sensing, root-zone telemetry, and verified input marketplaces for every Nigerian farmer—from smallholder plots to 50-hectare commercial farms.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <button
                onClick={() => onOpenModal('local')}
                className="group flex items-center justify-center space-x-3 px-7 py-4 rounded-xl bg-gradient-to-r from-soil-primary to-emerald-700 hover:from-soil-primaryHover hover:to-emerald-800 text-white font-semibold text-sm sm:text-base shadow-xl shadow-soil-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Users className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition-transform" />
                <span>Join as Local Farmer</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => onOpenModal('enterprise')}
                className="group flex items-center justify-center space-x-3 px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-blue-500/60 text-white hover:bg-slate-800 font-semibold text-sm sm:text-base backdrop-blur-md shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Tractor className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Enterprise Precision Suite</span>
              </button>
            </motion.div>

            {/* Trust Signals Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 border-t border-slate-800/80"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Scientifically Validated & Compliant Infrastructure
              </p>
              <div className="flex flex-wrap items-center gap-6 text-slate-300 text-xs font-semibold">
                {/* Trust Badge 1 */}
                <div className="flex items-center space-x-2 bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-800 hover:border-emerald-500/40 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Backed by IITA</span>
                </div>

                {/* Trust Badge 2 */}
                <div className="flex items-center space-x-2 bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-800 hover:border-amber-500/40 transition-colors">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span>NAQS Compliant</span>
                </div>

                {/* Trust Badge 3 */}
                <div className="flex items-center space-x-2 bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-800 hover:border-blue-500/40 transition-colors">
                  <Radio className="w-4 h-4 text-blue-400" />
                  <span>Proximal Sensing Telemetry</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Soil Data Telemetry Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl"
            >
              {/* Card Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <div>
                    <span className="text-xs font-bold text-slate-200 block">
                      Live Telemetry • Enugu Cassava Field #42
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Proximal Soil Probe Bluetooth Telemetry Sync
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                  OPTIMAL FERTILITY
                </span>
              </div>

              {/* Sensor Gauge Telemetry Grid */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-center">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Nitrogen (N)</span>
                  <span className="text-xl font-bold font-display text-emerald-400">142 <span className="text-xs text-slate-400 font-normal">mg/kg</span></span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-center">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Phosphorus (P)</span>
                  <span className="text-xl font-bold font-display text-blue-400">38 <span className="text-xs text-slate-400 font-normal">mg/kg</span></span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-center">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Potassium (K)</span>
                  <span className="text-xl font-bold font-display text-amber-400">210 <span className="text-xs text-slate-400 font-normal">mg/kg</span></span>
                </div>
              </div>

              {/* Soil Health Score Bar */}
              <div className="space-y-2 mb-5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    AI Soil Health Index
                  </span>
                  <span className="text-emerald-400 font-bold">88.4 / 100 (Grade A)</span>
                </div>
                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '88.4%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-soil-primary via-emerald-400 to-blue-500 rounded-full"
                  />
                </div>
              </div>

              {/* Recommendation Callout */}
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs space-y-1.5">
                <div className="flex items-center justify-between text-emerald-300 font-semibold">
                  <span>💡 Prescriptive AI Recommendation:</span>
                  <button
                    onClick={handlePlayHeroVoice}
                    className={`text-[10px] px-2 py-0.5 rounded font-bold transition-all flex items-center gap-1 ${
                      isPlaying
                        ? 'bg-emerald-400 text-slate-950 animate-pulse'
                        : 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/40 hover:bg-emerald-500/40'
                    }`}
                  >
                    <span>🔊 {currentVoiceSample.badge}</span>
                  </button>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed italic">
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
