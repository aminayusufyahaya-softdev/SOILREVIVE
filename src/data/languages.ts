export interface LanguageOption {
  code: string;
  name: string;
  native: string;
  region: string;
  flag: string;
  speechCode: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', native: 'English', region: 'Global / Nigeria', flag: '🇬🇧', speechCode: 'en-GB' },
  { code: 'ha', name: 'Hausa', native: 'Harshen Hausa', region: 'Northern Nigeria', flag: '🇳🇬', speechCode: 'ha-NG' },
  { code: 'yo', name: 'Yoruba', native: 'Èdè Yorùbá', region: 'Southwestern Nigeria', flag: '🇳🇬', speechCode: 'yo-NG' },
  { code: 'ig', name: 'Igbo', native: 'Asụsụ Igbo', region: 'Southeastern Nigeria', flag: '🇳🇬', speechCode: 'ig-NG' },
  { code: 'pcm', name: 'Nigerian Pidgin', native: 'Naija Pidgin', region: 'West Africa', flag: '🇳🇬', speechCode: 'en-NG' },
  { code: 'fr', name: 'French', native: 'Français', region: 'Francophone Africa', flag: '🇫🇷', speechCode: 'fr-FR' },
  { code: 'sw', name: 'Swahili', native: 'Kiswahili', region: 'East Africa', flag: '🇰🇪', speechCode: 'sw-KE' },
  { code: 'ar', name: 'Arabic', native: 'العربية', region: 'North Africa & Middle East', flag: '🇸🇩', speechCode: 'ar-SA' },
  { code: 'es', name: 'Spanish', native: 'Español', region: 'Global', flag: '🇪🇸', speechCode: 'es-ES' },
  { code: 'pt', name: 'Portuguese', native: 'Português', region: 'Angola / Mozambique', flag: '🇵🇹', speechCode: 'pt-PT' },
  { code: 'ff', name: 'Fulfulde', native: 'Fulfulde (Fulani)', region: 'West & Central Africa', flag: '🇳🇬', speechCode: 'en-NG' },
  { code: 'de', name: 'German', native: 'Deutsch', region: 'Europe', flag: '🇩🇪', speechCode: 'de-DE' },
  { code: 'zh', name: 'Chinese', native: '中文 (Mandarin)', region: 'Global', flag: '🇨🇳', speechCode: 'zh-CN' }
];

export interface AiVoiceSample {
  title: string;
  dialect: string;
  text: string;
  audioDesc: string;
  badge: string;
}

