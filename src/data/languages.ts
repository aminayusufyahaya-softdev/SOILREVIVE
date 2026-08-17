export interface LanguageOption {
  code: string;
  name: string;
  native: string;
  region: string;
  flag: string;
  speechCode: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', native: 'English', region: 'Global / Nigeria', flag: '🇬🇧', speechCode: 'en-US' },
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
    title: "English Soil Scanning Sensing Report",
    dialect: "Standard English",
    text: "Proximal soil scanning sensing indicates Potassium deficiency at root zone. Apply 150kg/ha of NPK 15-15-15 fertilizer before rain onset via verified cooperative agents.",
    audioDesc: "Proximal scanning soil telemetry note",
    badge: "English Scanning Sensing AI"
  },
  ha: {
    title: "Hausa Scanning Sensing Recommendation",
    dialect: "Kano & Kaduna Dialect",
    text: "Gwajin sikanin kasar gona (Proximal Scanning Sensing) yana nuna kasar shuka tana buƙatar taki mai dauke da NPK 15-15-15. Zaku iya amfani da USSD *384*55#.",
    audioDesc: "Hausa proximal scanning guidance",
    badge: "Hausa Scanning Sensing AI"
  },
  yo: {
    title: "Yoruba Scanning Sensing Recommendation",
    dialect: "Oyo & Ogun Dialect",
    text: "Àyẹ̀wò sikanin ilẹ̀ ti proximal scanning sensing fi hàn pé ó ní lílo ajile NPK 20-10-10 ni ilẹ̀ rẹ. Tọ́jú ìwé-ẹ́rí rẹ lórí SOILREVIVE láti rí ajile gidi gbà.",
    audioDesc: "Yoruba soil scanning chemistry voice note",
    badge: "Yoruba Scanning Sensing AI"
  },
  ig: {
    title: "Igbo Scanning Sensing Recommendation",
    dialect: "Enugu & Anambra Dialect",
    text: "Nyocha sụkanin ala gị (Proximal Scanning Sensing) na-egosi na ala gị chọrọ NPK 15-15-15. Gaa n'ụlọ ahịa SOILREVIVE Verified ga-azụta ya.",
    audioDesc: "Igbo proximal scanning voice note",
    badge: "Igbo Scanning Sensing AI"
  },
  pcm: {
    title: "Pidgin Scanning Sensing Recommendation",
    dialect: "Naija Pidgin",
    text: "Our proximal soil scanning sensing touch your farm soil check NPK and pH level sharp sharp. E show say potassium dey low well well. Put 150kg per hectare of NPK 15-15-15.",
    audioDesc: "Pidgin soil scanning sensing voice note",
    badge: "Pidgin Scanning Sensing AI"
  },
  fr: {
    title: "Recommandation Vocale par Balayage Proximal",
    dialect: "Français Standard",
    text: "La télémétrie par balayage proximal (Scanning Sensing) indique une déficience en potassium dans la zone racinaire. Appliquez 150 kg/ha d'engrais NPK 15-15-15.",
    audioDesc: "Guide agronomique par balayage du sol",
    badge: "Français Scanning Sensing AI"
  },
  sw: {
    title: "Ushauri wa Sauti wa Kusafisha Udongo (Scanning Sensing)",
    dialect: "Kiswahili Sanifu",
    text: "Kipimo cha kusafisha udongo (Proximal Scanning Sensing) kinaonyesha ukosefu wa potasiamu. Weka kilo 150/ha za mbolea ya NPK 15-15-15 kabla ya mvua.",
    audioDesc: "Sauti ya ushauri wa kusafisha udongo",
    badge: "Swahili Scanning Sensing AI"
  },
  ar: {
    title: "توصية المسح المباشر للتربة (Scanning Sensing)",
    dialect: "Fusha Arabic",
    text: "تظهر قياسات المسح المباشر للتربة (Proximal Scanning Sensing) وجود نقص في البوتاسيوم في منطقة الجذور. يُنصح بإضافة 150 كجم/هكتار من سماد NPK 15-15-15.",
    audioDesc: "التوجيه الصوتي لمسح التربة المباشر",
    badge: "Arabic Scanning Sensing AI"
  },
  es: {
    title: "Recomendación de Escaneo Proximal de Suelo",
    dialect: "Español Estándar",
    text: "La telemetría de escaneo proximal (Scanning Sensing) en la zona radicular indica deficiencia de potasio. Aplique 150 kg/ha de fertilizante NPK 15-15-15.",
    audioDesc: "Guía de audio por escaneo proximal de suelo",
    badge: "Español Scanning Sensing AI"
  },
  pt: {
    title: "Recomendação por Varredura Proximal de Solo",
    dialect: "Português",
    text: "A análise por varredura proximal (Scanning Sensing) indica deficiência de potássio na zona radicular. Aplique 150 kg/ha de fertilizante NPK 15-15-15.",
    audioDesc: "Nota de voz por varredura proximal de solo",
    badge: "Português Scanning Sensing AI"
  },
  ff: {
    title: "Fulfulde Scanning Sensing Advice",
    dialect: "Fulfulde Dialect",
    text: "Limtooji sikanin leydi mon (Proximal Scanning Sensing) hollitii leydi ndiin ina haani heɓde takki NPK 15-15-15 ko adii toɓo. Huutoree USSD *384*55#.",
    audioDesc: "Fulfulde scanning sensing audio",
    badge: "Fulfulde Scanning Sensing AI"
  },
  de: {
    title: "Bodenempfehlung via Proximales Scannen",
    dialect: "Deutsch",
    text: "Das proximale Bodenscanning (Scanning Sensing) misst direkt im Wurzeldurchwurzelungsraum einen Kaliummangel. Tragen Sie 150 kg/ha NPK 15-15-15-Dünger aus.",
    audioDesc: "Deutsche KI-Sprachausgabe für proximales Scannen",
    badge: "Deutsch Scanning Sensing AI"
  },
  zh: {
    title: "近端土壤扫描检测智能建议",
    dialect: "Mandarin Chinese",
    text: "近端土壤扫描检测（Proximal Scanning Sensing）根系层实测数据显示严重缺钾。建议在降雨前每公顷施用150公斤NPK 15-15-15复合肥。",
    audioDesc: "中文近端土壤扫描检测AI指导",
    badge: "Chinese Scanning Sensing AI"
  }
};

