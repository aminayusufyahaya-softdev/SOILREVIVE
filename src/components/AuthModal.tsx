import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Lock,
  Mail,
  Phone,
  User,
  MapPin,
  Tractor,
  Sprout,
  ArrowRight,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  KeyRound,
  Eye,
  EyeOff
} from 'lucide-react';
import { authService, UserProfile, DEMO_USERS } from '../services/authService';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
  onAuthSuccess: (user: UserProfile) => void;
  message?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
  onAuthSuccess,
  message,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // Login form state
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup form state
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    state: 'Kaduna State',
    role: 'farmer' as 'farmer' | 'agronomist' | 'enterprise',
    farmName: '',
    farmSize: '5-10 Hectares',
    primaryCrop: 'Maize & Cassava',
    password: '',
  });

  if (!isOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginIdentifier.trim()) {
      setErrorMsg('Please enter your email or phone number.');
      return;
    }
    setErrorMsg(null);
    setIsLoading(true);
    try {
      const user = await authService.login(loginIdentifier, loginPassword);
      setIsLoading(false);
      onAuthSuccess(user);
    } catch {
      setIsLoading(false);
      setErrorMsg('Sign in failed. Please check your credentials.');
    }
  };

  const handleQuickDemoLogin = async (demoUser: UserProfile) => {
    setErrorMsg(null);
    setIsLoading(true);
    try {
      const user = await authService.login(demoUser.email);
      setIsLoading(false);
      onAuthSuccess(user);
    } catch {
      setIsLoading(false);
      setErrorMsg('Demo sign-in failed.');
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupData.name.trim() || (!signupData.email.trim() && !signupData.phone.trim())) {
      setErrorMsg('Please enter your name and either an email or phone number.');
      return;
    }
    setErrorMsg(null);
    setIsLoading(true);
    try {
      const user = await authService.signup(signupData);
      setIsLoading(false);
      onAuthSuccess(user);
    } catch {
      setIsLoading(false);
      setErrorMsg('Registration failed. Please verify your details.');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg my-8 bg-[#091b11] border border-emerald-600/30 rounded-3xl shadow-2xl overflow-hidden text-slate-100"
        >
          {/* Header Banner */}
          <div className="relative bg-gradient-to-r from-[#06180e] via-[#0c2415] to-[#122e1b] p-6 sm:p-7 border-b border-emerald-800/40">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/40 hover:bg-black/60 text-slate-300 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Platform Branding */}
            <div className="flex items-center space-x-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-950/60 border border-emerald-400/30">
                <Sprout className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <span className="text-base font-extrabold tracking-tight text-white flex items-center gap-1 font-display">
                  SOIL<span className="text-emerald-400">REVIVE</span>
                  <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-bold bg-emerald-950 text-amber-300 border border-amber-600/30">
                    PORTAL
                  </span>
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-black font-display text-white tracking-tight">
              {mode === 'login' ? 'Sign In to Farm Console' : 'Create Your Farm Account'}
            </h3>
            <p className="text-xs text-emerald-300/80 mt-1 max-w-sm">
              {message ||
                (mode === 'login'
                  ? 'Access live proximal sensing telemetry, crop advisory, and soil health passports.'
                  : 'Join thousands of Nigerian farmers & cooperatives boosting soil productivity.')}
            </p>

            {/* Mode Switcher Tabs */}
            <div className="flex bg-[#041109]/80 p-1 rounded-2xl mt-5 border border-emerald-800/50">
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setErrorMsg(null);
                }}
                className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                  mode === 'login'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-emerald-300'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('signup');
                  setErrorMsg(null);
                }}
                className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                  mode === 'signup'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-emerald-300'
                }`}
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-7 space-y-5">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-950/70 border border-rose-600/50 text-rose-200 text-xs flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* ===================== LOGIN FORM ===================== */}
            {mode === 'login' && (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-emerald-200/90 mb-1.5">
                    Email Address or Phone Number
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-emerald-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={loginIdentifier}
                      onChange={(e) => setLoginIdentifier(e.target.value)}
                      placeholder="e.g. musa@kadunafarms.ng or 08031234567"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0d2618] border border-emerald-700/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-emerald-200/90">Password</label>
                    <span className="text-[11px] text-emerald-400 hover:underline cursor-pointer">
                      Forgot?
                    </span>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-emerald-400 absolute left-3.5 top-3.5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#0d2618] border border-emerald-700/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3 text-slate-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 shadow-lg shadow-emerald-950/80 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 mt-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In & Open Dashboard</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Quick 1-Click Demo Profiles */}
                <div className="pt-4 border-t border-emerald-900/60">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      Instant Demo Logins (1-Click)
                    </span>
                    <span className="text-[10px] text-slate-400">No password required</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {DEMO_USERS.map((demo) => (
                      <button
                        key={demo.id}
                        type="button"
                        onClick={() => handleQuickDemoLogin(demo)}
                        className="text-left px-3 py-2.5 rounded-xl bg-[#081f13] hover:bg-[#0e311f] border border-emerald-800/60 hover:border-emerald-500/80 transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center space-x-2.5">
                          <div className="w-7 h-7 rounded-lg bg-emerald-900/80 border border-emerald-600/40 flex items-center justify-center text-xs font-bold text-emerald-300">
                            {demo.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                              {demo.name}
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/50">
                                {demo.roleTitle}
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-400">
                              {demo.farmName} • {demo.state}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              </form>
            )}

            {/* ===================== SIGNUP FORM ===================== */}
            {mode === 'signup' && (
              <form onSubmit={handleSignupSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-emerald-200/90 mb-1">
                    Full Name / Farm Owner
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-emerald-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={signupData.name}
                      onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                      placeholder="e.g. Musa Ibrahim or Dr. Ngozi Okafor"
                      className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0d2618] border border-emerald-700/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-200/90 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-emerald-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        value={signupData.phone}
                        onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                        placeholder="0803 123 4567"
                        className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#0d2618] border border-emerald-700/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-200/90 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-emerald-400 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        value={signupData.email}
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                        placeholder="farmer@domain.com"
                        className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#0d2618] border border-emerald-700/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-200/90 mb-1">
                      Farm State / Region
                    </label>
                    <select
                      value={signupData.state}
                      onChange={(e) => setSignupData({ ...signupData, state: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#0d2618] border border-emerald-700/50 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Kaduna State">Kaduna State</option>
                      <option value="Oyo State">Oyo State</option>
                      <option value="Benue State">Benue State</option>
                      <option value="Enugu State">Enugu State</option>
                      <option value="Kano State">Kano State</option>
                      <option value="Ogun State">Ogun State</option>
                      <option value="Plateau State">Plateau State</option>
                      <option value="Niger State">Niger State</option>
                      <option value="Ondo State">Ondo State</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-200/90 mb-1">
                      Farming Role
                    </label>
                    <select
                      value={signupData.role}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          role: e.target.value as 'farmer' | 'agronomist' | 'enterprise',
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-[#0d2618] border border-emerald-700/50 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="farmer">Smallholder Farmer (1-10 ha)</option>
                      <option value="agronomist">Commercial Agronomist (10-50 ha)</option>
                      <option value="enterprise">Agribusiness / Cooperative Fleet</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-200/90 mb-1">
                      Farm Name
                    </label>
                    <input
                      type="text"
                      value={signupData.farmName}
                      onChange={(e) => setSignupData({ ...signupData, farmName: e.target.value })}
                      placeholder="e.g. Sunrise Agro Plot"
                      className="w-full px-3 py-2 rounded-xl bg-[#0d2618] border border-emerald-700/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-200/90 mb-1">
                      Create Password
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
                      <input
                        type="password"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#0d2618] border border-emerald-700/50 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 shadow-lg shadow-emerald-950/80 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 mt-3"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Creating Farm Account...</span>
                    </>
                  ) : (
                    <>
                      <span>Complete Registration & Access Dashboard</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>IITA Standards Verified & NAQS Soil Passport Ready</span>
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
