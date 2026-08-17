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
  ChevronDown
} from 'lucide-react';
import {
  SUPPORTED_LANGUAGES,
  AI_PROMPT_SUGGESTIONS,
  getAiMultilingualResponse,
  speakAiText,
  LanguageOption
} from '../data/languages';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  langCode: string;
  timestamp: string;
  audioPlaying?: boolean;
}

interface MultilingualAiChatProps {
  selectedLang: string;
  onSelectLang: (lang: string) => void;
}

export const MultilingualAiChat: React.FC<MultilingualAiChatProps> = ({
  selectedLang,
  onSelectLang
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

    // Simulate AI thinking and generating localized response
    setTimeout(() => {
      const aiReplyText = getAiMultilingualResponse(query, selectedLang);
      const aiMsgId = `ai-${Date.now()}`;
      const aiMsg: Message = {
        id: aiMsgId,
        sender: 'ai',
        text: aiReplyText,
        langCode: selectedLang,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
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
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
        handleSendMessage(transcript);
      };

      recognition.onerror = (err: any) => {
        console.error("Speech recognition error:", err);
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

  const filteredLanguages = SUPPORTED_LANGUAGES.filter(l =>
    l.name.toLowerCase().includes(searchLangQuery.toLowerCase()) ||
    l.native.toLowerCase().includes(searchLangQuery.toLowerCase()) ||
    l.code.toLowerCase().includes(searchLangQuery.toLowerCase())
  );

  const currentPrompts = AI_PROMPT_SUGGESTIONS[selectedLang] || AI_PROMPT_SUGGESTIONS.en;

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-soil-primary via-emerald-600 to-teal-500 text-white shadow-2xl shadow-soil-primary/40 border border-emerald-300/40"
          aria-label="Open Multilingual AI Assistant"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-900" />
          
          <Bot className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
          
          <span className="hidden md:inline-block ml-2.5 font-bold text-xs pr-1">
            Multilingual AI Chat ({currentLangObj.flag} {currentLangObj.code.toUpperCase()})
          </span>
        </motion.button>
      </div>

      {/* Main Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[440px] h-[600px] max-h-[82vh] bg-slate-950 rounded-3xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-4 border-b border-slate-800 flex items-center justify-between relative z-20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-soil-primary to-emerald-700 flex items-center justify-center text-white shadow-lg shadow-soil-primary/30">
                  <Bot className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-sm text-white font-display">
                      SOILREVIVE AI Advisor
                    </span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold uppercase tracking-wider">
                      Multilingual
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Responsive in 13+ Languages & Dialects
                  </p>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center space-x-2">
                {/* Auto Voice Output Toggle */}
                <button
                  onClick={() => setAutoVoice(!autoVoice)}
                  title={autoVoice ? "Voice Output Active" : "Voice Output Muted"}
                  className={`p-2 rounded-xl border text-xs transition-all ${
                    autoVoice
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                      : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {autoVoice ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Language Selector Bar */}
            <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between relative z-10">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Globe className="w-3.5 h-3.5 text-soil-primary" />
                Active Language:
              </span>

              {/* Dropdown trigger */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-emerald-400 hover:border-emerald-500/50 transition-all shadow-inner"
                >
                  <span>{currentLangObj.flag}</span>
                  <span>{currentLangObj.name} ({currentLangObj.native})</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
                </button>

                {/* Dropdown menu */}
                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 max-h-72 overflow-y-auto"
                    >
                      <div className="relative mb-2">
                        <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
                        <input
                          type="text"
                          placeholder="Search language..."
                          value={searchLangQuery}
                          onChange={(e) => setSearchLangQuery(e.target.value)}
                          className="w-full pl-8 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div className="space-y-1">
                        {filteredLanguages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              onSelectLang(lang.code);
                              setLangDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                              selectedLang === lang.code
                                ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30'
                                : 'text-slate-300 hover:bg-slate-800'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <span>{lang.flag}</span>
                              <div>
                                <span className="block font-semibold">{lang.name}</span>
                                <span className="text-[10px] text-slate-400">{lang.native}</span>
                              </div>
                            </div>
                            {selectedLang === lang.code && (
                              <Check className="w-4 h-4 text-emerald-400" />
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
              {messages.map((msg) => {
                const isAi = msg.sender === 'ai';
                const isSpeechActive = activeSpeechId === msg.id;

                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${isAi ? 'items-start' : 'items-end'}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl p-4 text-xs leading-relaxed relative ${
                        isAi
                          ? 'bg-slate-900 border border-slate-800 text-slate-100 shadow-md'
                          : 'bg-gradient-to-r from-soil-primary to-emerald-700 text-white shadow-lg shadow-soil-primary/20'
                      }`}
                    >
                      {/* AI Header Badge */}
                      {isAi && (
                        <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800/80 pb-2 mb-2">
                          <span className="flex items-center gap-1 font-semibold text-emerald-400">
                            <Sparkles className="w-3 h-3" />
                            {currentLangObj.flag} {currentLangObj.name} AI Advice
                          </span>
                          <span>{msg.timestamp}</span>
                        </div>
                      )}

                      <p className="whitespace-pre-wrap">{msg.text}</p>

                      {/* AI Footer Toolbar */}
                      {isAi && (
                        <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                          <span className="text-emerald-400/80 font-medium">
                            ✓ Verified IITA Agronomy AI
                          </span>

                          <div className="flex items-center space-x-2">
                            {/* Read Aloud Voice Button */}
                            <button
                              onClick={() => handlePlaySpeech(msg.id, msg.text, msg.langCode)}
                              className={`p-1.5 rounded-lg border transition-all flex items-center space-x-1 ${
                                isSpeechActive
                                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold animate-pulse'
                                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-slate-700'
                              }`}
                              title="Listen to AI Voice Advice"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>{isSpeechActive ? 'Playing Voice...' : 'Listen Voice'}</span>
                            </button>

                            {/* Copy Button */}
                            <button
                              onClick={() => handleCopyText(msg.id, msg.text)}
                              className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                              title="Copy response"
                            >
                              {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>
                      )}

                      {!isAi && (
                        <span className="text-[9px] text-emerald-200/80 block text-right mt-1">
                          {msg.timestamp}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-2 text-xs text-slate-400 bg-slate-900 border border-slate-800 p-3 rounded-2xl w-fit"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                  <span>AI generating response in {currentLangObj.name}...</span>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Multilingual Preset Prompt Chips */}
            <div className="px-4 py-2 bg-slate-900/50 border-t border-slate-800/80 flex items-center space-x-2 overflow-x-auto scrollbar-none">
              {currentPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  className="whitespace-nowrap px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300 hover:border-emerald-500/50 hover:text-emerald-300 transition-all shrink-0"
                >
                  💡 {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 relative z-10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center space-x-2"
              >
                {/* Voice Input Microphone Button */}
                <button
                  type="button"
                  onClick={toggleListening}
                  title={isListening ? "Listening... Speak now" : "Speak in your language"}
                  className={`p-2.5 rounded-xl border transition-all ${
                    isListening
                      ? 'bg-red-500 text-white border-red-400 animate-bounce'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-emerald-400'
                  }`}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                {/* Text input */}
                <input
                  type="text"
                  placeholder={`Ask AI in ${currentLangObj.name} (${currentLangObj.native})...`}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-soil-primary to-emerald-600 text-white font-semibold text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:from-soil-primaryHover hover:to-emerald-700 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {isListening && (
                <p className="text-[10px] text-red-400 text-center mt-1 animate-pulse">
                  🎙️ Listening in {currentLangObj.name}... Speak now!
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