export const AI_PROMPT_SUGGESTIONS: Record<string, string[]> = {
  en: [
    "How does Proximal Scanning Sensing analyze soil content in real time?",
    "What fertilizer ratio should I use for Cassava in acidic soil?",
    "Where can I buy IITA-certified genuine fertilizer near me?",
    "How do I run an instant soil scan on my phone?"
  ],
  ha: [
    "Yaya sikanin kasar gona (Proximal Scanning Sensing) ke auna kasar gona?",
    "Wane irin taki ya fi dacewa da rogo a kasar acidic?",
    "Ina zan samu takin gargajiya mai inganci a kusa da ni?",
    "Yaya ake gudanar da sikanin kasar gona a waya?"
  ],
  yo: [
    "Bawo ni proximal scanning sensing se n ṣe àyẹ̀wò ilẹ̀ oko lẹsẹkẹsẹ?",
    "Kini ajile ti o dara julọ fun gbaguda lori ilẹ̀ ti o ni acid?",
    "Nibo ni mo ti le ra ajile gidi ti IITA fọwọsi?",
    "Bawo ni mo ṣe le lo sikanin ilẹ̀ lori foonu mi?"
  ],
  ig: [
    "Kedu ka proximal scanning sensing si na-enyocha ala n'oge kwesịrị ewesị?",
    "Kedu fatilayiza kacha mma maka akpụ n'ala nwere acid?",
    "Olee ebe m nwere ike ịzụta fatilayiza gboo agboo?",
    "Kedu ka m ga-esi mee sụkanin ala n'ekwentị m?"
  ],
  pcm: [
    "How proximal soil scanning sensing dey take check my soil content direct for farm?",
    "Which fertilizer formula good pass for cassava inside acidic soil?",
    "Where I go fit buy original fertilizer wey IITA stamp?",
    "How I go take scan my soil using my phone?"
  ],
  fr: [
    "Comment le balayage proximal (Scanning Sensing) analyse-t-il le sol en temps réel?",
    "Quel engrais dois-je utiliser pour le manioc sur sol acide?",
    "Où puis-je acheter des engrais certifiés IITA près de chez moi?",
    "Comment effectuer un balayage instantané du sol sur mon téléphone?"
  ],
  sw: [
    "Je, kusafisha udongo kwa ukaribu (Proximal Scanning Sensing) kunapimaje udongo?",
    "Ni mbolea gani bora kwa muhogo kwenye udongo wenye asidi?",
    "Wapi naweza kununua mbolea halisi iliyoidhinishwa na IITA?",
    "Jinsi gani naweza kusafisha udongo wangu kwenye simu?"
  ],
  ar: [
    "كيف يقيس المسح المباشر (Scanning Sensing) مكونات التربة بسرعة؟",
    "ما هي نسبة السماد الأفضل للمحاصيل في التربة الحمضية؟",
    "أين يمكنني شراء أسمدة معتمدة ومضمونة بالقرب مني؟",
    "كيف يمكنني إجراء مسح فوري للتربة عبر هاتفي؟"
  ],
  es: [
    "¿Cómo analiza el escaneo proximal (Scanning Sensing) el suelo en tiempo real?",
    "¿Qué fertilizante debo usar para la yuca en suelo ácido?",
    "¿Dónde puedo comprar fertilizante certificado genuino?",
    "¿Cómo ejecuto un escaneo instantáneo de suelo en mi teléfono?"
  ],
  pt: [
    "Como a varredura proximal (Scanning Sensing) analisa o solo em tempo real?",
    "Qual fertilizante devo usar para a mandioca em solo ácido?",
    "Onde posso comprar fertilizantes certificados genuínos?",
    "Como executar uma varredura instantânea de solo no meu telemóvel?"
  ],
  ff: [
    "No proximal scanning sensing aunjirta limtooji leydi am e nder gese?",
    "Taki moyƴo ngam rogo e leydi ndi njiidaa e asid?",
    "Hol to njahatmi ngam soodde takki goonga IITA?",
    "No waɗatmi sikanin leydi e fon am?"
  ],
  de: [
    "Wie analysiert proximales Bodenscanning den Bodengehalt in Echtzeit?",
    "Welcher Dünger ist am besten für Maniok auf saurem Boden?",
    "Wo kann ich zertifizierten Originaldünger kaufen?",
    "Wie führe ich einen sofortigen Bodenscan auf meinem Telefon aus?"
  ],
  zh: [
    "近端土壤扫描检测（Proximal Scanning Sensing）如何实时检测土壤成分？",
    "在酸性土壤中种植木薯应该使用什么配方的复合肥？",
    "我在哪里可以购买到经过IITA认证的真品肥料？",
    "如何在手机上运行即时土壤扫描检测？"
  ]
};

