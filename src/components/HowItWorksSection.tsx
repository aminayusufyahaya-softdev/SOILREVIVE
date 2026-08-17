import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Radio, BrainCircuit, ArrowRight, Play, CheckCircle2, RefreshCw, Layers, Scan } from 'lucide-react';
import { SoilPulseLoader } from './SoilPulseLoader';

export const HowItWorksSection: React.FC = () => {
  const [isSimulatingScan, setIsSimulatingScan] = useState(false);
  const [simulationComplete, setSimulationComplete] = useState(false);

  const startSimulation = () => {
    setIsSimulatingScan(true);
    setSimulationComplete(false);

    setTimeout(() => {
      setIsSimulatingScan(false);
      setSimulationComplete(true);
    }, 3000);
  };

  const steps = [
    {
      number: "01",
      title: "Proximal Soil Sensing",
      subtitle: "Root-Zone Probe Telemetry",
      description: "Low-cost Bluetooth Proximal Sensors measure Nitrogen, Phosphorus, Potassium (N-P-K), pH level, and Moisture in real-time right at the root zone (0-30cm).",
      icon: Activity,
      color: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      badge: "Root-Zone Soil Probes",
      metrics: [
        { label: "N-P-K Detection", value: "±2.5 mg/kg precision" },
        { label: "pH Range", value: "3.5 - 9.0 pH" }
      ]
    },
    {
      number: "02",
      title: "Proximal NIR Spectroscopy",
      subtitle: "Optical & Electrochemical Scan",
      description: "Near-Infrared (NIR) optical sensors inspect organic carbon content, soil electrical conductivity, and micro-nutrient density directly in field samples.",
      icon: Scan,
      color: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      badge: "Optical In-Field Sensing",
      metrics: [
        { label: "Field Accuracy", value: "99.8% Field Match" },
        { label: "Coverage", value: "Root Zone (0-30cm)" }
      ]
    },
    {
      number: "03",
      title: "Prescriptive AI",
      subtitle: "Agronomic AI Engine",
      description: "Get actionable 'Soil Health Scores' and exact custom fertilizer blend prescriptions tailored specifically to Nigerian soil classifications and crops.",
      icon: BrainCircuit,
      color: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      badge: "Custom Blends",
      metrics: [
        { label: "Yield Uplift", value: "+25% to +40%" },
        { label: "Waste Reduction", value: "-20% Input Cost" }
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      
      {/* Background Soil Grid */}
      <div className="absolute inset-0 soil-grid-bg opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-soil-primary">
            <Layers className="w-3.5 h-3.5" />
            <span>Proximal Sensing Precision Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
            From Proximal Field Sensor to AI in <br className="hidden sm:block" />
            <span className="text-soil-primary">3 Precision Steps</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Powered exclusively by Proximal Soil Sensing to inspect real-time soil content with 99.8% field accuracy.
          </p>
        </div>

        {/* 3 Steps Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-12 z-0" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative z-10 bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200 shadow-xl hover:shadow-card-hover hover:border-soil-primary/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Step Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="font-display font-extrabold text-3xl text-slate-300">
                      {step.number}
                    </span>
                  </div>

                  <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${step.accentBg} mb-3`}>
                    {step.badge}
                  </span>

                  <h3 className="text-xl font-bold font-display text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-soil-primary mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Metrics Footer */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-left">
                  {step.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-semibold block">{m.label}</span>
                      <span className="text-xs font-bold text-slate-800 font-display">{m.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Soil Diagnostic Simulator Callout */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute inset-0 tech-grid-overlay opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                <Activity className="w-4 h-4" />
                <span>Interactive Hardware Demo</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display">
                Test a Live Bluetooth Soil Scan Simulation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Experience how our Bluetooth Smart Probe captures N-P-K readings and feeds them to the prescriptive AI engine in under 3 seconds.
              </p>
            </div>

            <button
              onClick={startSimulation}
              disabled={isSimulatingScan}
              className="flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-soil-primary to-emerald-600 hover:from-soil-primaryHover hover:to-emerald-700 text-white font-semibold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shrink-0"
            >
              {isSimulatingScan ? (
                <RefreshCw className="w-5 h-5 animate-spin text-emerald-300" />
              ) : (
                <Play className="w-5 h-5 text-emerald-300 fill-current" />
              )}
              <span>{isSimulatingScan ? 'Scanning Soil...' : 'Run Diagnostics Simulation'}</span>
            </button>
          </div>

          {/* Simulation Modal / Overlay */}
          <AnimatePresence>
            {(isSimulatingScan || simulationComplete) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-8 pt-8 border-t border-slate-800"
              >
                {isSimulatingScan && (
                  <SoilPulseLoader
                    label="Bluetooth Smart Probe Scanning Soil Root Zone..."
                    sublabel="Measuring Soil Nitrates, Phosphates, Potassium & Moisture Index"
                  />
                )}

                {simulationComplete && (
                  <div className="bg-slate-950 p-6 rounded-2xl border border-emerald-500/40 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-display text-white">
                        Diagnostic Complete! Soil Health Index: 92/100
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 max-w-lg mx-auto">
                        Sample location: <span className="text-emerald-400 font-semibold">Oyo Maize Belt Plot #14</span>. Moisture: 28% • N: 160mg/kg • P: 42mg/kg • K: 220mg/kg.
                      </p>
                    </div>

                    <div className="inline-flex items-center space-x-2 bg-emerald-950 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                      <span>Prescribed Fertilizer: NPK 20-10-10 @ 180kg/ha</span>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
