import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Volume2, ShoppingCart, CheckCircle2, TrendingUp, Cpu, Award, ArrowRight, Quote } from 'lucide-react';

interface UserJourneysSectionProps {
  onOpenModal: (type: 'local' | 'enterprise') => void;
}

export const UserJourneysSection: React.FC<UserJourneysSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="stories" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 tech-grid-overlay opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400">
            <Quote className="w-3.5 h-3.5" />
            <span>Real Impact Across Nigeria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            User Journeys: From Soil Scans to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
              Guaranteed Farm Profits
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Discover how smallholders and enterprise managers unlock precision agronomy tailored to their localized farming realities.
          </p>
        </div>

        {/* 2 Story Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Story 1: Chinedu (Local Cassava Farmer in Enugu) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div>
              {/* Header Avatar & Profile Info */}
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                  alt="Chinedu Okafor - Smallholder Cassava Farmer"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-400 shadow-md"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold font-display text-white">Chinedu Okafor</h3>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                      SMALLHOLDER
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center space-x-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>2.5 Hectares Cassava Farm • Nsukka, Enugu State</span>
                  </p>
                </div>
              </div>

              {/* Story Narrative Timeline */}
              <div className="space-y-4 mb-8">
                
                {/* Step 1 */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Rapid Community Test</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Chinedu tests his cassava plot via a local SOILREVIVE Community Champion using proximal soil scanning sensing.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                      Igbo Voice Note Received
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 italic">
                      "He receives an automated voice note in Igbo recommending exact NPK 15-15-15 dosage prior to planting."
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" />
                      Authentic Input Purchase
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      He buys genuine subsidized fertilizer directly via USSD code, delivered to his village agent with 0% counterfeit risk.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Impact Metric Callout */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] font-semibold uppercase">Harvest Result</span>
                <span className="text-emerald-300 font-bold text-sm">+34% Cassava Yield Increase</span>
              </div>
              <button
                onClick={() => onOpenModal('local')}
                className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
              >
                Join Like Chinedu
              </button>
            </div>
          </motion.div>

          {/* Story 2: Amina (Commercial Farm Manager in Kaduna) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-blue-500/30 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div>
              {/* Header Avatar & Profile Info */}
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                  alt="Amina Bello - Commercial Farm Manager"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-400 shadow-md"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold font-display text-white">Amina Bello</h3>
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">
                      ENTERPRISE MANAGER
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center space-x-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>45 Hectares Maize & Soy • Zaria, Kaduna State</span>
                  </p>
                </div>
              </div>

              {/* Story Narrative Timeline */}
              <div className="space-y-4 mb-8">
                
                {/* Step 1 */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Proximal Sensing Telemetry Scan</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Amina views a high-precision root-zone Potassium deficiency telemetry map of her 45-hectare plot on her tablet via Proximal Soil Sensors.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-blue-400" />
                      Tractor VRA Map Upload
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 italic">
                      "She exports the Variable-Rate Application (.SHP) file directly into her tractor's onboard spreader computer."
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                      Cost Savings & NAQS Export Clearance
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Saves 22% on total fertilizer expenditure while obtaining NAQS compliance certificate for grain export.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Impact Metric Callout */}
            <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] font-semibold uppercase">Cost & Efficiency Gain</span>
                <span className="text-blue-300 font-bold text-sm">22% Savings (₦3.4M saved/season)</span>
              </div>
              <button
                onClick={() => onOpenModal('enterprise')}
                className="px-3 py-1.5 rounded-lg bg-blue-500 text-white font-bold text-xs hover:bg-blue-400 transition-colors"
              >
                Demo Enterprise
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
