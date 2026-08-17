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
    title: "English Proximal Soil Sensing Report",
    dialect: "Standard English",
    text: "Proximal sensing telemetry indicates Potassium deficiency at 15cm root-zone depth. Apply 150kg/ha of NPK 15-15-15 fertilizer before rain onset via verified cooperative agents.",
    audioDesc: "Proximal sensing root-zone telemetry note",
    badge: "English Proximal Sensor AI"
  },
  ha: {
    title: "Hausa Proximal Sensing Recommendation",
    dialect: "Kano & Kaduna Dialect",
    text: "Na'urar gwajin kusa (Proximal Sensor) tana nuna kasar shuka tana buƙatar taki mai dauke da NPK 15-15-15. Kada ku sayi taki na bogi, yi amfani da USSD *384*55#.",
    audioDesc: "Hausa proximal soil telemetry guidance",
    badge: "Hausa Proximal Sensor AI"
  },
  yo: {
    title: "Yoruba Proximal Sensing Recommendation",
    dialect: "Oyo & Ogun Dialect",
    text: "Àyẹ̀wò ohun-elo ilẹ̀ ti proximal sensor fi hàn pé ó ní lílo ajile NPK 20-10-10 ni iwọn 15cm ninu ilẹ̀. Tọ́jú ìwé-ẹ́rí rẹ lórí SOILREVIVE láti rí ajile gidi gbà.",
    audioDesc: "Yoruba proximal soil chemistry voice note",
    badge: "Yoruba Proximal Sensor AI"
  },
  ig: {
    title: "Igbo Proximal Sensing Recommendation",
    dialect: "Enugu & Anambra Dialect",
    text: "Na'urar proximal sensor ewerela nyocha ala gị na-egosi na ala gị chọrọ NPK 15-15-15. Gaa n'ụlọ ahịa SOILREVIVE Verified ga-azụta ya n'enweghị adịgboroja.",
    audioDesc: "Igbo proximal root crop voice note",
    badge: "Igbo Proximal Sensor AI"
  },
  pcm: {
    title: "Pidgin Proximal Sensing Recommendation",
    dialect: "Naija Pidgin",
    text: "Our proximal soil sensor touch your farmland soil directly check NPK and pH level sharp sharp. E show say potassium dey low well well. Put 150kg per hectare of NPK 15-15-15.",
    audioDesc: "Pidgin proximal sensing voice note",
    badge: "Pidgin Proximal Sensor AI"
  },
  fr: {
    title: "Recommandation Vocale par Capteur Proximal",
    dialect: "Français Standard",
    text: "La télémétrie par capteur proximal direct indique une déficience en potassium dans la zone racinaire. Appliquez 150 kg/ha d'engrais NPK 15-15-15.",
    audioDesc: "Guide agronomique par détection proximale",
    badge: "Français Proximal Sensor AI"
  },
  sw: {
    title: "Ushauri wa Sauti wa Sensorer ya udongo (Proximal)",
    dialect: "Kiswahili Sanifu",
    text: "Kipimo cha udongo cha karibu (Proximal Sensing) kinaonyesha ukosefu wa potasiamu katika mizizi. Weka kilo 150/ha za mbolea ya NPK 15-15-15 kabla ya mvua.",
    audioDesc: "Sauti ya ushauri wa udongo kwa Kiswahili",
    badge: "Swahili Proximal Sensor AI"
  },
  ar: {
    title: "توصية الاستشعار القريب للتربة (Proximal Sensing)",
    dialect: "Fusha Arabic",
    text: "تظهر قياسات جهاز الاستشعار المباشر للتربة (Proximal Sensor) وجود نقص في البوتاسيوم في منطقة الجذور. يُنصح بإضافة 150 كجم/هكتار من سماد NPK 15-15-15.",
    audioDesc: "التوجيه الصوتي لفحص التربة المباشر",
    badge: "Arabic Proximal Sensor AI"
  },
  es: {
    title: "Recomendación de Sensor Proximal de Suelo",
    dialect: "Español Estándar",
    text: "La telemetría de sensor proximal directo en la zona radicular indica deficiencia de potasio. Aplique 150 kg/ha de fertilizante NPK 15-15-15 antes de las lluvias.",
    audioDesc: "Guía de audio por detección radicular directa",
    badge: "Español Proximal Sensor AI"
  },
  pt: {
    title: "Recomendação por Sensor Proximal de Solo",
    dialect: "Português",
    text: "A análise direta por sensor proximal no solo indica deficiência de potássio na zona radicular. Aplique 150 kg/ha de fertilizante NPK 15-15-15.",
    audioDesc: "Nota de voz por sensor proximal direto",
    badge: "Português Proximal Sensor AI"
  },
  ff: {
    title: "Fulfulde Proximal Sensing Advice",
    dialect: "Fulfulde Dialect",
    text: "Na'urar proximal sensor hollitii leydi ndiin ina haani heɓde takki NPK 15-15-15 ko adii toɓo. Huutoree USSD *384*55# ngam heɓde ko laaɓi.",
    audioDesc: "Fulfulde proximal sensing audio",
    badge: "Fulfulde Proximal Sensor AI"
  },
  de: {
    title: "Bodenempfehlung via Proximale Sensorik",
    dialect: "Deutsch",
    text: "Die proximale Bodensensorik misst direkt im Wurzeldurchwurzelungsraum einen Kaliummangel. Tragen Sie vor Regenbeginn 150 kg/ha NPK 15-15-15-Dünger aus.",
    audioDesc: "Deutsche KI-Sprachausgabe für proximale Sensorik",
    badge: "Deutsch Proximal Sensor AI"
  },
  zh: {
    title: "近端土壤传感器智能建议",
    dialect: "Mandarin Chinese",
    text: "近端土壤传感器（Proximal Sensing）根系层实测数据显示严重缺钾。建议在降雨前每公顷施用150公斤NPK 15-15-15复合肥。",
    audioDesc: "中文近端土壤传感器AI指导",
    badge: "Chinese Proximal Sensor AI"
  }
};