export const AI_VOICE_SAMPLES: Record<string, AiVoiceSample> = {
  en: {
    title: "Field Soil Health Diagnostic Advisory",
    dialect: "Natural Agronomist Voice",
    text: "Proximal root-zone sensing shows mild potassium deficiency with balanced nitrogen levels. We recommend applying 150 kilograms per hectare of certified NPK 15-15-15 before the next scheduled rainfall.",
    audioDesc: "Natural field agronomist audio advisory",
    badge: "English Agronomy Voice"
  },
  ha: {
    title: "Shawarar Duba Sinadaran Ƙasa ta Hausa",
    dialect: "Harshen Hausa na Ƙasar Hausa",
    text: "Sakamakon gwajin ƙasar gonarka yana nuna cewa shukarka tana buƙatar ƙarin takin NPK 15-15-15 domin ƙara yawan amfanin gona. Zaka iya samun ingantaccen taki a kasuwar SOILREVIVE kai tsaye.",
    audioDesc: "Muryar kwararren masanin noma a Hausa",
    badge: "Hausa Agronomy Voice"
  },
  yo: {
    title: "Ìmọ̀ràn Àyẹ̀wò Ilẹ̀ Oko lédè Yorùbá",
    dialect: "Èdè Yorùbá Àdánidá",
    text: "Àyẹ̀wò ilẹ̀ oko rẹ fihàn pé ilẹ̀ náà nílò àfikún ajílẹ̀ NPK 20-10-10 kí o tó gbin àgbàdo tàbí gbágùúdá rẹ. O lè ra ajílẹ̀ tòótọ́ lórí pẹpẹ SOILREVIVE láìbẹ̀rù ajílẹ̀ àdàkàdekè.",
    audioDesc: "Muryar ìmọ̀ràn àgbẹ̀ lédè Yorùbá",
    badge: "Yoruba Agronomy Voice"
  },
  ig: {
    title: "Ndụmọdụ Nlekọta Ala n'Asụsụ Igbo",
    dialect: "Asụsụ Igbo Ọdịnala",
    text: "Nyocha ala ubi gị na-egosi na ala gị chọrọ ezigbo fatịlaịza NPK 15-15-15 iji mee ka ji na akpụ mịa nke ọma. Biko zụta fatịlaịza dị mma n'ụlọ ahịa SOILREVIVE Verified taa.",
    audioDesc: "Olu ndụmọdụ ọrụ ugbo n'asụsụ Igbo",
    badge: "Igbo Agronomy Voice"
  },
  pcm: {
    title: "Naija Pidgin Farm Advisory",
    dialect: "Natural West African Pidgin",
    text: "The soil test show say your farm need small potassium fertilizer. Put 150kg of original NPK 15-15-15 before rain start to fall so that your harvest go heavy well well.",
    audioDesc: "Natural Pidgin farming voice advisory",
    badge: "Pidgin Agronomy Voice"
  },
  fr: {
    title: "Avis Agronomique en Français",
    dialect: "Voix Naturelle Agronome",
    text: "L'analyse proximale du sol indique un besoin en potassium dans la zone racinaire. Nous vous recommandons d'épandre 150 kg par hectare d'engrais NPK 15-15-15 certifié avant la prochaine pluie.",
    audioDesc: "Guide vocal agronomique naturel",
    badge: "Français Agronomie"
  },
  sw: {
    title: "Ushauri wa Udongo kwa Kiswahili",
    dialect: "Kiswahili Sanifu",
    text: "Uchunguzi wa udongo unaonyesha upungufu wa potasiamu kwenye mizizi. Tunapendekeza kuweka kilo 150 kwa hekta ya mbolea ya NPK 15-15-15 kabla ya msimu wa mvua.",
    audioDesc: "Sauti asilia ya ushauri wa kilimo",
    badge: "Swahili Kilimo Voice"
  },
  ar: {
    title: "التوجيه الزراعي باللغة العربية",
    dialect: "العربية الفصحى",
    text: "تظهر قياسات فحص التربة وجود نقص في البوتاسيوم في منطقة الجذور. نوصي بإضافة 150 كيلوغراماً لكل هكتار من سماد NPK المعتمد قبل هطول الأمطار لزيادة الإنتاجية.",
    audioDesc: "توجيه صوتي زراعي طبيعي",
    badge: "Arabic Agronomy Voice"
  },
  es: {
    title: "Recomendación de Suelo en Español",
    dialect: "Español Natural",
    text: "El análisis proximal del suelo indica una ligera deficiencia de potasio. Recomendamos aplicar 150 kg por hectárea de fertilizante certificado NPK 15-15-15 antes de las lluvias.",
    audioDesc: "Asesoramiento agronómico de voz natural",
    badge: "Español Agronomía"
  },
  pt: {
    title: "Recomendação Agronómica em Português",
    dialect: "Português Natural",
    text: "A análise do solo revela a necessidade de potássio na zona radicular. Recomendamos a aplicação de 150 kg por hectare de fertilizante NPK 15-15-15 certificado antes das chuvas.",
    audioDesc: "Orientação agronómica por voz natural",
    badge: "Português Agronomia"
  },
  ff: {
    title: "Wasiyaaji Leydi e Fulfulde",
    dialect: "Fulfulde",
    text: "Limtooji ƴeewndo leydi mon hollitii ina haani ɓeydude takki NPK 15-15-15 ngam heɓde gese mawɗe. Zaku iya heɓde takki laaɓɗo e SOILREVIVE.",
    audioDesc: "Sawtu wasiyaaji ndema Fulfulde",
    badge: "Fulfulde Agronomy Voice"
  },
  de: {
    title: "Bodenempfehlung auf Deutsch",
    dialect: "Deutsch",
    text: "Die Bodendiagnostik zeigt einen leichten Kaliummangel in der Wurzelzone. Wir empfehlen die Ausbringung von 150 kg/ha zertifiziertem NPK 15-15-15 vor dem nächsten Regenfall.",
    audioDesc: "Natürliche agronomische Sprachberatung",
    badge: "Deutsch Agrar Voice"
  },
  zh: {
    title: "农艺智能土壤健康语音指导",
    dialect: "普通话自然语音",
    text: "根系层土壤检测数据显示需要补充钾元素。建议在下一次降雨前每公顷施用150公斤经过认证的NPK 15-15-15复合肥，以显著提升作物产量。",
    audioDesc: "中文专业农艺师自然语音",
    badge: "中文农艺语音"
  }
};

