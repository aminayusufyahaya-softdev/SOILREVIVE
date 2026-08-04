import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Database, Cpu } from 'lucide-react';

interface SoilPulseLoaderProps {
  label?: string;
  sublabel?: string;
}

export const SoilPulseLoader: React.FC<SoilPulseLoaderProps> = ({
  label = "Scanning Soil Composition...",
  sublabel = "Correlating Proximal Sensors with Sentinel-2 Satellite Data"
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-900/90 text-white rounded-2xl border border-soil-primary/40 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Background glowing particles */}
      <div className="absolute inset-0 tech-grid-overlay opacity-30 pointer-events-none" />
      
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer pulsing ring */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-24 h-24 rounded-full bg-soil-primary/30 border border-soil-primary/60"
        />
        
        {/* Secondary ring */}
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 rounded-full bg-blue-500/20 border border-blue-400/30"
        />

        {/* Center Icon */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-soil-primary to-emerald-700 flex items-center justify-center shadow-lg border border-emerald-400/50">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sprout className="w-8 h-8 text-emerald-200" />
          </motion.div>
        </div>
      </div>

      {/* Dynamic scan line */}
      <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4 relative">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1/2 h-full bg-gradient-to-r from-soil-primary via-emerald-400 to-blue-500 rounded-full"
        />
      </div>

      {/* Progress Indicators */}
      <div className="flex items-center space-x-6 text-xs text-slate-300 mb-2">
        <div className="flex items-center space-x-1.5">
          <Cpu className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
          <span>AI Soil Diagnostics</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <Database className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>IITA Soil Profile Sync</span>
        </div>
      </div>

      <p className="font-display font-semibold text-base text-emerald-300 text-center tracking-wide mt-1">
        {label}
      </p>
      <p className="text-xs text-slate-400 text-center mt-1 max-w-xs">
        {sublabel}
      </p>
    </div>
  );
};