export const AI_PROMPT_SUGGESTIONS: Record<string, string[]> = {
  en: [
    "How does Proximal Field Sensing analyze soil content in real time?",
    "What fertilizer ratio should I use for Cassava in acidic soil?",
    "Where can I buy IITA-certified genuine fertilizer near me?",
    "How to connect the Bluetooth Proximal Smart Probe to my phone?"
  ],
  ha: [
    "Yaya na'urar gwajin kusa (Proximal Sensing) ke auna kasar gona?",
    "Wane irin taki ya fi dacewa da rogo a kasar acidic?",
    "Ina zan samu takin gargajiya mai inganci a kusa da ni?",
    "Yaya ake amfani da USSD *384*55# domin gwajin ƙasa?"
  ],
  yo: [
    "Bawo ni proximal sensing se n ṣe àyẹ̀wò ilẹ̀ oko lẹsẹkẹsẹ?",
    "Kini ajile ti o dara julọ fun gbaguda lori ilẹ̀ ti o ni acid?",
    "Nibo ni mo ti le ra ajile gidi ti IITA fọwọsi?",
    "Bawo ni mo ṣe le lo USSD *384*55# lori foonu mi?"
  ],
  ig: [
    "Kedu ka proximal sensing si na-enyocha ala n'oge kwesịrị ewesị?",
    "Kedu fatilayiza kacha mma maka akpụ n'ala nwere acid?",
    "Olee ebe m nwere ike ịzụta fatilayiza gboo agboo?",
    "Kedu ka m ga-esi jiri USSD *384*55# nweta nsonaazụ?"
  ],
  pcm: [
    "How proximal soil sensor dey take test my soil content direct for farm?",
    "Which fertilizer formula good pass for cassava inside acidic soil?",
    "Where I go fit buy original fertilizer wey IITA stamp?",
    "How I go use USSD code *384*55# check my soil strength?"
  ],
  fr: [
    "Comment le capteur proximal analyse-t-il le sol en temps réel?",
    "Quel engrais dois-je utiliser pour le manioc sur sol acide?",
    "Où puis-je acheter des engrais certifiés IITA près de chez moi?",
    "Comment connecter la sonde proximale Bluetooth à mon téléphone?"
  ],
  sw: [
    "Je, kipimio cha udongo cha karibu (Proximal Sensor) kinapimaje udongo?",
    "Ni mbolea gani bora kwa muhogo kwenye udongo wenye asidi?",
    "Wapi naweza kununua mbolea halisi iliyoidhinishwa na IITA?",
    "Jinsi gani naweza kutumia msimbo wa USSD *384*55#?"
  ],
  ar: [
    "كيف يقيس الاستشعار المباشر (Proximal Sensing) مكونات التربة؟",
    "ما هي نسبة السماد الأفضل للمحاصيل في التربة الحمضية؟",
    "أين يمكنني شراء أسمدة معتمدة ومضمونة بالقرب مني؟",
    "كيف يمكنني استخدام رمز USSD *384*55# لفحص التربة؟"
  ],
  es: [
    "¿Cómo analiza el sensor proximal el contenido del suelo en tiempo real?",
    "¿Qué fertilizante debo usar para la yuca en suelo ácido?",
    "¿Dónde puedo comprar fertilizante certificado genuino?",
    "¿Cómo conectar la sonda inteligente proximal Bluetooth?"
  ],
  pt: [
    "Como o sensor proximal analisa o conteúdo do solo em tempo real?",
    "Qual fertilizante devo usar para a mandioca em solo ácido?",
    "Onde posso comprar fertilizantes certificados genuínos?",
    "Como usar o código USSD *384*55# para testar o solo?"
  ],
  ff: [
    "No proximal sensing aunjirta limtooji leydi am e nder gese?",
    "Taki moyƴo ngam rogo e leydi ndi njiidaa e asid?",
    "Hol to njahatmi ngam soodde takki goonga IITA?",
    "No huutortoo-mi USSD *384*55# ngam limtooji leydi?"
  ],
  de: [
    "Wie analysiert der proximale Bodensensor den Bodengehalt in Echtzeit?",
    "Welcher Dünger ist am besten für Maniok auf saurem Boden?",
    "Wo kann ich zertifizierten Originaldünger kaufen?",
    "Wie verwende ich den USSD-Code *384*55#?"
  ],
  zh: [
    "近端土壤传感器（Proximal Sensing）如何实时检测土壤成分？",
    "在酸性土壤中种植木薯应该使用什么配方的复合肥？",
    "我在哪里可以购买到经过IITA认证的真品肥料？",
    "如何通过蓝牙近端智能探针将土壤数据同步到手机？"
  ]
};

