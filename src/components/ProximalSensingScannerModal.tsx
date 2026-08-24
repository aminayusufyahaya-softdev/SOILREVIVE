import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Scan,
  Camera,
  Upload,
  Sparkles,
  RefreshCw,
  Zap,
  Volume2,
  CheckCircle2,
  AlertTriangle,
  Award,
  MessageSquare,
  Smartphone,
  Sliders,
  X,
  FileCheck,
  TrendingUp,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Droplets,
  DollarSign,
  Download
} from 'lucide-react';

import {
  analyzeProximalSoilScan,
  SoilScanInput,
  SoilScanAiResponse
} from '../data/agronomyAiBackend';
import { speakAiText } from '../data/languages';

interface ProximalSensingScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLang?: string;
  onOpenPassport?: (passportId?: string) => void;
  onOpenChatWithReport?: (reportText: string) => void;
}

export const ProximalSensingScannerModal: React.FC<ProximalSensingScannerModalProps> = ({
  isOpen,
  onClose,
  selectedLang = 'en',
  onOpenPassport,
  onOpenChatWithReport
}) => {
  const [scanMode, setScanMode] = useState<'camera' | 'upload' | 'telemetry'>('camera');
  const [selectedCrop, setSelectedCrop] = useState<string>('Maize');
  const [acreage, setAcreage] = useState<number>(2.5);

  // Live Proximal Telemetry State
  const [nitrogen, setNitrogen] = useState<number>(142);
  const [phosphorus, setPhosphorus] = useState<number>(38);
  const [potassium, setPotassium] = useState<number>(210);
  const [pH, setPH] = useState<number>(6.4);
  const [moisture, setMoisture] = useState<number>(45);

  // Camera video stream
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(false);

  // Uploaded photo state
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // AI Processing & Results State
  const [isScanning, setIsScanning] = useState(false);
  const [scanStepText, setScanStepText] = useState('');
  const [aiResponse, setAiResponse] = useState<SoilScanAiResponse | null>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [smsSent, setSmsSent] = useState(false);

  // Start/Stop Camera
  useEffect(() => {
    if (isOpen && scanMode === 'camera') {
      startCamera();
    } else {
      stopCamera();
    }
    return () => {
      stopCamera();
    };
  }, [isOpen, scanMode]);

  const startCamera = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setCameraActive(true);
          setCameraError(false);
        }
      }
    } catch (err) {
      console.warn("Camera stream unavailable, switching to optical simulation probe HUD:", err);
      setCameraActive(false);
      setCameraError(true);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraActive(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        setScanMode('upload');
      };
      reader.readAsDataURL(file);
    }
  };

  // Preset Soil Profiles
  const applyPreset = (presetName: string) => {
    if (presetName === 'enugu') {
      setSelectedCrop('Cassava');
      setNitrogen(115);
      setPhosphorus(32);
      setPotassium(160);
      setPH(5.2); // Acidic
      setMoisture(42);
    } else if (presetName === 'kano') {
      setSelectedCrop('Maize');
      setNitrogen(110);
      setPhosphorus(48);
      setPotassium(245);
      setPH(6.9);
      setMoisture(28); // Low moisture
    } else if (presetName === 'benue') {
      setSelectedCrop('Yam');
      setNitrogen(175);
      setPhosphorus(44);
      setPotassium(230);
      setPH(6.4);
      setMoisture(52);
    } else if (presetName === 'ogun') {
      setSelectedCrop('Oil Palm');
      setNitrogen(190);
      setPhosphorus(52);
      setPotassium(260);
      setPH(6.1);
      setMoisture(58);
    }
  };

  // Send to AI Handler
  const handleSendToAi = () => {
    setIsScanning(true);
    setAiResponse(null);
    setScanStepText('1/3: Optical Reflectance Spectral Telemetry Capture (350nm - 2500nm)...');

    setTimeout(() => {
      setScanStepText('2/3: Extracting Root-Zone N-P-K & Electrochemical pH Vectors...');
    }, 900);

    setTimeout(() => {
      setScanStepText('3/3: Running Agronomy AI Diagnostic & Prescriptive Fertilizer Model...');
    }, 1800);

    setTimeout(() => {
      const inputPayload: SoilScanInput = {
        nitrogen,
        phosphorus,
        potassium,
        pH,
        moisture,
        crop: selectedCrop,
        acreageHa: acreage,
        language: selectedLang
      };

      const result = analyzeProximalSoilScan(inputPayload);
      setAiResponse(result);
      setIsScanning(false);
      setScanStepText('');

      // Auto-play localized voice summary
      const script = result.localVoiceScript[selectedLang] || result.localVoiceScript.en;
      speakAiText(script, selectedLang);
    }, 2700);
  };

  const handlePlayVoice = () => {
    if (!aiResponse) return;
    setAudioPlaying(true);
    const script = aiResponse.localVoiceScript[selectedLang] || aiResponse.localVoiceScript.en;
    speakAiText(script, selectedLang);
    setTimeout(() => setAudioPlaying(false), 6000);
  };

  const handleOpenChat = () => {
    if (aiResponse && onOpenChatWithReport) {
      onOpenChatWithReport(
        `Proximal Soil Scan Diagnosis [${aiResponse.scanId}]: ${selectedCrop} Health Score ${aiResponse.healthScore}/100. Fertilizer: ${aiResponse.prescriptions[0]?.fertilizerName} (${aiResponse.prescriptions[0]?.ratePerHa}). Soil pH: ${pH}. How should I schedule application?`
      );
      onClose();
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
          className="bg-slate-900 border border-slate-800 rounded-3xl max-w-5xl w-full text-white shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col max-h-[94vh]"
        >
          {/* Top Header */}
          <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shadow-inner flex-shrink-0">
                <Scan className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center space-x-2 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    Proximal Soil Sensing & AI Diagnostics
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                    OPTICAL NIR / IITA MODEL
                  </span>
                </div>
                <p className="text-xs text-slate-400 hidden sm:block">
                  Live spectral probe sensing directly to the Agronomy AI engine for instant prescriptive diagnosis
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-all border border-slate-700 flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body: Split Screen on Desktop */}
          <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Viewfinder & Camera / Sensor Stream (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Viewfinder Mode Switcher */}
                <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800 text-xs">
                  <button
                    type="button"
                    onClick={() => setScanMode('camera')}
                    className={`flex-1 py-1.5 rounded-lg font-bold transition-all flex items-center justify-center space-x-1.5 ${
                      scanMode === 'camera'
                        ? 'bg-emerald-600 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Optical Probe</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScanMode('upload')}
                    className={`flex-1 py-1.5 rounded-lg font-bold transition-all flex items-center justify-center space-x-1.5 ${
                      scanMode === 'upload'
                        ? 'bg-emerald-600 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Photo Sample</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScanMode('telemetry')}
                    className={`flex-1 py-1.5 rounded-lg font-bold transition-all flex items-center justify-center space-x-1.5 ${
                      scanMode === 'telemetry'
                        ? 'bg-emerald-600 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Fine Tune</span>
                  </button>
                </div>

                {/* Viewfinder Box */}
                <div className="relative aspect-[4/3] rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center group">
                  
                  {/* Camera Video Stream or Fallback High-Res Simulation Graphic */}
                  {scanMode === 'camera' && cameraActive ? (
                    <video
                      ref={videoRef}
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />
                  ) : scanMode === 'upload' && uploadedImage ? (
                    <img
                      src={uploadedImage}
                      alt="Soil sample uploaded"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                      <img
                        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop"
                        alt="Soil proximal scan background"
                        className="absolute inset-0 w-full h-full object-cover opacity-25 scale-105"
                      />
                      <div className="relative z-10 space-y-2">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                          <Scan className="w-6 h-6 animate-pulse" />
                        </div>
                        <span className="text-xs font-bold text-slate-200 block">
                          Optical NIR Spectrometry Probe Active
                        </span>
                        <span className="text-[10px] text-slate-400 block font-mono">
                          Targeting Root Zone Depth: 0 - 30cm
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Optical Scanning Laser Line & Grid Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="w-full h-full border-2 border-emerald-500/40 rounded-3xl p-4 flex flex-col justify-between">
                      <div className="flex justify-between text-[9px] font-mono text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded backdrop-blur">
                        <span>BAND: 350-2500nm</span>
                        <span className="animate-pulse">HUD LIVE</span>
                      </div>

                      {/* Moving laser scan beam when scanning */}
                      {isScanning && (
                        <motion.div
                          initial={{ top: '10%' }}
                          animate={{ top: ['10%', '85%', '10%'] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                          className="absolute left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10b981]"
                        />
                      )}

                      <div className="flex justify-between text-[9px] font-mono text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded backdrop-blur">
                        <span>PH: {pH}</span>
                        <span>NPK: {nitrogen}-{phosphorus}-{potassium}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hidden File Input for Sample Upload */}
                  {scanMode === 'upload' && !uploadedImage && (
                    <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-slate-900/90 z-20 hover:bg-slate-900 transition-colors p-4 text-center">
                      <Upload className="w-8 h-8 text-emerald-400 mb-2" />
                      <span className="text-xs font-bold text-white">Upload Soil Photo or Test Strip</span>
                      <span className="text-[10px] text-slate-400 mt-1">Tap to select photo from device</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Quick Presets for Nigerian Soil Types */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                    Quick Nigerian Agro Presets:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <button
                      type="button"
                      onClick={() => applyPreset('enugu')}
                      className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 text-left transition-all"
                    >
                      <span className="font-bold text-white block">Enugu Cassava</span>
                      <span className="text-[9px] text-amber-400 font-mono">Acidic pH 5.2 • Low K</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => applyPreset('kano')}
                      className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 text-left transition-all"
                    >
                      <span className="font-bold text-white block">Kano Maize</span>
                      <span className="text-[9px] text-blue-400 font-mono">Semi-Arid • High K</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => applyPreset('benue')}
                      className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 text-left transition-all"
                    >
                      <span className="font-bold text-white block">Benue Yam</span>
                      <span className="text-[9px] text-emerald-400 font-mono">Loam • Balanced</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => applyPreset('ogun')}
                      className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 text-left transition-all"
                    >
                      <span className="font-bold text-white block">Ogun Cocoa/Palm</span>
                      <span className="text-[9px] text-purple-400 font-mono">High Organic SOC</span>
                    </button>
                  </div>
                </div>

                {/* Target Crop & Acreage Selector */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="text-[10px] text-slate-400 font-semibold mb-1 block uppercase">Target Crop</label>
                    <select
                      value={selectedCrop}
                      onChange={(e) => setSelectedCrop(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 font-semibold"
                    >
                      {['Maize', 'Cassava', 'Yam', 'Rice', 'Sorghum', 'Soybeans', 'Groundnut', 'Oil Palm', 'Cocoa', 'Vegetables'].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-400 font-semibold mb-1 block uppercase">Land Size (Ha)</label>
                    <input
                      type="number"
                      step="0.5"
                      min="0.5"
                      max="50"
                      value={acreage}
                      onChange={(e) => setAcreage(parseFloat(e.target.value) || 1)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono font-bold"
                    />
                  </div>
                </div>

                {/* Main Action Scan Button */}
                <button
                  type="button"
                  onClick={handleSendToAi}
                  disabled={isScanning}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center space-x-2 active:scale-[0.99]"
                >
                  {isScanning ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>{scanStepText}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-emerald-300" />
                      <span>Scan Soil & Send to AI Engine</span>
                    </>
                  )}
                </button>
              </div>

              {/* Right Column: Interactive Sliders & AI Response Output (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Manual Fine-Tuning Sliders */}
                <div className="bg-slate-950 p-4 rounded-3xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                      Proximal Sensor Telemetry Input
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">99.8% PRECISION</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {/* Nitrogen */}
                    <div className="space-y-1 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Nitrogen (N)</span>
                        <span className="font-bold text-emerald-400 font-mono">{nitrogen} mg/kg</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="260"
                        value={nitrogen}
                        onChange={(e) => setNitrogen(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />
                    </div>

                    {/* Phosphorus */}
                    <div className="space-y-1 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Phosphorus (P)</span>
                        <span className="font-bold text-blue-400 font-mono">{phosphorus} mg/kg</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="80"
                        value={phosphorus}
                        onChange={(e) => setPhosphorus(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                    </div>

                    {/* Potassium */}
                    <div className="space-y-1 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Potassium (K)</span>
                        <span className="font-bold text-amber-400 font-mono">{potassium} mg/kg</span>
                      </div>
                      <input
                        type="range"
                        min="80"
                        max="320"
                        value={potassium}
                        onChange={(e) => setPotassium(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                      />
                    </div>

                    {/* pH Level */}
                    <div className="space-y-1 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-400">Acidity (pH)</span>
                        <span className={`font-bold font-mono ${pH < 6.0 ? 'text-amber-400' : 'text-purple-400'}`}>{pH} pH</span>
                      </div>
                      <input
                        type="range"
                        min="4.0"
                        max="8.5"
                        step="0.1"
                        value={pH}
                        onChange={(e) => setPH(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                    </div>
                  </div>
                </div>

                {/* AI Diagnostic Output Card */}
                {aiResponse ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-950 p-5 rounded-3xl border border-emerald-500/40 shadow-2xl space-y-4"
                  >
                    {/* Header Score & Yield */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">
                            {aiResponse.healthScore} <span className="text-sm text-slate-400">/ 100</span>
                          </span>
                          <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 ${aiResponse.gradeColor}`}>
                            {aiResponse.healthGrade}
                          </span>
                        </div>
                        <span className="text-xs text-slate-300 font-semibold">{aiResponse.cropSuitability} ({acreage} Ha)</span>
                      </div>

                      {/* Yield Boost Badge */}
                      <div className="bg-emerald-950/80 px-3 py-1.5 rounded-xl border border-emerald-500/40 text-right">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">Yield Prediction</span>
                        <span className="text-sm font-bold text-emerald-400 font-mono">
                          +{aiResponse.yieldBoostPercent}% ({aiResponse.currentYieldEst} → {aiResponse.potentialYieldEst})
                        </span>
                      </div>
                    </div>

                    {/* Prescriptive Fertilizer Blend */}
                    <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                        Prescribed Formulation for {selectedCrop}:
                      </span>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-white">{aiResponse.prescriptions[0]?.fertilizerName}</h4>
                          <p className="text-[11px] text-slate-400">{aiResponse.prescriptions[0]?.applicationTiming}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-emerald-400 font-mono block">
                            {aiResponse.prescriptions[0]?.ratePerHa}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {aiResponse.prescriptions[0]?.totalBagsRequired} Bags (50kg) Total
                          </span>
                        </div>
                      </div>

                      {/* Lime conditioner note if acidic */}
                      {aiResponse.soilConditioner.needed && (
                        <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/30 text-[11px] text-amber-300 flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-400" />
                          <span>
                            <strong>pH Correction:</strong> {aiResponse.soilConditioner.reason} Apply {aiResponse.soilConditioner.ratePerHa}.
                          </span>
                        </div>
                      )}
                    </div>

                    {/* AI Agronomist Explanatory Paragraph */}
                    <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed italic">
                      "{aiResponse.aiAgronomistReport}"
                    </div>

                    {/* Action Hub Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs font-bold">
                      <button
                        type="button"
                        onClick={handlePlayVoice}
                        className="p-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center space-x-1.5 transition-all"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-purple-400" />
                        <span>{audioPlaying ? 'Playing...' : 'Voice Note'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleOpenChat}
                        className="p-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center space-x-1.5 transition-all"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Ask AI Chat</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (onOpenPassport) {
                            onOpenPassport(aiResponse.passportDraft.id);
                            onClose();
                          }
                        }}
                        className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center space-x-1.5 transition-all shadow-md"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>Mint Passport</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setSmsSent(true);
                          setTimeout(() => setSmsSent(false), 3000);
                        }}
                        className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center space-x-1.5 transition-all shadow-md"
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>{smsSent ? 'SMS Sent!' : 'Push SMS'}</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-slate-950/60 p-8 rounded-3xl border border-slate-800/80 text-center space-y-3 flex flex-col items-center justify-center min-h-[220px]">
                    <Cpu className="w-10 h-10 text-slate-600 animate-pulse" />
                    <span className="text-xs font-bold text-slate-300">Ready to Analyze Soil Content</span>
                    <p className="text-[11px] text-slate-500 max-w-sm">
                      Point the optical probe scanner at your field or adjust the proximal telemetry sliders, then tap <strong>"Scan Soil & Send to AI Engine"</strong>.
                    </p>
                  </div>
                )}

              </div>

            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs flex-shrink-0">
            <span className="text-slate-400 text-[11px]">
              Engine: <strong>IITA Proximal NIR Calibration & Agronomy Model</strong>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold border border-slate-700 transition-all"
            >
              Done & Return
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
