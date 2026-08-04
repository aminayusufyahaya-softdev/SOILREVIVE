import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Sprout, Globe, Mail, Send, CheckCircle2, Shield, Heart } from 'lucide-react';

interface FooterProps {
  selectedLang: string;
  onSelectLang: (lang: string) => void;
  onOpenModal: (type: 'local' | 'enterprise') => void;
}

interface NewsletterFormInputs {
  email: string;
}

export const Footer: React.FC<FooterProps> = ({
  selectedLang,
  onSelectLang,
  onOpenModal
}) => {
  const [subscribed, setSubscribed] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormInputs>();

  const onSubmit = (data: NewsletterFormInputs) => {
    setSubscribed(true);
    reset();
    setTimeout(() => setSubscribed(false), 5000);
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ha', label: 'Hausa' },
    { code: 'yo', label: 'Yoruba' },
    { code: 'ig', label: 'Igbo' }
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      
      {/* Soil Grid Background */}
      <div className="absolute inset-0 tech-grid-overlay opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand Info (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-soil-primary to-emerald-800 flex items-center justify-center text-white shadow-md">
                <Sprout className="w-5 h-5 text-emerald-300" />
              </div>
              <span className="text-xl font-extrabold font-display tracking-tight text-white">
                SOIL<span className="text-emerald-400">REVIVE</span>
                <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold ml-1 border border-emerald-500/30">
                  NG
                </span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Nigeria's premier digital soil health infrastructure. Combining proximal Bluetooth field sensors with Sentinel-2 satellite AI diagnostics to eliminate agricultural yield gaps.
            </p>

            {/* Language Selector Buttons */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                Select Voice / Interface Language:
              </span>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => onSelectLang(lang.code)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      selectedLang === lang.code
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                        : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links (4 Cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8 text-xs">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-b border-slate-800 pb-2">
                Platform Navigation
              </h4>
              <ul className="space-y-2.5 text-slate-400 font-medium">
                <li><a href="#dual-path" className="hover:text-emerald-400 transition-colors">Dual-Path Suite</a></li>
                <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
                <li><a href="#features" className="hover:text-emerald-400 transition-colors">Bento Feature Grid</a></li>
                <li><a href="#stories" className="hover:text-emerald-400 transition-colors">Farmer User Journeys</a></li>
                <li><a href="#partners" className="hover:text-emerald-400 transition-colors">Science & Trust</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 border-b border-slate-800 pb-2">
                Resources & Legal
              </h4>
              <ul className="space-y-2.5 text-slate-400 font-medium">
                <li><button onClick={() => onOpenModal('local')} className="hover:text-emerald-400 transition-colors text-left">Verified Marketplace</button></li>
                <li><button onClick={() => onOpenModal('enterprise')} className="hover:text-emerald-400 transition-colors text-left">API Developer Docs</button></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">IITA Soil Data Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">NAQS Export Guidelines</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy & Terms</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Get the Latest Soil Health Tips
            </h4>
            <p className="text-xs text-slate-400">
              Receive weekly agronomy reports, Sentinel-2 weather alerts, and fertilizer subsidy release dates.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 rounded-xl text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are subscribed to SOILREVIVE agronomy updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
                  />
                </div>
                {errors.email && (
                  <p className="text-[11px] text-red-400 ml-1">{errors.email.message}</p>
                )}
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-soil-primary to-emerald-700 hover:from-soil-primaryHover hover:to-emerald-800 text-white rounded-xl text-xs font-semibold shadow-md flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Subscribe to Agronomy Alerts</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <p className="text-[10px] text-slate-500 flex items-center gap-1">
              <Shield className="w-3 h-3 text-emerald-500" />
              <span>We protect your data. USSD *384*55# support line available 24/7.</span>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© 2026 SOILREVIVE. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Built for Nigerian Agriculture</span>
            <span className="text-slate-700">•</span>
            <span>IITA & NAQS Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