// Smart Multilingual Response Engine focused 100% on Proximal Sensing
export function getAiMultilingualResponse(userQuery: string, langCode: string): string {
  const queryLower = userQuery.toLowerCase();
  
  const responses: Record<string, {
    fertilizer: string;
    proximal: string;
    market: string;
    probe: string;
    general: string;
  }> = {
    en: {
      fertilizer: "Based on proximal soil sensing telemetry directly from the root zone, acidic soils (pH 5.0 - 6.2) require NPK 15-15-15 blended with 10% Agricultural Lime. Apply 200 - 250 kg/ha in 2 split applications during early rains to boost yield by up to +32%.",
      proximal: "Proximal Soil Sensing is SOILREVIVE's single core precision technology. By bringing multi-frequency electrochemical probes and optical near-infrared sensors directly into the soil root zone (0-30cm), it measures exact Nitrogen, Phosphorus, Potassium, pH, electrical conductivity, and moisture content with 99.8% field accuracy.",
      market: "All fertilizers ordered via SOILREVIVE are QR-code serialized to guarantee ZERO fake chemicals. You can order directly via our app or dial *384*55# to pick up at your nearest LGA agro-dealer hub.",
      probe: "Turn on Bluetooth on your smartphone, open SOILREVIVE app, and insert your Proximal Smart Soil Probe into the soil. Press the power button for 2 seconds. Root-zone telemetry syncs automatically in <3 seconds.",
      general: "Hello! I am SOILREVIVE's Multilingual Agronomy AI Assistant. Powered by Proximal Soil Sensing technology, I inspect real-time soil content, recommend precision fertilizer blends, and predict crop health in any language."
    },
    ha: {
      fertilizer: "Bisa ga samfurin ƙasa na Proximal Sensor daga saiwoyin shuka, ƙasar da take da acid tana buƙatar takin NPK 15-15-15 tare da toshin lemun tsami (Lime). Yi amfani da kilogiram 200-250 a kowace hektare.",
      proximal: "Proximal Soil Sensing ita ce babbar fasahar SOILREVIVE wacce ake amfani da ita domin duba sinadaran kasar gona (N, P, K, pH) kai tsaye a gonar manoma ba tare da jira ba.",
      market: "Dukkan takin da ake sayarwa a SOILREVIVE yana da lambar tabbatarwa mai lamba ta musamman domin kauce wa takin bogi. Zaku iya amfani da lambar USSD *384*55#.",
      probe: "Bude Bluetooth a wayoyinku, saka na'urar Proximal Sensor a cikin kasar gona, sannan ku danna maballin na dakikoki 2. Sakamakon gwajin zai bayyana a wayar cikin dakikoki 3 kacal.",
      general: "Barka da zuwa! Ni ne Mataimakin AI na SOILREVIVE wanda yake amfani da fasahar Proximal Sensing domin duba sinadaran kasar gona a Harshen Hausa."
    },
    yo: {
      fertilizer: "Gẹgẹ bi àyẹ̀wò proximal sensor ninu ilẹ̀ oko rẹ, ilẹ̀ ti o ni acid nilo ajile NPK 15-15-15 ti a popọ pẹlu Ẹfun Ilẹ (Agricultural Lime). Lo 200 - 250kg fun hektari kan.",
      proximal: "Fasaha Proximal Soil Sensing ni imọ-ẹrọ akọkọ ti SOILREVIVE ń lo lati ṣe àyẹ̀wò ohun ti o wa ninu ilẹ̀ (N, P, K, pH, omi ati mọto) lẹsẹkẹsẹ pẹlu nkan-elo proximal sensor.",
      market: "Gbogbo ajile lori SOILREVIVE ni QR-code ti a fọwọsi lati ri i daju pe ko si ajile adịgboroja. O le tẹ USSD *384*55# lori foonu rẹ lati ra ajile gidi.",
      probe: "Tẹ Bluetooth foonu rẹ silẹ, fi ohun-elo proximal sensor bọ inu ilẹ̀ oko, ki o tẹ maballin fun sekond 2. O yoo rí nkan ti ilẹ̀ rẹ nilo lẹsẹkẹsẹ.",
      general: "Ẹ ku bọ! Emi ni AI Olubaworana SOILREVIVE ti o n lo imọ-ẹrọ Proximal Sensing lati ṣe àyẹ̀wò ilẹ̀ oko rẹ lẹsẹkẹsẹ ni Èdè Yorùbá."
    },
    ig: {
      fertilizer: "Dabere na nyocha ala proximal sensor n'ala gị, ala nwere acid chọrọ NPK 15-15-15 tinyere Nzu Ala (Lime). Jiri 200 - 250 kg per hectare n'oge mmiri ozuzo mbụ.",
      proximal: "Proximal Soil Sensing bụ otu teknụzụ pụrụ iche SOILREVIVE na-eji enyocha ihe nri dị n'ala (Nitrogen, Phosphorus, Potassium na pH) n'otu ntabi anya.",
      market: "Fatilayiza niile dị na SOILREVIVE nwere koodu nyocha QR iji hụ na ọ bụghị gboo agboo (fake). I nwere ike ịkpọ USSD *384*55# zụta fatilayiza gboo.",
      probe: "Gbanye Bluetooth na fọn gị, sọnye Proximal Soil Probe n'ala, pịa bọtịnụ maka sekọnd 2. Ị ga-ahụ nsonaazụ ala gị n'ime sekọnd 3.",
      general: "Nnoo! Abụ m AI Inyeaka SOILREVIVE na-eji teknụzụ Proximal Sensing enyocha ala gị na-enye ndụmọdụ fatilayiza n'asụsụ Igbo na asụsụ niile."
    },
    pcm: {
      fertilizer: "Based on proximal soil sensor test directly inside your farm root zone, soil wey get acid need NPK 15-15-15 mix with small Agricultural Lime.",
      proximal: "Proximal Soil Sensing na the only main technology wey SOILREVIVE dey use check soil content. The sensor probe dey enter ground directly measure NPK, pH, and water level under 3 seconds!",
      market: "Every fertilizer wey you buy inside SOILREVIVE get original QR stamp so fake chemical no go enter your farm. Just press USSD *384*55# for your line.",
      probe: "On your phone Bluetooth, push the Proximal Smart Probe inside your farm soil, press the button for 2 seconds. Soil content results go show sharp sharp!",
      general: "How far my country farmer! I be SOILREVIVE Multilingual AI Assistant. Powered by Proximal Soil Sensing technology to check your soil content!"
    },
    fr: {
      fertilizer: "Selon la télémétrie de détection proximale directement dans la zone racinaire, les sols acides nécessitent du NPK 15-15-15 enrichi en chaux agricole.",
      proximal: "La détection proximale du sol (Proximal Soil Sensing) est la technologie de précision unique de SOILREVIVE. Les sondes électrochimiques et optiques mesurent directement le N, P, K et le pH avec une précision de 99,8%.",
      market: "Tous les engrais certifiés SOILREVIVE possèdent un code QR d'authenticité pour éliminer les contrefaçons. Commandez via l'application ou le code USSD *384*55#.",
      probe: "Activez le Bluetooth, insérez la sonde proximale dans le sol et appuyez sur le bouton pendant 2 secondes. Vos données NPK s'affichent instantanément.",
      general: "Bonjour! Je suis l'assistant IA multilingue de SOILREVIVE. Basé sur la technologie de détection proximale du sol, j'analyse le contenu du sol en temps réel."
    },
    sw: {
      fertilizer: "Kulingana na vipimo vya sensorer ya udongo ya karibu (Proximal Sensing) kwenye mizizi, udongo wenye asidi unahitaji NPK 15-15-15 uliochanganywa na chokaa.",
      proximal: "Proximal Soil Sensing ndiyo teknolojia kuu ya SOILREVIVE inayotumiwa kupima viundaji vya udongo (Nitrojeni, Fosforasi, Potasiamu na pH) moja kwa moja shambani.",
      market: "Mbolea zote za SOILREVIVE zina msimbo wa QR ili kuhakikisha hazina bandia. Unaweza kuagiza kupitia programu au kupiga msimbo wa USSD *384*55#.",
      probe: "Washa Bluetooth kwenye simu, chomeka Proximal Sensor kwenye udongo na ubonyeze kitufe. Matokeo ya udongo yatatokea kwa sekunde 3.",
      general: "Jambo! Mimi ni Msaidizi wa AI wa SOILREVIVE anayetumia teknolojia ya Proximal Sensing kupima udongo kwa Kiswahili na lugha zote."
    },
    ar: {
      fertilizer: "بناءً على قياسات الاستشعار المباشر للتربة (Proximal Sensing)، نوصي بسماد NPK 15-15-15 مع الجير الزراعي.",
      proximal: "تقنية الاستشعار المباشر للتربة (Proximal Soil Sensing) هي التقنية الرئيسية الوحيدة في منصة SOILREVIVE لفحص النيتروجين والفوسفور والبوتاسيوم ودرجة الحموضة مباشرة من منطقة الجذور.",
      market: "جميع الأسمدة المعتمدة في المنصة مزودة برموز QR لمنع الغش التجاري. يمكنك الطلب عبر التطبيق أو طلب رمز USSD *384*55#.",
      probe: "قم بتشغيل البلوتوث وأدخل جهاز الفحص المباشر في التربة واضغط على الزر لمده ثانيتين للحصول على التقرير خلال 3 ثوانٍ.",
      general: "مرحباً بك! أنا مساعد الذكاء الاصطناعي متعدد اللغات من SOILREVIVE المبني على تقنية الاستشعار المباشر للتربة (Proximal Sensing)."
    },
    es: {
      fertilizer: "Según la telemetría del sensor proximal directo en la zona radicular, los suelos ácidos requieren NPK 15-15-15 con cal agrícola.",
      proximal: "El sensor proximal de suelo (Proximal Soil Sensing) es la única tecnología de precisión de SOILREVIVE para medir nitrógeno, fósforo, potasio y pH directamente en el campo con 99,8% de precisión.",
      market: "Todos los fertilizantes en SOILREVIVE incluyen códigos QR verificables contra falsificaciones. Compre mediante la app o marcando USSD *384*55#.",
      probe: "Active el Bluetooth, inserte la sonda proximal en el suelo y presione el botón durante 2 segundos. Sus datos NPK aparecerán en 3 segundos.",
      general: "¡Hola! Soy el Asistente de IA Multilingüe de SOILREVIVE. Basado en tecnología de detección proximale de suelo, analizo el contenido del suelo en tiempo real."
    },
    pt: {
      fertilizer: "Com base na detecção proximal direta do solo na zona radicular, os solos ácidos necessitam de NPK 15-15-15 com calcário agrícola.",
      proximal: "A detecção proximal de solo (Proximal Soil Sensing) é a tecnologia de precisão principal da SOILREVIVE para medir N, P, K e pH diretamente na raiz do solo.",
      market: "Todos os fertilizantes certificados possuem código QR para evitar produtos falsificados. Encomende pela aplicação ou via USSD *384*55#.",
      probe: "Ligue o Bluetooth, insira a sonda proximal no solo e prima o botão por 2 segundos. Os dados do solo ficam disponíveis em 3 segundos.",
      general: "Olá! Sou o Assistente de IA Multilingue da SOILREVIVE. Utilizo a tecnologia de sensor proximal para analisar o conteúdo do solo em tempo real."
    },
    ff: {
      fertilizer: "Bisa ga limtooji Proximal Sensor e leydi ndiin, leydi ndiin ina haani heɓde NPK 15-15-15 e lime.",
      proximal: "Proximal Soil Sensing woni fasaha arandeeji SOILREVIVE ngam huutoraade limtooji leydi (N, P, K, pH) e nder gese mon.",
      market: "Takki fof ina tawee e QR-code ngam haɗde takki bonɗi. Aɗa waawi huutoraade USSD *384*55# ngam soodde ko laaɓi.",
      probe: "Ubbitee Bluetooth fon mon, loowee Proximal Sensor e leydi, njaɓɓee maballo sekondaaji 2. Limtooji mon ngarta e sekondaaji 3.",
      general: "Jam waali/nyalli! Miin woni AI Balloowo SOILREVIVE huutortooɗo fasaha Proximal Sensing ngam ƴeewtaade leydi mon."
    },
    de: {
      fertilizer: "Basierend auf der proximalen Bodensensorik direkt in der Wurzelzone benötigen saure Böden NPK 15-15-15 gemischt mit Düngekalk.",
      proximal: "Die proximale Bodensensorik (Proximal Soil Sensing) ist die einzige Kernpräzisionstechnologie von SOILREVIVE zur direkten Messung von N, P, K, pH und Feuchtigkeit im Wurzeldurchwurzelungsraum.",
      market: "Alle Düngemittel bei SOILREVIVE besitzen einen fälschungssicheren QR-Code. Bestellung direkt über die App oder per USSD-Code *384*55#.",
      probe: "Schalten Sie Bluetooth ein, stecken Sie die proximale Sonde in den Boden und drücken Sie 2 Sekunden lang. Die N-P-K-Werte erscheinen in 3 Sekunden.",
      general: "Hallo! Ich bin der mehrsprachige KI-Agrarassistent von SOILREVIVE. Basierend auf proximaler Sensorik analysiere ich Bodeninhalte in Echtzeit."
    },
    zh: {
      fertilizer: "根据近端土壤传感器（Proximal Sensing）根系层实测数据，酸性土壤需要施用NPK 15-15-15并添加农业石灰。",
      proximal: "近端土壤检测（Proximal Soil Sensing）是SOILREVIVE的核心精度技术。通过电化学及近红外光学探针直接深入土壤根系层（0-30cm），以99.8%的极高精度实时测量氮、磷、钾、pH值及水分。",
      market: "SOILREVIVE平台上的所有化肥均带有防伪二维码，彻底杜绝假冒伪劣化肥。您可通过App下单或拨打USSD代码 *384*55# 订购。",
      probe: "开启手机蓝牙，将近端智能探针插入土壤，长按电源键2秒，即可在3秒内实时获取N、P、K、pH值及湿度数据。",
      general: "您好！我是SOILREVIVE多语言农业AI助手。基于近端土壤检测技术，为您实时检测土壤成分并推荐精准化肥配方。"
    }
  };

  const langPack = responses[langCode] || responses.en;

  if (queryLower.includes('fertilizer') || queryLower.includes('taki') || queryLower.includes('ajile') || queryLower.includes('fatilayiza') || queryLower.includes('engrais') || queryLower.includes('mbolea') || queryLower.includes('سماد') || queryLower.includes('肥料')) {
    return langPack.fertilizer;
  }
  if (queryLower.includes('proximal') || queryLower.includes('sensing') || queryLower.includes('soil content') || queryLower.includes('technology') || queryLower.includes('stack')) {
    return langPack.proximal;
  }
  if (queryLower.includes('buy') || queryLower.includes('market') || queryLower.includes('sau') || queryLower.includes('ra') || queryLower.includes('zụta') || queryLower.includes('ussd') || queryLower.includes('*384*55#')) {
    return langPack.market;
  }
  if (queryLower.includes('probe') || queryLower.includes('sensor') || queryLower.includes('bluetooth') || queryLower.includes('gwaji') || queryLower.includes('àyẹ̀wò')) {
    return langPack.probe;
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
