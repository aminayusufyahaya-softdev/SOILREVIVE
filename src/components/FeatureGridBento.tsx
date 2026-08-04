import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Award,
  ShoppingCart,
  CloudSun,
  WifiOff,
  FileCheck,
  ArrowUpRight,
  Sparkles,
  CheckCircle,
  TrendingUp,
  ShieldAlert
} from 'lucide-react';

interface FeatureGridBentoProps {
  onOpenModal: (type: 'local' | 'enterprise') => void;
}

export const FeatureGridBento: React.FC<FeatureGridBentoProps> = ({ onOpenModal }) => {
  return (
    <section id="features" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-soil-primary/10 rounded-full blur-[140px] pointer-events-none" />

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
            Six interconnected modules engineered to transform raw soil data into guaranteed yields, credit access, and regulatory compliance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Instant Diagnostics (Large - 8 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-gradient-to-br from-slate-900/90 via-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-8 flex flex-col justify-between shadow-2xl group transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <Activity className="w-48 h-48 text-emerald-400" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  PROXIMAL SENSING
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Instant Diagnostics
              </h3>
              <p className="text-slate-300 text-sm max-w-lg mb-6 leading-relaxed">
                Connect low-cost Bluetooth Smart Probes to get instant N-P-K, pH, and soil moisture readings on site without laboratory waiting times.
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
            className="md:col-span-4 bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-3xl p-8 flex flex-col justify-between shadow-2xl group transition-all relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                  CREDIT SCORING
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                Digital Soil Passport
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Build an immutable historical record of land fertility to secure agricultural loans, land lease valuation, and insurance cover.
              </p>
            </div>

            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">Bank Credit Rating</span>
              </div>
              <span className="text-emerald-400 font-bold text-xs font-mono">AAA Rated</span>
            </div>
          </motion.div>

          {/* Bento Item 3: Verified Marketplace (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-8 flex flex-col justify-between shadow-2xl group transition-all relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                  ZERO COUNTERFEITS
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                Verified Input Marketplace
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Buy genuine, subsidized fertilizers and bio-stimulants directly from certified blenders with scratch-off QR authenticity codes.
              </p>
            </div>

            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-300">Subsidized Price:</span>
              <span className="text-amber-400 font-bold font-mono">₦18,500 / 50kg</span>
            </div>
          </motion.div>

          {/* Bento Item 4: Climate Resilience (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 rounded-3xl p-8 flex flex-col justify-between shadow-2xl group transition-all relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center">
                  <CloudSun className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-bold">
                  HYPER-LOCAL
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                Climate & Irrigation Alerts
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Hyper-local weather warnings integrated with soil moisture probes prevent crop loss from sudden drought or flash flooding.
              </p>
            </div>

            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-300">Rainfall Forecast:</span>
              <span className="text-teal-400 font-bold font-mono">Moderate Rain (+48h)</span>
            </div>
          </motion.div>

          {/* Bento Item 5: Offline-First & Regulatory (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 rounded-3xl p-8 flex flex-col justify-between shadow-2xl group transition-all relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
                  <WifiOff className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
                  USSD & OFFLINE
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                Offline-First Architecture
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Full functionality without active 4G data. Data automatically syncs seamlessly once agent returns to network range.
              </p>
            </div>

            <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-300">Sync Status:</span>
              <span className="text-purple-400 font-bold font-mono">100% Offline Ready</span>
            </div>
          </motion.div>

        </div>

        {/* CTA Bottom Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenModal('local')}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-soil-primary to-emerald-700 hover:from-soil-primaryHover hover:to-emerald-800 text-white font-semibold text-sm shadow-xl transition-all hover:scale-105"
          >
            <span>Explore All Capabilities for Your Farm</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
