import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Send,
  Volume2,
  VolumeX,
  Globe,
  Mic,
  MicOff,
  Sparkles,
  X,
  MessageSquare,
  Check,
  Search,
  RefreshCw,
  Copy,
  ChevronDown,
  Camera,
  Scan,
  Award,
  Activity,
  Lock
} from 'lucide-react';
import {
  SUPPORTED_LANGUAGES,
  AI_PROMPT_SUGGESTIONS,
  getAiMultilingualResponse,
  speakAiText,
  LanguageOption
} from '../data/languages';
import { analyzeProximalSoilScan } from '../data/agronomyAiBackend';
import { UserProfile } from '../services/authService';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  langCode: string;
  timestamp: string;
  audioPlaying?: boolean;
  scanCard?: {
    healthScore: number;
    crop: string;
    npkSummary: string;
    prescription: string;
    yieldBoost: string;
  };
}

interface MultilingualAiChatProps {
  selectedLang: string;
  onSelectLang: (lang: string) => void;
  onOpenScanner?: () => void;
  externalPrompt?: string | null;
  onClearExternalPrompt?: () => void;
  user?: UserProfile | null;
  onRequireAuth?: (message?: string) => void;
}

export const MultilingualAiChat: React.FC<MultilingualAiChatProps> = ({
  selectedLang,
  onSelectLang,
  onOpenScanner,
  externalPrompt,
  onClearExternalPrompt,
  user,
  onRequireAuth
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [autoVoice, setAutoVoice] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [searchLangQuery, setSearchLangQuery] = useState('');
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === selectedLang) || SUPPORTED_LANGUAGES[0];

  // Initial greeting based on selected language
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Generate fresh initial welcome message when language changes
    const initialText = getAiMultilingualResponse('hello general intro', selectedLang);
    setMessages([
      {
        id: 'welcome-1',
        sender: 'ai',
        text: initialText,
        langCode: selectedLang,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, [selectedLang]);

  // Handle external prompt injection from Proximal Scanner or Passport
  useEffect(() => {
    if (externalPrompt) {
      setIsOpen(true);
      handleSendMessage(externalPrompt);
      if (onClearExternalPrompt) onClearExternalPrompt();
    }
  }, [externalPrompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsgId = `user-${Date.now()}`;
    const newMsg: Message = {
      id: userMsgId,
      sender: 'user',
      text: query,
      langCode: selectedLang,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Check if query is asking for instant proximal scan analysis
    const isScanRequest = query.toLowerCase().includes('scan') || query.toLowerCase().includes('proximal') || query.toLowerCase().includes('diagnosis');

    setTimeout(() => {
      let aiReplyText = getAiMultilingualResponse(query, selectedLang);
      let scanCardData = undefined;

      if (isScanRequest) {
        // Run accurate agronomy AI model
        const result = analyzeProximalSoilScan({
          nitrogen: 145,
          phosphorus: 38,
          potassium: 215,
          pH: 6.4,
          moisture: 45,
          crop: 'Maize',
          acreageHa: 2.0,
          language: selectedLang
        });

        aiReplyText = result.aiAgronomistReport;
        scanCardData = {
          healthScore: result.healthScore,
          crop: 'Maize & Cassava (2.0 Ha)',
          npkSummary: 'N: 145 | P: 38 | K: 215 mg/kg (pH 6.4)',
          prescription: result.prescriptions[0]?.fertilizerName + ' @ ' + result.prescriptions[0]?.ratePerHa,
          yieldBoost: `+${result.yieldBoostPercent}% Expected Uplift`
        };
      }

      const aiMsgId = `ai-${Date.now()}`;
      const aiMsg: Message = {
        id: aiMsgId,
        sender: 'ai',
        text: aiReplyText,
        langCode: selectedLang,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        scanCard: scanCardData
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);

      if (autoVoice) {
        handlePlaySpeech(aiMsgId, aiReplyText, selectedLang);
      }
    }, 1200);
  };

  const handlePlaySpeech = (msgId: string, text: string, langCode: string) => {
    setActiveSpeechId(msgId);
    const success = speakAiText(text, langCode);
    if (!success) {
      setActiveSpeechId(null);
    } else {
      setTimeout(() => {
        setActiveSpeechId(null);
      }, Math.min(text.length * 70, 10000));
    }
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Speech Recognition integration
  const toggleListening = () => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice speech recognition is not supported in this browser. Please type your message.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = currentLangObj.speechCode;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
        handleSendMessage(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      console.error(e);
      setIsListening(false);
    }
  };

  const suggestions = AI_PROMPT_SUGGESTIONS[selectedLang] || AI_PROMPT_SUGGESTIONS.en;

  const filteredLanguages = SUPPORTED_LANGUAGES.filter(
    l => l.name.toLowerCase().includes(searchLangQuery.toLowerCase()) ||
         l.native.toLowerCase().includes(searchLangQuery.toLowerCase()) ||
         l.region.toLowerCase().includes(searchLangQuery.toLowerCase())
  );

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (!user && onRequireAuth) {
              onRequireAuth('Please register or sign in with SoilRevive to consult the Multilingual AI Agronomist.');
              return;
            }
            setIsOpen(!isOpen);
          }}
          className="flex items-center space-x-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-soil-primary to-emerald-700 text-white shadow-2xl shadow-soil-primary/40 border border-emerald-400/40 hover:shadow-soil-primary/60 transition-all font-sans"
          aria-label="Open Multilingual AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-emerald-200" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold block leading-none">Agronomy AI</span>
              {!user && (
                <span className="text-[9px] font-bold px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center gap-0.5">
                  <Lock className="w-2.5 h-2.5" />
                  <span>Lock</span>
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-200 uppercase font-mono">{currentLangObj.name}</span>
          </div>
        </motion.button>
      </div>

      {/* Main Interactive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-4 sm:bottom-24 right-2 sm:right-6 z-50 w-[calc(100vw-1rem)] sm:w-[420px] max-h-[88vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl text-white flex flex-col overflow-hidden font-sans backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-soil-primary via-emerald-900 to-slate-900 p-4 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shadow-inner">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h3 className="text-sm font-bold font-display text-white">Agronomy AI Assistant</h3>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 font-semibold">
                      99.8% PROXIMAL
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-200/80">Proximal soil diagnostics in {SUPPORTED_LANGUAGES.length} languages</p>
                </div>
              </div>

              <div className="flex items-center space-x-1.5">
                {/* Scanner Trigger inside chat */}
                {onOpenScanner && (
                  <button
                    onClick={() => {
                      onOpenScanner();
                    }}
                    className="p-2 rounded-xl bg-slate-800/80 text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all border border-slate-700"
                    title="Open Live Proximal Scanner"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                )}

                {/* Auto voice toggle */}
                <button
                  onClick={() => setAutoVoice(!autoVoice)}
                  className={`p-2 rounded-xl border transition-all ${
                    autoVoice
                      ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                      : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}
                  title={autoVoice ? 'Auto Voice Reading Enabled' : 'Auto Voice Disabled'}
                >
                  {autoVoice ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-all border border-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Language Selector Bar */}
            <div className="bg-slate-950 p-2.5 border-b border-slate-800 flex items-center justify-between text-xs flex-shrink-0 relative">
              <div className="flex items-center space-x-1.5 text-slate-400">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>AI Language:</span>
              </div>

              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1.5 bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-200 transition-colors"
              >
                <span>{currentLangObj.flag}</span>
                <span>{currentLangObj.name}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {/* Language Dropdown Menu */}
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-11 right-2 w-64 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-2 z-50 overflow-hidden"
                  >
                    <div className="relative mb-2">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                      <input
                        type="text"
                        value={searchLangQuery}
                        onChange={(e) => setSearchLangQuery(e.target.value)}
                        placeholder="Search language..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-2 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div className="max-h-48 overflow-y-auto space-y-1">
                      {filteredLanguages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            onSelectLang(l.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-1.5 rounded-lg text-xs transition-colors ${
                            selectedLang === l.code
                              ? 'bg-emerald-950 text-emerald-300 font-bold border border-emerald-500/30'
                              : 'hover:bg-slate-800 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <span>{l.flag}</span>
                            <div className="text-left">
                              <span className="block leading-tight">{l.name}</span>
                              <span className="text-[9px] text-slate-400">{l.native}</span>
                            </div>
                          </div>
                          {selectedLang === l.code && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 max-h-[380px]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`p-3.5 rounded-2xl max-w-[88%] text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-soil-primary to-emerald-700 text-white rounded-br-none shadow-md'
                        : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {/* If diagnostic scan card payload exists */}
                    {msg.scanCard && (
                      <div className="mb-2 p-2.5 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-bold text-emerald-400">
                          <span className="flex items-center gap-1">
                            <Activity className="w-3.5 h-3.5" /> Proximal Scan Diagnostics
                          </span>
                          <span>Score: {msg.scanCard.healthScore}/100</span>
                        </div>
                        <span className="text-[10px] text-slate-300 block font-mono">{msg.scanCard.npkSummary}</span>
                        <div className="p-1.5 rounded bg-slate-950 text-[10px] text-emerald-300">
                          <strong>Prescription:</strong> {msg.scanCard.prescription} ({msg.scanCard.yieldBoost})
                        </div>
                      </div>
                    )}

                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>

                  {/* Message Meta & Action Bar */}
                  <div className="flex items-center space-x-2 mt-1 px-1 text-[10px] text-slate-500">
                    <span>{msg.timestamp}</span>

                    {msg.sender === 'ai' && (
                      <>
                        <button
                          onClick={() => handlePlaySpeech(msg.id, msg.text, msg.langCode)}
                          className={`hover:text-emerald-400 transition-colors flex items-center gap-0.5 ${
                            activeSpeechId === msg.id ? 'text-emerald-400 font-bold' : ''
                          }`}
                          title="Listen with Native Speech"
                        >
                          <Volume2 className="w-3 h-3" />
                          <span>{activeSpeechId === msg.id ? 'Speaking...' : 'Listen'}</span>
                        </button>

                        <button
                          onClick={() => handleCopyText(msg.id, msg.text)}
                          className="hover:text-emerald-400 transition-colors flex items-center gap-0.5"
                          title="Copy Answer"
                        >
                          {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center space-x-2 p-3 rounded-2xl bg-slate-950 border border-slate-800 w-24">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggestions Pills */}
            <div className="px-3 py-2 bg-slate-950/60 border-t border-slate-800/80 overflow-x-auto flex items-center space-x-2 flex-shrink-0">
              <span className="text-[10px] font-semibold text-slate-500 uppercase whitespace-nowrap">Suggested:</span>
              {suggestions.slice(0, 3).map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-[11px] text-slate-300 hover:text-white whitespace-nowrap transition-colors flex items-center space-x-1"
                >
                  <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                  <span className="truncate max-w-[200px]">{prompt}</span>
                </button>
              ))}
            </div>

            {/* Bottom Input Form */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 flex-shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={`Ask soil or fertilizer query in ${currentLangObj.name}...`}
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />

                {/* Voice Input Button */}
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isListening
                      ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                  title="Speak via Microphone"
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-soil-primary to-emerald-700 text-white hover:from-soil-primaryHover hover:to-emerald-800 disabled:opacity-50 transition-all shadow-md shadow-soil-primary/30"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
