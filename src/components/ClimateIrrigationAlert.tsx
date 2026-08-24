import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CloudSun,
  Droplets,
  Thermometer,
  Wind,
  AlertTriangle,
  CheckCircle2,
  BellRing,
  Volume2,
  X,
  RefreshCw,
  Zap,
  Check,
  Smartphone,
  Sliders,
  Calendar,
  Layers,
  ArrowRight,
  ShieldAlert,
  Play,
  Pause,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';

import { speakAiText } from '../data/languages';

interface ClimateIrrigationAlertProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLang?: string;
}

interface AlertItem {
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;
  zone: string;
  message: string;
  time: string;
  actionText: string;
  localDialectNote: string;
}

interface IrrigationZone {
  id: string;
  name: string;
  crop: string;
  currentMoisture: number;
  targetMoisture: number;
  pumpActive: boolean;
  flowRate: number; // L/min
  waterSavedLitres: number;
  valveStatus: 'Open' | 'Closed';
  method: 'Solar Drip' | 'Micro-Sprinkler' | 'Root Misting';
}

export const ClimateIrrigationAlert: React.FC<ClimateIrrigationAlertProps> = ({
  isOpen,
  onClose,
  selectedLang = 'en'
}) => {
  const [activeTab, setActiveTab] = useState<'alerts' | 'irrigation' | 'forecast' | 'scenarios'>('alerts');
  const [isSimulating, setIsSimulating] = useState(false);
  const [acknowledged, setAcknowledged] = useState<string[]>([]);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [smsPushed, setSmsPushed] = useState<string | null>(null);

  // Active Climate Scenario
  const [activeScenario, setActiveScenario] = useState<'normal' | 'drought' | 'flood' | 'heatwave'>('drought');

  // Zones State
  const [zones, setZones] = useState<IrrigationZone[]>([
    {
      id: 'zone-a',
      name: 'Zone A - Upper Terraces',
      crop: 'Hybrid Maize & Soybeans (2.2 Ha)',
      currentMoisture: 24,
      targetMoisture: 55,
      pumpActive: false,
      flowRate: 0,
      waterSavedLitres: 1420,
      valveStatus: 'Closed',
      method: 'Solar Drip'
    },
    {
      id: 'zone-b',
      name: 'Zone B - Lowland Plots',
      crop: 'TMS Cassava & Sweet Potato (1.8 Ha)',
      currentMoisture: 42,
      targetMoisture: 50,
      pumpActive: true,
      flowRate: 18.5,
      waterSavedLitres: 3100,
      valveStatus: 'Open',
      method: 'Micro-Sprinkler'
    },
    {
      id: 'zone-c',
      name: 'Zone C - Seedling Nursery',
      crop: 'Tomato, Pepper & Leafy Veg (0.8 Ha)',
      currentMoisture: 58,
      targetMoisture: 65,
      pumpActive: false,
      flowRate: 0,
      waterSavedLitres: 950,
      valveStatus: 'Closed',
      method: 'Root Misting'
    }
  ]);

  // Dynamic Weather data based on scenario
  const weatherPresets = {
    drought: {
      temp: '36°C',
      humidity: '42%',
      wind: '18 km/h NE',
      rainChance: '5%',
      etRate: '6.8 mm/day',
      solarIndex: 'Extreme UV 10+',
      forecastStatus: 'High Evapotranspiration Deficit Warning'
    },
    flood: {
      temp: '25°C',
      humidity: '92%',
      wind: '28 km/h SW',
      rainChance: '95%',
      etRate: '1.2 mm/day',
      solarIndex: 'Low (Overcast)',
      forecastStatus: 'NIMET 42mm Heavy Rainfall Warning'
    },
    heatwave: {
      temp: '38°C',
      humidity: '35%',
      wind: '14 km/h',
      rainChance: '10%',
      etRate: '7.4 mm/day',
      solarIndex: 'Extreme UV 11',
      forecastStatus: 'Midday Crop Wilting Risk'
    },
    normal: {
      temp: '29°C',
      humidity: '65%',
      wind: '12 km/h',
      rainChance: '30%',
      etRate: '3.8 mm/day',
      solarIndex: 'Moderate (UV 6)',
      forecastStatus: 'Optimal Microclimate Conditions'
    }
  };

  const weatherData = weatherPresets[activeScenario];

  // Dynamic Alerts List
  const [alertsList, setAlertsList] = useState<AlertItem[]>([
    {
      id: 'alert-1',
      type: 'critical',
      title: 'Zone A Moisture Deficit Warning',
      zone: 'Zone A (Maize & Soybeans)',
      message: 'Soil moisture dropped to 24% at 15cm root depth (Critical threshold: 30%). Immediate drip irrigation recommended before midday heat.',
      time: '8 mins ago',
      actionText: 'Activate Smart Drip Pump',
      localDialectNote: 'Ruwan kasa ya yi ƙasa a Zone A. Kunna famfon ban ruwa na drip.'
    },
    {
      id: 'alert-2',
      type: 'warning',
      title: 'NIMET Radar 42mm Precipitation Alert (+36h)',
      zone: 'All Farm Zones',
      message: 'Heavy convective storm system approaching LGA. Postpone all granular fertilizer application to prevent leaching and chemical runoff.',
      time: '35 mins ago',
      actionText: 'Reschedule Fertigation',
      localDialectNote: 'Za a yi ruwan sama mai ƙarfi a cikin sa\'o\'i 36. Kada a saka takin zamani yanzu.'
    },
    {
      id: 'alert-3',
      type: 'info',
      title: 'Evapotranspiration Peak Alert (ET₀ 6.8 mm/day)',
      zone: 'Zone C (Seedlings Nursery)',
      message: 'High solar irradiance detected. Activate 30% nursery shade netting and maintain root-zone soil misting.',
      time: '2 hours ago',
      actionText: 'Deploy Shade Netting',
      localDialectNote: 'Rana tana da zafi sosai. Rufe shuka don kare ganyaye.'
    }
  ]);

  const handleToggleZonePump = (zoneId: string) => {
    setIsSimulating(true);
    setTimeout(() => {
      setZones(prev =>
        prev.map(z => {
          if (z.id === zoneId) {
            const nextActive = !z.pumpActive;
            return {
              ...z,
              pumpActive: nextActive,
              flowRate: nextActive ? 18.5 : 0,
              valveStatus: nextActive ? 'Open' : 'Closed',
              currentMoisture: nextActive ? Math.min(z.targetMoisture, z.currentMoisture + 18) : z.currentMoisture,
              waterSavedLitres: z.waterSavedLitres + (nextActive ? 120 : 0)
            };
          }
          return z;
        })
      );
      setIsSimulating(false);
    }, 600);
  };

  const handleAcknowledge = (id: string) => {
    if (!acknowledged.includes(id)) {
      setAcknowledged([...acknowledged, id]);
    }
  };

  const handlePlayVoiceAlert = (alertText?: string) => {
    setAudioPlaying(true);
    const speechText = alertText || "Warning: Soil moisture level in Zone A is low at 24 percent. Recommended action: activate solar drip irrigation pump.";
    speakAiText(speechText, selectedLang);
    setTimeout(() => setAudioPlaying(false), 5500);
  };

  const handlePushSMS = (alertId: string, title: string) => {
    setSmsPushed(alertId);
    setTimeout(() => setSmsPushed(null), 3500);
  };

  const handleApplyScenario = (scenario: 'normal' | 'drought' | 'flood' | 'heatwave') => {
    setActiveScenario(scenario);
    if (scenario === 'flood') {
      setZones(prev =>
        prev.map(z => ({
          ...z,
          currentMoisture: 78,
          pumpActive: false,
          flowRate: 0,
          valveStatus: 'Closed'
        }))
      );
    } else if (scenario === 'drought' || scenario === 'heatwave') {
      setZones(prev =>
        prev.map(z => ({
          ...z,
          currentMoisture: Math.max(18, z.currentMoisture - 15)
        }))
      );
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto font-sans">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full text-white shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]"
        >
          {/* Top Bar Header */}
          <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center shadow-inner flex-shrink-0">
                <CloudSun className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    Climate & Irrigation Precision Suite
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold animate-pulse">
                    NIMET & IOT TELEMETRY ACTIVE
                  </span>
                </div>
                <p className="text-xs text-slate-400 hidden sm:block">
                  Hyper-local microclimate alerts, automated solar drip pumps & root-zone telemetry
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-all border border-slate-700 flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Real-Time Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-3 sm:p-4 bg-slate-950/90 border-b border-slate-800 text-xs flex-shrink-0">
            <div className="bg-slate-900 p-2.5 sm:p-3 rounded-2xl border border-slate-800 flex items-center space-x-2.5">
              <Thermometer className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block uppercase font-semibold">Temperature</span>
                <span className="font-bold text-slate-100 text-sm font-mono truncate">{weatherData.temp}</span>
              </div>
            </div>

            <div className="bg-slate-900 p-2.5 sm:p-3 rounded-2xl border border-slate-800 flex items-center space-x-2.5">
              <Droplets className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block uppercase font-semibold">Avg Soil Moisture</span>
                <span className="font-bold text-sm text-emerald-400 font-mono truncate">
                  {Math.round(zones.reduce((acc, z) => acc + z.currentMoisture, 0) / zones.length)}% (Monitored)
                </span>
              </div>
            </div>

            <div className="bg-slate-900 p-2.5 sm:p-3 rounded-2xl border border-slate-800 flex items-center space-x-2.5">
              <Wind className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block uppercase font-semibold">Humidity & Wind</span>
                <span className="font-bold text-slate-100 text-sm font-mono truncate">{weatherData.humidity} • {weatherData.wind}</span>
              </div>
            </div>

            <div className="bg-slate-900 p-2.5 sm:p-3 rounded-2xl border border-slate-800 flex items-center space-x-2.5">
              <CloudSun className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 block uppercase font-semibold">Rain Probability</span>
                <span className="font-bold text-teal-400 text-sm font-mono truncate">{weatherData.rainChance} (+36h)</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 px-4 sm:px-6 pt-2 space-x-2 sm:space-x-6 text-xs sm:text-sm font-semibold text-slate-400 overflow-x-auto flex-shrink-0">
            <button
              onClick={() => setActiveTab('alerts')}
              className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeTab === 'alerts'
                  ? 'border-teal-400 text-teal-400 font-bold'
                  : 'border-transparent hover:text-slate-200'
              }`}
            >
              <BellRing className="w-4 h-4" />
              <span>Advisory Alerts ({alertsList.length - acknowledged.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('irrigation')}
              className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeTab === 'irrigation'
                  ? 'border-blue-400 text-blue-400 font-bold'
                  : 'border-transparent hover:text-slate-200'
              }`}
            >
              <Droplets className="w-4 h-4" />
              <span>Multi-Zone Irrigation ({zones.filter(z => z.pumpActive).length} Active)</span>
            </button>

            <button
              onClick={() => setActiveTab('forecast')}
              className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeTab === 'forecast'
                  ? 'border-emerald-400 text-emerald-400 font-bold'
                  : 'border-transparent hover:text-slate-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>7-Day NIMET Forecast</span>
            </button>

            <button
              onClick={() => setActiveTab('scenarios')}
              className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeTab === 'scenarios'
                  ? 'border-amber-400 text-amber-400 font-bold'
                  : 'border-transparent hover:text-slate-200'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Scenario Simulator</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">
            
            {/* TAB 1: Alerts List */}
            {activeTab === 'alerts' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Active Telemetry Warnings & Prescriptive Actions
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      Status: <strong className="text-teal-300">{weatherData.forecastStatus}</strong>
                    </span>
                  </div>

                  <button
                    onClick={() => handlePlayVoiceAlert()}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      audioPlaying
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 animate-pulse'
                        : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{audioPlaying ? 'Broadcasting Alert...' : 'Listen Voice Alert'}</span>
                  </button>
                </div>

                {alertsList.map((alert) => {
                  const isAck = acknowledged.includes(alert.id);
                  return (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-2xl border transition-all space-y-3 ${
                        isAck
                          ? 'bg-slate-950/40 border-slate-800 opacity-60'
                          : alert.type === 'critical'
                          ? 'bg-amber-950/30 border-amber-500/40'
                          : alert.type === 'warning'
                          ? 'bg-blue-950/30 border-blue-500/40'
                          : 'bg-slate-900 border-slate-800'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0 ${
                              alert.type === 'critical'
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                : alert.type === 'warning'
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            <AlertTriangle className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 flex-wrap">
                              <h5 className="text-sm font-bold text-white">{alert.title}</h5>
                              <span className="text-[10px] text-slate-400 font-mono">({alert.time})</span>
                            </div>
                            <span className="text-[10px] text-teal-400 font-semibold block">{alert.zone}</span>
                            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                              {alert.message}
                            </p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-2 self-end sm:self-center flex-shrink-0">
                          <button
                            onClick={() => handlePushSMS(alert.id, alert.title)}
                            className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-purple-300 border border-slate-700 flex items-center space-x-1"
                            title="Push SMS Alert to Registered Farmer"
                          >
                            <Smartphone className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">{smsPushed === alert.id ? 'SMS Sent!' : 'Push SMS'}</span>
                          </button>

                          {!isAck ? (
                            <button
                              onClick={() => handleAcknowledge(alert.id)}
                              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 whitespace-nowrap transition-colors"
                            >
                              Acknowledge
                            </button>
                          ) : (
                            <span className="flex items-center space-x-1 text-xs text-emerald-400 font-semibold px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30">
                              <Check className="w-3.5 h-3.5" />
                              <span>Acknowledged</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Local Dialect Voice Snippet */}
                      <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="italic">"{alert.localDialectNote}"</span>
                        <button
                          onClick={() => handlePlayVoiceAlert(alert.localDialectNote)}
                          className="text-teal-400 hover:underline flex items-center gap-1 font-semibold ml-2"
                        >
                          <Volume2 className="w-3 h-3" /> Speak
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* TAB 2: Multi-Zone Smart Irrigation Precision Controller */}
            {activeTab === 'irrigation' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="text-base font-bold text-white">Multi-Zone IoT Irrigation Telemetry</h4>
                    <p className="text-xs text-slate-400">Variable-rate water management with automated solar pump switching</p>
                  </div>

                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-slate-400">Total Water Conserved:</span>
                    <span className="font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                      +{zones.reduce((acc, z) => acc + z.waterSavedLitres, 0).toLocaleString()} Litres (+62%)
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {zones.map((zone) => (
                    <div
                      key={zone.id}
                      className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 hover:border-blue-500/30 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h5 className="text-sm sm:text-base font-bold text-white">{zone.name}</h5>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                              {zone.method}
                            </span>
                          </div>
                          <span className="text-xs text-slate-400">{zone.crop}</span>
                        </div>

                        {/* Pump Switch Button */}
                        <button
                          onClick={() => handleToggleZonePump(zone.id)}
                          disabled={isSimulating}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-bold text-xs shadow-lg transition-all ${
                            zone.pumpActive
                              ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-emerald-500/20'
                              : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700'
                          }`}
                        >
                          {isSimulating ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : zone.pumpActive ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>PUMP RUNNING (STOP)</span>
                            </>
                          ) : (
                            <>
                              <Zap className="w-3.5 h-3.5 text-amber-400" />
                              <span>START PUMP</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Soil Moisture Gauge & Depth telemetry */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-300 flex items-center gap-1">
                            <Droplets className="w-3.5 h-3.5 text-blue-400" /> Root Moisture: {zone.currentMoisture}%
                          </span>
                          <span className="text-slate-400 font-mono">Target: {zone.targetMoisture}%</span>
                        </div>

                        <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full transition-all duration-700 ${
                              zone.currentMoisture < 30
                                ? 'bg-gradient-to-r from-amber-600 to-amber-400'
                                : 'bg-gradient-to-r from-teal-500 to-blue-400'
                            }`}
                            style={{ width: `${zone.currentMoisture}%` }}
                          />
                        </div>
                      </div>

                      {/* Zone Metrics Grid */}
                      <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1 border-t border-slate-900">
                        <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800/80">
                          <span className="text-[9px] text-slate-400 uppercase font-semibold block">Flow Rate</span>
                          <span className="font-bold text-teal-400 font-mono">{zone.flowRate} L/min</span>
                        </div>
                        <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800/80">
                          <span className="text-[9px] text-slate-400 uppercase font-semibold block">Solenoid Valve</span>
                          <span className={`font-bold font-mono ${zone.valveStatus === 'Open' ? 'text-emerald-400' : 'text-slate-400'}`}>
                            {zone.valveStatus}
                          </span>
                        </div>
                        <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800/80">
                          <span className="text-[9px] text-slate-400 uppercase font-semibold block">Water Saved</span>
                          <span className="font-bold text-emerald-400 font-mono">+{zone.waterSavedLitres} L</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: 7-Day Hyper-Local NIMET Agro-Forecast */}
            {activeTab === 'forecast' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    7-Day Hyper-Local Agricultural Radar Forecast (NIMET Synced)
                  </h4>
                  <span className="text-[10px] text-emerald-400 font-mono">Radar Resolution: 1km²</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { day: 'Today (Mon)', temp: '31°C', condition: 'Sunny / Dry', rain: '10%', action: 'Irrigate Zone A', alertColor: 'text-amber-400' },
                    { day: 'Tuesday', temp: '29°C', condition: 'Partly Cloudy', rain: '35%', action: 'Normal Maintenance', alertColor: 'text-teal-400' },
                    { day: 'Wednesday', temp: '24°C', condition: 'Heavy Showers', rain: '92%', action: 'Hold Granular Fertilizer', alertColor: 'text-blue-400' },
                    { day: 'Thursday', temp: '27°C', condition: 'Light Rain', rain: '55%', action: 'Monitor Drainage Runoff', alertColor: 'text-emerald-400' },
                    { day: 'Friday', temp: '30°C', condition: 'Clear Sky', rain: '15%', action: 'Foliar Spray Safe', alertColor: 'text-teal-400' },
                    { day: 'Saturday', temp: '32°C', condition: 'Hot / Breezy', rain: '5%', action: 'Drip Irrigation Check', alertColor: 'text-amber-400' },
                    { day: 'Sunday', temp: '31°C', condition: 'Scattered Cloud', rain: '20%', action: 'Soil Probe Recalibration', alertColor: 'text-emerald-400' },
                    { day: 'Next Mon', temp: '28°C', condition: 'Morning Mist', rain: '40%', action: 'Inspect Cassava Stems', alertColor: 'text-teal-400' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 text-center space-y-2 hover:border-slate-700 transition-all">
                      <span className="text-xs font-bold text-slate-200 block">{item.day}</span>
                      <span className="text-xl font-extrabold text-teal-400 block font-display">{item.temp}</span>
                      <span className="text-[11px] text-slate-300 block truncate">{item.condition}</span>
                      <div className="pt-2 border-t border-slate-900 text-[10px]">
                        <span className="text-slate-400 block font-mono">Rain: {item.rain}</span>
                        <span className={`${item.alertColor} font-bold block mt-0.5 truncate`}>{item.action}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: Scenario Simulator */}
            {activeTab === 'scenarios' && (
              <div className="space-y-6">
                <div className="bg-slate-950 p-6 rounded-3xl border border-amber-500/30 space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-white">Live Microclimate Stress Simulator</h4>
                    <p className="text-xs text-slate-400">
                      Test how automated variable-rate irrigation and alert matrices dynamically react to extreme weather shocks.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'drought', name: 'Severe Midday Drought & Low Moisture', desc: 'Moisture drops to 24%, Evapotranspiration spikes to 6.8mm/day.', badge: 'Current Active' },
                      { id: 'flood', name: 'NIMET 42mm Heavy Flash Flood', desc: 'Precipitation 95%, soil moisture 78%, pumps automatically shut off.', badge: 'Rain Shock' },
                      { id: 'heatwave', name: 'Extreme Heatwave (38°C)', desc: 'Severe UV irradiance, seedling protection netting recommended.', badge: 'Heat Shock' },
                      { id: 'normal', name: 'Optimal Microclimate Conditions', desc: '29°C balanced temperature, steady 55% root moisture.', badge: 'Baseline' }
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => handleApplyScenario(s.id as any)}
                        className={`p-4 rounded-2xl border text-left transition-all space-y-1.5 ${
                          activeScenario === s.id
                            ? 'bg-amber-950/40 border-amber-500 text-amber-200'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-white">{s.name}</span>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                            {s.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{s.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs flex-shrink-0">
            <span className="text-slate-400 text-center sm:text-left text-[11px]">
              Connected to <strong>NIMET Radar & IoT Moisture Telemetry Network</strong>
            </span>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold shadow-md transition-all"
            >
              Done & Return to App
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
