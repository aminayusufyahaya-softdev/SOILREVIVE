import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ShieldCheck,
  QrCode,
  Download,
  Share2,
  TrendingUp,
  X,
  CheckCircle,
  FileCheck,
  Search,
  Sparkles,
  MapPin,
  Calendar,
  Layers,
  Volume2,
  Smartphone,
  Check,
  Copy,
  ExternalLink,
  Plus,
  RefreshCw,
  Building2,
  DollarSign,
  Activity,
  BarChart3,
  Cpu,
  ChevronRight,
  Printer
} from 'lucide-react';

import { speakAiText, SUPPORTED_LANGUAGES } from '../data/languages';

export interface SoilPassportRecord {
  id: string;
  farmerName: string;
  farmName: string;
  location: string;
  coordinates: string;
  state: string;
  lga: string;
  crop: string;
  acreage: string;
  issueDate: string;
  expiryDate: string;
  naqsCertified: boolean;
  iitaCertified: boolean;
  creditRating: string;
  creditScore: number;
  healthScore: number;
  ndviIndex: number;
  socPercent: number; // Soil Organic Carbon %
  cecValue: string; // Cation Exchange Capacity
  valuationPerHectare: string;
  eligibleLoanAmount: string;
  blockchainHash: string;
  inspectorName: string;
  inspectorOrg: string;
  npkStatus: {
    nitrogen: string;
    phosphorus: string;
    potassium: string;
    pH: string;
  };
  micronutrients: {
    zinc: string;
    iron: string;
    boron: string;
    magnesium: string;
  };
  recommendedInputs: {
    name: string;
    rate: string;
    subsidyCode: string;
  }[];
  audioSummary: Record<string, string>;
}

