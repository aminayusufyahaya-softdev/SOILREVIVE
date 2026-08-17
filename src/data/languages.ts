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
    title: "English Soil Recommendation",
    dialect: "Standard English",
    text: "Farmer, your soil telemetry indicates Potassium deficiency. Apply 150kg/ha of NPK 15-15-15 fertilizer before rain onset via verified cooperative agents.",
    audioDesc: "Universal English soil guidance note",
    badge: "English AI Voice"
  },
  ha: {
    title: "Hausa Voice Recommendation",
    dialect: "Kano & Kaduna Dialect",
    text: "Manoma, gwajin kasar amfanin gona yana nuna tana buƙatar taki mai dauke da NPK 15-15-15. Kada ku sayi taki na bogi, zaku iya amfani da USSD *384*55#.",
    audioDesc: "Hausa agronomy audio guidance",
    badge: "Hausa AI Voice"
  },
  yo: {
    title: "Yoruba Voice Recommendation",
    dialect: "Oyo & Ogun Dialect",
    text: "Àgbẹ̀ wa, àyẹ̀wò ilẹ̀ yín fi hàn pé ó ní lílo ajile NPK 20-10-10. Tọ́jú ìwé-ẹ́rí rẹ lórí SOILREVIVE láti rí ajile gidi gbà lọ́wọ́ àwọn aṣoju IITA.",
    audioDesc: "Yoruba soil chemistry voice note",
    badge: "Yoruba AI Voice"
  },
  ig: {
    title: "Igbo Voice Recommendation",
    dialect: "Enugu & Anambra Dialect",
    text: "Nne na nna, ala gị chọrọ NPK 15-15-15 mgbe mmiri ozuzo gụchara. Gaa n'ụlọ ahịa SOILREVIVE Verified ga-azụta ya n'enweghị adịgboroja ma ọ bụ aghụghọ.",
    audioDesc: "Igbo cassava & root crop voice note",
    badge: "Igbo AI Voice"
  },
  pcm: {
    title: "Pidgin Voice Recommendation",
    dialect: "Naija Pidgin",
    text: "Oga Farmer, your farmland test show say potassium dey low well well. Put 150kg per hectare of NPK 15-15-15 before rain start to fall. Dial *384*55# to get original fertilizer.",
    audioDesc: "Pidgin voice note for smallholder farmers",
    badge: "Pidgin AI Voice"
  },
  fr: {
    title: "Recommandation Vocale en Français",
    dialect: "Français Standard",
    text: "Cher agriculteur, la télémétrie du sol indique une déficience en potassium. Appliquez 150 kg/ha d'engrais NPK 15-15-15 avant les pluies auprès d'agents certifiés.",
    audioDesc: "Guide agronomique en français",
    badge: "Français AI Voice"
  },
  sw: {
    title: "Ushauri wa Sauti wa Swahili",
    dialect: "Kiswahili Sanifu",
    text: "Mkulima, vipimo vya udongo wako vinaonyesha ukosefu wa potasiamu. Weka kilo 150/ha za mbolea ya NPK 15-15-15 kabla ya mvua kuanza kupitia mawakala walioidhinishwa.",
    audioDesc: "Sauti ya ushauri wa udongo kwa Kiswahili",
    badge: "Swahili AI Voice"
  },
  ar: {
    title: "توصية التربة باللغة العربية",
    dialect: "Fusha Arabic",
    text: "عزيزي المزارع، تظهر قياسات التربة وجود نقص في البوتاسيوم. يُنصح بإضافة 150 كجم/هكتار من سماد NPK 15-15-15 قبل هطول الأمطار عبر الوكلاء المعتمدين.",
    audioDesc: "التوجيه الصوتي العربي لصحة التربة",
    badge: "Arabic AI Voice"
  },
  es: {
    title: "Recomendación de Suelo en Español",
    dialect: "Español Estándar",
    text: "Estimado agricultor, los datos del suelo muestran una deficiencia de potasio. Aplique 150 kg/ha de fertilizante NPK 15-15-15 antes de las lluvias a través de distribuidores autorizados.",
    audioDesc: "Guía de audio agronómica en español",
    badge: "Español AI Voice"
  },
  pt: {
    title: "Recomendação de Solo em Português",
    dialect: "Português",
    text: "Caro agricultor, a análise do solo indica deficiência de potássio. Aplique 150 kg/ha de fertilizante NPK 15-15-15 antes do início das chuvas através de parceiros certificados.",
    audioDesc: "Nota de voz agronômica em português",
    badge: "Português AI Voice"
  },
  ff: {
    title: "Rewobe & Worbe Fulfulde Advice",
    dialect: "Fulfulde Dialect",
    text: "Remooɓe, limoore leydi mon hollitii leydi ndiin ina haani heɓde takki NPK 15-15-15 ko adii toɓo. Huutoree USSD *384*55# ngam heɓde ko laaɓi.",
    audioDesc: "Fulfulde soil recommendation audio",
    badge: "Fulfulde AI Voice"
  },
  de: {
    title: "Bodenempfehlung auf Deutsch",
    dialect: "Deutsch",
    text: "Lieber Landwirt, die Bodenanalyse zeigt einen Kaliummangel. Tragen Sie vor Regenbeginn 150 kg/ha NPK 15-15-15-Dünger über zertifizierte Partner aus.",
    audioDesc: "Deutsche KI-Sprachausgabe für Bodenanalyse",
    badge: "Deutsch AI Voice"
  },
  zh: {
    title: "中文土壤智能建议",
    dialect: "Mandarin Chinese",
    text: "尊敬的农户，土壤遥测数据显示严重缺钾。建议在降雨前每公顷施用150公斤NPK 15-15-15复合肥，可通过SOILREVIVE认证渠道采购。",
    audioDesc: "中文农业AI语音指导",
    badge: "Chinese AI Voice"
  }
};

