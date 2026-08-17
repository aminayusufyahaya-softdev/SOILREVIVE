import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Tractor, CheckCircle2, Phone, Mail, MapPin, Sprout, ArrowRight } from 'lucide-react';

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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    state: 'Enugu',
    cropType: 'Cassava',
    farmSize: '2 hectares',
    email: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto reset after 4s
    }, 4000);
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
          <div className="bg-gradient-to-r from-soil-primary to-emerald-900 text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sprout className="w-4 h-4" />
              <span>Get Started with SOILREVIVE</span>
            </div>
            <h3 className="text-2xl font-bold font-display">
              {activeTab === 'local' ? 'Local Farmer Community Hub' : 'Enterprise Precision Suite'}
            </h3>
            <p className="text-slate-200 text-xs mt-1">
              {activeTab === 'local'
                ? 'Voice-enabled AI soil testing, free USSD alerts & genuine input access.'
                : 'Proximal soil sensing telemetry, tractor VRA API integrations & NAQS export certification.'}
            </p>

            {/* Switch Tabs */}
            <div className="flex bg-black/30 p-1 rounded-xl mt-4 space-x-1">
              <button
                type="button"
                onClick={() => { setActiveTab('local'); setSubmitted(false); }}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'local'
                    ? 'bg-white text-soil-primary shadow-sm font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Smallholder / Cooperative</span>
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab('enterprise'); setSubmitted(false); }}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'enterprise'
                    ? 'bg-soil-accent text-white shadow-sm font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Tractor className="w-3.5 h-3.5" />
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
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-display">
                  Welcome to SOILREVIVE!
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                  {activeTab === 'local'
                    ? `Thank you ${formData.name || 'Farmer'}! Our local Community Soil Champion in ${formData.state} will reach out via SMS/Voice note within 24 hours.`
                    : `Demorequest logged for ${formData.email || 'your agribusiness'}. Our Precision Soil Agronomist will send your NDVI report preview shortly.`}
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 bg-soil-primary text-white text-sm font-medium rounded-xl hover:bg-soil-primaryHover transition-all shadow-md"
                >
                  Close & Explore Platform
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
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
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
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-soil-accent/40 focus:border-soil-accent"
                      />
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
                  className={`w-full py-3 px-4 rounded-xl text-white font-medium text-sm transition-all shadow-md flex items-center justify-center space-x-2 ${
                    activeTab === 'local'
                      ? 'bg-soil-primary hover:bg-soil-primaryHover shadow-soil-primary/20'
                      : 'bg-soil-accent hover:bg-soil-accentHover shadow-soil-accent/20'
                  }`}
                >
                  <span>{activeTab === 'local' ? 'Join Local Farmer Network' : 'Request Enterprise Demo & Sentinel Report'}</span>
                  <ArrowRight className="w-4 h-4" />
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
