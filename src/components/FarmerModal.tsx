import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Tractor, CheckCircle2, Phone, Mail, MapPin, Sprout, ArrowRight, Loader2, ShieldCheck, Ticket } from 'lucide-react';
import { apiService, RegisterResponse } from '../services/apiService';

interface FarmerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'local' | 'enterprise';
}

export const FarmerModal: React.FC<FarmerModalProps> = ({
  isOpen,
  onClose,
  initialType = 'local'
}) => {
  const [activeTab, setActiveTab] = useState<'local' | 'enterprise'>(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverResult, setServerResult] = useState<RegisterResponse | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: 'Enugu',
    cropType: 'Cassava',
    farmSize: '2 hectares',
    email: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await apiService.register({
        name: formData.name,
        phone: formData.phone,
        state: formData.state,
        cropType: formData.cropType,
        farmSize: formData.farmSize,
        email: formData.email,
        type: activeTab,
      });
      setServerResult(response);
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#071c10] via-[#0d2a1a] to-[#1a2b18] border-b border-[#1f3821] text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-black/30 hover:bg-black/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sprout className="w-4 h-4 text-emerald-400" />
              <span>Get Started with SOILREVIVE</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              {activeTab === 'local' ? 'Local Farmer Community Hub' : 'Enterprise Precision Suite'}
            </h3>
            <p className="text-emerald-200/80 text-xs mt-1">
              {activeTab === 'local'
                ? 'Voice-enabled AI soil testing, free USSD alerts & genuine input access.'
                : 'Proximal soil sensing telemetry, tractor VRA API integrations & NAQS export certification.'}
            </p>

            {/* Switch Tabs with dark styling for Smallholder/Cooperative */}
            <div className="flex bg-black/40 p-1.5 rounded-xl mt-4 space-x-2 border border-emerald-900/60">
              <button
                type="button"
                onClick={() => { setActiveTab('local'); setSubmitted(false); }}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'local'
                    ? 'bg-[#06190e] text-emerald-300 border border-emerald-700 shadow-md font-bold'
                    : 'bg-[#0a1e12] text-emerald-200/90 border border-[#1b4329] hover:bg-[#12331f] hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>Smallholder / Cooperative</span>
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab('enterprise'); setSubmitted(false); }}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'enterprise'
                    ? 'bg-[#0a2333] text-cyan-200 border border-cyan-600 shadow-md font-bold'
                    : 'bg-[#071724] text-cyan-200/80 border border-[#143247] hover:bg-[#0e273b] hover:text-white'
                }`}
              >
                <Tractor className="w-3.5 h-3.5 text-cyan-400" />
                <span>Commercial Agribusiness</span>
              </button>
            </div>
          </div>

          {/* Form / Success State */}
          <div className="p-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 font-display">
                    {activeTab === 'local' ? 'Farmer Registration Verified!' : 'Enterprise Demo Request Confirmed!'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                    {serverResult?.message || (activeTab === 'local'
                      ? `Thank you ${formData.name || 'Farmer'}! Our local Community Soil Champion in ${formData.state} will reach out shortly.`
                      : `Demo request logged for ${formData.email || 'your agribusiness'}. Our Precision Agronomist will connect with your team.`)}
                  </p>
                </div>

                {serverResult?.ticketId && (
                  <div className="p-3 bg-[#081d11] rounded-xl border border-emerald-800/80 max-w-xs mx-auto text-left space-y-1">
                    <span className="text-[10px] text-emerald-300/70 font-semibold uppercase tracking-wider block">
                      Backend Reference Ticket
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-amber-300 text-sm">
                        {serverResult.ticketId}
                      </span>
                      <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700">
                        {serverResult.expectedCallbackHours}h Callback
                      </span>
                    </div>
                  </div>
                )}

                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 bg-[#092415] hover:bg-emerald-700 text-emerald-100 text-sm font-semibold rounded-xl border border-emerald-700/60 transition-all shadow-md"
                >
                  Close & Continue Exploring
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name / Agribusiness Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={activeTab === 'local' ? 'e.g. Chinedu Okafor' : 'e.g. GreenField Farms Ltd'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-soil-primary/40 focus:border-soil-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number (WhatsApp / Voice)
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="0803 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-soil-primary/40 focus:border-soil-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Location / State in Nigeria
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-soil-primary/40 focus:border-soil-primary bg-white"
                      >
                        <option value="Enugu">Enugu State</option>
                        <option value="Kaduna">Kaduna State</option>
                        <option value="Oyo">Oyo State</option>
                        <option value="Kano">Kano State</option>
                        <option value="Benue">Benue State</option>
                        <option value="Ogun">Ogun State</option>
                        <option value="Niger">Niger State</option>
                      </select>
                    </div>
                  </div>
                </div>

                {activeTab === 'enterprise' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Corporate Email
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          placeholder="agronomy@farmdomain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-soil-accent/40 focus:border-soil-accent font-medium text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Connect Modern Machinery / Digital Farm Tool
                      </label>
                      <select
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/40 bg-white font-medium text-slate-900"
                      >
                        <option value="John Deere Tractor ISOBUS VRA">🚜 John Deere & ISOBUS Tractor VRA API</option>
                        <option value="DJI Agriculture Drone Imager">🛸 DJI Agriculture Multispectral Drone</option>
                        <option value="Netafim Smart Drip Fertigation">💧 Netafim Automated Smart Drip Valves</option>
                        <option value="Climate FieldView Farm ERP">📊 Climate FieldView & Farm Management ERP</option>
                      </select>
                    </div>

                    {/* Smallholder / Cooperative Outgrower Dark Section in Enterprise Demo */}
                    <div className="p-3 rounded-xl bg-[#091f13] border border-emerald-800/80 flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#06180e] border border-emerald-700/70 flex items-center justify-center">
                          <Users className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <div>
                          <span className="font-bold text-emerald-200 block text-xs">Smallholder / Cooperative Outgrower Hub</span>
                          <span className="text-[10px] text-emerald-300/70 block">Sync rural cooperative plots into your central agribusiness dashboard</span>
                        </div>
                      </div>
                      <span className="text-[10px] bg-[#06180e] text-amber-300 border border-amber-600/50 px-2 py-0.5 rounded font-mono font-bold shrink-0">
                        Active
                      </span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Crop
                    </label>
                    <select
                      value={formData.cropType}
                      onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-soil-primary/40 bg-white"
                    >
                      <option value="Cassava">Cassava</option>
                      <option value="Maize">Maize / Corn</option>
                      <option value="Rice">Rice</option>
                      <option value="Cocoa">Cocoa</option>
                      <option value="Oil Palm">Oil Palm</option>
                      <option value="Vegetables">Vegetables</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Farm Size
                    </label>
                    <select
                      value={formData.farmSize}
                      onChange={(e) => setFormData({ ...formData, farmSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-soil-primary/40 bg-white"
                    >
                      <option value="1-5 hectares">1 - 5 hectares</option>
                      <option value="5-20 hectares">5 - 20 hectares</option>
                      <option value="20-50 hectares">20 - 50 hectares</option>
                      <option value="50+ hectares">50+ Commercial Plot</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-xl text-white font-medium text-sm transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 ${
                    activeTab === 'local'
                      ? 'bg-emerald-700 hover:bg-emerald-800 shadow-emerald-700/20'
                      : 'bg-[#0f3a54] hover:bg-[#184d6e] shadow-blue-900/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting to Backend Registry...</span>
                    </>
                  ) : (
                    <>
                      <span>{activeTab === 'local' ? 'Join Local Farmer Network' : 'Request Enterprise Demo & Sentinel Report'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  🔒 Verified by IITA Standards & NAQS Compliant. Zero spam policy.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