export const AI_PROMPT_SUGGESTIONS: Record<string, string[]> = {
  en: [
    "How does Proximal Soil Sensing inspect soil content in real time?",
    "What fertilizer ratio should I use for Cassava in acidic soil?",
    "Where can I buy IITA-certified genuine fertilizer near me?",
    "How do I run an instant soil scan on my phone?"
  ],
  ha: [
    "Yaya ake duba sinadaran kasar gona (Proximal Sensing) nan take?",
    "Wane irin taki ya fi dacewa da rogo a kasar acidic?",
    "Ina zan samu takin gargajiya mai inganci a kusa da ni?",
    "Yaya zan gudanar da sikanin kasar gona a waya ta?"
  ],
  yo: [
    "Bawo ni a ṣe n ṣe àyẹ̀wò ohun ti o wa ninu ilẹ̀ oko lẹsẹkẹsẹ?",
    "Kini ajile ti o dara julọ fun gbaguda lori ilẹ̀ ti o ni acid?",
    "Nibo ni mo ti le ra ajile gidi ti a fọwọsi?",
    "Bawo ni mo ṣe le lo sikanin ilẹ̀ lori foonu mi?"
  ],
  ig: [
    "Kedu ka esi enyocha ihe ndị dị n'ala ubi n'otu ntabi anya?",
    "Kedu fatilayiza kacha mma maka akpụ n'ala nwere acid?",
    "Olee ebe m nwere ike ịzụta fatilayiza gboo agboo?",
    "Kedu ka m ga-esi mee sụkanin ala n'ekwentị m?"
  ],
  pcm: [
    "How proximal soil scanning dey check my soil content direct for farm?",
    "Which fertilizer formula good pass for cassava inside acidic soil?",
    "Where I go fit buy original fertilizer wey IITA stamp?",
    "How I go take scan my soil using my phone?"
  ]
};