export const AI_PROMPT_SUGGESTIONS: Record<string, string[]> = {
  en: [
    "What fertilizer ratio should I use for Cassava in acidic soil?",
    "How does Sentinel-2 satellite NDVI detect crop nitrogen stress?",
    "Where can I buy IITA-certified genuine fertilizer near me?",
    "How to connect the Bluetooth Smart Probe to my phone?"
  ],
  ha: [
    "Wane irin taki ya fi dacewa da rogo a kasar acidic?",
    "Ta yaya tauraron ɗan adam ke gano matsalar amfanin gona?",
    "Ina zan samu takin gargajiya mai inganci a kusa da ni?",
    "Yaya ake amfani da USSD *384*55# domin gwajin ƙasa?"
  ],
  yo: [
    "Kini ajile ti o dara julọ fun gbaguda lori ilẹ̀ ti o ni acid?",
    "Bawo ni satelaiti se n mọ nigbati erugbin ba n wa omi?",
    "Nibo ni mo ti le ra ajile gidi ti IITA fọwọsi?",
    "Bawo ni mo ṣe le lo USSD *384*55# lori foonu mi?"
  ],
  ig: [
    "Kedu fatilayiza kacha mma maka akpụ n'ala nwere acid?",
    "Kedu ka satịlaịtị si amata mgbe nri na-agwụ n'ala?",
    "Olee ebe m nwere ike ịzụta fatilayiza gboo agboo?",
    "Kedu ka m ga-esi jiri USSD *384*55# nweta nsonaazụ?"
  ],
  pcm: [
    "Which fertilizer formula good pass for cassava inside acidic soil?",
    "How satellite dey take know say my corn need water and NPK?",
    "Where I go fit buy original fertilizer wey IITA stamp?",
    "How I go use USSD code *384*55# check my soil strength?"
  ],
  fr: [
    "Quel engrais dois-je utiliser pour le manioc sur sol acide?",
    "Comment le satellite Sentinel-2 détecte-t-il le stress azoté?",
    "Où puis-je acheter des engrais certifiés IITA près de chez moi?",
    "Comment connecter la sonde Bluetooth à mon téléphone?"
  ],
  sw: [
    "Ni mbolea gani bora kwa muhogo kwenye udongo wenye asidi?",
    "Je, satalaiti inatambuaje ukosefu wa nitrojeni kwenye mimea?",
    "Wapi naweza kununua mbolea halisi iliyoidhinishwa na IITA?",
    "Jinsi gani naweza kutumia msimbo wa USSD *384*55#?"
  ],
  ar: [
    "ما هي نسبة السماد الأفضل للمحاصيل في التربة الحمضية؟",
    "كيف يحدد القمر الصناعي نقص النيتروجين في النباتات؟",
    "أين يمكنني شراء أسمدة معتمدة ومضمونة بالقرب مني؟",
    "كيف يمكنني استخدام رمز USSD *384*55# لفحص التربة؟"
  ],
  es: [
    "¿Qué fertilizante debo usar para la yuca en suelo ácido?",
    "¿Cómo detecta el satélite la falta de nitrógeno en los cultivos?",
    "¿Dónde puedo comprar fertilizante certificado genuino?",
    "¿Cómo conectar la sonda inteligente Bluetooth?"
  ],
  pt: [
    "Qual fertilizante devo usar para a mandioca em solo ácido?",
    "Como o satélite detecta a falta de azoto nas culturas?",
    "Onde posso comprar fertilizantes certificados genuínos?",
    "Como usar o código USSD *384*55# para testar o solo?"
  ],
  ff: [
    "Taki moyƴo ngam rogo e leydi ndi njiidaa e asid?",
    "No tauraron ɗan adam anndirta ngewu e takki e nder leydi?",
    "Hol to njahatmi ngam soodde takki goonga IITA?",
    "No huutortoo-mi USSD *384*55# ngam limtooji leydi?"
  ],
  de: [
    "Welcher Dünger ist am besten für Maniok auf saurem Boden?",
    "Wie erkennt der Satellit den Stickstoffmangel der Pflanzen?",
    "Wo kann ich zertifizierten Originaldünger kaufen?",
    "Wie verwende ich den USSD-Code *384*55#?"
  ],
  zh: [
    "在酸性土壤中种植木薯应该使用什么配方的复合肥？",
    "Sentinel-2卫星如何通过遥感检测农作物的氮素胁迫？",
    "我在哪里可以购买到经过IITA认证的真品肥料？",
    "如何通过蓝牙智能探针将土壤数据同步到手机？"
  ]
};

