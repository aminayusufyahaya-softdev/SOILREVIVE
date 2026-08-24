import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  WifiOff,
  Wifi,
  RefreshCw,
  PhoneCall,
  Database,
  CheckCircle,
  Smartphone,
  X,
  Sparkles,
  Layers,
  ArrowRight,
  Radio,
  HardDrive,
  Cpu,
  Send,
  Volume2,
  Check,
  Plus,
  Server,
  Network,
  RotateCcw,
  Zap,
  Globe
} from 'lucide-react';

import { speakAiText } from '../data/languages';

export interface OfflineScanRecord {
  id: string;
  farmerName: string;
  fieldLocation: string;
  crop: string;
  npkSummary: string;
  timestamp: string;
  synced: boolean;
  gpsCoords: string;
}

interface OfflineArchitectureProps {
  onOpenUSSDModal?: () => void;
  selectedLang?: string;
}

export const OfflineArchitectureBar: React.FC<OfflineArchitectureProps> = ({
  selectedLang = 'en'
}) => {
  // Network simulation state: 'online' | '2g' | 'offline'
  const [networkMode, setNetworkMode] = useState<'online' | '2g' | 'offline'>(
    typeof navigator !== 'undefined' && !navigator.onLine ? 'offline' : 'online'
  );

  const [fullSuiteOpen, setFullSuiteOpen] = useState<boolean>(false);
  const [activeSuiteTab, setActiveSuiteTab] = useState<'local-ussd' | 'local-sms' | 'modern-db' | 'modern-mesh'>('local-ussd');

  // Offline Scans Cache State
  const [offlineScans, setOfflineScans] = useState<OfflineScanRecord[]>([
    {
      id: 'OFF-SCAN-101',
      farmerName: 'Garba Bello',
      fieldLocation: 'Zaria North Plot #3',
      crop: 'White Maize (2.0 Ha)',
      npkSummary: 'N: 142 | P: 38 | K: 210 | pH: 6.4',
      timestamp: 'Today, 10:14 AM',
      synced: false,
      gpsCoords: '11.0855° N, 7.7199° E'
    },
    {
      id: 'OFF-SCAN-102',
      farmerName: 'Ngozi Okeke',
      fieldLocation: 'Anambra Lowlands',
      crop: 'Cassava TMS 419 (1.5 Ha)',
      npkSummary: 'N: 165 | P: 42 | K: 220 | pH: 6.2',
      timestamp: 'Today, 10:35 AM',
      synced: false,
      gpsCoords: '6.1518° N, 6.7865° E'
    },
    {
      id: 'OFF-SCAN-103',
      farmerName: 'Tunde Bakare',
      fieldLocation: 'Ijebu Agro Farm #12',
      crop: 'Oil Palm & Plantain (3.2 Ha)',
      npkSummary: 'N: 180 | P: 48 | K: 250 | pH: 6.6',
      timestamp: 'Today, 11:02 AM',
      synced: false,
      gpsCoords: '6.8210° N, 3.9160° E'
    }
  ]);

  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [syncStage, setSyncStage] = useState<string>('');

  // USSD Interactive Simulator States
  const [ussdHistory, setUssdHistory] = useState<string[]>([]);
  const [ussdInput, setUssdInput] = useState<string>('*384*764#');
  const [ussdScreenText, setUssdScreenText] = useState<string>(
    "SOILREVIVE USSD GATEWAY v2.6 (No Internet Needed)\n\n1. Soil Diagnostic Request\n2. Check Digital Passport\n3. Weather & Rain SMS\n4. Order Subsidized Fertilizer\n5. Listen to Local Voice Advisory\n\nReply with 1-5:"
  );
  const [ussdStep, setUssdStep] = useState<number>(0);

  // SMS Simulator States
  const [smsMessages, setSmsMessages] = useState<{ sender: 'farmer' | 'system'; text: string; time: string }[]>([
    { sender: 'farmer', text: 'SOIL 8849', time: '09:30 AM' },
    { sender: 'system', text: 'SOILREVIVE: Passport NG-SOIL-2026-8849 Verified. Health Score: 84% (Grade A). Recommended: NPK 15-15-15 (200kg/ha). Dial *384*764# to order.', time: '09:31 AM' }
  ]);
  const [smsInput, setSmsInput] = useState<string>('WEATHER');

  // Mesh P2P Sync State
  const [meshNodes, setMeshNodes] = useState([
    { name: 'Scout Field Tablet #04', status: 'Connected via BLE Mesh', distance: '12m away', cachedRecords: 3 },
    { name: 'Village Agro-Hub Relay Node', status: 'LoRa 868MHz Gateway', distance: '850m away', cachedRecords: 18 },
    { name: 'Cooperative Central Hub', status: 'Online Sync Pending', distance: '2.4km away', cachedRecords: 45 }
  ]);

  useEffect(() => {
    const handleOnline = () => setNetworkMode('online');
    const handleOffline = () => setNetworkMode('offline');

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const pendingCount = offlineScans.filter(s => !s.synced).length;

  // Cloud Sync Handler
  const handleFullSync = () => {
    if (networkMode === 'offline') {
      alert("Network is currently in Offline Mode. Switch network mode to Online or 2G to perform cloud sync.");
      return;
    }

    setIsSyncing(true);
    setSyncStage('1/4: Establishing TLS Handshake & Delta Compression...');

    setTimeout(() => {
      setSyncStage('2/4: Resolving Multi-Master Conflict Matrices...');
    }, 800);

    setTimeout(() => {
      setSyncStage('3/4: Writing Encrypted Telemetry to NAQS/IITA Ledger...');
    }, 1600);

    setTimeout(() => {
      setSyncStage('4/4: Sync Complete! All offline records updated.');
      setOfflineScans(prev => prev.map(s => ({ ...s, synced: true })));
      setTimeout(() => {
        setIsSyncing(false);
        setSyncStage('');
      }, 1000);
    }, 2400);
  };

  const handleSimulateNewOfflineScan = () => {
    const newId = `OFF-SCAN-${Math.floor(200 + Math.random() * 800)}`;
    const newRecord: OfflineScanRecord = {
      id: newId,
      farmerName: 'Field Scout ' + (offlineScans.length + 1),
      fieldLocation: 'Remote Plot Block #' + (offlineScans.length + 4),
      crop: 'Yellow Maize & Cassava',
      npkSummary: 'N: 155 | P: 40 | K: 215 | pH: 6.5',
      timestamp: 'Just now (Offline Cached)',
      synced: false,
      gpsCoords: '9.0820° N, 8.6753° E'
    };
    setOfflineScans(prev => [newRecord, ...prev]);
  };

  // USSD Interactive Engine
  const handleUSSDSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = ussdInput.trim();
    if (!input) return;

    if (input === '*384*764#' || input === '00') {
      setUssdStep(0);
      setUssdScreenText(
        "SOILREVIVE USSD GATEWAY v2.6 (No Internet Needed)\n\n1. Soil Diagnostic Request\n2. Check Digital Passport\n3. Weather & Rain SMS\n4. Order Subsidized Fertilizer\n5. Listen to Local Voice Advisory\n\nReply with 1-5:"
      );
      setUssdInput('');
      return;
    }

    if (ussdStep === 0) {
      if (input === '1') {
        setUssdStep(1);
        setUssdScreenText(
          "SOIL DIAGNOSTIC REQUEST\nSelect crop to test:\n1. Maize / Corn\n2. Cassava\n3. Yam / Legumes\n4. Oil Palm / Cocoa\n0. Back to Main Menu"
        );
      } else if (input === '2') {
        setUssdStep(2);
        setUssdScreenText(
          "CHECK DIGITAL PASSPORT\nEnter 4-digit Passport ID number:\n(e.g. 8849, 104, 302, 512)\n0. Back"
        );
      } else if (input === '3') {
        setUssdStep(3);
        setUssdScreenText(
          "WEATHER & RAIN SMS\nNIMET Radar forecast for your LGA:\nNext 36h: 42mm Heavy Rainfall Expected.\nAction: Hold fertilizer application.\n\nPress 1 to receive via SMS.\n0. Back"
        );
      } else if (input === '4') {
        setUssdStep(4);
        setUssdScreenText(
          "ORDER SUBSIDIZED FERTILIZER\nSelect input:\n1. NPK 15-15-15 (50kg) - ₦18,500\n2. Urea 46-0-0 (50kg) - ₦17,200\n3. Agricultural Lime (50kg) - ₦8,000\n0. Back"
        );
      } else if (input === '5') {
        setUssdStep(5);
        setUssdScreenText(
          "VOICE ADVISORY (IVR)\nDialing toll-free voice server...\nPlaying advisory in native language...\n\nPress 0 to return."
        );
        speakAiText("Barka! Wannan shine shirin kula da kasar gona daga SOILREVIVE. Kasar ku tana bukatar takin NPK.", selectedLang);
      } else {
        setUssdScreenText("Invalid choice. Please reply with 1-5 or 0 to go back.\n\nReply:");
      }
    } else if (ussdStep === 1) {
      // Diagnostic selection
      setUssdScreenText(
        "DIAGNOSTIC QUEUED!\nYour field diagnostic request has been logged into local offline cache. An extension officer will scan your farm within 24h.\n\nReply 00 for Main Menu."
      );
      handleSimulateNewOfflineScan();
    } else if (ussdStep === 2) {
      // Check Passport
      setUssdScreenText(
        `PASSPORT FOUND [ID: ${input}]\nHolder: Registered Farmer\nHealth Score: 84% (Grade A)\nNPK: Optimal Potassium\nBank Loan Status: Pre-Approved\n\nReply 00 for Main Menu.`
      );
    } else if (ussdStep === 3) {
      // Weather SMS
      setUssdScreenText(
        "SMS DISPATCHED!\nForecast sent to your mobile phone via SMS.\n\nReply 00 for Main Menu."
      );
    } else if (ussdStep === 4) {
      // Order Input
      setUssdScreenText(
        "ORDER CONFIRMED!\nVoucher Code: #SR-VOUCHER-" + Math.floor(1000 + Math.random() * 9000) + "\nPickup at your LGA agro-dealer hub at subsidized price.\n\nReply 00 for Main Menu."
      );
    } else {
      setUssdStep(0);
      setUssdScreenText(
        "SOILREVIVE USSD GATEWAY v2.6 (No Internet Needed)\n\n1. Soil Diagnostic Request\n2. Check Digital Passport\n3. Weather & Rain SMS\n4. Order Subsidized Fertilizer\n5. Listen to Local Voice Advisory\n\nReply with 1-5:"
      );
    }

    setUssdInput('');
  };

  // SMS Simulator Submit
  const handleSMSSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = smsInput.trim();
    if (!text) return;

    const newMsg = { sender: 'farmer' as const, text, time: 'Just now' };
    setSmsMessages(prev => [...prev, newMsg]);

    setTimeout(() => {
      let reply = "SOILREVIVE: Reply SOIL <ID> to verify passport, or WEATHER to get LGA rain radar forecast.";
      const lower = text.toLowerCase();
      if (lower.includes('weather') || lower.includes('rain')) {
        reply = "SOILREVIVE WEATHER: Moderate rain expected in 36 hrs (75% prob). Do not broadcast granular fertilizer until after rain.";
      } else if (lower.includes('soil') || lower.includes('8849')) {
        reply = "SOILREVIVE: Passport NG-SOIL-2026-8849 Verified. Health: 84%. Soil is optimal for Maize & Cassava. Bank loan eligible.";
      } else if (lower.includes('buy') || lower.includes('npk') || lower.includes('fertilizer')) {
        reply = "SOILREVIVE ORDER: Subsidized NPK 15-15-15 reserved. Voucher SR-9941. Show this SMS at your nearest LGA cooperative.";
      }
      setSmsMessages(prev => [...prev, { sender: 'system' as const, text: reply, time: 'Just now' }]);
    }, 600);

    setSmsInput('');
  };

  return (
    <>
      {/* Floating Active Offline Bar at Bottom Right */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end space-y-2 font-sans max-w-[calc(100vw-2rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 sm:p-3.5 rounded-2xl border shadow-2xl backdrop-blur-xl flex items-center space-x-3 text-xs w-full sm:w-auto max-w-md ${
            networkMode === 'offline'
              ? 'bg-amber-950/95 border-amber-500/60 text-amber-200 shadow-amber-950/50'
              : networkMode === '2g'
              ? 'bg-blue-950/95 border-blue-500/50 text-blue-200'
              : pendingCount > 0
              ? 'bg-slate-900/95 border-purple-500/50 text-purple-200'
              : 'bg-slate-900/90 border-slate-800 text-slate-200'
          }`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold flex-shrink-0 ${
              networkMode === 'offline'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse'
                : networkMode === '2g'
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
            }`}
          >
            {networkMode === 'offline' ? (
              <WifiOff className="w-4 h-4" />
            ) : networkMode === '2g' ? (
              <Radio className="w-4 h-4" />
            ) : (
              <Database className="w-4 h-4" />
            )}
          </div>

          <div className="flex-1 min-w-0 pr-1">
            <div className="flex items-center space-x-1.5 font-bold flex-wrap">
              <span className="truncate">
                {networkMode === 'offline'
                  ? 'Offline-First Active'
                  : networkMode === '2g'
                  ? '2G EDGE Low-Bandwidth'
                  : 'Offline Engine Ready'}
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                IndexedDB
              </span>
            </div>
            <p className="text-[11px] text-slate-300 truncate">
              {pendingCount > 0
                ? `${pendingCount} Soil Scans Queued in Cache`
                : 'All Telemetry Fully Synced'}
            </p>
          </div>

          <div className="flex items-center space-x-1.5 flex-shrink-0">
            {pendingCount > 0 && networkMode !== 'offline' && (
              <button
                onClick={handleFullSync}
                disabled={isSyncing}
                className="px-2.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px] transition-all flex items-center space-x-1 shadow-md"
              >
                <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{isSyncing ? 'Syncing' : 'Sync'}</span>
              </button>
            )}

            <button
              onClick={() => setFullSuiteOpen(true)}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center space-x-1"
              title="Open Offline-First Dual-Party Suite"
            >
              <Smartphone className="w-4 h-4 text-purple-400" />
              <span className="text-[11px] font-bold hidden sm:inline">Offline Center</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Comprehensive Offline-First Dual-Party Architecture Modal */}
      <AnimatePresence>
        {fullSuiteOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto font-sans">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full text-white shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-blue-950 p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shadow-inner flex-shrink-0">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                        Offline-First Dual-Party Architecture
                      </h3>
                      <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold">
                        LOCAL & MODERN SYNC
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 hidden sm:block">
                      100% operational without internet for rural smallholders (USSD/SMS) & commercial agronomists (IndexedDB/Mesh)
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setFullSuiteOpen(false)}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-all border border-slate-700 flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Network State Controller Bar */}
              <div className="p-3 sm:p-4 bg-slate-950 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 flex-shrink-0">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-slate-400 font-semibold">Simulate Network State:</span>
                  <span className="text-[10px] text-slate-500 hidden sm:inline">(Test instant reactivity)</span>
                </div>

                <div className="flex items-center gap-1.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setNetworkMode('online')}
                    className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center justify-center space-x-1 ${
                      networkMode === 'online'
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-md'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>4G/5G Online</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setNetworkMode('2g')}
                    className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center justify-center space-x-1 ${
                      networkMode === '2g'
                        ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    <Radio className="w-3.5 h-3.5" />
                    <span>2G EDGE</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setNetworkMode('offline')}
                    className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center justify-center space-x-1 ${
                      networkMode === 'offline'
                        ? 'bg-amber-600 text-white border-amber-400 shadow-md'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    <WifiOff className="w-3.5 h-3.5" />
                    <span>Offline (No Data)</span>
                  </button>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-800 px-4 sm:px-6 pt-2 space-x-2 sm:space-x-6 text-xs sm:text-sm font-semibold text-slate-400 overflow-x-auto flex-shrink-0">
                <button
                  onClick={() => setActiveSuiteTab('local-ussd')}
                  className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                    activeSuiteTab === 'local-ussd'
                      ? 'border-purple-400 text-purple-400 font-bold'
                      : 'border-transparent hover:text-slate-200'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Local USSD Phone Dialer (*384*764#)</span>
                </button>

                <button
                  onClick={() => setActiveSuiteTab('local-sms')}
                  className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                    activeSuiteTab === 'local-sms'
                      ? 'border-emerald-400 text-emerald-400 font-bold'
                      : 'border-transparent hover:text-slate-200'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Local 2-Way SMS Engine</span>
                </button>

                <button
                  onClick={() => setActiveSuiteTab('modern-db')}
                  className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                    activeSuiteTab === 'modern-db'
                      ? 'border-blue-400 text-blue-400 font-bold'
                      : 'border-transparent hover:text-slate-200'
                  }`}
                >
                  <Database className="w-4 h-4" />
                  <span>Modern IndexedDB Cache ({pendingCount} Queued)</span>
                </button>

                <button
                  onClick={() => setActiveSuiteTab('modern-mesh')}
                  className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                    activeSuiteTab === 'modern-mesh'
                      ? 'border-teal-400 text-teal-400 font-bold'
                      : 'border-transparent hover:text-slate-200'
                  }`}
                >
                  <Network className="w-4 h-4" />
                  <span>P2P Field Mesh Sync</span>
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">
                
                {/* TAB 1: Local USSD Feature Phone Simulator */}
                {activeSuiteTab === 'local-ussd' && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    
                    {/* Left: Phone Screen Graphic */}
                    <div className="md:col-span-6 bg-slate-950 p-5 rounded-3xl border border-purple-500/40 shadow-2xl space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[10px] font-mono text-purple-400">
                        <span className="flex items-center gap-1 font-bold">
                          <Radio className="w-3 h-3" /> MTN / AIRTEL / GLO USSD
                        </span>
                        <span>BATTERY 98% • SIGNAL 4/4</span>
                      </div>

                      {/* Feature Phone Screen Text */}
                      <div className="bg-slate-900 p-4 rounded-2xl border border-purple-500/30 font-mono text-xs text-slate-200 whitespace-pre-line leading-relaxed min-h-[160px] shadow-inner">
                        {ussdScreenText}
                      </div>

                      {/* Input & Keypad */}
                      <form onSubmit={handleUSSDSubmit} className="space-y-3">
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={ussdInput}
                            onChange={(e) => setUssdInput(e.target.value)}
                            placeholder="Enter option (e.g. 1, 2, 3, 0)..."
                            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500 font-mono"
                          />
                          <button
                            type="submit"
                            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-all flex items-center space-x-1"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                            <span>Send</span>
                          </button>
                        </div>
                      </form>

                      {/* Quick Dial Pad Buttons */}
                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-900 text-xs font-mono">
                        {['1', '2', '3', '4', '5', '0', '*384*764#', '00 (Main)'].map((btn) => (
                          <button
                            key={btn}
                            type="button"
                            onClick={() => {
                              setUssdInput(btn.includes(' ') ? btn.split(' ')[0] : btn);
                            }}
                            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-bold transition-all text-center"
                          >
                            {btn}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Right: Explanatory & Feature Highlights */}
                    <div className="md:col-span-6 space-y-4 text-xs">
                      <div className="bg-slate-950 p-5 rounded-3xl border border-slate-800 space-y-3">
                        <h4 className="font-bold text-sm text-white flex items-center gap-2">
                          <Smartphone className="w-4 h-4 text-purple-400" />
                          Zero-Internet Rural Accessibility
                        </h4>
                        <p className="text-slate-300 leading-relaxed">
                          Over 65% of Nigerian smallholders operate in areas with intermittent 2G coverage and basic feature phones (Nokia/Tecno). SOILREVIVE's USSD engine provides complete parity with our high-end smartphone app.
                        </p>
                        <ul className="space-y-2 text-slate-400">
                          <li className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span><strong>Instant Soil Diagnostic:</strong> Farmers trigger field visits with just 2 keystrokes.</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span><strong>Passport Verification:</strong> Agro-dealers verify soil credit certificates before issuing subsidized inputs.</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span><strong>Free IVR Voice Guidance:</strong> Dial toll-free to hear agronomist notes in Hausa, Yoruba, Igbo, or Pidgin.</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                )}

                {/* TAB 2: Local 2-Way SMS Engine */}
                {activeSuiteTab === 'local-sms' && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-7 bg-slate-950 p-5 rounded-3xl border border-emerald-500/40 shadow-2xl space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
                        <span className="font-bold text-white">SOILREVIVE SMS SHORTCODE: 38400</span>
                        <span className="text-[10px] text-emerald-400 font-mono font-bold">2-WAY SMS GATEWAY</span>
                      </div>

                      {/* Chat Messages */}
                      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3 max-h-64 overflow-y-auto">
                        {smsMessages.map((msg, idx) => (
                          <div
                            key={idx}
                            className={`flex flex-col ${msg.sender === 'farmer' ? 'items-end' : 'items-start'}`}
                          >
                            <div
                              className={`p-3 rounded-2xl max-w-[85%] text-xs font-mono leading-relaxed ${
                                msg.sender === 'farmer'
                                  ? 'bg-emerald-600 text-white rounded-br-none'
                                  : 'bg-slate-950 text-slate-200 border border-slate-800 rounded-bl-none'
                              }`}
                            >
                              {msg.text}
                            </div>
                            <span className="text-[9px] text-slate-500 mt-1">{msg.time}</span>
                          </div>
                        ))}
                      </div>

                      {/* SMS Input */}
                      <form onSubmit={handleSMSSubmit} className="flex space-x-2">
                        <input
                          type="text"
                          value={smsInput}
                          onChange={(e) => setSmsInput(e.target.value)}
                          placeholder="Text keyword: SOIL 8849, WEATHER, NPK BUY..."
                          className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center space-x-1"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Send SMS</span>
                        </button>
                      </form>
                    </div>

                    {/* Right: Quick Keywords Guide */}
                    <div className="md:col-span-5 bg-slate-950 p-5 rounded-3xl border border-slate-800 space-y-3 text-xs">
                      <h4 className="font-bold text-white text-sm">Supported SMS Keywords</h4>
                      <div className="space-y-2">
                        {[
                          { kw: 'SOIL 8849', desc: 'Queries soil passport fertility score & fertilizer need' },
                          { kw: 'WEATHER BWARI', desc: 'Pulls hyper-local NIMET 48-hour rain alert' },
                          { kw: 'NPK BUY', desc: 'Generates subsidized fertilizer discount voucher' },
                          { kw: 'HELP', desc: 'Lists all available automated SMS services' }
                        ].map((item, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSmsInput(item.kw)}
                            className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-left transition-all"
                          >
                            <span className="font-bold font-mono text-emerald-400 block">{item.kw}</span>
                            <span className="text-[10px] text-slate-400">{item.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: Modern Enterprise IndexedDB Cache & Cloud Sync */}
                {activeSuiteTab === 'modern-db' && (
                  <div className="space-y-6">
                    <div className="bg-slate-950 p-6 rounded-3xl border border-blue-500/30 space-y-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4">
                        <div>
                          <h4 className="text-base font-bold text-white">Client-Side IndexedDB Storage & Queue</h4>
                          <p className="text-xs text-slate-400">Stores field sensor telemetry locally with zero-loss guarantee</p>
                        </div>

                        <div className="flex items-center space-x-2 w-full sm:w-auto">
                          <button
                            type="button"
                            onClick={handleSimulateNewOfflineScan}
                            className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center justify-center space-x-1"
                          >
                            <Plus className="w-3.5 h-3.5 text-blue-400" />
                            <span>+ Offline Soil Scan</span>
                          </button>

                          <button
                            type="button"
                            onClick={handleFullSync}
                            disabled={isSyncing || pendingCount === 0 || networkMode === 'offline'}
                            className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold shadow-lg shadow-blue-600/20 flex items-center justify-center space-x-1.5"
                          >
                            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                            <span>{isSyncing ? 'Syncing...' : `Sync All (${pendingCount})`}</span>
                          </button>
                        </div>
                      </div>

                      {/* Visual Sync Multi-Stage Progress */}
                      {isSyncing && (
                        <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-500/40 text-xs space-y-2">
                          <div className="flex items-center space-x-2 text-blue-300 font-bold">
                            <RefreshCw className="w-4 h-4 animate-spin text-blue-400" />
                            <span>{syncStage}</span>
                          </div>
                          <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full animate-pulse w-3/4 rounded-full" />
                          </div>
                        </div>
                      )}

                      {/* Queued Records Table */}
                      <div className="space-y-3">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                          Queued Soil Scan Transactions ({offlineScans.length} Total Records)
                        </h5>
                        <div className="space-y-2">
                          {offlineScans.map((scan) => (
                            <div
                              key={scan.id}
                              className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs"
                            >
                              <div className="space-y-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-mono font-bold text-white">{scan.id}</span>
                                  <span className="font-semibold text-slate-300">• {scan.farmerName}</span>
                                  <span className="text-[10px] text-slate-400 font-mono">({scan.gpsCoords})</span>
                                </div>
                                <div className="text-[11px] text-slate-400">
                                  <span>{scan.fieldLocation} • {scan.crop}</span>
                                  <span className="text-emerald-400 ml-2 font-mono">{scan.npkSummary}</span>
                                </div>
                              </div>

                              <div className="flex items-center space-x-2 self-end sm:self-center">
                                <span className="text-[10px] text-slate-500">{scan.timestamp}</span>
                                {scan.synced ? (
                                  <span className="flex items-center space-x-1 text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/30">
                                    <Check className="w-3 h-3" /> Synced
                                  </span>
                                ) : (
                                  <span className="text-[10px] text-purple-300 font-bold px-2 py-0.5 rounded-full bg-purple-950 border border-purple-500/30">
                                    Local Cache
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: P2P Field Mesh Sync */}
                {activeSuiteTab === 'modern-mesh' && (
                  <div className="space-y-6">
                    <div className="bg-slate-950 p-6 rounded-3xl border border-teal-500/30 space-y-6">
                      <div className="border-b border-slate-800 pb-4">
                        <h4 className="text-base font-bold text-white">Peer-to-Peer Bluetooth & LoRa Field Mesh</h4>
                        <p className="text-xs text-slate-400">
                          Field scouts sync offline telemetry to village hub nodes without internet via short-range radio
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {meshNodes.map((node, idx) => (
                          <div key={idx} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-white">{node.name}</span>
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                            </div>
                            <span className="text-[11px] text-teal-400 font-mono block">{node.status}</span>
                            <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex justify-between">
                              <span>Range: {node.distance}</span>
                              <span className="text-purple-300 font-bold">{node.cachedRecords} Scans Cached</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                        <h5 className="font-bold text-slate-200">How Edge Mesh Sync Operates in Remote Areas:</h5>
                        <p className="text-slate-400 leading-relaxed">
                          When an extension officer tests soil in an off-grid village, the data hopscotch through scout devices via Bluetooth Low Energy (BLE) and LoRa 868MHz packet relays. The moment any single relay device enters cellular coverage, the entire batch syncs seamlessly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Footer Bar */}
              <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between flex-shrink-0 text-xs">
                <span className="text-slate-400 text-[11px]">
                  Storage Engine: <strong>HTML5 IndexedDB + ServiceWorker PWA Cache</strong>
                </span>
                <button
                  onClick={() => setFullSuiteOpen(false)}
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold shadow-md transition-all"
                >
                  Close Offline Suite
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