export const PRESET_PASSPORTS: Record<string, SoilPassportRecord> = {
  'NG-SOIL-2026-8849': {
    id: 'NG-SOIL-2026-8849',
    farmerName: 'Chinedu Okonkwo',
    farmName: 'GreenPastures Agro Farms (5.4 Ha)',
    location: 'Bwari LGA, FCT Abuja',
    coordinates: '9.1352° N, 7.3812° E',
    state: 'FCT Abuja',
    lga: 'Bwari',
    crop: 'Maize & Cassava',
    acreage: '5.4 Hectares',
    issueDate: '12 March 2026',
    expiryDate: '12 March 2027',
    naqsCertified: true,
    iitaCertified: true,
    creditRating: 'AAA+ (Bank Loan Collateral Eligible)',
    creditScore: 92,
    healthScore: 84,
    ndviIndex: 0.78,
    socPercent: 2.8,
    cecValue: '18.4 cmol/kg',
    valuationPerHectare: '₦3,850,000 / Ha',
    eligibleLoanAmount: '₦18,500,000 (BoI & NIRSAL Pre-Approved)',
    blockchainHash: '0x8f2a99d3e4b7c112009a47ef681b901ca52084c8e7529fa0332810a9f1b',
    inspectorName: 'Dr. Amina Y. Farouk',
    inspectorOrg: 'IITA Proximal Diagnostics Lab, Ibadan',
    npkStatus: {
      nitrogen: '168 mg/kg (Optimal)',
      phosphorus: '44 mg/kg (High)',
      potassium: '220 mg/kg (Optimal)',
      pH: '6.5 pH (Balanced Neutral)'
    },
    micronutrients: {
      zinc: '2.4 mg/kg (Adequate)',
      iron: '18.2 mg/kg (Optimal)',
      boron: '0.8 mg/kg (Good)',
      magnesium: '42.0 mg/kg (High)'
    },
    recommendedInputs: [
      { name: 'NPK 15-15-15 Blended', rate: '200 kg/ha', subsidyCode: 'SUB-NAQS-8849-A' },
      { name: 'Agricultural Lime (Dolomite)', rate: '100 kg/ha', subsidyCode: 'SUB-IITA-8849-B' }
    ],
    audioSummary: {
      en: 'Soil passport for Chinedu Okonkwo shows health score of 84 percent with optimal potassium and balanced pH. Pre-approved for bank collateral.',
      ha: 'Fasfo din kasar gona na Chinedu Okonkwo yana nuna ingancin kashi 84 cikin dari. Bankuna sun amince da shi domin samun rance.',
      yo: 'Iwe-eri ile oko Chinedu Okonkwo fihan pe ilera ile re je ogorin ati merin ninu ogorun. O ye fun awon ile-ifowopamo lati gba fun awin.',
      ig: 'Akwụkwọ paspọtụ ala Chinedu Okonkwo na-egosi na ahụike ala ya dị pasent iri asatọ na anọ. Ụlọ akụ na-anabata ya maka mbinye ego.',
      pcm: 'Soil passport for Chinedu Okonkwo show say him farm soil dey Grade A 84 percent. Bank fit give am loan straight up!'
    }
  },
  'NG-SOIL-2026-KANO-104': {
    id: 'NG-SOIL-2026-KANO-104',
    farmerName: 'Alhaji Musa Garba',
    farmName: 'Dambatta Solar Agro Estate (12.0 Ha)',
    location: 'Dambatta LGA, Kano State',
    coordinates: '12.4381° N, 8.5144° E',
    state: 'Kano State',
    lga: 'Dambatta',
    crop: 'Sorghum, Sesame & Groundnut',
    acreage: '12.0 Hectares',
    issueDate: '04 February 2026',
    expiryDate: '04 February 2027',
    naqsCertified: true,
    iitaCertified: true,
    creditRating: 'AA+ (Commercial Credit Verified)',
    creditScore: 88,
    healthScore: 78,
    ndviIndex: 0.71,
    socPercent: 1.9,
    cecValue: '14.2 cmol/kg',
    valuationPerHectare: '₦2,950,000 / Ha',
    eligibleLoanAmount: '₦32,000,000 (Bank of Agriculture)',
    blockchainHash: '0x1c4e77a82b99f3014a6dc921ee038ab1164907cb3982e01fa24bb7894a',
    inspectorName: 'Engr. Bello Danladi',
    inspectorOrg: 'National Agricultural Quarantine Service (NAQS)',
    npkStatus: {
      nitrogen: '115 mg/kg (Moderate Deficit)',
      phosphorus: '32 mg/kg (Adequate)',
      potassium: '240 mg/kg (Very High)',
      pH: '6.8 pH (Optimal for Legumes)'
    },
    micronutrients: {
      zinc: '1.8 mg/kg (Moderate)',
      iron: '22.0 mg/kg (High)',
      boron: '0.6 mg/kg (Adequate)',
      magnesium: '36.5 mg/kg (Adequate)'
    },
    recommendedInputs: [
      { name: 'Urea 46-0-0 Granular', rate: '120 kg/ha', subsidyCode: 'SUB-KANO-104-N' },
      { name: 'Single Super Phosphate (SSP)', rate: '80 kg/ha', subsidyCode: 'SUB-KANO-104-P' }
    ],
    audioSummary: {
      en: 'Soil passport for Alhaji Musa Garba in Kano shows healthy potassium levels but requires Nitrogen boost before sorghum planting.',
      ha: 'Fasfo din Alhaji Musa Garba a Kano yana nuna potassium yana da kyau amma ana buƙatar ƙarin takin Nitrogen kafin shuka dawa.',
      yo: 'Iwe-eri ile Alhaji Musa Garba ni Kano fihan pe potassium po daadaa sugbon o nilo nitrogen.',
      ig: 'Paspọtụ ala Alhaji Musa Garba na Kano na-egosi na ala ya chọrọ fatilayiza Nitrogen tupu a kụọ mkpụrụ.',
      pcm: 'Alhaji Musa Garba passport from Kano dey show say potassium plenty well well, just add small Nitrogen fertilizer.'
    }
  },
  'NG-SOIL-2026-OGUN-302': {
    id: 'NG-SOIL-2026-OGUN-302',
    farmerName: 'Mrs. Folashade Adeyemi',
    farmName: 'Ijebu High-Density Oil Palm & Plantain (8.5 Ha)',
    location: 'Ijebu-Ode LGA, Ogun State',
    coordinates: '6.8210° N, 3.9160° E',
    state: 'Ogun State',
    lga: 'Ijebu-Ode',
    crop: 'Oil Palm, Cocoa & Plantain',
    acreage: '8.5 Hectares',
    issueDate: '18 January 2026',
    expiryDate: '18 January 2027',
    naqsCertified: true,
    iitaCertified: true,
    creditRating: 'AAA (Premium ESG Collateral)',
    creditScore: 96,
    healthScore: 91,
    ndviIndex: 0.85,
    socPercent: 3.4,
    cecValue: '22.8 cmol/kg',
    valuationPerHectare: '₦5,200,000 / Ha',
    eligibleLoanAmount: '₦40,000,000 (Stanbic IBTC Agro Fund)',
    blockchainHash: '0x99e4f011d88a2b3478ce45a709bb1048a9235e109dfbc8813470aa81239c',
    inspectorName: 'Prof. K. Babatunde',
    inspectorOrg: 'Federal Ministry of Agriculture & Food Security (FMAFS)',
    npkStatus: {
      nitrogen: '192 mg/kg (High)',
      phosphorus: '51 mg/kg (High)',
      potassium: '260 mg/kg (High)',
      pH: '6.1 pH (Optimal for Tree Crops)'
    },
    micronutrients: {
      zinc: '3.1 mg/kg (High)',
      iron: '26.4 mg/kg (High)',
      boron: '1.2 mg/kg (High)',
      magnesium: '48.0 mg/kg (Optimal)'
    },
    recommendedInputs: [
      { name: 'Organic Bio-Stimulant Spray', rate: '5 L/ha', subsidyCode: 'SUB-OGUN-302-BIO' },
      { name: 'Muriate of Potash (MOP)', rate: '75 kg/ha', subsidyCode: 'SUB-OGUN-302-K' }
    ],
    audioSummary: {
      en: 'Soil passport for Folashade Adeyemi in Ogun State is Grade AAA with exceptional 91 percent fertility rating, fully qualified for major agro loans.',
      ha: 'Fasfo din Folashade Adeyemi a jihar Ogun yana da daraja mafi girma ta kashi 91 cikin dari.',
      yo: 'Iwe-eri ile Folashade Adeyemi ni Ipinle Ogun ni o dara ju pẹlu 91% rating, o lẹtọ fun awin nla.',
      ig: 'Paspọtụ Folashade Adeyemi dị na Ogun Steeti nwere akara 91%, na-egosi na ala ahụ nwere ezigbo nri.',
      pcm: 'Madam Folashade soil passport score pass all! 91 percent Grade AAA, bank go ready release funds sharp sharp.'
    }
  },
  'NG-SOIL-2026-BENUE-512': {
    id: 'NG-SOIL-2026-BENUE-512',
    farmerName: 'Terver Iorfa',
    farmName: 'Food Basket Commercial Grain Farm (15.2 Ha)',
    location: 'Gboko LGA, Benue State',
    coordinates: '7.3190° N, 8.9950° E',
    state: 'Benue State',
    lga: 'Gboko',
    crop: 'Yam, Soybeans & Yellow Maize',
    acreage: '15.2 Hectares',
    issueDate: '28 February 2026',
    expiryDate: '28 February 2027',
    naqsCertified: true,
    iitaCertified: true,
    creditRating: 'AAA (NIRSAL De-Risked Tier 1)',
    creditScore: 90,
    healthScore: 86,
    ndviIndex: 0.81,
    socPercent: 2.9,
    cecValue: '19.1 cmol/kg',
    valuationPerHectare: '₦4,100,000 / Ha',
    eligibleLoanAmount: '₦55,000,000 (Central Bank Anchor Borrowers)',
    blockchainHash: '0x3344bba8901ef561284aacc0912389e01f567a89bc331409988ea71428',
    inspectorName: 'Dr. Emmanuel Tor-Agbidye',
    inspectorOrg: 'National Root Crops Research Institute (NRCRI)',
    npkStatus: {
      nitrogen: '175 mg/kg (Optimal)',
      phosphorus: '46 mg/kg (High)',
      potassium: '230 mg/kg (Optimal)',
      pH: '6.4 pH (Balanced)'
    },
    micronutrients: {
      zinc: '2.6 mg/kg (Optimal)',
      iron: '21.5 mg/kg (Optimal)',
      boron: '0.9 mg/kg (Optimal)',
      magnesium: '44.0 mg/kg (High)'
    },
    recommendedInputs: [
      { name: 'NPK 20-10-10 SoilRevive Special', rate: '250 kg/ha', subsidyCode: 'SUB-BENUE-512-Y' },
      { name: 'Rhizobium Inoculant for Soybeans', rate: '500 g/ha', subsidyCode: 'SUB-BENUE-512-RH' }
    ],
    audioSummary: {
      en: 'Soil passport for Terver Iorfa in Benue State shows high organic fertility with 86 percent health index.',
      ha: 'Fasfo din Terver Iorfa a jihar Benue yana nuna kasar tana da kyau sosai tare da kashi 86 cikin dari.',
      yo: 'Iwe-eri ile Terver Iorfa ni Ipinle Benue fihan ilera ile to peye pẹlu ami 86%.',
      ig: 'Paspọtụ Terver Iorfa na Benue Steeti na-egosi na ala ya dị mma nke ukwuu maka ịkọ ji na soya.',
      pcm: 'Terver Iorfa farm inside Benue State get 86 percent score, perfect for Yam and Soybeans.'
    }
  }
};