// Smart Multilingual Response Engine
export function getAiMultilingualResponse(userQuery: string, langCode: string): string {
  const queryLower = userQuery.toLowerCase();
  
  const responses: Record<string, {
    fertilizer: string;
    scanning: string;
    market: string;
    scan: string;
    general: string;
  }> = {
    en: {
      fertilizer: "Based on proximal soil root-zone diagnostics, acidic soils (pH 5.0 - 6.2) require NPK 15-15-15 blended with 10% Agricultural Lime. Apply 200 - 250 kg/ha in 2 split applications during early rains to boost yield by up to +32%.",
      scanning: "Proximal Sensing utilizes optical and electrochemical sensors directly on field soil to measure Nitrogen, Phosphorus, Potassium, pH, and moisture in real time with 99.8% field accuracy.",
      market: "All fertilizers ordered via SOILREVIVE are QR-code serialized to guarantee zero fake chemicals. You can order directly via our Verified Marketplace tab.",
      scan: "Open SOILREVIVE app on your phone, point the camera or optical sensor at your farm soil, and tap 'Launch Soil Scanner'. Root-zone soil content syncs automatically in <3 seconds.",
      general: "Hello! I am SOILREVIVE's Multilingual Agronomy AI Assistant. I inspect real-time soil content, recommend precision fertilizer blends, and provide natural voice guidance in your language."
    },
    ha: {
      fertilizer: "Bisa ga gwajin sinadaran ƙasar gonarka, ƙasar da take da acid tana buƙatar takin NPK 15-15-15 tare da toshin lemun tsami (Lime). Yi amfani da kilogiram 200-250 a kowace hektare.",
      scanning: "Proximal Sensing fasaha ce da ke duba sinadaran ƙasa (N, P, K, pH) kai tsaye a gona ba tare da jiran gwajin dakin bincike ba.",
      market: "Dukkan takin da ake sayarwa a SOILREVIVE yana da lambar tabbatarwa domin kauce wa takin bogi. Zaku iya yin oda kai tsaye a kasuwarmu.",
      scan: "Bude SOILREVIVE a wayarka, nuna wayar zuwa ƙasar gonarka sannan ka danna 'Launch Soil Scanner' don duba sinadarai a dakikoki 3 kacal.",
      general: "Barka da zuwa! Ni ne Mataimakin Agronomy AI na SOILREVIVE mai ba da shawarwari a Harshen Hausa mai dadi da saukin fahimta."
    },
    yo: {
      fertilizer: "Gẹgẹ bi àyẹ̀wò ilẹ̀ oko rẹ, ilẹ̀ ti o ni acid nilo ajile NPK 15-15-15 ti a popọ pẹlu Ẹfun Ilẹ. Lo 200 - 250kg fun hektari kan.",
      scanning: "Fasaha Proximal Sensing n ṣe àyẹ̀wò ohun ti o wa ninu ilẹ̀ (N, P, K, pH ati omi) lẹsẹkẹsẹ lori oko rẹ.",
      market: "Gbogbo ajile lori SOILREVIVE ni QR-code ti a fọwọsi lati ri i daju pe ko si ajile adịgboroja. O le ra ajile gidi lori pẹpẹ wa.",
      scan: "Ṣii SOILREVIVE lori foonu rẹ, dojukọ ilẹ̀ oko rẹ ki o tẹ 'Launch Soil Scanner' lati ri nkan ti ilẹ̀ rẹ nilo.",
      general: "Ẹ ku bọ! Emi ni AI Olùbánidámọ̀ràn SOILREVIVE ti n fun yin ni ìmọ̀ràn oko lédè Yorùbá pẹlu ohùn àdánidá."
    },
    ig: {
      fertilizer: "Dabere na nyocha ala gị, ala nwere acid chọrọ NPK 15-15-15 tinyere Nzu Ala. Jiri 200 - 250 kg per hectare n'oge mmiri ozuzo mbụ.",
      scanning: "Proximal Sensing bụ teknụzụ pụrụ iche na-enyocha ihe nri dị n'ala (Nitrogen, Phosphorus, Potassium na pH) n'otu ntabi anya.",
      market: "Fatilayiza niile dị na SOILREVIVE nwere koodu nyocha QR iji hụ na ọ bụ ezigbo ya. I nwere ike ịzụta ya ozugbo n'ọba ahịa anyị.",
      scan: "Meghee SOILREVIVE n'ekwentị gị, tụgharịa ya n'ala ubi gị wee pịa 'Launch Soil Scanner' iji hụ nsonaazụ n'ime sekọnd 3.",
      general: "Nnoo! Abụ m AI Inyeaka SOILREVIVE na-enye ndụmọdụ ọrụ ugbo n'asụsụ Igbo mara mma na nke doro anya."
    },
    pcm: {
      fertilizer: "Based on your soil test, soil wey get acid need NPK 15-15-15 mix with small Agricultural Lime to make your crops grow well.",
      scanning: "Proximal Sensing na modern technology wey dey test NPK, pH, and water level directly inside your farm in just 3 seconds.",
      market: "Every fertilizer wey you buy for SOILREVIVE get original QR stamp so fake chemical no go enter your farm.",
      scan: "Open SOILREVIVE app for your phone, point at your soil and click 'Launch Soil Scanner'. Result go show immediately.",
      general: "How far my country farmer! I be your SOILREVIVE Agronomy AI Assistant. Ask me anything about your farm and fertilizer!"
    }
  };

  const langPack = responses[langCode] || responses.en;

  if (queryLower.includes('fertilizer') || queryLower.includes('taki') || queryLower.includes('ajile') || queryLower.includes('fatilayiza')) {
    return langPack.fertilizer;
  }
  if (queryLower.includes('scanning') || queryLower.includes('sensing') || queryLower.includes('soil content')) {
    return langPack.scanning;
  }
  if (queryLower.includes('buy') || queryLower.includes('market') || queryLower.includes('sau') || queryLower.includes('ra') || queryLower.includes('zụta')) {
    return langPack.market;
  }
  if (queryLower.includes('scan') || queryLower.includes('sensor') || queryLower.includes('phone')) {
    return langPack.scan;
  }

  return langPack.general;
}

// Global speech synthesis audio manager with full Play, Pause, Resume, and Stop controls
class AiVoiceManager {
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isPausedState: boolean = false;
  private isSpeakingState: boolean = false;
  private onEndCallbacks: Set<() => void> = new Set();
  private onStateChangeCallbacks: Set<(state: 'idle' | 'playing' | 'paused') => void> = new Set();