// Smart Multilingual Response Engine focused 100% on Scanning Sensing
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
      fertilizer: "Based on proximal soil scanning sensing telemetry directly from the root zone, acidic soils (pH 5.0 - 6.2) require NPK 15-15-15 blended with 10% Agricultural Lime. Apply 200 - 250 kg/ha in 2 split applications during early rains to boost yield by up to +32%.",
      scanning: "Proximal Scanning Sensing is SOILREVIVE's single core precision technology. By utilizing non-invasive optical and electrochemical scanning sensing directly on field soil, it measures exact Nitrogen, Phosphorus, Potassium, pH, electrical conductivity, and moisture content in real-time with 99.8% field accuracy.",
      market: "All fertilizers ordered via SOILREVIVE are QR-code serialized to guarantee ZERO fake chemicals. You can order directly via our app or dial *384*55# to pick up at your nearest LGA agro-dealer hub.",
      scan: "Open SOILREVIVE app on your phone, point the camera or optical sensor at your farm soil, and tap 'Scan Soil'. Instant root-zone soil content telemetry syncs automatically in <3 seconds without needing external hardware.",
      general: "Hello! I am SOILREVIVE's Multilingual Agronomy AI Assistant. Powered by Proximal Scanning Sensing technology, I inspect real-time soil content, recommend precision fertilizer blends, and predict crop health in any language."
    },
    ha: {
      fertilizer: "Bisa ga gwajin sikanin kasar gona (Scanning Sensing), kasar da take da acid tana buƙatar takin NPK 15-15-15 tare da toshin lemun tsami (Lime). Yi amfani da kilogiram 200-250 a kowace hektare.",
      scanning: "Proximal Scanning Sensing ita ce babbar fasahar SOILREVIVE wacce ake amfani da ita domin duba sinadaran kasar gona (N, P, K, pH) kai tsaye ta hanyar sikanin saniyar waya ba tare da na'ura ta daban ba.",
      market: "Dukkan takin da ake sayarwa a SOILREVIVE yana da lambar tabbatarwa mai lamba ta musamman domin kauce wa takin bogi. Zaku iya amfani da lambar USSD *384*55#.",
      scan: "Bude SOILREVIVE app a wayarka, nuna sikanin zuwa kasar gonarka sannan ka danna 'Scan Soil'. Sakamakon sinadaran gona zai bayyana a wayar cikin dakikoki 3 kacal.",
      general: "Barka da zuwa! Ni ne Mataimakin AI na SOILREVIVE wanda yake amfani da fasahar Proximal Scanning Sensing domin duba sinadaran kasar gona a Harshen Hausa."
    },
    yo: {
      fertilizer: "Gẹgẹ bi àyẹ̀wò proximal scanning sensing ninu ilẹ̀ oko rẹ, ilẹ̀ ti o ni acid nilo ajile NPK 15-15-15 ti a popọ pẹlu Ẹfun Ilẹ (Agricultural Lime). Lo 200 - 250kg fun hektari kan.",
      scanning: "Fasaha Proximal Scanning Sensing ni imọ-ẹrọ akọkọ ti SOILREVIVE ń lo lati ṣe àyẹ̀wò ohun ti o wa ninu ilẹ̀ (N, P, K, pH ati omi) lẹsẹkẹsẹ pẹlu sikanin.",
      market: "Gbogbo ajile lori SOILREVIVE ni QR-code ti a fọwọsi lati ri i daju pe ko si ajile adịgboroja. O le tẹ USSD *384*55# lori foonu rẹ lati ra ajile gidi.",
      scan: "Ṣii app SOILREVIVE lori foonu rẹ, nọ sikanin sí ilẹ̀ oko rẹ ki o tẹ 'Scan Soil'. O yoo rí nkan ti ilẹ̀ rẹ nilo lẹsẹkẹsẹ fun sekond 3.",
      general: "Ẹ ku bọ! Emi ni AI Olubaworana SOILREVIVE ti o n lo imọ-ẹrọ Proximal Scanning Sensing lati ṣe àyẹ̀wò ilẹ̀ oko rẹ lẹsẹkẹsẹ ni Èdè Yorùbá."
    },
    ig: {
      fertilizer: "Dabere na nyocha ala proximal scanning sensing n'ala gị, ala nwere acid chọrọ NPK 15-15-15 tinyere Nzu Ala (Lime). Jiri 200 - 250 kg per hectare n'oge mmiri ozuzo mbụ.",
      scanning: "Proximal Scanning Sensing bụ otu teknụzụ pụrụ iche SOILREVIVE na-eji sụkannye ihe nri dị n'ala (Nitrogen, Phosphorus, Potassium na pH) n'otu ntabi anya.",
      market: "Fatilayiza niile dị na SOILREVIVE nwere koodu nyocha QR iji hụ na ọ bụghị gboo agboo (fake). I nwere ike ịkpọ USSD *384*55# zụta fatilayiza gboo.",
      scan: "Meghee app SOILREVIVE n'ekwentị gị, tụgharịa sụkanin n'ala ubi gị wee pịa 'Scan Soil'. Ị ga-ahụ nsonaazụ ala gị n'ime sekọnd 3.",
      general: "Nnoo! Abụ m AI Inyeaka SOILREVIVE na-eji teknụzụ Proximal Scanning Sensing enyocha ala gị na-enye ndụmọdụ fatilayiza n'asụsụ Igbo na asụsụ niile."
    },
    pcm: {
      fertilizer: "Based on proximal soil scanning sensing test directly inside your farm root zone, soil wey get acid need NPK 15-15-15 mix with small Agricultural Lime.",
      scanning: "Proximal Scanning Sensing na the only main technology wey SOILREVIVE dey use check soil content. The optical scan dey test NPK, pH, and water level directly under 3 seconds!",
      market: "Every fertilizer wey you buy inside SOILREVIVE get original QR stamp so fake chemical no go enter your farm. Just press USSD *384*55# for your line.",
      scan: "Open SOILREVIVE app for your phone, point your phone scanner at your farm soil, press 'Scan Soil'. Soil content results go show sharp sharp!",
      general: "How far my country farmer! I be SOILREVIVE Multilingual AI Assistant. Powered by Proximal Scanning Sensing technology to check your soil content!"
    },
    fr: {
      fertilizer: "Selon la télémétrie de balayage proximal (Scanning Sensing) dans la zone racinaire, les sols acides nécessitent du NPK 15-15-15 enrichi en chaux agricole.",
      scanning: "Le balayage proximal du sol (Proximal Scanning Sensing) est la technologie de précision unique de SOILREVIVE. Les capteurs optiques et électrochimiques mesurent directement le N, P, K et le pH avec 99,8% de précision.",
      market: "Tous les engrais certifiés SOILREVIVE possèdent un code QR d'authenticité pour éliminer les contrefaçons. Commandez via l'application ou le code USSD *384*55#.",
      scan: "Ouvrez l'application SOILREVIVE, pointez le capteur de balayage vers le sol de votre ferme et appuyez sur 'Scan Soil'. Vos données s'affichent en <3 secondes.",
      general: "Bonjour! Je suis l'assistant IA multilingue de SOILREVIVE. Basé sur la technologie de balayage proximal du sol, j'analyse le contenu du sol en temps réel."
    },
    sw: {
      fertilizer: "Kulingana na vipimo vya kusafisha udongo (Proximal Scanning Sensing) kwenye mizizi, udongo wenye asidi unahitaji NPK 15-15-15 uliochanganywa na chokaa.",
      scanning: "Proximal Scanning Sensing ndiyo teknolojia kuu ya SOILREVIVE inayotumiwa kupima na kusafisha viundaji vya udongo (Nitrojeni, Fosforasi, Potasiamu na pH) moja kwa moja shambani.",
      market: "Mbolea zote za SOILREVIVE zina msimbo wa QR ili kuhakikisha hazina bandia. Unaweza kuagiza kupitia programu au kupiga msimbo wa USSD *384*55#.",
      scan: "Fungua SOILREVIVE kwenye simu, elekeza kisafisha udongo (scanner) kwenye udongo na ubonyeze 'Scan Soil'. Matokeo yatatokea kwa sekunde 3.",
      general: "Jambo! Mimi ni Msaidizi wa AI wa SOILREVIVE anayetumia teknolojia ya Proximal Scanning Sensing kupima udongo kwa Kiswahili na lugha zote."
    },
    ar: {
      fertilizer: "بناءً على قياسات المسح المباشر للتربة (Proximal Scanning Sensing)، نوصي بسماد NPK 15-15-15 مع الجير الزراعي.",
      scanning: "تقنية المسح المباشر للتربة (Proximal Scanning Sensing) هي التقنية الرئيسية الوحيدة في منصة SOILREVIVE لفحص النيتروجين والفوسفور والبوتاسيوم ودرجة الحموضة فورياً.",
      market: "جميع الأسمدة المعتمدة في المنصة مزودة برموز QR لمنع الغش التجاري. يمكنك الطلب عبر التطبيق أو طلب رمز USSD *384*55#.",
      scan: "افتتح تطبيق SOILREVIVE ووجّه الكاميرا أو المستشعر الضوئي نحو التربة واضغط على 'Scan Soil' للحصول على التقرير خلال 3 ثوانٍ.",
      general: "مرحباً بك! أنا مساعد الذكاء الاصطناعي متعدد اللغات من SOILREVIVE المبني على تقنية المسح المباشر للتربة (Proximal Scanning Sensing)."
    },
    es: {
      fertilizer: "Según la telemetría del escaneo proximal (Scanning Sensing) en la zona radicular, los suelos ácidos requieren NPK 15-15-15 con cal agrícola.",
      scanning: "El escaneo proximal de suelo (Proximal Scanning Sensing) es la única tecnología de precisión de SOILREVIVE para medir nitrógeno, fósforo, potasio y pH directamente en el campo sin hardware externo.",
      market: "Todos los fertilizantes en SOILREVIVE incluyen códigos QR verificables contra falsificaciones. Compre mediante la app o marcando USSD *384*55#.",
      scan: "Abra la app SOILREVIVE, apunte el escáner óptico al suelo de su finca y presione 'Scan Soil'. Sus datos NPK aparecerán en 3 segundos.",
      general: "¡Hola! Soy el Asistente de IA Multilingüe de SOILREVIVE. Basado en tecnología de escaneo proximal de suelo, analizo el contenido del suelo en tiempo real."
    },
    pt: {
      fertilizer: "Com base na varredura proximal (Scanning Sensing) na zona radicular, os solos ácidos necessitam de NPK 15-15-15 com calcário agrícola.",
      scanning: "A varredura proximal de solo (Proximal Scanning Sensing) é a tecnologia de precisão principal da SOILREVIVE para medir N, P, K e pH diretamente na raiz do solo.",
      market: "Todos os fertilizantes certificados possuem código QR para evitar produtos falsificados. Encomende pela aplicação ou via USSD *384*55#.",
      scan: "Abra a aplicação SOILREVIVE, aponte o scanner óptico para o solo e prima 'Scan Soil'. Os dados do solo ficam disponíveis em 3 segundos.",
      general: "Olá! Sou o Assistente de IA Multilingue da SOILREVIVE. Utilizo a tecnologia de varredura proximal para analisar o conteúdo do solo em tempo real."
    },
    ff: {
      fertilizer: "Bisa ga limtooji Proximal Scanning Sensing e leydi ndiin, leydi ndiin ina haani heɓde NPK 15-15-15 e lime.",
      scanning: "Proximal Scanning Sensing woni fasaha arandeeji SOILREVIVE ngam sikaning e aunjirde limtooji leydi (N, P, K, pH) e nder gese mon.",
      market: "Takki fof ina tawee e QR-code ngam haɗde takki bonɗi. Aɗa waawi huutoraade USSD *384*55# ngam soodde ko laaɓi.",
      scan: "Ubbitee SOILREVIVE app e fon mon, ndaaree sikanin e leydi mon sannan njaɓɓee 'Scan Soil'. Limtooji mon ngarta e sekondaaji 3.",
      general: "Jam waali/nyalli! Miin woni AI Balloowo SOILREVIVE huutortooɗo fasaha Proximal Scanning Sensing ngam sikaning e ƴeewtaade leydi mon."
    },
    de: {
      fertilizer: "Basierend auf proximalem Bodenscanning (Scanning Sensing) in der Wurzelzone benötigen saure Böden NPK 15-15-15 gemischt mit Düngekalk.",
      scanning: "Das proximale Bodenscanning (Proximal Scanning Sensing) ist die einzige Kernpräzisionstechnologie von SOILREVIVE zur direkten Messung von N, P, K, pH und Feuchtigkeit ohne externe Hardware.",
      market: "Alle Düngemittel bei SOILREVIVE besitzen einen fälschungssicheren QR-Code. Bestellung direkt über die App oder per USSD-Code *384*55#.",
      scan: "Öffnen Sie die SOILREVIVE-App, richten Sie den optischen Scanner auf Ihren Boden und tippen Sie auf 'Scan Soil'. Die N-P-K-Werte erscheinen in 3 Sekunden.",
      general: "Hallo! Ich bin der mehrsprachige KI-Agrarassistent von SOILREVIVE. Basierend auf proximalem Bodenscanning analysiere ich Bodeninhalte in Echtzeit."
    },
    zh: {
      fertilizer: "根据近端土壤扫描检测（Proximal Scanning Sensing）根系层实测数据，酸性土壤需要施用NPK 15-15-15并添加农业石灰。",
      scanning: "近端土壤扫描检测（Proximal Scanning Sensing）是SOILREVIVE的核心精度技术。通过非侵入式光学及电化学扫描感应，无需外部硬件，以99.8%的极高精度实时测量氮、磷、钾、pH值及水分。",
      market: "SOILREVIVE平台上的所有化肥均带有防伪二维码，彻底杜绝假冒伪劣化肥。您可通过App下单或拨打USSD代码 *384*55# 订购。",
      scan: "打开SOILREVIVE App，将手机光学传感器对准农田土壤，点击'Scan Soil'，即可在3秒内实时获取N、P、K、pH值及湿度数据。",
      general: "您好！我是SOILREVIVE多语言农业AI助手。基于近端土壤扫描检测技术，为您实时检测土壤成分并推荐精准化肥配方。"
    }
  };

  const langPack = responses[langCode] || responses.en;

  if (queryLower.includes('fertilizer') || queryLower.includes('taki') || queryLower.includes('ajile') || queryLower.includes('fatilayiza') || queryLower.includes('engrais') || queryLower.includes('mbolea') || queryLower.includes('سماد') || queryLower.includes('肥料')) {
    return langPack.fertilizer;
  }
  if (queryLower.includes('scanning') || queryLower.includes('sensing') || queryLower.includes('soil content') || queryLower.includes('technology') || queryLower.includes('proximal')) {
    return langPack.scanning;
  }
  if (queryLower.includes('buy') || queryLower.includes('market') || queryLower.includes('sau') || queryLower.includes('ra') || queryLower.includes('zụta') || queryLower.includes('ussd') || queryLower.includes('*384*55#')) {
    return langPack.market;
  }
  if (queryLower.includes('scan') || queryLower.includes('sensor') || queryLower.includes('phone') || queryLower.includes('gwaji') || queryLower.includes('àyẹ̀wò')) {
    return langPack.scan;
  }

  return langPack.general;
}

// Browser Speech Synthesis Function
export function speakAiText(text: string, langCode: string): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn("Speech Synthesis is not supported in this browser.");
    return false;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    const langObj = SUPPORTED_LANGUAGES.find(l => l.code === langCode);
    const targetSpeechCode = langObj ? langObj.speechCode : 'en-US';

    utterance.lang = targetSpeechCode;
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      const matchedVoice = voices.find(v => v.lang.toLowerCase().startsWith(langCode.toLowerCase())) ||
                           voices.find(v => v.lang.toLowerCase().includes(targetSpeechCode.toLowerCase())) ||
                           voices.find(v => v.lang.startsWith('en'));
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.error("Failed to execute speech synthesis:", err);
    return false;
  }
}