interface DigitalSoilPassportProps {
  isOpen: boolean;
  onClose: () => void;
  initialPassportId?: string;
  selectedLang?: string;
}

export const DigitalSoilPassportModal: React.FC<DigitalSoilPassportProps> = ({
  isOpen,
  onClose,
  initialPassportId = 'NG-SOIL-2026-8849',
  selectedLang = 'en'
}) => {
  const [passportId, setPassportId] = useState(initialPassportId);
  const [searchQuery, setSearchQuery] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'passport' | 'spectral' | 'financial' | 'issue' | 'local'>('passport');
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [smsSent, setSmsSent] = useState(false);

  // New Issue Simulator States
  const [isScanningNew, setIsScanningNew] = useState(false);
  const [newFarmerName, setNewFarmerName] = useState('');
  const [newFarmName, setNewFarmName] = useState('');
  const [newState, setNewState] = useState('Kaduna');
  const [newLGA, setNewLGA] = useState('Zaria');
  const [newCrop, setNewCrop] = useState('Maize & Ginger');
  const [newAcreage, setNewAcreage] = useState('4.0 Hectares');
  const [passportsDatabase, setPassportsDatabase] = useState<Record<string, SoilPassportRecord>>(PRESET_PASSPORTS);

  const currentPassport = passportsDatabase[passportId] || PRESET_PASSPORTS['NG-SOIL-2026-8849'];

  const handleSearchVerify = (e?: React.FormEvent, customId?: string) => {
    if (e) e.preventDefault();
    const targetId = (customId || searchQuery).trim().toUpperCase();
    if (!targetId) return;

    setIsVerifying(true);
    setTimeout(() => {
      if (passportsDatabase[targetId]) {
        setPassportId(targetId);
      } else {
        // Fallback or dynamically generate
        const generatedRecord: SoilPassportRecord = {
          ...PRESET_PASSPORTS['NG-SOIL-2026-8849'],
          id: targetId,
          farmerName: 'Verified Field Scout Farmer',
          farmName: `Registered Agro Plot (${targetId})`,
          blockchainHash: '0x' + Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        };
        setPassportsDatabase(prev => ({ ...prev, [targetId]: generatedRecord }));
        setPassportId(targetId);
      }
      setIsVerifying(false);
      setActiveTab('passport');
    }, 800);
  };

  const handleCreateNewPassport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFarmerName.trim()) return;

    setIsScanningNew(true);
    setTimeout(() => {
      const generatedId = `NG-SOIL-2026-${newState.substring(0, 3).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
      const randomScore = Math.floor(75 + Math.random() * 20);
      const newRecord: SoilPassportRecord = {
        id: generatedId,
        farmerName: newFarmerName,
        farmName: newFarmName || `${newFarmerName}'s Agro Plot (${newAcreage})`,
        location: `${newLGA} LGA, ${newState} State`,
        coordinates: '10.5105° N, 7.4165° E',
        state: `${newState} State`,
        lga: newLGA,
        crop: newCrop,
        acreage: newAcreage,
        issueDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
        expiryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
        naqsCertified: true,
        iitaCertified: true,
        creditRating: randomScore > 85 ? 'AAA+ (Bank Loan Eligible)' : 'AA+ (Commercial Approved)',
        creditScore: randomScore + 5,
        healthScore: randomScore,
        ndviIndex: parseFloat((0.68 + Math.random() * 0.2).toFixed(2)),
        socPercent: parseFloat((2.0 + Math.random() * 1.5).toFixed(1)),
        cecValue: `${(15.0 + Math.random() * 6).toFixed(1)} cmol/kg`,
        valuationPerHectare: `₦${(3000000 + Math.random() * 1500000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} / Ha`,
        eligibleLoanAmount: `₦${(15000000 + Math.random() * 20000000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} (BoI/BoA Pre-Approved)`,
        blockchainHash: '0x' + Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2),
        inspectorName: 'Field Scout Proximal Unit #14',
        inspectorOrg: 'IITA / NAQS Federal Soil Registry',
        npkStatus: {
          nitrogen: '155 mg/kg (Optimal)',
          phosphorus: '40 mg/kg (Adequate)',
          potassium: '215 mg/kg (Optimal)',
          pH: '6.5 pH (Balanced)'
        },
        micronutrients: {
          zinc: '2.3 mg/kg (Adequate)',
          iron: '19.4 mg/kg (Optimal)',
          boron: '0.8 mg/kg (Good)',
          magnesium: '40.0 mg/kg (High)'
        },
        recommendedInputs: [
          { name: 'NPK 15-15-15 Balanced Formula', rate: '200 kg/ha', subsidyCode: `SUB-${generatedId}-1` },
          { name: 'Organic Soil Conditioner', rate: '100 kg/ha', subsidyCode: `SUB-${generatedId}-2` }
        ],
        audioSummary: {
          en: `Soil passport generated for ${newFarmerName} in ${newState} State. Overall health score is ${randomScore} percent.`,
          ha: `An samar da fasfo din kasar gona ga ${newFarmerName} a jihar ${newState}. Ingancin kasar kashi ${randomScore} ne.`,
          yo: `A ti se agbekale iwe-eri ile fun ${newFarmerName} ni Ipinle ${newState}. Ilera ile naa je ${randomScore} ninu ogorun.`,
          ig: `Emepụtara paspọtụ ala maka ${newFarmerName} na ${newState} Steeti. Akara ahụike ala ya bụ pasent ${randomScore}.`,
          pcm: `New soil passport ready for ${newFarmerName} inside ${newState} State. Health score na ${randomScore} percent!`
        }
      };

      setPassportsDatabase(prev => ({ ...prev, [generatedId]: newRecord }));
      setPassportId(generatedId);
      setIsScanningNew(false);
      setActiveTab('passport');
    }, 1800);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://soilrevive.ng/verify/${currentPassport.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrintOrDownloadPDF = () => {
    window.print();
  };

  const handlePlayVoice = (lang?: string) => {
    const targetLang = lang || selectedLang || 'en';
    const textToSpeak = currentPassport.audioSummary[targetLang] || currentPassport.audioSummary.en;
    setAudioPlaying(true);
    speakAiText(textToSpeak, targetLang);
    setTimeout(() => setAudioPlaying(false), 6500);
  };

  const handleSendSMS = () => {
    setSmsSent(true);
    setTimeout(() => setSmsSent(false), 4000);
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
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-emerald-950 p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shadow-inner flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    Digital Soil Passport Suite
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                    NAQS & IITA VERIFIED
                  </span>
                </div>
                <p className="text-xs text-slate-400 hidden sm:block">
                  Immutable soil health identity, bank loan collateral certification & spectral telemetry
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

          {/* Quick Registry Search & Selector */}
          <div className="p-3 sm:p-4 bg-slate-950 border-b border-slate-800 flex-shrink-0 space-y-2">
            <form onSubmit={handleSearchVerify} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Soil Passport ID (e.g. NG-SOIL-2026-8849, KANO-104, OGUN-302...)"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5 flex-1 sm:flex-initial"
                >
                  {isVerifying ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Search className="w-3.5 h-3.5" />}
                  <span>{isVerifying ? 'Verifying...' : 'Verify Passport'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('issue')}
                  className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Issue New</span>
                  <span className="sm:hidden">New</span>
                </button>
              </div>
            </form>

            {/* Quick Preset Badges */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px]">
              <span className="text-slate-500 font-semibold uppercase text-[10px] whitespace-nowrap">Sample Passports:</span>
              {Object.keys(PRESET_PASSPORTS).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setPassportId(key);
                    setActiveTab('passport');
                  }}
                  className={`px-2 py-0.5 rounded-lg border whitespace-nowrap transition-colors font-mono text-[10px] ${
                    passportId === key
                      ? 'bg-blue-600 text-white border-blue-400 font-bold'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {key.replace('NG-SOIL-2026-', '')} ({PRESET_PASSPORTS[key].state.split(' ')[0]})
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 px-4 sm:px-6 pt-2 space-x-2 sm:space-x-6 text-xs sm:text-sm font-semibold text-slate-400 overflow-x-auto flex-shrink-0">
            <button
              onClick={() => setActiveTab('passport')}
              className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeTab === 'passport'
                  ? 'border-blue-400 text-blue-400 font-bold'
                  : 'border-transparent hover:text-slate-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Official Passport</span>
            </button>

            <button
              onClick={() => setActiveTab('spectral')}
              className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeTab === 'spectral'
                  ? 'border-emerald-400 text-emerald-400 font-bold'
                  : 'border-transparent hover:text-slate-200'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Spectral Diagnostics (Modern)</span>
            </button>

            <button
              onClick={() => setActiveTab('financial')}
              className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeTab === 'financial'
                  ? 'border-amber-400 text-amber-400 font-bold'
                  : 'border-transparent hover:text-slate-200'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Bank Collateral & Loan</span>
            </button>

            <button
              onClick={() => setActiveTab('local')}
              className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeTab === 'local'
                  ? 'border-purple-400 text-purple-400 font-bold'
                  : 'border-transparent hover:text-slate-200'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>Local Farmer Audio / SMS</span>
            </button>

            <button
              onClick={() => setActiveTab('issue')}
              className={`pb-3 border-b-2 whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeTab === 'issue'
                  ? 'border-teal-400 text-teal-400 font-bold'
                  : 'border-transparent hover:text-slate-200'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Scan & Issue New</span>
            </button>
          </div>

          {/* Modal Body Content (Scrollable) */}
          <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">
            
            {/* TAB 1: Official Verified Soil Passport Certificate */}
            {activeTab === 'passport' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-5 sm:p-7 rounded-3xl border border-blue-500/40 shadow-2xl relative overflow-hidden space-y-6">
                  
                  {/* Watermark Logo */}
                  <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
                    <Award className="w-72 h-72 text-white" />
                  </div>

                  {/* Passport Header Details */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-bold">
                          FEDERAL REPUBLIC OF NIGERIA • FMAFS / NAQS / IITA
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-white font-display mt-0.5">
                        {currentPassport.farmName}
                      </h4>
                      <p className="text-xs text-slate-300 font-semibold mt-0.5">
                        Holder: <span className="text-emerald-400 font-bold">{currentPassport.farmerName}</span> • Crop: {currentPassport.crop} ({currentPassport.acreage})
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-slate-400 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-400" />
                        <span>{currentPassport.location} ({currentPassport.coordinates})</span>
                      </div>
                    </div>

                    {/* QR Code Security Badge */}
                    <div className="bg-white p-3 rounded-2xl shadow-xl flex flex-col items-center justify-center border border-slate-200 self-start sm:self-center">
                      <QrCode className="w-16 h-16 text-slate-950" />
                      <span className="text-[9px] font-mono font-bold text-slate-950 mt-1 tracking-tight">
                        {currentPassport.id}
                      </span>
                    </div>
                  </div>

                  {/* Primary Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {/* Health Score */}
                    <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Overall Soil Health Index</span>
                      <div className="flex items-baseline space-x-1.5">
                        <span className="text-3xl font-extrabold text-blue-400 font-display">{currentPassport.healthScore}</span>
                        <span className="text-xs text-slate-400 font-bold">/ 100 ({currentPassport.healthScore >= 80 ? 'Grade A Optimal' : 'Grade B Good'})</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-1">
                        <div
                          className="bg-gradient-to-r from-teal-400 to-blue-500 h-full rounded-full"
                          style={{ width: `${currentPassport.healthScore}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-teal-400 block pt-1 font-semibold">NDVI Index: {currentPassport.ndviIndex} (High Biomass)</span>
                    </div>

                    {/* Credit Rating */}
                    <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Agricultural Bank Rating</span>
                      <span className="text-xl font-bold text-emerald-400 font-mono block">
                        {currentPassport.creditRating}
                      </span>
                      <span className="text-[11px] text-slate-300 font-semibold block">
                        Credit Score: {currentPassport.creditScore}/100
                      </span>
                      <span className="text-[10px] text-slate-400 block">Accepted by NIRSAL, BoA & BoI</span>
                    </div>

                    {/* Compliance Certification */}
                    <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-2">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Verified Regulatory Seals</span>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-1 rounded-lg bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> NAQS Passed
                        </span>
                        <span className="px-2 py-1 rounded-lg bg-blue-950 text-blue-400 text-[10px] font-bold border border-blue-500/30 flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" /> IITA Certified
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-500 block truncate">
                        Hash: {currentPassport.blockchainHash.substring(0, 20)}...
                      </span>
                    </div>
                  </div>

                  {/* Proximal Soil Chemistry Breakdown */}
                  <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center justify-between">
                      <span>Proximal Sensing Diagnostics Matrix</span>
                      <span className="text-[10px] text-emerald-400 font-normal">Real-Time Spectral Probe Telemetry</span>
                    </h5>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                        <span className="text-slate-400 text-[10px] block">Nitrogen (N)</span>
                        <span className="font-bold text-emerald-400 text-sm">{currentPassport.npkStatus.nitrogen}</span>
                      </div>
                      <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                        <span className="text-slate-400 text-[10px] block">Phosphorus (P)</span>
                        <span className="font-bold text-blue-400 text-sm">{currentPassport.npkStatus.phosphorus}</span>
                      </div>
                      <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                        <span className="text-slate-400 text-[10px] block">Potassium (K)</span>
                        <span className="font-bold text-amber-400 text-sm">{currentPassport.npkStatus.potassium}</span>
                      </div>
                      <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                        <span className="text-slate-400 text-[10px] block">Acidity / pH</span>
                        <span className="font-bold text-purple-400 text-sm">{currentPassport.npkStatus.pH}</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommended Inputs & Subsidy Voucher */}
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Prescriptive Certified Inputs (Agro-Dealer Subsidized)
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {currentPassport.recommendedInputs.map((item, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="font-bold text-white block">{item.name}</span>
                            <span className="text-[10px] text-slate-400">Application Rate: {item.rate}</span>
                          </div>
                          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            {item.subsidyCode}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Timestamps & Inspector */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[11px] text-slate-400 pt-2 border-t border-slate-800 gap-2">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>Issued: {currentPassport.issueDate} • Valid Until: {currentPassport.expiryDate}</span>
                    </div>
                    <div>
                      <span>Inspector: <strong>{currentPassport.inspectorName}</strong> ({currentPassport.inspectorOrg})</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Modern Spectral Diagnostics & Soil Physics */}
            {activeTab === 'spectral' && (
              <div className="space-y-6">
                <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white">Proximal NIR/SWIR Reflectance Spectral Curve</h4>
                      <p className="text-xs text-slate-400">Non-invasive Optical Diagnostic Spectrogram (350nm - 2500nm)</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                      99.8% ACCURACY
                    </span>
                  </div>

                  {/* Spectral Simulated Chart Graphic */}
                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <div className="h-44 w-full flex items-end justify-between gap-1 sm:gap-2 px-2 pt-4 pb-2 border-b border-slate-800 relative">
                      {/* Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                        <div className="border-b border-slate-400 w-full" />
                        <div className="border-b border-slate-400 w-full" />
                        <div className="border-b border-slate-400 w-full" />
                      </div>

                      {[
                        { label: '400nm (Blue)', val: 30, color: 'from-blue-600 to-blue-400' },
                        { label: '550nm (Green)', val: 55, color: 'from-emerald-600 to-emerald-400' },
                        { label: '670nm (Chlorophyll)', val: 42, color: 'from-green-600 to-green-400' },
                        { label: '780nm (Red Edge)', val: 78, color: 'from-teal-600 to-teal-400' },
                        { label: '1100nm (NIR Biomass)', val: 86, color: 'from-cyan-600 to-cyan-400' },
                        { label: '1450nm (Water Absorption)', val: 64, color: 'from-blue-600 to-blue-300' },
                        { label: '1940nm (Clay/Mineral)', val: 72, color: 'from-purple-600 to-purple-400' },
                        { label: '2200nm (Organic SOC)', val: 88, color: 'from-amber-600 to-amber-400' }
                      ].map((bar, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 z-10">
                          <span className="text-[10px] font-mono text-slate-300 font-bold">{bar.val}%</span>
                          <div
                            className={`w-full max-w-[28px] rounded-t-lg bg-gradient-to-t ${bar.color} transition-all duration-700`}
                            style={{ height: `${bar.val * 1.3}px` }}
                          />
                          <span className="text-[8px] sm:text-[9px] text-slate-400 text-center font-mono truncate w-full">
                            {bar.label.split(' ')[0]}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-400 text-center">
                      Spectral absorption band confirms high organic matter binding with clay-loam topsoil.
                    </p>
                  </div>

                  {/* Micro-Nutrient Details */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Soil Organic Carbon (SOC)</span>
                      <span className="text-lg font-bold text-amber-400 font-mono">{currentPassport.socPercent}%</span>
                      <span className="text-[10px] text-emerald-400 block font-semibold">High Fertility Level</span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Cation Exchange (CEC)</span>
                      <span className="text-lg font-bold text-purple-400 font-mono">{currentPassport.cecValue}</span>
                      <span className="text-[10px] text-blue-400 block font-semibold">High Nutrient Retention</span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Zinc (Zn) & Iron (Fe)</span>
                      <span className="text-sm font-bold text-teal-400 block font-mono">{currentPassport.micronutrients.zinc}</span>
                      <span className="text-[10px] text-slate-400 block font-mono">Fe: {currentPassport.micronutrients.iron}</span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Magnesium (Mg) & Boron</span>
                      <span className="text-sm font-bold text-blue-400 block font-mono">{currentPassport.micronutrients.magnesium}</span>
                      <span className="text-[10px] text-slate-400 block font-mono">B: {currentPassport.micronutrients.boron}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Financial Valuation & Bank Collateral Report */}
            {activeTab === 'financial' && (
              <div className="space-y-6">
                <div className="bg-slate-950 p-6 rounded-3xl border border-amber-500/30 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white">Bank Loan Collateral Appraisal</h4>
                        <p className="text-xs text-slate-400">NIRSAL Agricultural Risk De-Risking Assessment</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs font-mono border border-emerald-500/30">
                      TIER-1 APPROVED
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Fertility Land Valuation</span>
                      <span className="text-xl font-bold text-emerald-400 font-mono block">
                        {currentPassport.valuationPerHectare}
                      </span>
                      <span className="text-[10px] text-slate-400 block">Based on verified 5-year soil yield baseline</span>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Pre-Approved Credit Line</span>
                      <span className="text-xl font-bold text-blue-400 font-mono block">
                        {currentPassport.eligibleLoanAmount.split(' ')[0]}
                      </span>
                      <span className="text-[10px] text-slate-400 block">BoI, BoA & Commercial Banks</span>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Crop Insurance Underwriting</span>
                      <span className="text-xl font-bold text-amber-400 font-mono block">
                        NAIC Qualified
                      </span>
                      <span className="text-[10px] text-slate-400 block">100% Drought & Flood Protection</span>
                    </div>
                  </div>

                  {/* Bank Sign-off Box */}
                  <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
                    <h5 className="font-bold text-white uppercase text-[11px] tracking-wider">
                      Immutable Digital Financial Footprint
                    </h5>
                    <p className="text-slate-300 leading-relaxed">
                      This Soil Passport guarantees that the land owned by <strong>{currentPassport.farmerName}</strong> has been tested for nitrogen depletion, toxicity, and water retention capacity. Financial institutions can issue agricultural loans without physical on-site soil lab delays.
                    </p>
                    <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>Underwriter: NIRSAL Agricultural Guarantee Scheme</span>
                      <span className="text-emerald-400 font-bold">Risk Score: 0.12 (Extremely Low)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: Local Farmer Mode (Voice & SMS) */}
            {activeTab === 'local' && (
              <div className="space-y-6">
                <div className="bg-slate-950 p-6 rounded-3xl border border-purple-500/30 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
                        <Volume2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white">Local Farmer Accessibility Hub</h4>
                        <p className="text-xs text-slate-400">Native Audio Readouts, USSD & 2-Way SMS Delivery</p>
                      </div>
                    </div>
                  </div>

                  {/* Language Audio Buttons */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Listen to Soil Passport Audio Summary:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { code: 'en', name: 'English', flag: '🇬🇧' },
                        { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
                        { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
                        { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
                        { code: 'pcm', name: 'Pidgin', flag: '🇳🇬' }
                      ].map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handlePlayVoice(lang.code)}
                          className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 hover:bg-slate-800 flex items-center space-x-2.5 transition-all text-left"
                        >
                          <span className="text-base">{lang.flag}</span>
                          <div>
                            <span className="text-xs font-bold text-white block">{lang.name}</span>
                            <span className="text-[10px] text-purple-400 flex items-center gap-1">
                              <Volume2 className="w-3 h-3" /> Listen Audio
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* SMS Dispatcher Simulation */}
                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs font-bold text-white">
                        <Smartphone className="w-4 h-4 text-purple-400" />
                        <span>Push Passport Summary to Farmer's Phone (SMS)</span>
                      </div>
                      <button
                        onClick={handleSendSMS}
                        disabled={smsSent}
                        className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-all flex items-center space-x-1"
                      >
                        {smsSent ? <Check className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
                        <span>{smsSent ? 'SMS Dispatched!' : 'Send SMS'}</span>
                      </button>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-300 font-mono">
                      "SOILREVIVE PASSPORT [{currentPassport.id}]: {currentPassport.farmerName}, your soil score is {currentPassport.healthScore}%. Optimal for {currentPassport.crop}. Pick subsidized NPK at nearest agent."
                    </div>
                  </div>

                  {/* USSD Verification Snippet */}
                  <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-xs flex items-center justify-between">
                    <div>
                      <span className="font-bold text-purple-300 block">Offline USSD Dial Code:</span>
                      <span className="text-[11px] text-slate-300">Dial <strong>*384*764*{currentPassport.id.replace(/\D/g, '')}#</strong> on any feature phone to verify without data.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: Issue New Soil Passport Simulator */}
            {activeTab === 'issue' && (
              <div className="space-y-6">
                <div className="bg-slate-950 p-6 rounded-3xl border border-teal-500/30 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <h4 className="text-base sm:text-lg font-bold text-white">Issue / Scan Instant Soil Passport</h4>
                    <p className="text-xs text-slate-400">Generate a verified digital passport for any Nigerian farm plot in seconds</p>
                  </div>

                  <form onSubmit={handleCreateNewPassport} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-400 font-semibold mb-1 block">Farmer Full Name *</label>
                        <input
                          type="text"
                          required
                          value={newFarmerName}
                          onChange={(e) => setNewFarmerName(e.target.value)}
                          placeholder="e.g. Ibrahim Lawal"
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-slate-400 font-semibold mb-1 block">Farm / Estate Name (Optional)</label>
                        <input
                          type="text"
                          value={newFarmName}
                          onChange={(e) => setNewFarmName(e.target.value)}
                          placeholder="e.g. Sunrise Organic Farms"
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-slate-400 font-semibold mb-1 block">State *</label>
                        <select
                          value={newState}
                          onChange={(e) => setNewState(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
                        >
                          <option value="Kaduna">Kaduna</option>
                          <option value="Kano">Kano</option>
                          <option value="Ogun">Ogun</option>
                          <option value="Oyo">Oyo</option>
                          <option value="Benue">Benue</option>
                          <option value="Enugu">Enugu</option>
                          <option value="FCT Abuja">FCT Abuja</option>
                          <option value="Plateau">Plateau</option>
                          <option value="Niger">Niger</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs text-slate-400 font-semibold mb-1 block">LGA *</label>
                        <input
                          type="text"
                          required
                          value={newLGA}
                          onChange={(e) => setNewLGA(e.target.value)}
                          placeholder="e.g. Zaria, Bwari, Gboko..."
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-slate-400 font-semibold mb-1 block">Target Crop *</label>
                        <input
                          type="text"
                          required
                          value={newCrop}
                          onChange={(e) => setNewCrop(e.target.value)}
                          placeholder="e.g. Maize, Cassava, Rice, Yam..."
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-slate-400 font-semibold mb-1 block">Land Area (Ha) *</label>
                        <input
                          type="text"
                          required
                          value={newAcreage}
                          onChange={(e) => setNewAcreage(e.target.value)}
                          placeholder="e.g. 4.5 Hectares"
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isScanningNew}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-xs shadow-lg shadow-teal-600/20 transition-all flex items-center justify-center space-x-2"
                    >
                      {isScanningNew ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Running Proximal Spectral Probe Scan & Blockchain Minting...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Run Instant Proximal Scan & Mint Passport</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}

          </div>

          {/* Action Buttons Bottom Footer */}
          <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <button
                onClick={handleCopyLink}
                className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center justify-center space-x-1.5 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
                <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
              </button>

              <button
                onClick={() => handlePlayVoice()}
                className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center justify-center space-x-1.5 transition-all"
              >
                <Volume2 className="w-3.5 h-3.5 text-purple-400" />
                <span>{audioPlaying ? 'Playing...' : 'Voice Summary'}</span>
              </button>
            </div>

            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <button
                onClick={handlePrintOrDownloadPDF}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/20 flex items-center justify-center space-x-1.5 transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Download Official PDF</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