// Smart Multilingual Response Engine
export function getAiMultilingualResponse(userQuery: string, langCode: string): string {
  const queryLower = userQuery.toLowerCase();
  
  // Custom response mapping per language
  const responses: Record<string, {
    fertilizer: string;
    satellite: string;
    market: string;
    probe: string;
    general: string;
  }> = {
    en: {
      fertilizer: "Based on soil telemetry from Nigerian agro-ecological zones, acidic soils (pH 5.0 - 6.2) require NPK 15-15-15 blended with 10% Agricultural Lime or Calcified Dolomite. Apply 200 - 250 kg/ha in 2 split applications during early rains to boost yield by up to +32%.",
      satellite: "SOILREVIVE processes European Space Agency Sentinel-2 multispectral images (B8A NIR & B4 Red Band) to calculate NDVI & NDRE vegetation index. Low values (<0.35) trigger instant SMS/USSD alerts highlighting crop stress zones.",
      market: "All fertilizers ordered via SOILREVIVE are QR-code serialized to guarantee ZERO fake chemicals. You can order directly via our app or dial *384*55# to pick up at your nearest LGA agro-dealer hub.",
      probe: "Turn on Bluetooth on your smartphone, open SOILREVIVE app, and press the power button on your Smart Soil Probe for 2 seconds. Telemetry (N, P, K, pH, moisture, temp) syncs automatically in <3 seconds.",
      general: "Hello! I am SOILREVIVE's Multilingual Agronomy AI Assistant. I can analyze your soil test reports, recommend precision fertilizer blends, predict crop yields, and help you get NAQS export certifications in any language."
    },
    ha: {
      fertilizer: "Bisa ga samfurin ƙasa na SOILREVIVE, ƙasar da take da acid tana buƙatar takin NPK 15-15-15 tare da toshin lemun tsami (Lime). Yi amfani da kilogiram 200-250 a kowace hektare a farkon damana don samun karuwar amfanin gona da +32%.",
      satellite: "Tauraron ɗan adam na Sentinel-2 yana daukar hoto na gona yana nuna wuraren da shuka ke buƙatar ruwa ko taki. Idan aka samu matsala, AI dinmu za ta aiko muku da saƙon SMS ko murya nan take.",
      market: "Dukkan takin da ake sayarwa a SOILREVIVE yana da lambar tabbatarwa mai lamba ta musamman domin kauce wa takin bogi. Zaku iya amfani da lambar USSD *384*55#.",
      probe: "Bude Bluetooth a wayoyinku, sannan ku danna maballin na'urar gwajin ƙasa na dakikoki 2. Sakamakon gwajin (N, P, K da pH) zai bayyana a wayar cikin dakikoki 3 kacal.",
      general: "Barka da zuwa! Ni ne Mataimakin AI na SOILREVIVE mai jin harsuna daban-daban. Zan iya taimaka muku wajen fahimtar lafiyar kasar gonarku da ba ku shawarwarin taki mai inganci a Harshen Hausa."
    },
    yo: {
      fertilizer: "Gẹgẹ bi àyẹ̀wò ilẹ̀ SOILREVIVE, ilẹ̀ ti o ni acid nilo ajile NPK 15-15-15 ti a popọ pẹlu Ẹfun Ilẹ (Agricultural Lime). Lo 200 - 250kg fun hektari kan ni igba ojo akọkọ lati mu ki idaraya gbaguda rẹ pọ si i pẹlu +32%.",
      satellite: "Satelaiti Sentinel-2 n ṣe àyẹ̀wò àwọ̀ ewé oko rẹ lati mọ igba ti erugbin ba n wa omi tabi ajile. AI wa yoo fi atejiṣe ranṣẹ sí foonu rẹ lẹsẹkẹsẹ.",
      market: "Gbogbo ajile lori SOILREVIVE ni QR-code ti a fọwọsi lati ri i daju pe ko si ajile adịgboroja. O le tẹ USSD *384*55# lori foonu rẹ lati ra ajile gidi.",
      probe: "Tẹ Bluetooth foonu rẹ silẹ, ṣii app SOILREVIVE, ki o tẹ maballin ohun-elo gwajin ilẹ̀ fun sekond 2. O yoo rí nkan ti ilẹ̀ rẹ nilo lẹsẹkẹsẹ.",
      general: "Ẹ ku bọ! Emi ni AI Olubaworana SOILREVIVE ni Èdè Yorùbá. Mo le ṣe àyẹ̀wò ilẹ̀ oko rẹ, gba ọ ni imọran lori ajile ti o dara jọ lọ, ki n si ṣe iranlọwọ lati jẹ ki oko rẹ so púpọ̀."
    },
    ig: {
      fertilizer: "Dabere na nyocha ala SOILREVIVE, ala nwere acid chọrọ NPK 15-15-15 tinyere Nzu Ala (Lime). Jiri 200 - 250 kg per hectare n'oge mmiri ozuzo mbụ iji bulie ihe ubi gị ruo +32%.",
      satellite: "Satịlaịtị Sentinel-2 na-ese foto ala gị site n'igwe iji mara ebe osisi na-enweghị nri ma ọ bụ mmiri. AI anyị ga-ezitere gị ozi n'asụsụ Igbo ozugbo.",
      market: "Fatilayiza niile dị na SOILREVIVE nwere koodu nyocha QR iji hụ na ọ bụghị gboo agboo (fake). I nwere ike ịkpọ USSD *384*55# zụta fatilayiza gboo.",
      probe: "Gbanye Bluetooth na fọn gị, meghee app SOILREVIVE, pịa bọtịnụ na'urar nyocha ala maka sekọnd 2. Ị ga-ahụ nsonaazụ N, P, K na pH n'ime sekọnd 3.",
      general: "Nnoo! Abụ m AI Inyeaka SOILREVIVE na-asụ Asụsụ Igbo na asụsụ niile. M nwere ike inyere gị aka nyochaa ala gị, nye gị ndụmọdụ fatilayiza, na ịhụ na ihe ubi gị mịrị nke ọma."
    },
    pcm: {
      fertilizer: "Based on soil testing for Naija land, soil wey get acid need NPK 15-15-15 mix with small Agricultural Lime. Use 200-250kg for one hectare when rain start, your crop yield go jump up by +32%!",
      satellite: "Sentinel-2 satellite dey snap your farm from sky check whether your cassava or corn dey thirsty or hungry. AI go send you SMS alert sharp sharp for Pidgin.",
      market: "Every fertilizer wey you buy inside SOILREVIVE get original QR stamp so fake chemical no go enter your farm. Just press USSD *384*55# for your line.",
      probe: "On your phone Bluetooth, open SOILREVIVE app, press the smart probe button for 2 seconds. The soil results go show for your screen under 3 seconds!",
      general: "How far my country farmer! I be SOILREVIVE Multilingual AI Assistant. I dey speak Pidgin, Hausa, Yoruba, Igbo, French and all languages to guide your farm make you gain big money!"
    },
    fr: {
      fertilizer: "Pour les sols acides (pH 5,0 - 6,2), nous recommandons le NPK 15-15-15 enrichi en chaux agricole. Appliquez 200 à 250 kg/ha au début des pluies pour augmenter le rendement de +32%.",
      satellite: "Le système satellite Sentinel-2 analyse l'indice NDVI de vos parcelles. En cas de stress hydrique ou azoté, notre IA vous envoie une alerte vocale ou SMS.",
      market: "Tous les engrais certifiés SOILREVIVE possèdent un code QR d'authenticité pour éliminer les contrefaçons. Commandez via l'application ou le code USSD *384*55#.",
      probe: "Activez le Bluetooth, lancez l'application SOILREVIVE et maintenez le bouton de la sonde enfoncé pendant 2 secondes. Vos données NPK s'affichent instantanément.",
      general: "Bonjour! Je suis l'assistant IA multilingue de SOILREVIVE. Je réponds à toutes vos questions agricoles et analyses de sol en français et dans plus de 12 langues."
    },
    sw: {
      fertilizer: "Kulingana na vipimo vya udongo, udongo wenye asidi unahitaji NPK 15-15-15 uliochanganywa na chokaa ya kilimo. Weka kilo 200-250 kwa hektari msimu wa mvua kuongeza mavuno kwa +32%.",
      satellite: "Satalaiti ya Sentinel-2 inachanganua afya ya mazao yako kwa kutumia viashiria vya NDVI. Mfumo wa AI utakutumia taarifa ya haraka kulingana na matokeo.",
      market: "Mbolea zote za SOILREVIVE zina msimbo wa QR ili kuhakikisha hazina bandia. Unaweza kuagiza kupitia programu au kupiga msimbo wa USSD *384*55#.",
      probe: "Washa Bluetooth kwenye simu yako, fungua SOILREVIVE na ubonyeze kitufe cha kipimio. Matokeo ya N-P-K yatatokea kwa sekunde 3 pekee.",
      general: "Jambo! Mimi ni Msaidizi wa AI wa SOILREVIVE. Nina uwezo wa kujibu maswali yako ya kilimo na kupima udongo kwa Kiswahili na lugha zote duniani."
    },
    ar: {
      fertilizer: "بناءً على قياسات التربة الحمضية، نوصي بسماد NPK 15-15-15 مع الجير الزراعي بنسبة 10%. يجب إضافة 200 - 250 كجم/هكتار مع بداية الأمطار لزيادة الإنتاج بنسبة +32%.",
      satellite: "يستخدم نظام SOILREVIVE صور الأقمار الصناعية Sentinel-2 لتحليل صحة المحاصيل والمساحات المتأثرة بالجفاف مع إرسال تنبيهات فورية.",
      market: "جميع الأسمدة المعتمدة في المنصة مزودة برموز QR لمنع الغش التجاري. يمكنك الطلب عبر التطبيق أو طلب رمز USSD *384*55#.",
      probe: "قم بتشغيل البلوتوث وافتح التطبيق واضغط على زر جهاز الفحص الذكي لمده ثانيتين للحصول على التقرير خلال 3 ثوانٍ.",
      general: "مرحباً بك! أنا مساعد الذكاء الاصطناعي متعدد اللغات من SOILREVIVE. يمكنني تحليل تربتك وتقديم استشارات زراعية فورية باللغة العربية وكافة اللغات."
    },
    es: {
      fertilizer: "Para suelos ácidos, se recomienda NPK 15-15-15 combinado con cal agrícola. Aplique 200-250 kg/ha al inicio de las lluvias para aumentar el rendimiento un +32%.",
      satellite: "El satélite Sentinel-2 monitorea el índice vegetativo NDVI de sus cultivos. El motor de IA le notifica de inmediato si detecta deficiencia de nutrientes.",
      market: "Todos los fertilizantes en SOILREVIVE incluyen códigos QR verificables contra falsificaciones. Compre mediante la app o marcando USSD *384*55#.",
      probe: "Active el Bluetooth de su teléfono, abra SOILREVIVE y presione el botón de la sonda durante 2 segundos. Sus datos NPK aparecerán en 3 segundos.",
      general: "¡Hola! Soy el Asistente de IA Multilingüe de SOILREVIVE. Respondo a consultas agronómicas, diagnósticos de suelo y recomendaciones en español y más de 12 idiomas."
    },
    pt: {
      fertilizer: "Para solos ácidos, recomendamos NPK 15-15-15 misturado com calcário agrícola. Aplique 200-250 kg/ha no início das chuvas para aumentar o rendimento em +32%.",
      satellite: "O satélite Sentinel-2 analisa a saúde das culturas através de imagens NDVI. A IA envia alertas instantâneos em caso de estresse hídrico.",
      market: "Todos os fertilizantes certificados possuem código QR para evitar produtos falsificados. Encomende pela aplicação ou via USSD *384*55#.",
      probe: "Ligue o Bluetooth, abra a aplicação SOILREVIVE e prima o botão da sonda por 2 segundos. Os dados do solo ficam disponíveis em 3 segundos.",
      general: "Olá! Sou o Assistente de IA Multilingue da SOILREVIVE. Analiso dados de solo e dou recomendações agrícolas em português e em todas as línguas."
    },
    ff: {
      fertilizer: "Leydi ndiin tawaama ina haani heɓde NPK 15-15-15 e toshi lime. Huutoree 200-250 kg e ndunngu ngam ɓeydude ɗuɗal amfanin gona teemedere e 32%.",
      satellite: "Tauraron Sentinel-2 ina ƴeewtoo gese mon ngam hollude eɓɓooji mboros walla ngewu leydi. AI amin ina nelda kabaaruuuji njoɓdi.",
      market: "Takki fof ina tawee e QR-code ngam haɗde takki bonɗi. Aɗa waawi huutoraade USSD *384*55# ngam soodde ko laaɓi.",
      probe: "Ubbitee Bluetooth fon mon, mɓoɗee SOILREVIVE app, njaɓɓee maballo Probe sekondaaji 2. Limtooji mon ngarta e sekondaaji 3.",
      general: "Jam waali/nyalli! Miin woni AI Balloowo SOILREVIVE e ɗemngal Fulfulde e ɗemɗe goɗɗe. Miɗo wallita on e limtooji leydi mon."
    },
    de: {
      fertilizer: "Für saure Böden (pH 5,0 - 6,2) empfehlen wir NPK 15-15-15 gemischt mit Düngekalk. Tragen Sie zu Beginn der Regenzeit 200-250 kg/ha auf, um Erträge um +32% zu steigern.",
      satellite: "Sentinel-2 Satellitendaten berechnen den Vegetationsindex NDVI Ihrer Felder. Bei Nährstoffmangel erhalten Sie sofortige KI-Benachrichtigungen.",
      market: "Alle Düngemittel bei SOILREVIVE besitzen einen fälschungssicheren QR-Code. Bestellung direkt über die App oder per USSD-Code *384*55#.",
      probe: "Schalten Sie Bluetooth ein, öffnen Sie die SOILREVIVE-App und drücken Sie 2 Sekunden lang die Sonde. Die N-P-K-Werte erscheinen in 3 Sekunden.",
      general: "Hallo! Ich bin der mehrsprachige KI-Agrarassistent von SOILREVIVE. Ich liefere präzise Bodenanalysen und Düngerempfehlungen auf Deutsch und in allen Sprachen."
    },
    zh: {
      fertilizer: "针对酸性土壤（pH 5.0 - 6.2），建议施用配比为15-15-15的NPK复合肥并添加10%农业石灰。雨季初期每公顷施用200-250公斤，可提升作物产量高达+32%。",
      satellite: "SOILREVIVE结合Sentinel-2卫星多光谱数据计算植被指数（NDVI），一旦发现作物缺氮或水分胁迫，AI系统将立即发送预警信息。",
      market: "SOILREVIVE平台上的所有化肥均带有防伪二维码，彻底杜绝假冒伪劣化肥。您可通过App下单或拨打USSD代码 *384*55# 订购。",
      probe: "开启手机蓝牙，打开SOILREVIVE App，长按智能土壤探针电源键2秒，即可在3秒内实时获取N、P、K、pH值及湿度数据。",
      general: "您好！我是SOILREVIVE多语言农业AI助手。我可以为您提供精准土壤分析、化肥配方推荐以及全球多种语言的农业实时问答服务。"
    }
  };

  const langPack = responses[langCode] || responses.en;

  if (queryLower.includes('fertilizer') || queryLower.includes('taki') || queryLower.includes('ajile') || queryLower.includes('fatilayiza') || queryLower.includes('engrais') || queryLower.includes('mbolea') || queryLower.includes('سماد') || queryLower.includes('肥料')) {
    return langPack.fertilizer;
  }
  if (queryLower.includes('satellite') || queryLower.includes('tauraron') || queryLower.includes('satelaiti') || queryLower.includes('satịlaịtị') || queryLower.includes('ndvi') || queryLower.includes('قمر')) {
    return langPack.satellite;
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
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Map language code to speech code
    const langObj = SUPPORTED_LANGUAGES.find(l => l.code === langCode);
    const targetSpeechCode = langObj ? langObj.speechCode : 'en-US';

    utterance.lang = targetSpeechCode;
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Try finding matching voice
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
