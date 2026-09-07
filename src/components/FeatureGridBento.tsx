import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Award,
  ShoppingCart,
  CloudSun,
  Wifi,
  FileCheck,
  ArrowUpRight,
  Sparkles,
  CheckCircle,
  TrendingUp,
  ShieldAlert,
  ChevronRight,
  Scan,
  CheckCircle2,
  Tractor
} from 'lucide-react';

interface FeatureGridBentoProps {
  onOpenModal: (type: 'local' | 'enterprise') => void;
  onOpenClimateAlert?: () => void;
  onOpenPassport?: () => void;
  onOpenScanner?: () => void;
}

export const FeatureGridBento: React.FC<FeatureGridBentoProps> = ({
  onOpenModal,
  onOpenClimateAlert,
  onOpenPassport,
  onOpenScanner
}) => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-[#142316] via-[#091e12] to-[#122216] text-white relative overflow-hidden">
      
      {/* Ambient Sandy & Green Glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(206,169,107,0.15)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Platform Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Built for Nigerian Agriculture: <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
              The Bento Feature Suite
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Interactive modules engineered to transform raw soil data into guaranteed yields, credit access, and regulatory compliance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Instant Diagnostics (Large - 8 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => onOpenScanner ? onOpenScanner() : onOpenModal('local')}
            className="md:col-span-8 bg-gradient-to-br from-slate-900/90 via-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl group transition-all relative overflow-hidden cursor-pointer hover:scale-[1.01]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <Activity className="w-48 h-48 text-emerald-400" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <Scan className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold flex items-center gap-1">
                  <span>PROXIMAL SENSING</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Instant Diagnostics Telemetry (Tap to Scan)
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-lg mb-6 leading-relaxed">
                Perform instant Proximal Scanning Sensing to get N-P-K, pH, and soil moisture readings on site without laboratory waiting times. Feeds directly into Agronomy AI.
              </p>
            </div>

            {/* Interactive Telemetry Widget */}
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Nitrogen</span>
                <span className="text-base font-bold text-emerald-400 font-display">154 mg/kg</span>
              </div>
              <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Phosphorus</span>
                <span className="text-base font-bold text-blue-400 font-display">42 mg/kg</span>
              </div>
              <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Potassium</span>
                <span className="text-base font-bold text-amber-400 font-display">210 mg/kg</span>
              </div>
              <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">pH Level</span>
                <span className="text-base font-bold text-purple-400 font-display">6.4 pH</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 2: Digital Soil Passport (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => onOpenPassport && onOpenPassport()}
            className="md:col-span-4 bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl group transition-all relative overflow-hidden cursor-pointer hover:scale-[1.01]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold flex items-center gap-1">
                  <span>CREDIT SCORING</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2 group-hover:text-blue-300 transition-colors">
                Digital Soil Passport
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Build an immutable historical record of land fertility to secure agricultural bank loans, land valuation, and insurance cover.
              </p>
            </div>

            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">Bank Credit Rating</span>
              </div>
              <span className="text-emerald-400 font-bold text-xs font-mono">AAA+ Verified</span>
            </div>
          </motion.div>

          {/* Bento Item 3: ACTIVE Verified Input Marketplace (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => onOpenModal('local')}
            className="md:col-span-4 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-amber-500/50 hover:border-amber-400 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl group transition-all relative overflow-hidden cursor-pointer hover:scale-[1.02] ring-1 ring-amber-500/20"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shadow-lg">
                  <ShoppingCart className="w-6 h-6 animate-bounce" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-black flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>MARKET ACTIVE</span>
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2 group-hover:text-amber-300 transition-colors flex items-center justify-between">
                <span>Verified Input Marketplace</span>
                <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Direct purchasing of authentic subsidized fertilizer blends (Notore, Indorama, Golden Fertilizer) with anti-counterfeit QR serial codes.
              </p>

              {/* Active Catalog Preview */}
              <div className="space-y-1.5 mb-3">
                <div className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-200 font-semibold">NPK 20-10-10 (Certified)</span>
                  <span className="text-emerald-400 font-mono font-bold">₦18,500</span>
                </div>
                <div className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-200 font-semibold">Organic Bio-Stimulant (10L)</span>
                  <span className="text-emerald-400 font-mono font-bold">₦12,000</span>
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal('local');
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-xs shadow-lg flex items-center justify-center space-x-1.5 transition-all"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Order Verified Inputs Now</span>
            </button>
          </motion.div>

          {/* Bento Item 4: Climate Resilience (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => onOpenClimateAlert && onOpenClimateAlert()}
            className="md:col-span-4 bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl group transition-all relative overflow-hidden cursor-pointer hover:scale-[1.01]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center">
                  <CloudSun className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-bold flex items-center gap-1">
                  <span>HYPER-LOCAL</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2 group-hover:text-teal-300 transition-colors">
                Climate & Irrigation Alerts
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Hyper-local weather warnings integrated with proximal soil scanning sensing prevent crop loss from sudden drought or flash flooding.
              </p>
            </div>

            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-300">NIMET Radar:</span>
              <span className="text-teal-400 font-bold font-mono">Heavy Rain Alert (+36h)</span>
            </div>
          </motion.div>

          {/* Bento Item 5: Real-Time Cloud Telemetry & ISOBUS Sync (4 Cols - 100% ONLINE) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={() => onOpenModal('enterprise')}
            className="md:col-span-4 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-blue-500/40 hover:border-blue-400 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl group transition-all relative overflow-hidden cursor-pointer hover:scale-[1.01]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <Wifi className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-black flex items-center gap-1">
                  <span>100% ONLINE SYNC</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2 group-hover:text-blue-300 transition-colors">
                Real-Time Cloud Telemetry
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                High-speed sub-second cloud synchronization for tractor ISOBUS consoles, drone flight paths, and regional commercial farm dashboards.
              </p>
            </div>

            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-300">Cloud Sync Latency:</span>
              <span className="text-emerald-400 font-bold font-mono">0.24s (Live Cloud)</span>
            </div>
          </motion.div>

        </div>

        {/* CTA Bottom Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenScanner ? onOpenScanner() : onOpenModal('local')}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-soil-primary to-emerald-700 hover:from-soil-primaryHover hover:to-emerald-800 text-white font-bold text-sm shadow-xl transition-all hover:scale-105"
          >
            <Scan className="w-4 h-4 text-emerald-300" />
            <span>Launch Live Proximal Soil Scanner</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