  private notifyState(state: 'idle' | 'playing' | 'paused') {
    this.onStateChangeCallbacks.forEach(cb => {
      try { cb(state); } catch (e) { console.error(e); }
    });
  }

  public subscribeState(cb: (state: 'idle' | 'playing' | 'paused') => void) {
    this.onStateChangeCallbacks.add(cb);
    return () => this.onStateChangeCallbacks.delete(cb);
  }

  public speak(text: string, langCode: string, onEnd?: () => void): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn("Speech Synthesis is not supported in this browser.");
      return false;
    }

    try {
      window.speechSynthesis.cancel();
      this.isPausedState = false;
      this.isSpeakingState = true;
      this.notifyState('playing');

      if (onEnd) {
        this.onEndCallbacks.add(onEnd);
      }

      const utterance = new SpeechSynthesisUtterance(text);
      this.currentUtterance = utterance;

      const langObj = SUPPORTED_LANGUAGES.find(l => l.code === langCode);
      const targetSpeechCode = langObj ? langObj.speechCode : 'en-GB';

      utterance.lang = targetSpeechCode;
      // Natural human pacing and warm conversational tone
      utterance.rate = 0.92;
      utterance.pitch = 1.02;
      utterance.volume = 1.0;

      // Select highest quality natural voice available in system
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const naturalVoice = 
          voices.find(v => (v.name.includes('Natural') || v.name.includes('Neural') || v.name.includes('Premium') || v.name.includes('Google')) && v.lang.toLowerCase().startsWith(langCode.toLowerCase())) ||
          voices.find(v => v.lang.toLowerCase() === targetSpeechCode.toLowerCase()) ||
          voices.find(v => v.lang.toLowerCase().startsWith(langCode.toLowerCase())) ||
          voices.find(v => v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')) ||
          voices.find(v => v.lang.startsWith('en'));

        if (naturalVoice) {
          utterance.voice = naturalVoice;
        }
      }

      utterance.onend = () => {
        this.isSpeakingState = false;
        this.isPausedState = false;
        this.currentUtterance = null;
        this.notifyState('idle');
        this.onEndCallbacks.forEach(cb => {
          try { cb(); } catch (e) { console.error(e); }
        });
        this.onEndCallbacks.clear();
      };

      utterance.onerror = (e) => {
        console.warn("Speech synthesis error or cancellation:", e);
        this.isSpeakingState = false;
        this.isPausedState = false;
        this.currentUtterance = null;
        this.notifyState('idle');
      };

      utterance.onpause = () => {
        this.isPausedState = true;
        this.notifyState('paused');
      };

      utterance.onresume = () => {
        this.isPausedState = false;
        this.notifyState('playing');
      };

      window.speechSynthesis.speak(utterance);
      return true;
    } catch (err) {
      console.error("Failed to execute speech synthesis:", err);
      this.isSpeakingState = false;
      this.isPausedState = false;
      this.notifyState('idle');
      return false;
    }
  }

  public pause(): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      this.isPausedState = true;
      this.notifyState('paused');
      return true;
    }
    return false;
  }

  public resume(): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      this.isPausedState = false;
      this.notifyState('playing');
      return true;
    }
    return false;
  }

  public stop(): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    this.isSpeakingState = false;
    this.isPausedState = false;
    this.currentUtterance = null;
    this.notifyState('idle');
    this.onEndCallbacks.forEach(cb => {
      try { cb(); } catch (e) { console.error(e); }
    });
    this.onEndCallbacks.clear();
  }

  public getState(): 'idle' | 'playing' | 'paused' {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return 'idle';
    if (window.speechSynthesis.paused || this.isPausedState) return 'paused';
    if (window.speechSynthesis.speaking || this.isSpeakingState) return 'playing';
    return 'idle';
  }
}

export const aiVoiceManager = new AiVoiceManager();

export function speakAiText(text: string, langCode: string, onEnd?: () => void): boolean {
  return aiVoiceManager.speak(text, langCode, onEnd);
}

export function pauseAiSpeech(): boolean {
  return aiVoiceManager.pause();
}

export function resumeAiSpeech(): boolean {
  return aiVoiceManager.resume();
}

export function stopAiSpeech(): void {
  aiVoiceManager.stop();
}

export function getAiSpeechState(): 'idle' | 'playing' | 'paused' {
  return aiVoiceManager.getState();
}
