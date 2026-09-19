/* ==========================================================================
   KISAN ALERT - APPLICATION ENGINE (PHASE 2)
   ========================================================================== */

// 1. LANGUAGE TRANSLATION DICTIONARY
const translations = {
  en: {
    app_title: "Kisan Alert",
    app_subtitle: "Indic AI Ag-Intelligence Platform",
    rsk_online: "RSK Gateway: Online",
    nav_dashboard: "Dashboard Summary",
    nav_recommender: "Crop Recommender",
    nav_telemetry: "IoT & Weather Sensors",
    nav_tickets: "Rythu Seva Tickets",
    sidebar_forecast_title: "Live Weather Advisory",
    cond_dry: "Dry & Warm",
    dry_spell_risk: "High Dry-Spell Risk",
    dashboard_heading: "Regional Agronomy Overview",
    dashboard_desc: "Real-time indicators across monitored clusters & farmer feeds.",
    metric_active_farmers: "Active Registered Farmers",
    metric_soil_moisture: "Avg Soil Moisture",
    metric_advisories: "Dry-Spell Broadcasts",
    metric_rsk_tickets: "RSK Expert Cases Open",
    soil_distribution_map: "Monitored Soil Moisture Map",
    live_satellite: "Satellite Overlaid",
    legend_optimal: "Optimal (>30%)",
    legend_moderate: "Moderate (20-30%)",
    legend_critical: "Critical (<20%)",
    telemetry_realtime_heading: "Live Sensor Telemetry",
    sensor_live_feed: "Streaming",
    nitrogen_level: "Nitrogen (N)",
    phosphorus_level: "Phosphorus (P)",
    potassium_level: "Potassium (K)",
    groundwater_depth: "Groundwater Table",
    ph_level: "Soil pH",
    ph_optimal: "Optimal",
    ground_temp: "Soil Temp",
    temp_warm: "Warm",
    recommender_heading: "Smart Crop Recommendation Engine",
    recommender_desc: "Input local soil chemistry and satellite-derived rainfall data to generate crop suggestions matching agronomic databases.",
    soil_parameters: "Soil & Environmental Parameters",
    nitrogen_n: "Nitrogen (N) - mg/kg",
    phosphorus_p: "Phosphorus (P) - mg/kg",
    potassium_k: "Potassium (K) - mg/kg",
    soil_ph_lbl: "Soil pH (3.5 - 9.0)",
    soil_moist_lbl: "Soil Moisture (%)",
    rainfall_lbl: "Season Rainfall (mm)",
    groundwater_lbl: "Groundwater (m)",
    btn_run_recommendation: "Run Crop Analysis",
    crop_matches_title: "Top Recommended Crops",
    recommender_placeholder_text: "Set parameters and run analysis to view suitable crops.",
    telemetry_heading: "Weather Advisory & IoT Field Telemetry",
    telemetry_desc: "Configure regional dry-spell parameters and monitor village-level environmental metrics.",
    soil_moisture_trend: "Soil Moisture Trend vs Temperature (Last 24 Hours)",
    dry_spell_detected: "Dry Spell Approaching",
    broadcast_sms_voice: "Broadcast Smart SMS / Voice Advisories",
    advisory_target_lbl: "Target Villages",
    opt_all_villages: "All Monitored Clusters (1,248 Farmers)",
    opt_dry_affected: "Low Soil Moisture Zones (284 Farmers)",
    opt_anantapur: "Anantapur East Cluster (120 Farmers)",
    advisory_template_lbl: "Alert Template",
    tpl_custom: "-- Custom Message --",
    tpl_dry_spell: "Dry Spell Advisory: Drought symptoms in soil. Apply 10mm supplementary irrigation from farm pond.",
    tpl_pest: "Pest Warning: Reports of Paddy Blast in neighbouring village. Inspect leaves and spray Tricyclazole if lesions appear.",
    tpl_rain: "Heavy Rain Warning: Expected heavy downpour (40mm) in 24h. Postpone urea fertilizer applications.",
    message_content: "Message Content (Synthesized to SMS & IVR Voice)",
    btn_broadcast: "Broadcast Warning (SMS + Call)",
    localized_forecast_details: "Localized Weather Micro-Forecast",
    weather_evap: "Evapotranspiration (ET)",
    weather_humidity: "Relative Humidity",
    weather_wind: "Wind Velocity",
    weather_solar: "Solar Radiation",
    drought_index: "Drought Risk Index",
    tickets_heading: "Rythu Seva Kendras (RSK) Expert Helpline",
    tickets_desc: "Manage incoming farmer diagnostic tickets. Review AI-suggested symptoms and approve resolutions.",
    active_case_queue: "Active Diagnostic Queue",
    select_ticket_text: "Select an active ticket from the queue to view AI diagnostics, crop photo logs, and trigger direct farmer advisories.",
    sim_header: "Farmer SMS/Voice Simulator",
    sim_sub: "Interact here to see how farmers receive information or log data using basic SMS and voice calls.",
    chat_yesterday: "Yesterday",
    welcome_sms: "Welcome to Kisan Alert agricultural gateway. Send soil data in syntax: <strong>CROP N P K pH MOISTURE</strong> (e.g. CROP 50 40 30 6.5 20) for crop recommendation.",
    voice_live_trans: "IVR Transcripts & Speech Synth",
    click_answer: "Click ANSWER below to listen to the weather advisory and speak to the portal.",
    call_answer: "Answer",
    call_hangup: "Decline",
    kisan_sewa_app: "Kisan Sewa App",
    app_menu_health: "Crop Health AI",
    app_menu_sensor: "Field Sensors",
    upload_crop_photo: "Log crop photo/voice query",
    click_photo_btn: "Click sample leaf to upload",
    mic_record_desc: "Tap to record voice query",
    btn_submit_rsk: "Submit to Rythu Seva",
    app_sensor_status: "Live Field Telemetry",
    soil_moist: "Moisture:",
    soil_temp: "Temperature:",
    nitrogen_n_val: "Nitrogen:",
    phosphorus_p_val: "Phosphorus:",
    potassium_k_val: "Potassium:",
    app_refresh: "Refresh Telemetry",
    app_refreshing: "Syncing...",
    digital_soil_card: "Digital Soil Health Card",
    farmer_welcome: "Farmer Farm Dashboard",
    farmer_welcome_desc: "Check your pre-registered soil test levels and personalized agronomy advices."
  },
  te: {
    app_title: "కిసాన్ అలర్ట్",
    app_subtitle: "ఇండిక్ AI వ్యవసాయ సమాచార వ్యవస్థ",
    rsk_online: "RSK గేట్‌వే: ఆన్‌లైన్",
    nav_dashboard: "సమీక్షా పట్టిక",
    nav_recommender: "పంటల సూచిక",
    nav_telemetry: "సెన్సార్ల సమాచారం",
    nav_tickets: "రైతు సేవ టిక్కెట్లు",
    sidebar_forecast_title: "వాతావరణ సలహా",
    cond_dry: "పొడి మరియు వేడి",
    dry_spell_risk: "తీవ్ర పొడి వాతావరణం",
    dashboard_heading: "ప్రాంతీయ వ్యవసాయ సమీక్ష",
    dashboard_desc: "নিజ సమయ క్షేత్ర స్థాయి సెన్సార్లు మరియు రైతు డేటా.",
    metric_active_farmers: "రిజిస్టర్డ్ రైతులు",
    metric_soil_moisture: "సగటు నేల తేమ",
    metric_advisories: "పొడి వాతావరణ హెచ్చరికలు",
    metric_rsk_tickets: "ఓపెన్ సహాయ కేసులు",
    soil_distribution_map: "నేల తేమ పంపిణీ పటం",
    live_satellite: "శాటిలైట్ డేటా",
    legend_optimal: "అనుకూలం (>30%)",
    legend_moderate: "మధ్యస్థం (20-30%)",
    legend_critical: "తీవ్ర క్షీణత (<20%)",
    telemetry_realtime_heading: "క్షేత్ర స్థాయి లైవ్ సెన్సార్లు",
    sensor_live_feed: "లైవ్ ప్రసారం",
    nitrogen_level: "నత్రజని (N)",
    phosphorus_level: "భాస్వరం (P)",
    potassium_level: "పొటాషియం (K)",
    groundwater_depth: "భూగర్భ జల మట్టం",
    ph_level: "నేల pH",
    ph_optimal: "అనుకూలం",
    ground_temp: "నేల ఉష్ణోగ్రత",
    temp_warm: "వేడిగా ఉంది",
    recommender_heading: "పంట సిఫార్సు ఇంజిన్",
    recommender_desc: "నేల రసాయన స్థాయిలు, వర్షపాతం ఆధారంగా ఉత్తమ పంటలను ఎంచుకోండి.",
    soil_parameters: "నేల మరియు వాతావరణ పారామితులు",
    nitrogen_n: "నత్రజని (N) - mg/kg",
    phosphorus_p: "భాస్వరం (P) - mg/kg",
    potassium_k: "పొటాషియం (K) - mg/kg",
    soil_ph_lbl: "నేల pH (3.5 - 9.0)",
    soil_moist_lbl: "నేల తేమ (%)",
    rainfall_lbl: "రుతుపవన వర్షపాతం (mm)",
    groundwater_lbl: "భూగర్భ జలం (మీటర్లు)",
    btn_run_recommendation: "పంటల విశ్లేషణ రన్ చేయి",
    crop_matches_title: "సిఫార్సు చేయబడిన పంటలు",
    recommender_placeholder_text: "ಸೂಚಕಗಳನ್ನು ಮಾರ್చి విశ్లేషణను రన్ చేయండి.",
    telemetry_heading: "వాతావరణ సలహాలు & IoT సెన్సార్లు",
    telemetry_desc: "స్థానిక వర్షపాతం, క్షేత్ర స్థాయి సెన్సార్ల డేటా మానిటరింగ్.",
    soil_moisture_trend: "తేమ మరియు ఉష్ణోగ్రత గ్రాఫ్ (24 గంటలు)",
    dry_spell_detected: "పొడి వాతావరణ ప్రభావం ఉంది",
    broadcast_sms_voice: "స్మార్ట్ SMS / వాయిస్ సలహా ప్రసారం",
    advisory_target_lbl: "లక్ష్య గ్రామాలు",
    opt_all_villages: "అన్ని గ్రామాలు (1,248 రైతులు)",
    opt_dry_affected: "తక్కువ తేమ గల ప్రాంతాలు (284 రైతులు)",
    opt_anantapur: "అనంతపురం తూర్పు క్లస్టర్",
    advisory_template_lbl: "హెచ్చరిక టెంప్లేట్",
    tpl_custom: "-- కస్టమ్ సందేశం --",
    tpl_dry_spell: "పొడి వాతావరణ హెచ్చరిక: పొలంలో తేమ తగ్గింది. వ్యవసాయ కుంట నుండి 10 మి.మీ నీటి తడులు ఇవ్వండి.",
    tpl_pest: "తెగులు హెచ్చరిక: పొరుగు గ్రామంలో అగ్గి తెగులు సోకింది. మీ వరి పొలాన్ని తనిఖీ చేసి ట్రైసైక్లాజోల్ పిచికారీ చేయండి.",
    tpl_rain: "ಭారీ వర్ష సూచన: 24 గంటల్లో భారీ వర్షం (40మి.మీ) పడే అవకాశం ఉంది. ఎరువులు వేయడం వాయిదా వేయండి.",
    message_content: "సందేశ సారాంశం (SMS మరియు వాయిస్ కాల్ ద్వారా పంపబడుతుంది)",
    btn_broadcast: "హెచ్చరికను పంపు (SMS + వాయిస్)",
    localized_forecast_details: "స్థానిక వాతావరణ అంచనా",
    weather_evap: "బాష్పీభవనం (ET)",
    weather_humidity: "సాపేక్ష ఆర్ద్రత",
    weather_wind: "గాలి వేగం",
    weather_solar: "సౌర వికిరణం",
    drought_index: "కరవు ప్రమాద సూచిక",
    tickets_heading: "రೈతు సేవా కేంద్రం (RSK) హెల్ప్‌లైన్",
    tickets_desc: "వచ్చిన రైతు పంట సమస్యలను పరిశీలించి, నిపుణుల సలహాలు ఇవ్వండి.",
    active_case_queue: "పరిశీలనలో ఉన్న కేసులు",
    select_ticket_text: "రైతు పంపిన ఫోటో, వాయిస్ మరియు AI వ్యాధి నిర్ధారణను చూడటానికి క్యూలో ఉన్న టికెట్‌ను ఎంచుకోండి.",
    sim_header: "రైతు SMS/వాయిస్ సిమ్యులేటర్",
    sim_sub: "SMS మరియు వాయిస్ కాల్స్ ఎలా పనిచేస్తాయో ఇక్కడ పరిశీలించండి.",
    chat_yesterday: "నిన్న",
    welcome_sms: "కిసాన్ అలర్ట్ గేట్‌వేకి స్వాగతం. పంట సిఫార్సుల కోసం మీ నేల డేటాను ఈ క్రింది విధంగా పంపండి: CROP N P K pH MOISTURE (ఉదా: CROP 50 40 30 6.5 20).",
    voice_live_trans: "వాయిస్ కాల్ అనువాదం & రికార్డింగ్",
    click_answer: "వాతావరణ సలహాను వినడానికి మరియు మాట్లాడటానికి క్రింద ఉన్న 'Answer' బటన్ నొక్కండి.",
    call_answer: "లిఫ్ట్ చేయి",
    call_hangup: "కట్ చేయి",
    kisan_sewa_app: "రైతు సేవ యాప్",
    app_menu_health: "పంట జబ్బుల AI",
    app_menu_sensor: "పొలం సెన్సార్లు",
    upload_crop_photo: "పంట ఫోటో/వాయిస్ రికార్డ్ చేయండి",
    click_photo_btn: "ఆకును ఎంచుకుని అప్‌లోడ్ చేయండి",
    mic_record_desc: "వాయిస్ ప్రశ్న కోసం మైక్ నొక్కండి",
    btn_submit_rsk: "రైతు సేవ కేంద్రానికి పంపు",
    app_sensor_status: "పొలం సెన్సార్ రీడింగులు",
    soil_moist: "నేల తేమ:",
    soil_temp: "ఉష్ణోగ్రత:",
    nitrogen_n_val: "నత్రజని:",
    phosphorus_p_val: "భాస్వరం:",
    potassium_k_val: "పొటాషియం:",
    app_refresh: "సెన్సార్ రీఫ్రెష్",
    app_refreshing: "రిఫ్రెష్ అవుతోంది...",
    digital_soil_card: "డిజిటల్ సాయిల్ హెల్త్ కార్డ్",
    farmer_welcome: "రైతు పొలం డ్యాష్‌ಬೋರ್డ్",
    farmer_welcome_desc: "మీ భూమి నేల పరీక్షా స్థాయిలు మరియు అనుకూల పంటల సమాచారం."
  },
  hi: {
    app_title: "किसान अलर्ट",
    app_subtitle: "इंडिक एआई कृषि इंटेलिजेंस प्लेटफॉर्म",
    rsk_online: "आरएसके गेटवे: ऑनलाइन",
    nav_dashboard: "डैशबोर्ड सारांश",
    nav_recommender: "फसल अनुशंसक",
    nav_telemetry: "आईओटी और मौसम सेंसर",
    nav_tickets: "रैतु सेवा टिकट्स",
    sidebar_forecast_title: "लाइव मौसम सलाह",
    cond_dry: "शुष्क और गर्म",
    dry_spell_risk: "उच्च सूखा जोखिम",
    dashboard_heading: "क्षेत्रीय कृषि अवलोकन",
    dashboard_desc: "सेंसर और किसान फीड से प्राप्त लाइव डेटा।",
    metric_active_farmers: "सक्रिय पंजीकृत किसान",
    metric_soil_moisture: "औसत मिट्टी की नमी",
    metric_advisories: "सूखा चेतावनी प्रसारण",
    metric_rsk_tickets: "सक्रिय विशेषज्ञ सहायता केस",
    soil_distribution_map: "मिट्टी नमी वितरण मानचित्र",
    live_satellite: "सैटेलाइट डेटा ओवरले",
    legend_optimal: "अनुकूल (>30%)",
    legend_moderate: "मध्यम (20-30%)",
    legend_critical: "गंभीर स्थिति (<20%)",
    telemetry_realtime_heading: "लाइव सेंसर टेलीमेट्री",
    sensor_live_feed: "लाइव स्ट्रीमिंग",
    nitrogen_level: "नाइट्रोजन (N)",
    phosphorus_level: "फास्फोरस (P)",
    potassium_level: "पोटेशियम (K)",
    groundwater_depth: "भूजल स्तर",
    ph_level: "मिट्टी का pH",
    ph_optimal: "अनुकूल",
    ground_temp: "मिट्टी का तापमान",
    temp_warm: "गर्म",
    recommender_heading: "स्मार्ट फसल अनुशंसा प्रणाली",
    recommender_desc: "मिट्टी के रसायनों और वर्षा डेटा के आधार पर सर्वश्रेष्ठ फसल का चुनाव करें।",
    soil_parameters: "मिट्टी और पर्यावरण पैरामीटर",
    nitrogen_n: "नाइट्रोजन (N) - mg/kg",
    phosphorus_p: "फास्फोरस (P) - mg/kg",
    potassium_k: "पोटेशियम (K) - mg/kg",
    soil_ph_lbl: "मिट्टी का pH (3.5 - 9.0)",
    soil_moist_lbl: "मिट्टी की नमी (%)",
    rainfall_lbl: "मौसम की वर्षा (mm)",
    groundwater_lbl: "भूजल (मीटर)",
    btn_run_recommendation: "फसल विश्लेषण चलाएं",
    crop_matches_title: "अनुशंसित फसलें",
    recommender_placeholder_text: "पैरामीटर सेट करें और विश्लेषण चलाएं।",
    telemetry_heading: "मौसम सलाह और आईओटी सेंसर",
    telemetry_desc: "सूखा सूचकांक और ग्रामीण स्तर के मौसम सेंसर का विश्लेषण।",
    soil_moisture_trend: "मिट्टी की नमी बनाम तापमान ग्राफ (24 घंटे)",
    dry_spell_detected: "सूखा मौसम निकट है",
    broadcast_sms_voice: "स्मार्ट SMS / वॉयस सलाह प्रसारित करें",
    advisory_target_lbl: "लक्षित गाँव",
    opt_all_villages: "सभी क्लस्टर (1,248 किसान)",
    opt_dry_affected: "कम नमी वाले क्षेत्र (284 किसान)",
    opt_anantapur: "अनंतपुर पूर्व क्लस्टर",
    advisory_template_lbl: "चेतावनी टेम्पलेट",
    tpl_custom: "-- कस्टम संदेश --",
    tpl_dry_spell: "सूखा सलाह: मिट्टी में सूखापन देखा गया है। कृषि तालाब से 10 मिमी पूरक सिंचाई करें।",
    tpl_pest: "कीट चेतावनी: पड़ोसी गाँव में धान झोंका रोग (ब्लास्ट) की सूचना मिली है। पत्तियों की जाँच करें और ट्राइसाइक्लाज़ोल छिड़कें।",
    tpl_rain: "भारी बारिश की चेतावनी: 24 घंटे में भारी बारिश (40 मिमी) की संभावना। यूरिया खाद का छिड़काव टालें।",
    message_content: "संदेश सामग्री (इसे SMS और वॉयस कॉल द्वारा भेजा जाएगा)",
    btn_broadcast: "प्रसारण भेजें (SMS + कॉल)",
    localized_forecast_details: "स्थानीय मौसम पूर्वानुमान",
    weather_evap: "वाष्पीकरण (ET)",
    weather_humidity: "सापेक्ष आर्द्रता",
    weather_wind: "हवा की गति",
    weather_solar: "सौर विकिरण",
    drought_index: "सूखा जोखिम सूचकांक",
    tickets_heading: "रैतु सेवा केंद्र (RSK) हेल्पलाइन",
    tickets_desc: "किसानों की समस्याओं को देखें और विशेषज्ञ सलाह भेजें।",
    active_case_queue: "सक्रिय सहायता कतार",
    select_ticket_text: "फसल के फोटो, वॉयस और एआई निदान देखने के लिए कतार से एक टिकट चुनें।",
    sim_header: "किसान SMS/वॉयस सिम्युलेटर",
    sim_sub: "यहाँ देखें कि बुनियादी फोन पर किसानों को कैसे अलर्ट मिलते हैं।",
    chat_yesterday: "कल",
    welcome_sms: "किसान अलर्ट कृषि गेटवे में आपका स्वागत है। फसल सलाह के लिए इस प्रारूप में मिट्टी की जानकारी भेजें: CROP N P K pH MOISTURE (जैसे CROP 50 40 30 6.5 20)",
    voice_live_trans: "वॉयस कॉल ट्रांसक्रिप्ट और सिंथेसाइज़र",
    click_answer: "मौसम की सलाह सुनने और बात करने के लिए नीचे ANSWER पर क्लिक करें।",
    call_answer: "उत्तर दें",
    call_hangup: "काटें",
    kisan_sewa_app: "किसान सेवा ऐप",
    app_menu_health: "फसल स्वास्थ्य एआई",
    app_menu_sensor: "खेत के सेंसर",
    upload_crop_photo: "फसल का फोटो या वॉयस रिकॉर्ड करें",
    click_photo_btn: "सैंपल पत्ती चुनकर अपलोड करें",
    mic_record_desc: "वॉयस सवाल पूछने के लिए माइक दबाएं",
    btn_submit_rsk: "रैतु सेवा केंद्र में जमा करें",
    app_sensor_status: "खेत की लाइव रिपोर्ट",
    soil_moist: "मिट्टी नमी:",
    soil_temp: "तापमान:",
    nitrogen_n_val: "नाइट्रोजन:",
    phosphorus_p_val: "फास्फोरस:",
    potassium_k_val: "पोटेशियम:",
    app_refresh: "सेंसर अपडेट",
    app_refreshing: "सिंक हो रहा है...",
    digital_soil_card: "डिजिटल सॉयल हेल्थ कार्ड",
    farmer_welcome: "किसान निजी डैशबोर्ड",
    farmer_welcome_desc: "अपनी खेत की मिट्टी की जांच रिपोर्ट और उपयुक्त फसल अनुशंसाएं देखें।"
  },
  kn: {
    app_title: "ಕಿಸಾನ್ ಅಲರ್ಟ್",
    app_subtitle: "ಇಂಡಿಕ್ ಎಐ ಕೃಷಿ ಮಾಹಿತಿ ವೇದಿಕೆ",
    rsk_online: "RSK ಗೇಟ್‌ವೇ: ಆನ್‌ಲೈನ್",
    nav_dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಸಾರಾಂಶ",
    nav_recommender: "ಬೆಳೆ ಶಿಫಾರಸು",
    nav_telemetry: "ಸೆನ್ಸರ್ ಮಾಹಿತಿ",
    nav_tickets: "ರೈತ ಸೇವಾ ಟಿಕೆಟ್‌ಗಳು",
    sidebar_forecast_title: "ಲೈವ್ ಹವಾಮಾನ ಸಲಹೆ",
    cond_dry: "ಒಣ ಮತ್ತು ಬಿಸಿ",
    dry_spell_risk: "ಹೆಚ್ಚಿನ ಬರ ಅಪಾಯ",
    dashboard_heading: "ಪ್ರಾದೇಶಿಕ ಕೃಷಿ ಅವಲೋಕನ",
    dashboard_desc: "ರಿಯಲ್ ಟೈಮ್ ಸೆನ್ಸಾರ್ ಮಾಹಿತಿ ಮತ್ತು ರೈತರ ಫೀಡ್ ಲಾಗ್.",
    metric_active_farmers: "ಸಕ್ರಿಯ ನೊಂದಾಯಿತ ರೈತರು",
    metric_soil_moisture: "ಸರಾಸರಿ ಮಣ್ಣಿನ ತೇವಾಂಶ",
    metric_advisories: "ಬರ ಮುನ್ನೆಚ್ಚರಿಕೆ ಪ್ರಸಾರ",
    metric_rsk_tickets: "ಸಕ್ರಿಯ ತಜ್ಞರ ಪ್ರಕರಣಗಳು",
    soil_distribution_map: "ಮಣ್ಣಿನ ತೇವಾಂಶ ನಕ್ಷೆ",
    live_satellite: "ಉಪಗ್ರಹ ಡೇಟಾ ಓವರ್ಲೇ",
    legend_optimal: "ಅನುಕೂಲಕರ (>30%)",
    legend_moderate: "ಮಧ್ಯಮ (20-30%)",
    legend_critical: "ಅಪಾಯದ ಮಟ್ಟ (<20%)",
    telemetry_realtime_heading: "ಲೈವ್ ಐಒಟಿ ಸೆನ್ಸಾರ್ ಮಾಹಿತಿ",
    sensor_live_feed: "ಲೈವ್ ಪ್ರಸಾರ",
    nitrogen_level: "ಸಾರಜನಕ (N)",
    phosphorus_level: "ರಂಜಕ (P)",
    potassium_level: "ಪೊಟ್ಯಾಸಿಯಮ್ (K)",
    groundwater_depth: "ಅಂತರ್ಜಲ ಮಟ್ಟ",
    ph_level: "ಮಣ್ಣಿನ pH",
    ph_optimal: "ಅನುಕೂಲಕರ",
    ground_temp: "ಮಣ್ಣಿನ ತಾಪಮಾನ",
    temp_warm: "ಬಿಸಿಯಾಗಿದೆ",
    recommender_heading: "ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಶಿಫಾರಸು ಎಂಜಿನ್",
    recommender_desc: "ಮಣ್ಣಿನ ರಾಸಾಯನಿಕ ಮತ್ತು ಮಳೆಯ ಆಧಾರದ ಮೇಲೆ ಸೂಕ್ತ ಬೆಳೆಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    soil_parameters: "ಮಣ್ಣು ಮತ್ತು ಪರಿಸರ ಸೂಚಕಗಳು",
    nitrogen_n: "ಸಾರಜನಕ (N) - mg/kg",
    phosphorus_p: "ರಂಜಕ (P) - mg/kg",
    potassium_k: "ಪೊಟ್ಯಾಸಿಯಮ್ (K) - mg/kg",
    soil_ph_lbl: "ಮಣ್ಣಿನ pH (3.5 - 9.0)",
    soil_moist_lbl: "ಮಣ್ಣಿನ ತೇವಾಂಶ (%)",
    rainfall_lbl: "ಋತುಮಾನದ ಮಳೆ (mm)",
    groundwater_lbl: "ಅಂತರ್ಜಲ (ಮೀಟರ್)",
    btn_run_recommendation: "ವಿಶ್ಲೇಷಣೆ ರನ್ ಮಾಡಿ",
    crop_matches_title: "ಶಿಫಾರಸು ಮಾಡಲಾದ ಬೆಳೆಗಳು",
    recommender_placeholder_text: "ಸೂಚಕಗಳನ್ನು ಬದಲಾಯಿಸಿ ವಿಶ್ಲೇಷಣೆ ರನ್ ಮಾಡಿ.",
    telemetry_heading: "ಹವಾಮಾನ ಸಲಹೆ ಮತ್ತು ಐಒಟಿ ಸೆನ್ಸರ್‌ಗಳು",
    telemetry_desc: "ಪ್ರಾದೇಶಿಕ ಬರ ಸೂಚ್ಯಂಕ ಮತ್ತು ಗ್ರಾಮೀಣ ಹವಾಮಾನ ವಿಶ್ಲೇಷಣೆ.",
    soil_moisture_trend: "ಮಣ್ಣಿನ ತೇವಾಂಶ ಮತ್ತು ತಾಪಮಾನ ಗ್ರಾಫ್ (24 ಗಂಟೆ)",
    dry_spell_detected: "ಬರ ಪರಿಸ್ಥಿತಿ ಸಮೀಪಿಸುತ್ತಿದೆ",
    broadcast_sms_voice: "ಸ್ಮಾರ್ಟ್ SMS / ವಾಯ್ಸ್ ಸಲಹೆ ಪ್ರಸಾರಮಾಡಿ",
    advisory_target_lbl: "ಗುರಿ ಹಳ್ಳಿಗಳು",
    opt_all_villages: "ಎಲ್ಲಾ ಹಳ್ಳಿಗಳು (1,248 ರೈತರು)",
    opt_dry_affected: "ಕಡಿಮೆ ತೇವಾಂಶದ ವಲಯಗಳು (284 ರೈತರು)",
    opt_kolar: "ಕೋಲಾರ ಪೂರ್ಕ ಕ್ಲಸ್ಟರ್",
    advisory_template_lbl: "ಮುನ್ನೆಚ್ಚರಿಕೆ ಟೆಂಪ್ಲೇಟ್",
    tpl_custom: "-- ಕಸ್ಟಮ್ ಸಂದೇಶ --",
    tpl_dry_spell: "ಬರ ಮುನ್ನೆಚ್ಚರಿಕೆ: ಮಣ್ಣಿನಲ್ಲಿ ತೇವಾಂಶ ಕಡಿಮೆಯಾಗಿದೆ. ಕೃಷಿ ಹೊಂಡದಿಂದ 10 ಮಿಮೀ ಪೂರಕ ನೀರಾವರಿ ನೀಡಿ.",
    tpl_pest: "ಕೀಟ ಬಾಧೆ ಎಚ್ಚರಿಕೆ: ಪಕ್ಕದ ಹಳ್ಳಿಯಲ್ಲಿ ಭತ್ತದ ಬೆಂಕಿ ರೋಗ ಪತ್ತೆಯಾಗಿದೆ. ಎಲೆಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ ಮತ್ತು ಟ್ರೈಸೈಕ್ಲಾಜೋಲ್ ಸಿಂಪಡಿಸಿ.",
    tpl_rain: "ಭಾರೀ ಮಳೆ ಮುನ್ಸೂಚನೆ: 24 ಗಂಟೆಗಳಲ್ಲಿ ಭಾರೀ ಮಳೆ (40ಮಿಮೀ) ಸಾಧ್ಯತೆ. ಯೂರಿಯಾ ಗೊಬ್ಬರ ಅನ್ವಯಿಸುವುದನ್ನು ಮುಂದೂಡಿ.",
    message_content: "ಸಂದೇಶದ ವಿಷಯ (SMS ಮತ್ತು ವಾಯ್ಸ್ ಕಾಲ್ ಮೂಲಕ ಕಳುಹಿಸಲಾಗುವುದು)",
    btn_broadcast: "ಮುನ್ನೆಚ್ಚರಿಕೆ ಕಳುಹಿಸಿ (SMS + ಕಾಲ್)",
    localized_forecast_details: "ಸ್ಥಳೀಯ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ",
    weather_evap: "ಬಾಷ್ಪೀಕರಣ (ET)",
    weather_humidity: "ಆರ್ದ್ರತೆ",
    weather_wind: "ಗಾಳಿಯ ವೇಗ",
    weather_solar: "ಸೌರ ವಿಕಿರಣ",
    drought_index: "ಬರ ಅಪಾಯದ ಸೂಚ್ಯಂಕ",
    tickets_heading: "ರೈತ ಸೇವಾ ಕೇಂದ್ರ (RSK) ಸಹಾಯವಾಣಿ",
    tickets_desc: "ರೈತರಿಂದ ಬಂದ ಬೆಳೆ ರೋಗ ಪ್ರಕರಣಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಪರಿಹಾರ ಸೂಚಿಸಿ.",
    active_case_queue: "ಸಕ್ರಿಯ ಪ್ರಕರಣಗಳ ಪಟ್ಟಿ",
    select_ticket_text: "ರೈತರ ಫೋಟೋ, ವಾಯ್ಸ್ ಲಾಗ್ ಮತ್ತು AI ರೋಗ ಪತ್ತೆ ವರದಿಯನ್ನು ವೀಕ್ಷಿಸಲು ಟಿಕೆಟ್ ಆಯ್ಕೆಮಾಡಿ.",
    sim_header: "ರೈತ SMS/ವಾಯ್ಸ್ ಸಿಮ್ಯುಲೇಟರ್",
    sim_sub: "ರೈತರಿಗೆ ಅಲರ್ಟ್‌ಗಳು ಹೇಗೆ ತಲುಪುತ್ತವೆ ಎಂದು ಇಲ್ಲಿ ಪರೀಕ್ಷಿಸಿ.",
    chat_yesterday: "ನಿನ್ನೆ",
    welcome_sms: "ಕಿಸಾನ್ ಅಲರ್ಟ್ ಗೇಟ್‌ವೇಗೆ ಸ್ವಾಗತ. ಬೆಳೆ ಶಿಫಾರಸಿಗಾಗಿ ಮಣ್ಣಿನ ಸೂಚಕಗಳನ್ನು ಈ ಶೈಲಿಯಲ್ಲಿ ಕಳುಹಿಸಿ: CROP N P K pH MOISTURE (ಉದಾ: CROP 50 40 30 6.5 20)",
    voice_live_trans: "ವಾಯ್ಸ್ ಕಾಲ್ ಟ್ರಾನ್ಸ್‌ಕ್ರಿಪ್ಟ್ ಮತ್ತು ಸ್ಪೀಚ್ ಸಿಂಥೆಸಿಸ್",
    click_answer: "ಹವಾಮಾನ ಸಲಹೆ ಆಲಿಸಲು ಮತ್ತು ಮಾತನಾಡಲು ಕೆಳಗಿನ ANSWER ಬಟನ್ ಒತ್ತಿ.",
    call_answer: "ಕರೆ ಸ್ವೀಕರಿಸಿ",
    call_hangup: "ಕರೆ ಕಡಿತಗೊಳಿಸಿ",
    kisan_sewa_app: "ರೈತ ಸೇವಾ ಆಪ್",
    app_menu_health: "ಬೆಳೆ ರೋಗ ಪತ್ತೆ AI",
    app_menu_sensor: "ಹೊಲದ ಸೆನ್ಸರ್‌ಗಳು",
    upload_crop_photo: "ಬೆಳೆ ಫೋಟೋ ಅಥವಾ ವಾಯ್ಸ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    click_photo_btn: "ಎಲೆಯ ಫೋಟೋ ಆರಿಸಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    mic_record_desc: "ವಾಯ್ಸ್ ಪ್ರಶ್ನೆ ಕೇಳಲು ಮೈಕ್ ಒತ್ತಿ",
    btn_submit_rsk: "ರೈತ ಸೇವಾ ಕೇಂದ್ರಕ್ಕೆ ಕಳುಹಿಸಿ",
    app_sensor_status: "ಹೊಲದ ಸೆನ್ಸರ್ ವರದಿ",
    soil_moist: "ಮಣ್ಣಿನ ತೇವಾಂಶ:",
    soil_temp: "ತಾಪಮಾನ:",
    nitrogen_n_val: "ಸಾರಜನಕ:",
    phosphorus_p_val: "ರಂಜಕ:",
    potassium_k_val: "ಪೊಟ್ಯಾಸಿಯಮ್:",
    app_refresh: "ಸೆನ್ಸರ್ ಅಪ್‌ಡೇಟ್",
    app_refreshing: "ಅಪ್‌ಡೇಟ್ ಆಗುತ್ತಿದೆ...",
    digital_soil_card: "ಡಿಜಿಟಲ್ ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಕಾರ್ಡ್",
    farmer_welcome: "ರೈತರ ವೈಯಕ್ತಿಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    farmer_welcome_desc: "ನಿಮ್ಮ ಜಮೀನಿನ ಮಣ್ಣಿನ ಗುಣಮಟ್ಟ ಮತ್ತು ಸೂಕ್ತ ಬೆಳೆಗಳ ಶಿಫಾರಸು ಮಾಹಿತಿ."
  },
  ta: {
    app_title: "கிசான் அலர்ட்",
    app_subtitle: "இண்டிக் ஏஐ விவசாய தகவல் தளம்",
    rsk_online: "RSK கேட்வே: ஆன்லைன்",
    nav_dashboard: "கண்காணிப்பு பலகை",
    nav_recommender: "பயிர் பரிந்துரை",
    nav_telemetry: "சென்சார் அளவீடுகள்",
    nav_tickets: "உழவர் சேவை டிக்கெட்டுகள்",
    sidebar_forecast_title: "நேரடி வானிலை ஆலோசனை",
    cond_dry: "வறண்ட மற்றும் வெப்பம்",
    dry_spell_risk: "அதிக வறட்சி அபாயம்",
    dashboard_heading: "வட்டார விவசாய மேலோட்டம்",
    dashboard_desc: "சென்சார்கள் மற்றும் உழவர்களின் நேரடி தகவல்கள்.",
    metric_active_farmers: "பதிவுசெய்த விவசாயிகள்",
    metric_soil_moisture: "சராசரி மண் ஈரம்",
    metric_advisories: "வறட்சி எச்சரிக்கை அறிவிப்புகள்",
    metric_rsk_tickets: "திறந்த உதவி வழக்குகள்",
    soil_distribution_map: "மண் ஈரப்பதம் பரவல் வரைபடம்",
    live_satellite: "செயற்கைக்கோள் தரவு மேலடுக்கு",
    legend_optimal: "சாதகமானது (>30%)",
    legend_moderate: "மிதமானது (20-30%)",
    legend_critical: "மிகக் குறைவு (<20%)",
    telemetry_realtime_heading: "நேரடி ஐஓடி சென்சார் அளவீடுகள்",
    sensor_live_feed: "நேரடி ஒளிபரப்பு",
    nitrogen_level: "நைட்ரஜன் (N)",
    phosphorus_level: "பாஸ்பரஸ் (P)",
    potassium_level: "பொட்டாசியம் (K)",
    groundwater_depth: "நிலத்தடி நீர் m",
    ph_level: "மண் pH",
    ph_optimal: "சாதகமானது",
    ground_temp: "மண் வெப்பநிலை",
    temp_warm: "வெப்பமாக உள்ளது",
    recommender_heading: "பயிர் பரிந்துரை என்ஜின்",
    recommender_desc: "மண் சத்துக்கள் மற்றும் மழையளவின் அடிப்படையில் சிறந்த பயிரை தேர்வு செய்யுங்கள்.",
    soil_parameters: "மண் மற்றும் சுற்றுச்சூழல் காரணிகள்",
    nitrogen_n: "நைட்ரஜன் (N) - mg/kg",
    phosphorus_p: "பாஸ்பரஸ் (P) - mg/kg",
    potassium_k: "பொட்டாசியம் (K) - mg/kg",
    soil_ph_lbl: "மண் pH (3.5 - 9.0)",
    soil_moist_lbl: "மண் ஈரப்பதம் (%)",
    rainfall_lbl: "பருவமழை அளவு (mm)",
    groundwater_lbl: "நிலத்தடி நீர் (மீட்டர்)",
    btn_run_recommendation: "பயிர் பகுப்பாய்வு செய்",
    crop_matches_title: "பரிந்துரைக்கப்படும் பயிர்கள்",
    recommender_placeholder_text: "அளவீடுகளை மாற்றி பகுப்பாய்வு செய்யவும்.",
    telemetry_heading: "வானிலை ஆலோசனை மற்றும் சென்சார்கள்",
    telemetry_desc: "வட்டார வறட்சி குறியீடு மற்றும் வானிலை பகுப்பாய்வு.",
    soil_moisture_trend: "மண் ஈரம் மற்றும் வெப்பநிலை வரைபடம் (24 மணிநேரம்)",
    dry_spell_detected: "வறட்சி நெருங்குகிறது",
    broadcast_sms_voice: "ஸ்மார்ட் SMS / குரல் வழிகாட்டி ஒளிபரப்பு",
    advisory_target_lbl: "இலக்கு கிராமங்கள்",
    opt_all_villages: "அனைத்து கிராமங்கள் (1,248 விவசாயிகள்)",
    opt_dry_affected: "குறைந்த ஈரப்பதமுள்ள பகுதிகள் (284 விவசாயிகள்)",
    opt_thanjavur: "தஞ்சாவூர் கிழக்கு பகுதி",
    advisory_template_lbl: "எச்சரிக்கை மாதிரி",
    tpl_custom: "-- தனிப்பயன் செய்தி --",
    tpl_dry_spell: "வறட்சி ஆலோசனை: மண்ணில் ஈரம் குறைந்துள்ளது. பண்ணைக் குட்டையிலிருந்து 10 மிமீ துணை நீர்ப்பாசனம் அளிக்கவும்.",
    tpl_pest: "பூச்சி எச்சரிக்கை: பக்கத்து கிராமத்தில் நெல் குலை நோய் பரவியுள்ளது. இலைகளை சரிபார்த்து டிரைசைக்ளாசோல் தெளிக்கவும்.",
    tpl_rain: "கனமழை எச்சரிக்கை: 24 மணிநேரத்தில் கனமழை (40 மிமீ) பெய்ய வாய்ப்பு. யூரியா உரம் இடுவதை தள்ளிப்போடவும்.",
    message_content: "செய்தி விவரம் (SMS மற்றும் குரல் அழைப்பு மூலம் அனுப்பப்படும்)",
    btn_broadcast: "எச்சரிக்கை அனுப்பு (SMS + அழைப்பு)",
    localized_forecast_details: "உள்ளூர் வானிலை முன்னறிவிப்பு",
    weather_evap: "நீராவிப்போக்கு (ET)",
    weather_humidity: "ஈரப்பதம்",
    weather_wind: "காற்றின் வேகம்",
    weather_solar: "சூரிய கதிர்வீச்சு",
    drought_index: "வறட்சி அபாய குறியீடு",
    tickets_heading: "உழவர் சேவை மையம் (RSK) உதவி மையம்",
    tickets_desc: "விவசாயிகளின் பயிர் நோய் புகார்களை ஆய்வு செய்து தீர்வு வழங்கவும்.",
    active_case_queue: "செயலில் உள்ள புகார்கள்",
    select_ticket_text: "விவசாயியின் புகைப்படம், குரல் பதிவு மற்றும் AI நோய் கண்டறிதல் அறிக்கையை காண டிக்கெட்டை தேர்ந்தெடுக்கவும்.",
    sim_header: "விவசாயி SMS/குரல் சிமுலேட்டர்",
    sim_sub: "விவசாயிகளுக்கு விழிப்பூட்டல்கள் எவ்வாறு சென்றடைகின்றன என்பதை இங்கே சோதிக்கவும்.",
    chat_yesterday: "நேற்று",
    welcome_sms: "கிசான் அலர்ட் கேட்வேக்கு வரவேற்கிறோம். பயிர் பரிந்துரைக்கு உங்கள் மண் தரவை அனுப்பவும்: CROP N P K pH MOISTURE (எ.கா: CROP 50 40 30 6.5 20)",
    voice_live_trans: "குரல் அழைப்பு உரையாடல் பதிவு",
    click_answer: "வானிலை ஆலோசனையைக் கேட்க கீழே உள்ள 'Answer' பட்டனை அழுத்தவும்.",
    call_answer: "பதில் அளி",
    call_hangup: "துண்டி",
    kisan_sewa_app: "உழவர் சேவை செயலி",
    app_menu_health: "பயிர் நோய் கண்டறிதல் AI",
    app_menu_sensor: "வயல் சென்சார்கள்",
    upload_crop_photo: "பயிர் புகைப்படம் அல்லது குரல் பதிவு செய்யவும்",
    click_photo_btn: "இலையை தேர்ந்தெடுத்து பதிவேற்றவும்",
    mic_record_desc: "குரல் மூலம் கேட்க மைக்கை அழுத்தவும்",
    btn_submit_rsk: "உழவர் சேவை மையத்திற்கு அனுப்பு",
    app_sensor_status: "வயல் சென்சார் அளவீடு",
    soil_moist: "மண் ஈரம்:",
    soil_temp: "வெப்பநிலை:",
    nitrogen_n_val: "நைட்ரஜன்:",
    phosphorus_p_val: "பாஸ்பரஸ்:",
    potassium_k_val: "பொட்டாசியம்:",
    app_refresh: "சென்சார் புதுப்பிப்பு",
    app_refreshing: "புதுப்பிக்கப்படுகிறது...",
    digital_soil_card: "மண் வள அட்டை (டிஜிட்டல்)",
    farmer_welcome: "விவசாயி தனிப்பட்ட பலகை",
    farmer_welcome_desc: "உங்கள் நிலத்தின் மண் பகுப்பாய்வு அறிக்கை மற்றும் பயிர் ஆலோசனைகளை இங்கே சரிபார்க்கவும்."
  }
};

// 2. INDIA SEARCHABLE DISTRICTS DATABASE (22 Agricultural Regions)
const indiaDistricts = [
  { id: "anantapur", name: "Anantapur", state: "Andhra Pradesh", soil: "Red Sandy Loam", n: 45, p: 32, k: 35, ph: 7.8, moist: 16, temp: 32.1, risk: 82, cond: "Dry & Warm", rainfall: 500, gw: 15.0 },
  { id: "medak", name: "Medak", state: "Telangana", soil: "Red Clay Loam", n: 82, p: 48, k: 52, ph: 6.8, moist: 28, temp: 28.2, risk: 30, cond: "Humid/Overcast", rainfall: 850, gw: 6.0 },
  { id: "kolar", name: "Kolar", state: "Karnataka", soil: "Red Sandy", n: 50, p: 40, k: 45, ph: 6.2, moist: 20, temp: 29.5, risk: 65, cond: "Dry & Warm", rainfall: 650, gw: 12.0 },
  { id: "thanjavur", name: "Thanjavur", state: "Tamil Nadu", soil: "Alluvial Clay", n: 95, p: 55, k: 65, ph: 6.5, moist: 36, temp: 30.8, risk: 15, cond: "Rain Showers", rainfall: 1250, gw: 3.5 },
  { id: "ludhiana", name: "Ludhiana", state: "Punjab", soil: "Alluvial Loam", n: 110, p: 58, k: 60, ph: 7.2, moist: 32, temp: 27.4, risk: 20, cond: "Sunny/Irrigated", rainfall: 720, gw: 14.0 },
  { id: "amravati", name: "Amravati", state: "Maharashtra", soil: "Deep Black Cotton", n: 55, p: 35, k: 50, ph: 7.9, moist: 15, temp: 33.4, risk: 78, cond: "Hot & Dry", rainfall: 600, gw: 16.5 },
  { id: "jodhpur", name: "Jodhpur", state: "Rajasthan", soil: "Desert Sandy", n: 25, p: 18, k: 40, ph: 8.3, moist: 10, temp: 36.8, risk: 92, cond: "Arid/Windy", rainfall: 350, gw: 24.5 },
  { id: "bareilly", name: "Bareilly", state: "Uttar Pradesh", soil: "Alluvial Loam", n: 105, p: 50, k: 55, ph: 6.9, moist: 30, temp: 28.5, risk: 25, cond: "Warm & Humid", rainfall: 1050, gw: 5.5 },
  { id: "shimla", name: "Shimla", state: "Himachal Pradesh", soil: "Forest Loam", n: 75, p: 45, k: 80, ph: 5.8, moist: 34, temp: 19.2, risk: 10, cond: "Cool/Mist", rainfall: 1400, gw: 10.0 },
  { id: "bareilly-ug", name: "Palakkad", state: "Kerala", soil: "Laterite Soil", n: 70, p: 30, k: 45, ph: 5.5, moist: 38, temp: 29.1, risk: 12, cond: "Rainy/Showers", rainfall: 2200, gw: 4.0 },
  { id: "darbhanga", name: "Darbhanga", state: "Bihar", soil: "Alluvial Clay", n: 90, p: 48, k: 50, ph: 7.0, moist: 32, temp: 29.8, risk: 18, cond: "Warm/Rainy", rainfall: 1150, gw: 4.8 },
  { id: "jorhat", name: "Jorhat", state: "Assam", soil: "Acid Alluvial", n: 85, p: 25, k: 65, ph: 5.2, moist: 42, temp: 26.5, risk: 5, cond: "Highly Humid", rainfall: 1900, gw: 3.0 },
  { id: "nashik", name: "Nashik", state: "Maharashtra", soil: "Medium Black Clay", n: 78, p: 45, k: 75, ph: 6.6, moist: 24, temp: 26.2, risk: 40, cond: "Moderate/Cool", rainfall: 750, gw: 8.5 },
  { id: "indore", name: "Indore", state: "Madhya Pradesh", soil: "Medium Black Cotton", n: 70, p: 42, k: 48, ph: 7.4, moist: 22, temp: 30.1, risk: 50, cond: "Warm/Clear", rainfall: 800, gw: 11.5 },
  { id: "vijayapura", name: "Vijayapura", state: "Karnataka", soil: "Deep Black Clay", n: 40, p: 28, k: 35, ph: 8.1, moist: 14, temp: 34.2, risk: 80, cond: "Very Warm", rainfall: 550, gw: 18.0 },
  { id: "anand", name: "Anand", state: "Gujarat", soil: "Goradu (Sandy Loam)", n: 80, p: 45, k: 60, ph: 7.5, moist: 24, temp: 31.0, risk: 42, cond: "Sunny/Dry", rainfall: 780, gw: 9.0 },
  { id: "burdwan", name: "Burdwan", state: "West Bengal", soil: "Alluvial Clay", n: 100, p: 52, k: 58, ph: 6.7, moist: 34, temp: 28.9, risk: 15, cond: "Rain Showers", rainfall: 1300, gw: 4.2 },
  { id: "guntur", name: "Guntur", state: "Andhra Pradesh", soil: "Black Cotton", n: 85, p: 46, k: 55, ph: 7.7, moist: 26, temp: 31.8, risk: 35, cond: "Warm & Clear", rainfall: 850, gw: 8.0 },
  { id: "bargarh", name: "Bargarh", state: "Odisha", soil: "Mixed Red/Yellow", n: 75, p: 38, k: 42, ph: 6.4, moist: 28, temp: 29.5, risk: 38, cond: "Warm/Clear", rainfall: 1100, gw: 6.5 },
  { id: "coimbatore", name: "Coimbatore", state: "Tamil Nadu", soil: "Red Sandy Loam", n: 48, p: 30, k: 40, ph: 7.3, moist: 18, temp: 30.5, risk: 70, cond: "Dry & Warm", rainfall: 600, gw: 14.5 },
  { id: "rohtak", name: "Rohtak", state: "Haryana", soil: "Sandy Clay Alluvial", n: 95, p: 52, k: 50, ph: 7.4, moist: 25, temp: 29.2, risk: 45, cond: "Warm/Sunny", rainfall: 600, gw: 11.0 },
  { id: "rajkot", name: "Rajkot", state: "Gujarat", soil: "Medium Black Cotton", n: 58, p: 32, k: 45, ph: 7.8, moist: 16, temp: 33.1, risk: 75, cond: "Hot & Arid", rainfall: 580, gw: 16.0 }
];

// 3. CROPS REFERENCE DATABASE (Recommender Module)
const cropDatabase = [
  { id: "paddy", name: "Paddy (Rice)", sciName: "Oryza sativa", n: [80, 120], p: [40, 60], k: [40, 60], ph: [5.5, 7.0], moisture: [30, 100], rainfall: [1000, 2500], gw: [1.0, 5.0], waterFootprint: "Very High", yield: "2.2 - 3.5 tons/acre", msp: "₹2,300/quintal", fertilizerTip: "Requires high basal Nitrogen. Top-dress with Urea at tillering phase. Ensure shallow standing water." },
  { id: "cotton", name: "Cotton", sciName: "Gossypium hirsutum", n: [40, 80], p: [30, 50], k: [30, 60], ph: [6.0, 8.0], moisture: [15, 28], rainfall: [500, 900], gw: [5.0, 15.0], waterFootprint: "Medium-High", yield: "0.8 - 1.5 tons/acre", msp: "₹7,120/quintal", fertilizerTip: "Balanced N-P-K required. Boron and Zinc foliar sprays enhance boll retention. Drought-resistant tap roots." },
  { id: "maize", name: "Maize (Corn)", sciName: "Zea mays", n: [70, 100], p: [35, 55], k: [35, 55], ph: [5.8, 7.5], moisture: [20, 35], rainfall: [600, 1100], gw: [3.0, 10.0], waterFootprint: "Medium", yield: "2.0 - 4.0 tons/acre", msp: "₹2,225/quintal", fertilizerTip: "Heavy feeder of Nitrogen and Zinc. Apply Gypsum if soil is clayey. Needs moderate drainage." },
  { id: "groundnut", name: "Groundnut (Peanut)", sciName: "Arachis hypogaea", n: [15, 35], p: [20, 40], k: [20, 40], ph: [6.0, 7.5], moisture: [15, 25], rainfall: [450, 750], gw: [6.0, 18.0], waterFootprint: "Low-Medium", yield: "0.7 - 1.2 tons/acre", msp: "₹6,780/quintal", fertilizerTip: "Leguminous crop; fixes its own nitrogen. Calcium (Gypsum) is critical at pod pegging stage. Avoid excess nitrogen." },
  { id: "ragi", name: "Finger Millet (Ragi)", sciName: "Eleusine coracana", n: [25, 50], p: [20, 35], k: [20, 35], ph: [5.0, 8.2], moisture: [10, 20], rainfall: [350, 600], gw: [8.0, 25.0], waterFootprint: "Very Low", yield: "1.2 - 2.0 tons/acre", msp: "₹4,290/quintal", fertilizerTip: "Highly drought resilient. Responds well to organic manure and compost. Zero irrigation needed if seasonal showers occur." },
  { id: "tomato", name: "Tomato", sciName: "Solanum lycopersicum", n: [50, 90], p: [30, 60], k: [40, 80], ph: [6.0, 7.0], moisture: [18, 30], rainfall: [500, 850], gw: [4.0, 12.0], waterFootprint: "Medium", yield: "8.0 - 15.0 tons/acre", msp: "₹3,500/ton", fertilizerTip: "Ensure sufficient Calcium to prevent blossom end rot. Drip irrigation recommended. Prone to early blight in high humidity." }
];

// 3. DICTIONARY OF MOCK CROP DISEASES (For App AI scan)
const diseaseDatabase = {
  rice_blast: { disease: "Rice Blast (Paddy Blast)", scientific: "Magnaporthe oryzae", confidence: "94%", symptoms: "Spindle-shaped lesions on leaves with brown borders and gray centers. Nodes may rot and break (Neck blast).", organicRemedy: "Apply Pseudomonas fluorescens powder (10g/L water) as seed treatment and foliar spray.", chemicalRemedy: "Spray Tricyclazole 75 WP at 0.6 grams per Litre of water when symptoms first appear.", rskAction: "Alert sent to Rythu Seva Kendra. Local officer assigned for site visit within 24 hours.", audioTranscript: "Hello, my rice leaves are showing dark spots shaped like eyes. The tips are turning brown. Please help." },
  cotton_curl: { disease: "Cotton Leaf Curl Virus (CLCuV)", scientific: "Begomovirus (CLCuD)", confidence: "89%", symptoms: "Leaves curl upward or downward, looking thickened and leathery. Veins swell and look dark green.", organicRemedy: "Remove infected plants immediately to prevent spread. Spray Neem oil (5ml/L) to control whitefly vector.", chemicalRemedy: "Control whitefly vectors using Diafenthiuron 50 WP (1.2g/L) or Afidopyropen (2ml/L).", rskAction: "RSK notification generated. Whitefly pest warning broadcast to surrounding farms.", audioTranscript: "My cotton crop leaves are curling up like cups and looking thick. The plants seem stunted." },
  tomato_blight: { disease: "Tomato Early Blight", scientific: "Alternaria solani", confidence: "91%", symptoms: "Target-like dark concentric rings on older leaves, surrounded by yellow tissue. Can cause leaf drop and fruit rot.", organicRemedy: "Prune lower leaves to improve air circulation. Apply Trichoderma viride to soil.", chemicalRemedy: "Spray Mancozeb 75 WP (2g/L) or Copper Oxychloride (3g/L) at 10-day intervals.", rskAction: "Ticket logged with RSK Horticulture Specialist. Custom Advisory generated.", audioTranscript: "Tomato leaves on the bottom of the plant are getting big yellow spots with rings inside. They are falling off." }
};

// 4. APPLICATION STATE
let state = {
  language: "en",
  theme: "dark",
  location: "kolar",
  userRole: "none", // none, farmer, expert
  farmerProfile: null, // details if logged in as farmer
  avgMoisture: 20,
  activeAlerts: 1,
  openTicketsCount: 2,
  droughtRisk: 65,
  selectedDisease: null,
  isRecordingVoice: false,
  voiceRecordedBytes: null,
  activeTicketId: null,
  activePlotId: "plot-1",
  tickets: [
    { id: "t-101", farmerName: "K. Mallesh", village: "Chennekothapalli", phone: "+91 98480 12345", type: "photo", status: "Pending Review", timestamp: "Today, 10:12 AM", diseaseKey: "rice_blast", diseaseData: diseaseDatabase.rice_blast, voiceTranscript: diseaseDatabase.rice_blast.audioTranscript },
    { id: "t-102", farmerName: "B. Gowda", village: "Ramasandra", phone: "+91 94481 98765", type: "voice", status: "Pending Review", timestamp: "Today, 09:30 AM", diseaseKey: "tomato_blight", diseaseData: diseaseDatabase.tomato_blight, voiceTranscript: diseaseDatabase.tomato_blight.audioTranscript }
  ]
};

// 5. DOM ELEMENTS & INITIALIZATION
let chartInstance = null;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Load welcome gate events
  initWelcomeGate();
  
  // Theme mode toggle trigger
  const themeToggle = document.getElementById("theme-toggle-btn");
  themeToggle.addEventListener("click", toggleThemeMode);
  
  // Load saved theme
  const savedTheme = localStorage.getItem("kisan-theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    state.theme = "light";
    document.getElementById("theme-icon").setAttribute("data-lucide", "moon");
    lucide.createIcons();
  }

  // Parse URL query parameter for auto-login bypass
  const urlParams = new URLSearchParams(window.location.search);
  const autoRole = urlParams.get("role");
  if (autoRole === "farmer") {
    const defaultRamesh = {
      name: "Ramesh Kumar",
      phone: "+91 98480 12345",
      district: "kolar",
      state: "Karnataka",
      land: 3.5,
      n: 48, p: 35, k: 40, ph: 6.2, moist: 21
    };
    loginUser("farmer", defaultRamesh);
  } else if (autoRole === "expert") {
    loginUser("expert");
  }

  // Open mobile settings menu drawer for automated headless screenshot testing
  if (urlParams.get("test_menu") === "1") {
    setTimeout(() => {
      const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
      const headerControlsMenu = document.getElementById("header-controls-menu");
      if (mobileMenuToggle && headerControlsMenu) {
        headerControlsMenu.classList.add("active");
        mobileMenuToggle.classList.add("active");
      }
    }, 500);
  }



  // Parse URL query parameter for phone view routing
  const initialPhoneView = urlParams.get("phoneView");
  if (initialPhoneView && ["sms", "voice", "app"].includes(initialPhoneView)) {
    switchPhoneView(initialPhoneView);
  }

  // Location search results selector trigger
  const searchInputTrigger = document.getElementById("search-input-trigger");
  const searchInput = document.getElementById("location-search-input");
  const dropdownResults = document.getElementById("location-results-list");

  // Show dropdown results on focus/click
  searchInput.addEventListener("focus", (e) => {
    dropdownResults.classList.add("active");
    renderSearchDropdownItems(e.target.value);
  });

  searchInputTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownResults.classList.add("active");
    renderSearchDropdownItems(searchInput.value);
  });

  // Filter dropdown results on typing inside search
  searchInput.addEventListener("input", (e) => {
    dropdownResults.classList.add("active");
    renderSearchDropdownItems(e.target.value);
  });

  // Mobile settings menu drawer toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const headerControlsMenu = document.getElementById("header-controls-menu");

  if (mobileMenuToggle && headerControlsMenu) {
    mobileMenuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      headerControlsMenu.classList.toggle("active");
      mobileMenuToggle.classList.toggle("active");
    });

    // Close mobile menu when clicking outside OR clicking an interactive control inside
    document.addEventListener("click", (e) => {
      const isDropdownClick = headerControlsMenu.contains(e.target);
      const isToggleClick = mobileMenuToggle.contains(e.target);
      
      if (!isDropdownClick && !isToggleClick) {
        headerControlsMenu.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      } else if (isDropdownClick && (e.target.closest('#btn-logout') || e.target.closest('#theme-toggle-btn') || e.target.closest('.user-profile-badge') || e.target.closest('.theme-toggle-btn'))) {
        // Delay slightly to allow other click events to register
        setTimeout(() => {
          headerControlsMenu.classList.remove("active");
          mobileMenuToggle.classList.remove("active");
        }, 150);
      }
    });
  }

  // Language selectors
  const langSelect = document.getElementById("language-select");
  langSelect.addEventListener("change", (e) => {
    state.language = e.target.value;
    updateLanguage(state.language);
    
    // Close mobile settings menu drawer when a new language is selected
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const headerControlsMenu = document.getElementById("header-controls-menu");
    if (mobileMenuToggle && headerControlsMenu) {
      headerControlsMenu.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    }
  });

  // Main navigation buttons switcher
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const tabId = btn.getAttribute("data-tab");
      document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
      document.getElementById(`tab-${tabId}`).classList.add("active");

      if (tabId === "telemetry") {
        setTimeout(initTelemetryChart, 100);
      }
    });
  });

  // Recommender Sliders synchronizer
  const sliderN = document.getElementById("input-n");
  const sliderP = document.getElementById("input-p");
  const sliderK = document.getElementById("input-k");
  
  sliderN.addEventListener("input", (e) => document.getElementById("val-n-disp").textContent = e.target.value);
  sliderP.addEventListener("input", (e) => document.getElementById("val-p-disp").textContent = e.target.value);
  sliderK.addEventListener("input", (e) => document.getElementById("val-k-disp").textContent = e.target.value);
  document.getElementById("btn-calculate-crop").addEventListener("click", runCropRecommender);

  // Advisory broadcaster
  const advForm = document.getElementById("advisory-form");
  const advTemplate = document.getElementById("advisory-template");
  const advMsg = document.getElementById("advisory-message");
  
  advMsg.value = translations[state.language][advTemplate.value] || translations["en"][advTemplate.value] || "";
  advTemplate.addEventListener("change", (e) => {
    if (e.target.value === "custom") advMsg.value = "";
    else advMsg.value = translations[state.language][e.target.value] || translations["en"][e.target.value] || "";
  });

  advForm.addEventListener("submit", (e) => {
    e.preventDefault();
    broadcastAdvisory(advMsg.value);
  });

  // Phone Simulator Navigation
  document.getElementById("phone-nav-sms").addEventListener("click", () => switchPhoneView("sms"));
  document.getElementById("phone-nav-call").addEventListener("click", () => switchPhoneView("voice"));
  document.getElementById("phone-nav-app").addEventListener("click", () => switchPhoneView("app"));

  // Phone SMS submit
  document.getElementById("sms-send-btn").addEventListener("click", handleSmsSubmit);
  document.getElementById("sms-input-box").addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSmsSubmit();
  });

  // Phone Call audio simulator triggers
  document.getElementById("phone-btn-call").addEventListener("click", () => startVoiceCallSimulation("Expert Helpline"));
  document.getElementById("call-btn-answer").addEventListener("click", answerVoiceCall);
  document.getElementById("call-btn-hangup").addEventListener("click", endVoiceCall);

  // Phone App Picker selectors
  document.querySelectorAll(".mock-image-picker").forEach(picker => {
    picker.addEventListener("click", () => {
      document.querySelectorAll(".mock-image-picker").forEach(p => p.classList.remove("selected"));
      picker.classList.add("selected");
      state.selectedDisease = picker.getAttribute("data-disease");
      
      const uploadBox = document.getElementById("camera-upload-trigger");
      const uploadText = document.getElementById("upload-box-text");
      uploadBox.classList.add("has-image");
      
      let diseaseThumb = state.selectedDisease === "rice_blast" ? "rice_leaf_blast.png" : (state.selectedDisease === "cotton_curl" ? "cotton_leaf_curl.png" : "tomato_early_blight.png");
      uploadBox.style.backgroundImage = `url('assets/${diseaseThumb}')`;
      uploadText.textContent = `Attached: ${picker.querySelector(".picker-name").textContent}`;
    });
  });

  // Camera upload triggers & File Reader integration
  const fileUploader = document.getElementById("file-uploader");
  const cameraTrigger = document.getElementById("camera-upload-trigger");
  if (cameraTrigger && fileUploader) {
    cameraTrigger.addEventListener("click", () => {
      fileUploader.click();
    });

    fileUploader.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        cameraTrigger.classList.add("has-image");
        cameraTrigger.style.backgroundImage = `url('${event.target.result}')`;
        document.getElementById("upload-box-text").textContent = `Attached: ${file.name}`;
        
        // Register custom user upload in state
        state.selectedDisease = "custom";
        // Create custom entry in diseaseDatabase dynamically for the uploaded file
        diseaseDatabase.custom = {
          disease: "User Custom Leaf Scan",
          scientific: "General Phytopathology Scan",
          confidence: "87%",
          symptoms: `User uploaded image file "${file.name}". Irregular chlorotic margins and necrotic leaf spot patches detected.`,
          organicRemedy: "Apply fresh bio-fungicide Neem solution (5ml/L) and improve soil aeration.",
          chemicalRemedy: "Apply copper oxychloride (3g/L) if fungal spots extend across more than 20% of the leaf nodes.",
          rskAction: `Dispatched photo upload "${file.name}" to regional RSK specialist for expert analysis.`,
          audioTranscript: "Uploaded custom crop specimen photo for immediate diagnosis."
        };
      };
      reader.readAsDataURL(file);
    });
  }

  document.getElementById("btn-record-voice-memo").addEventListener("click", toggleVoiceMemoRecording);
  document.getElementById("btn-submit-app-diagnosis").addEventListener("click", submitAppDiagnosisTicket);
  document.getElementById("app-sens-refresh-btn").addEventListener("click", refreshAppSensors);

  // Map SVG Plot click binders
  document.querySelectorAll(".farm-plot").forEach(plot => {
    plot.addEventListener("click", () => {
      document.querySelectorAll(".farm-plot").forEach(p => p.classList.remove("active"));
      plot.classList.add("active");
      state.activePlotId = plot.getAttribute("id");
      updatePlotTelemetryState(state.activePlotId);
    });
  });

  // Logout trigger
  document.getElementById("btn-logout").addEventListener("click", logoutUser);

  // Initial layout loaders
  changeLocationSettings();
  renderTicketQueue();
  setInterval(fluctuateTelemetry, 4000);
});

// 6. DUAL-PORTAL LOGIN & WELCOME ENGINE
function initWelcomeGate() {
  const gate = document.getElementById("welcome-gate");
  const tabFarmer = document.getElementById("tab-login-farmer");
  const tabExpert = document.getElementById("tab-login-expert");
  const formFarmer = document.getElementById("form-farmer");
  const formExpert = document.getElementById("form-expert");

  // Welcome Gate Role Tabs
  tabFarmer.addEventListener("click", () => {
    tabFarmer.classList.add("active");
    tabExpert.classList.remove("active");
    formFarmer.classList.add("active");
    formExpert.classList.remove("active");
  });

  tabExpert.addEventListener("click", () => {
    tabExpert.classList.add("active");
    tabFarmer.classList.remove("active");
    formExpert.classList.add("active");
    formFarmer.classList.remove("active");
  });

  // Farmer login modes (signin / signup forms toggle)
  const modeSigninBtn = document.getElementById("btn-f-mode-signin");
  const modeSignupBtn = document.getElementById("btn-f-mode-signup");
  const signinFields = document.getElementById("farmer-signin-fields");
  const signupFields = document.getElementById("farmer-signup-fields");

  modeSigninBtn.addEventListener("click", () => {
    modeSigninBtn.className = "action-btn success w-100";
    modeSignupBtn.className = "action-btn secondary w-100";
    signinFields.style.display = "flex";
    signupFields.style.display = "none";
  });

  modeSignupBtn.addEventListener("click", () => {
    modeSignupBtn.className = "action-btn success w-100";
    modeSigninBtn.className = "action-btn secondary w-100";
    signupFields.style.display = "flex";
    signinFields.style.display = "none";
  });

  // Submission event triggers
  document.getElementById("btn-submit-farmer-login").addEventListener("click", () => {
    const phone = document.getElementById("farmer-login-phone").value.trim();
    if (!phone) { alert("Please input a valid mobile number."); return; }
    
    // Log in as standard default farmer Ramesh
    const defaultRamesh = {
      name: "Ramesh Kumar",
      phone: phone,
      district: "kolar",
      state: "Karnataka",
      land: 3.5,
      n: 48, p: 35, k: 40, ph: 6.2, moist: 21
    };
    loginUser("farmer", defaultRamesh);
  });

  document.getElementById("btn-submit-farmer-register").addEventListener("click", () => {
    const name = document.getElementById("farmer-reg-name").value.trim();
    const phone = document.getElementById("farmer-reg-phone").value.trim();
    const districtText = document.getElementById("farmer-reg-district").value.trim().toLowerCase();
    const state = document.getElementById("farmer-reg-state").value;
    const size = parseFloat(document.getElementById("farmer-reg-size").value);
    const phVal = parseFloat(document.getElementById("farmer-reg-ph").value);

    if (!name || !phone || !districtText) {
      alert("Please fill in all registration fields.");
      return;
    }

    // Capitalize first letters of district text
    const formattedDistName = districtText.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    // Try to match district from database for defaults, else dynamically generate using hash code
    let districtMatched = indiaDistricts.find(d => d.name.toLowerCase() === districtText);
    
    if (!districtMatched) {
      // Deterministic parameter generation using hash code based on district name + state
      const seedString = districtText + "-" + state.toLowerCase();
      let hash = 0;
      for (let i = 0; i < seedString.length; i++) {
        hash = seedString.charCodeAt(i) + ((hash << 5) - hash);
      }
      hash = Math.abs(hash);

      const customId = "custom-" + hash;
      districtMatched = {
        id: customId,
        name: formattedDistName,
        state: state,
        soil: ["Red Sandy Loam", "Deep Black Cotton", "Alluvial Loam", "Laterite Soil", "Sandy Clayey"][hash % 5],
        n: 35 + (hash % 80),
        p: 20 + (hash % 40),
        k: 25 + (hash % 45),
        ph: phVal || parseFloat((5.5 + (hash % 25) * 0.1).toFixed(1)),
        moist: 10 + (hash % 30),
        temp: parseFloat((24.0 + (hash % 10) * 1.1).toFixed(1)),
        risk: 10 + (hash % 80),
        cond: (10 + (hash % 80)) > 55 ? "Dry & Warm" : "Normal/Humid",
        rainfall: 300 + (hash % 1500),
        gw: parseFloat((3.0 + (hash % 20) * 0.8).toFixed(1))
      };

      // Push custom district to database
      indiaDistricts.push(districtMatched);
    }

    const newFarmer = {
      name: name,
      phone: phone,
      district: districtMatched.id,
      districtName: districtMatched.name,
      state: state,
      land: size,
      n: districtMatched.n,
      p: districtMatched.p,
      k: districtMatched.k,
      ph: phVal || districtMatched.ph,
      moist: districtMatched.moist
    };

    loginUser("farmer", newFarmer);
  });

  document.getElementById("btn-submit-expert-login").addEventListener("click", () => {
    loginUser("expert");
  });

  // Quick Demo Access Login Shortcuts triggers
  document.getElementById("demo-login-farmer").addEventListener("click", () => {
    const ramesh = {
      name: "Ramesh Kumar",
      phone: "+91 94481 98765",
      district: "kolar",
      state: "Karnataka",
      land: 4.5,
      n: 48, p: 35, k: 40, ph: 6.2, moist: 21
    };
    loginUser("farmer", ramesh);
  });

  document.getElementById("demo-login-expert").addEventListener("click", () => {
    loginUser("expert");
  });
}

function loginUser(role, farmerData) {
  state.userRole = role;
  
  // Transition body classes for clean layout isolation
  document.body.classList.remove("logged-out");
  document.body.classList.add("logged-in");
  
  // Close mobile settings menu drawer when logging in
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const headerControlsMenu = document.getElementById("header-controls-menu");
  if (mobileMenuToggle) mobileMenuToggle.classList.remove("active");
  if (headerControlsMenu) headerControlsMenu.classList.remove("active");
  
  const headerName = document.getElementById("header-user-name");
  const navTelemetry = document.getElementById("sidebar-tab-telemetry");
  const navTickets = document.getElementById("sidebar-tab-tickets");
  
  const metricsGrid = document.getElementById("dashboard-metrics-grid");
  const mapSplit = document.getElementById("dashboard-map-split");
  const soilCardBlock = document.getElementById("farmer-soil-card-block");
  const telemetryBroadcastCard = document.getElementById("telemetry-broadcast-card");

  if (role === "farmer") {
    state.farmerProfile = farmerData;
    headerName.textContent = farmerData.name;
    
    // Hide administrative navigation options
    navTelemetry.style.display = "none";
    navTickets.style.display = "none";

    // Adjust dashboard for Farmer profile
    metricsGrid.style.display = "none";
    mapSplit.style.display = "none";
    
    // Reveal Digital Soil Card and load parameters
    soilCardBlock.style.display = "block";
    document.getElementById("card-soil-n").textContent = `${farmerData.n} mg/kg`;
    document.getElementById("card-soil-p").textContent = `${farmerData.p} mg/kg`;
    document.getElementById("card-soil-k").textContent = `${farmerData.k} mg/kg`;
    document.getElementById("card-soil-ph").textContent = farmerData.ph.toFixed(1);
    document.getElementById("card-soil-moist").textContent = `${farmerData.moist}%`;

    // Configure Location select automatically to match farmer profile
    state.location = farmerData.district;
    const selectedDist = indiaDistricts.find(d => d.id === state.location) || { name: farmerData.districtName || farmerData.district, state: farmerData.state };
    document.getElementById("location-search-input").value = `${selectedDist.name}, ${selectedDist.state}`;
    changeLocationSettings();

    // Auto-synchronize crop recommender slider fields to match farmer soil profile
    document.getElementById("input-n").value = farmerData.n;
    document.getElementById("input-p").value = farmerData.p;
    document.getElementById("input-k").value = farmerData.k;
    document.getElementById("input-ph").value = farmerData.ph;
    document.getElementById("input-moisture").value = farmerData.moist;
    document.getElementById("val-n-disp").textContent = farmerData.n;
    document.getElementById("val-p-disp").textContent = farmerData.p;
    document.getElementById("val-k-disp").textContent = farmerData.k;

    // Headings
    document.getElementById("dashboard-main-heading").textContent = `Welcome, ${farmerData.name}`;
    document.getElementById("dashboard-sub-heading").textContent = `Farming Profile: ${farmerData.land} Acres in ${selectedDist.name}, ${farmerData.state}.`;

    // Set greeting notification inside the simulator
    showPhoneToast("Logged In", `Welcome back, Farmer ${farmerData.name}!`, "sprout");
    
    // Automatically trigger crop analysis immediately
    runCropRecommender();

  } else if (role === "expert") {
    headerName.textContent = "Expert: Kumar";
    
    // Reveal administrative layouts
    navTelemetry.style.display = "flex";
    navTickets.style.display = "flex";
    metricsGrid.style.display = "grid";
    mapSplit.style.display = "grid";
    soilCardBlock.style.display = "none";
    telemetryBroadcastCard.style.display = "block";

    // Headings
    document.getElementById("dashboard-main-heading").textContent = translations[state.language]["dashboard_heading"];
    document.getElementById("dashboard-sub-heading").textContent = translations[state.language]["dashboard_desc"];

    showPhoneToast("RSK Gate Active", "Officer Kumar logged into portal", "shield-check");
  }
}

function logoutUser() {
  state.userRole = "none";
  state.farmerProfile = null;
  
  // Transition body classes for clean layout isolation
  document.body.classList.remove("logged-in");
  document.body.classList.add("logged-out");
  
  // Close mobile settings menu drawer when logging out
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const headerControlsMenu = document.getElementById("header-controls-menu");
  if (mobileMenuToggle) mobileMenuToggle.classList.remove("active");
  if (headerControlsMenu) headerControlsMenu.classList.remove("active");
  
  // Reset tabs to default active
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.querySelector(".nav-btn[data-tab='dashboard']").classList.add("active");
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.getElementById("tab-dashboard").classList.add("active");
}

// 7. LIGHT & DARK THEME TOGGLE
function toggleThemeMode() {
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");

  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    state.theme = "dark";
    localStorage.setItem("kisan-theme", "dark");
    themeIcon.setAttribute("data-lucide", "sun");
  } else {
    body.classList.add("light-theme");
    state.theme = "light";
    localStorage.setItem("kisan-theme", "light");
    themeIcon.setAttribute("data-lucide", "moon");
  }
  lucide.createIcons();
}

// 8. SEARCHABLE ALL-INDIA DISTRICTS LIST
function renderSearchDropdownItems(queryText) {
  const container = document.getElementById("location-results-list");
  container.innerHTML = "";

  const query = queryText.toLowerCase().trim();
  
  // Filter existing districts
  const filtered = indiaDistricts.filter(dist => 
    dist.name.toLowerCase().includes(query) || dist.state.toLowerCase().includes(query)
  );

  // If query is not empty, add custom creator option at the very top
  if (queryText.trim().length > 1) {
    const customItem = document.createElement("div");
    customItem.className = "dropdown-item text-emerald font-semibold";
    customItem.style.borderBottom = "1px solid rgba(16, 185, 129, 0.15)";
    customItem.innerHTML = `<i data-lucide="plus-circle" style="width:14px;height:14px;margin-right:6px;display:inline-block;vertical-align:middle;"></i> Add Custom: "${queryText}"`;
    
    customItem.addEventListener("click", () => {
      const nameParts = queryText.split(",");
      const distName = nameParts[0].trim();
      const stateName = nameParts[1] ? nameParts[1].trim() : "India";
      
      // Capitalize first letters
      const formattedDistName = distName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const formattedStateName = stateName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

      // Deterministic parameter generation using hash code
      let hash = 0;
      for (let i = 0; i < queryText.length; i++) {
        hash = queryText.charCodeAt(i) + ((hash << 5) - hash);
      }
      hash = Math.abs(hash);

      const customId = "custom-" + hash;
      const customDist = {
        id: customId,
        name: formattedDistName,
        state: formattedStateName,
        soil: ["Red Sandy Loam", "Deep Black Cotton", "Alluvial Loam", "Laterite Soil", "Sandy Clayey"][hash % 5],
        n: 35 + (hash % 80),
        p: 20 + (hash % 40),
        k: 25 + (hash % 45),
        ph: parseFloat((5.5 + (hash % 25) * 0.1).toFixed(1)),
        moist: 10 + (hash % 30),
        temp: parseFloat((24.0 + (hash % 10) * 1.1).toFixed(1)),
        risk: 10 + (hash % 80),
        cond: (10 + (hash % 80)) > 55 ? "Dry & Warm" : "Normal/Humid",
        rainfall: 300 + (hash % 1500),
        gw: parseFloat((3.0 + (hash % 20) * 0.8).toFixed(1))
      };

      // Add to database if not already present
      if (!indiaDistricts.some(d => d.id === customId)) {
        indiaDistricts.push(customDist);
      }

      state.location = customId;
      document.getElementById("location-search-input").value = `${customDist.name}, ${customDist.state}`;
      container.classList.remove("active");
      changeLocationSettings();
    });
    
    container.appendChild(customItem);
  }

  // Populate filtered results
  filtered.forEach(dist => {
    const item = document.createElement("div");
    item.className = "dropdown-item";
    item.textContent = `${dist.name}, ${dist.state}`;
    
    item.addEventListener("click", () => {
      document.getElementById("location-search-input").value = `${dist.name}, ${dist.state}`;
      state.location = dist.id;
      container.classList.remove("active");
      changeLocationSettings();
    });
    container.appendChild(item);
  });

  // If absolutely nothing is present
  if (filtered.length === 0 && queryText.trim().length <= 1) {
    const emptyDiv = document.createElement("div");
    emptyDiv.className = "dropdown-item text-muted";
    emptyDiv.textContent = "Type to search or add location...";
    container.appendChild(emptyDiv);
  }

  lucide.createIcons();
}

// 9. LOCATION TELEMETRY CHANGEOVER
function changeLocationSettings() {
  const dist = indiaDistricts.find(d => d.id === state.location) || indiaDistricts[0];
  
  // Set current parameters
  state.avgMoisture = dist.moist;
  state.droughtRisk = dist.risk;
  state.avgN = dist.n;
  state.avgP = dist.p;
  state.avgK = dist.k;
  state.soilPH = dist.ph;
  state.soilTemp = dist.temp;

  // Set header search box title initial load
  document.getElementById("location-search-input").value = `${dist.name}, ${dist.state}`;

  // Update weather card text in sidebar
  document.getElementById("sidebar-temp").textContent = `${Math.round(dist.temp + 4)}°C`;
  document.getElementById("sidebar-cond").textContent = dist.cond;
  
  const alertBar = document.getElementById("sidebar-alert-bar");
  if (dist.risk > 50) {
    alertBar.className = "alert-bar warning";
    alertBar.style.display = "flex";
  } else {
    alertBar.style.display = "none";
  }

  // Update DOM widgets
  updateTelemetryDOM();

  // Reset chart if on telemetry page
  if (document.getElementById("tab-telemetry").classList.contains("active")) {
    initTelemetryChart();
  }
}

function updateTelemetryDOM() {
  // Global metrics
  document.getElementById("metric-avg-moisture").textContent = `${state.avgMoisture}%`;
  document.getElementById("drought-risk-value").textContent = `${state.droughtRisk > 50 ? 'High' : 'Normal'} (${state.droughtRisk}%)`;
  document.querySelector(".gauge-bar-inner").style.width = `${state.droughtRisk}%`;

  // Progress telemetry bars
  document.getElementById("live-n").textContent = `${state.avgN} mg/kg`;
  document.getElementById("live-p").textContent = `${state.avgP} mg/kg`;
  document.getElementById("live-k").textContent = `${state.avgK} mg/kg`;
  
  document.getElementById("bar-n").style.width = `${(state.avgN/150)*100}%`;
  document.getElementById("bar-p").style.width = `${(state.avgP/100)*100}%`;
  document.getElementById("bar-k").style.width = `${(state.avgK/100)*100}%`;
  
  document.getElementById("live-ph").textContent = state.soilPH.toFixed(1);
  document.getElementById("live-temp").textContent = `${state.soilTemp.toFixed(1)}°C`;

  // App readings
  document.getElementById("app-sens-moist").textContent = `${state.avgMoisture}%`;
  document.getElementById("app-sens-temp").textContent = `${state.soilTemp.toFixed(1)}°C`;
  document.getElementById("app-sens-n").textContent = `${state.avgN} mg/kg`;
  document.getElementById("app-sens-p").textContent = `${state.avgP} mg/kg`;
  document.getElementById("app-sens-k").textContent = `${state.avgK} mg/kg`;

  // Shading plots on farm map
  const p1 = document.getElementById("plot-1");
  const p2 = document.getElementById("plot-2");
  const p3 = document.getElementById("plot-3");
  const p4 = document.getElementById("plot-4");
  const p5 = document.getElementById("plot-5");
  const p6 = document.getElementById("plot-6");

  if (state.avgMoisture < 20) {
    p1.className.baseVal = "farm-plot moisture-low";
    p2.className.baseVal = "farm-plot moisture-low";
    p4.className.baseVal = "farm-plot moisture-low";
    p6.className.baseVal = "farm-plot moisture-low";
  } else if (state.avgMoisture < 30) {
    p1.className.baseVal = "farm-plot moisture-medium";
    p2.className.baseVal = "farm-plot moisture-low";
    p3.className.baseVal = "farm-plot moisture-high";
    p4.className.baseVal = "farm-plot moisture-medium";
    p5.className.baseVal = "farm-plot moisture-medium";
    p6.className.baseVal = "farm-plot moisture-low";
  } else {
    p1.className.baseVal = "farm-plot moisture-high";
    p2.className.baseVal = "farm-plot moisture-medium";
    p3.className.baseVal = "farm-plot moisture-high";
    p4.className.baseVal = "farm-plot moisture-high";
    p5.className.baseVal = "farm-plot moisture-high";
    p6.className.baseVal = "farm-plot moisture-medium";
  }

  // Restore active highlighted plot
  const activePlot = document.getElementById(state.activePlotId);
  if (activePlot) activePlot.classList.add("active");
}

function fluctuateTelemetry() {
  if (state.userRole === "none") return;
  
  // Minor random fluctuations to keep UI alive
  state.avgN = Math.max(10, Math.min(150, state.avgN + (Math.random() * 4 - 2)));
  state.avgP = Math.max(10, Math.min(100, state.avgP + (Math.random() * 2 - 1)));
  state.avgK = Math.max(10, Math.min(100, state.avgK + (Math.random() * 2 - 1)));
  state.soilTemp = Math.max(15, Math.min(45, state.soilTemp + (Math.random() * 0.4 - 0.2)));
  
  state.avgN = Math.round(state.avgN);
  state.avgP = Math.round(state.avgP);
  state.avgK = Math.round(state.avgK);
  
  updateTelemetryDOM();
}

// 10. INTERACTIVE MAP PLOT SELECTION TRIGGERS
function updatePlotTelemetryState(plotId) {
  // Load specialized plot sensor data
  const dist = indiaDistricts.find(d => d.id === state.location) || indiaDistricts[0];
  let baseN = dist.n, baseP = dist.p, baseK = dist.k, baseM = dist.moist;

  if (plotId === "plot-2") {
    // Critical Dry plot
    state.avgN = Math.round(baseN * 0.7);
    state.avgP = Math.round(baseP * 0.75);
    state.avgK = Math.round(baseK * 0.8);
    state.avgMoisture = 12;
    state.soilPH = dist.ph + 0.3;
  } else if (plotId === "plot-3") {
    // Optimal plot
    state.avgN = Math.round(baseN * 1.3);
    state.avgP = Math.round(baseP * 1.2);
    state.avgK = Math.round(baseK * 1.2);
    state.avgMoisture = 38;
    state.soilPH = dist.ph - 0.2;
  } else if (plotId === "plot-6") {
    // Critical Dry plot 6
    state.avgN = Math.round(baseN * 0.65);
    state.avgP = Math.round(baseP * 0.6);
    state.avgK = Math.round(baseK * 0.7);
    state.avgMoisture = 15;
    state.soilPH = dist.ph + 0.4;
  } else {
    // Standard plots (1, 4, 5)
    state.avgN = baseN;
    state.avgP = baseP;
    state.avgK = baseK;
    state.avgMoisture = baseM;
    state.soilPH = dist.ph;
  }

  // Update card header text to show active plot
  document.getElementById("telemetry-card-title").textContent = `Sensor Readings - Plot ${plotId.replace('plot-', '').toUpperCase()}`;
  updateTelemetryDOM();
}

// 11. CROP RECOMMENDATION ALGORITHM
function runCropRecommender() {
  const n = parseInt(document.getElementById("input-n").value);
  const p = parseInt(document.getElementById("input-p").value);
  const k = parseInt(document.getElementById("input-k").value);
  const ph = parseFloat(document.getElementById("input-ph").value);
  const moisture = parseInt(document.getElementById("input-moisture").value);
  const rainfall = parseInt(document.getElementById("input-rainfall").value);
  const gw = parseFloat(document.getElementById("input-gw").value);

  const resultsList = document.getElementById("crop-results-list");
  resultsList.innerHTML = "";

  let matches = [];

  cropDatabase.forEach(crop => {
    let scoreN = calculateFactorScore(n, crop.n);
    let scoreP = calculateFactorScore(p, crop.p);
    let scoreK = calculateFactorScore(k, crop.k);
    let scorePH = calculateFactorScore(ph, crop.ph);
    let scoreMoist = calculateFactorScore(moisture, crop.moisture);
    let scoreRain = calculateFactorScore(rainfall, crop.rainfall);
    let scoreGw = calculateFactorScore(gw, crop.gw);

    let avgScore = (scoreN * 0.2) + (scoreP * 0.15) + (scoreK * 0.15) + 
                   (scorePH * 0.15) + (scoreMoist * 0.15) + (scoreRain * 0.15) + (scoreGw * 0.05);
    
    let matchPct = Math.round(avgScore);
    if (matchPct > 45) {
      matches.push({ crop, score: matchPct });
    }
  });

  matches.sort((a, b) => b.score - a.score);

  if (matches.length === 0) {
    resultsList.innerHTML = `
      <div class="crop-card-placeholder">
        <i data-lucide="alert-circle" class="placeholder-icon text-rose"></i>
        <p>No crops fit these conditions closely. Try adding soil nutrients or supplemental irrigation to improve suitability.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  matches.forEach(item => {
    const card = document.createElement("div");
    card.className = "crop-card glass";
    
    let cropName = item.crop.name;
    if (state.language === "te") {
      if (item.crop.id === "paddy") cropName = "వరి (వరి)";
      else if (item.crop.id === "cotton") cropName = "పత్తి";
      else if (item.crop.id === "maize") cropName = "మొక్కజొన్న";
      else if (item.crop.id === "groundnut") cropName = "వేరుశనగ";
      else if (item.crop.id === "ragi") cropName = "రాగులు";
      else if (item.crop.id === "tomato") cropName = "టమోటా";
    } else if (state.language === "hi") {
      if (item.crop.id === "paddy") cropName = "धान (चावल)";
      else if (item.crop.id === "cotton") cropName = "कपास";
      else if (item.crop.id === "maize") cropName = "मक्का";
      else if (item.crop.id === "groundnut") cropName = "मूंगफली";
      else if (item.crop.id === "ragi") cropName = "रागी";
      else if (item.crop.id === "tomato") cropName = "टमाटर";
    } else if (state.language === "kn") {
      if (item.crop.id === "paddy") cropName = "ಭತ್ತ (ಅಕ್ಕಿ)";
      else if (item.crop.id === "cotton") cropName = "ಹತ್ತಿ";
      else if (item.crop.id === "maize") cropName = "ಮೆಕ್ಕೆಜೋಳ";
      else if (item.crop.id === "groundnut") cropName = "ಕಡಲೆಕಾಯಿ";
      else if (item.crop.id === "ragi") cropName = "ರಾಗಿ";
      else if (item.crop.id === "tomato") cropName = "ಟೊಮೆಟೊ";
    } else if (state.language === "ta") {
      if (item.crop.id === "paddy") cropName = "நெல் (அரிசி)";
      else if (item.crop.id === "cotton") cropName = "பருத்தி";
      else if (item.crop.id === "maize") cropName = "சோளம் (மக்காச்சோளம்)";
      else if (item.crop.id === "groundnut") cropName = "நிலக்கடலை";
      else if (item.crop.id === "ragi") cropName = "கேழ்வரகு (ராகಿ)";
      else if (item.crop.id === "tomato") cropName = "தக்காளி";
    }

    card.innerHTML = `
      <div class="crop-card-header">
        <div class="crop-name-area">
          <span class="crop-title">${cropName}</span>
          <span class="crop-sci-name">${item.crop.sciName}</span>
        </div>
        <span class="crop-match-badge">${item.score}% Match</span>
      </div>
      
      <div class="crop-card-details">
        <div class="crop-detail-box">
          <span>Yield Estimate</span>
          <span>${item.crop.yield}</span>
        </div>
        <div class="crop-detail-box">
          <span>Water Need</span>
          <span>${item.crop.waterFootprint}</span>
        </div>
        <div class="crop-detail-box">
          <span>Market Price (MSP)</span>
          <span>${item.crop.msp}</span>
        </div>
      </div>
      
      <div class="crop-advisory-msg">
        <strong>Nutrient Advice:</strong> ${item.crop.fertilizerTip}
      </div>
    `;
    resultsList.appendChild(card);
  });
}

function calculateFactorScore(val, range) {
  const min = range[0];
  const max = range[1];
  if (val >= min && val <= max) return 100;
  if (val < min) {
    let diff = min - val;
    let score = 100 - (diff / min) * 100;
    return Math.max(0, score);
  } else {
    let diff = val - max;
    let score = 100 - (diff / max) * 100;
    return Math.max(0, score);
  }
}

// 12. TELEMETRY CHART
function initTelemetryChart() {
  const ctx = document.getElementById("moistureChart").getContext("2d");
  if (chartInstance) chartInstance.destroy();

  let baseMoisture = state.avgMoisture;
  let moistureData = [
    baseMoisture + 4, baseMoisture + 3, baseMoisture + 3, baseMoisture + 2, 
    baseMoisture + 1, baseMoisture, baseMoisture - 1, baseMoisture - 2, 
    baseMoisture - 3, baseMoisture - 3, baseMoisture - 4, baseMoisture - 5
  ];
  let tempData = [24, 23, 22, 21, 23, 26, 29, 32, 33, 31, 28, 26];

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['10 PM', '12 AM', '2 AM', '4 AM', '6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
      datasets: [
        {
          label: 'Soil Moisture (%)',
          data: moistureData,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          yAxisID: 'yMoisture',
          tension: 0.3,
          fill: true
        },
        {
          label: 'Soil Temp (°C)',
          data: tempData,
          borderColor: '#f59e0b',
          backgroundColor: 'transparent',
          yAxisID: 'yTemp',
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yMoisture: { type: 'linear', position: 'left', min: 0, max: 100, grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } },
        yTemp: { type: 'linear', position: 'right', min: 15, max: 45, grid: { drawOnChartArea: false }, ticks: { color: '#94a3b8' } },
        x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } }
      },
      plugins: {
        legend: { labels: { color: '#f8fafc', font: { family: 'Plus Jakarta Sans' } } }
      }
    }
  });
}

// 13. PHONE NOTIFICATION OVERLAY TOASTS
function showPhoneToast(title, bodyText, iconName) {
  const toast = document.getElementById("phone-toast-notification");
  const icon = document.getElementById("phone-toast-icon");
  const titleEl = document.getElementById("phone-toast-title");
  const textEl = document.getElementById("phone-toast-text");

  // Set info
  titleEl.textContent = title;
  textEl.textContent = bodyText;
  icon.setAttribute("data-lucide", iconName || "bell");
  
  lucide.createIcons();

  // Clear animation states and display
  toast.style.display = "flex";
  
  // Simulate vibration audio
  try {
    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let osc = audioCtx.createOscillator();
    let gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.setValueAtTime(150, audioCtx.currentTime); // Low vibrate frequency
    gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.15);
  } catch(e) {}
}

// 14. PHONE EMULATOR VIEWS
function switchPhoneView(viewName) {
  document.querySelectorAll(".phone-view").forEach(view => view.classList.remove("active"));
  document.getElementById(`phone-view-${viewName}`).classList.add("active");

  document.querySelectorAll(".phone-nav-icon").forEach(icon => icon.classList.remove("active"));
  document.getElementById(`phone-nav-${viewName}`).classList.add("active");

  const header = document.getElementById("phone-app-header");
  const title = document.getElementById("phone-sender-title");
  const sub = document.getElementById("phone-sender-sub");
  const avatar = document.getElementById("app-avatar-icon");
  const callBtn = document.getElementById("phone-btn-call");

  if (viewName === "sms") {
    header.style.display = "flex";
    title.textContent = "Kisan Alert SMS";
    sub.textContent = "Gateway +91 800-KISAN";
    avatar.className = "lucide-message-square";
    avatar.setAttribute("data-lucide", "message-square");
    callBtn.style.display = "flex";
  } else if (viewName === "voice") {
    header.style.display = "none";
  } else if (viewName === "app") {
    header.style.display = "flex";
    title.textContent = translations[state.language]["kisan_sewa_app"];
    sub.textContent = "Rythu Seva Direct Link";
    avatar.className = "lucide-smartphone";
    avatar.setAttribute("data-lucide", "smartphone");
    callBtn.style.display = "none";
  }
  lucide.createIcons();
}

// 15. SMS LOGIC
function handleSmsSubmit() {
  const inputBox = document.getElementById("sms-input-box");
  const text = inputBox.value.trim();
  if (!text) return;

  appendSmsBubble(text, "outgoing");
  inputBox.value = "";

  setTimeout(() => {
    processSmsCommand(text);
  }, 1000);
}

function appendSmsBubble(text, direction) {
  const chatMessages = document.getElementById("sms-chat-messages");
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${direction}`;
  msgDiv.innerHTML = `<div class="message-content">${text}</div>`;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Show a notification toast if the view is not currently SMS
  if (direction === "incoming" && !document.getElementById("phone-view-sms").classList.contains("active")) {
    showPhoneToast("Kisan Alert SMS", text.substring(0, 45) + (text.length > 45 ? "..." : ""), "message-square");
  }
}

function processSmsCommand(text) {
  const cleanText = text.toUpperCase().replace(/\s+/g, ' ');
  const tokens = cleanText.split(' ');

  if (tokens[0] === "CROP" && tokens.length >= 6) {
    const n = parseInt(tokens[1]);
    const p = parseInt(tokens[2]);
    const k = parseInt(tokens[3]);
    const ph = parseFloat(tokens[4]);
    const moisture = parseInt(tokens[5]);

    if (isNaN(n) || isNaN(p) || isNaN(k) || isNaN(ph) || isNaN(moisture)) {
      sendSmsReply("Invalid inputs. Send syntax: CROP N P K pH MOISTURE (e.g. CROP 50 40 30 6.5 20)");
      return;
    }

    let cropMatches = [];
    cropDatabase.forEach(crop => {
      let scoreN = calculateFactorScore(n, crop.n);
      let scoreP = calculateFactorScore(p, crop.p);
      let scoreK = calculateFactorScore(k, crop.k);
      let scorePH = calculateFactorScore(ph, crop.ph);
      let scoreMoist = calculateFactorScore(moisture, crop.moisture);

      let avg = (scoreN * 0.25) + (scoreP * 0.2) + (scoreK * 0.2) + (scorePH * 0.15) + (scoreMoist * 0.2);
      cropMatches.push({ name: crop.name, id: crop.id, score: Math.round(avg) });
    });

    cropMatches.sort((a, b) => b.score - a.score);
    const topCrop = cropMatches[0];
    const secondCrop = cropMatches[1];

    let reply = "";
    if (state.language === "te") {
      reply = `పంట సిఫార్సు: 1. ${translateCropName(topCrop.id, 'te')} (${topCrop.score}% మ్యాచ్), 2. ${translateCropName(secondCrop.id, 'te')} (${secondCrop.score}% మ్యాచ్). వాతావరణ సమాచారానికి 'WEATHER' అని టైప్ చేయండి.`;
    } else if (state.language === "hi") {
      reply = `फसल सुझाव: 1. ${translateCropName(topCrop.id, 'hi')} (${topCrop.score}% मैच), 2. ${translateCropName(secondCrop.id, 'hi')} (${secondCrop.score}% मैच)। मौसम अलर्ट के लिए 'WEATHER' भेजें।`;
    } else if (state.language === "kn") {
      reply = `ಬೆಳೆ ಶಿಫಾರಸು: 1. ${translateCropName(topCrop.id, 'kn')} (${topCrop.score}% ಹೊಂದಾಣಿಕೆ), 2. ${translateCropName(secondCrop.id, 'kn')} (${secondCrop.score}% ಹೊಂದಾಣಿಕೆ). ಹವಾಮಾನ ಅಲರ್ಟ್‌ಗೆ 'WEATHER' ಕಳುಹಿಸಿ.`;
    } else if (state.language === "ta") {
      reply = `பயிர் பரிந்துரை: 1. ${translateCropName(topCrop.id, 'ta')} (${topCrop.score}% பொருத்தம்), 2. ${translateCropName(secondCrop.id, 'ta')} (${secondCrop.score}% பொருத்தம்). வானிலை அறிய 'WEATHER' அனுப்பவும்.`;
    } else {
      reply = `Crop suggestions: 1. ${topCrop.name} (${topCrop.score}% Match), 2. ${secondCrop.name} (${secondCrop.score}% Match). Reply 'WEATHER' for local environmental alerts.`;
    }
    sendSmsReply(reply);

  } else if (cleanText.includes("WEATHER") || cleanText.includes("ADVISORY") || cleanText.includes("ALERT")) {
    const selectedDist = indiaDistricts.find(d => d.id === state.location) || indiaDistricts[0];
    let reply = "";
    if (state.language === "te") {
      reply = `వాతావరణ హెచ్చరిక (${selectedDist.name}): గాలిలో ఆర్ద్రత ${state.avgMoisture}%. కరవు రిస్క్ ఇండెక్స్ ${state.droughtRisk}%. పొడి వాతావరణం కారణంగా పంటకు తేలికపాటి నీటి తడులు ఇవ్వండి.`;
    } else if (state.language === "hi") {
      reply = `मौसम अपडेट (${selectedDist.name}): मिट्टी की नमी ${state.avgMoisture}%. सूखा जोखिम सूचकांक ${state.droughtRisk}%. सूखे मौसम के कारण हल्की सिंचाई की सलाह दी जाती है।`;
    } else if (state.language === "kn") {
      reply = `ಹವಾಮಾನ ಅಲರ್ಟ್ (${selectedDist.name}): ಮಣ್ಣಿನ ತೇವಾಂಶ ${state.avgMoisture}%. ಬರ ಅಪಾಯ ಸೂಚಕ ${state.droughtRisk}%. ಒಣ ಹವಾಮಾನ ಇದ್ದು ಲಘು ನೀರಾವರಿ ಒದಗಿಸಿ.`;
    } else if (state.language === "ta") {
      reply = `வானிலை அறிக்கை (${selectedDist.name}): மண் ஈரப்பதம் ${state.avgMoisture}%. வறட்சி அபாய சதவீதம் ${state.droughtRisk}%. வறண்ட வானிலையால் மித நீர்ப்பாசனம் செய்யவும்.`;
    } else {
      reply = `Advisory Alert (${selectedDist.name}): Avg Soil Moisture is ${state.avgMoisture}%. Drought Risk index is ${state.droughtRisk}%. A dry spell warning is active. irrigate with light sprinklers.`;
    }
    sendSmsReply(reply);

  } else if (cleanText.includes("HELP") || cleanText.includes("START")) {
    let reply = translations[state.language]["welcome_sms"];
    sendSmsReply(reply);
  } else {
    let reply = "";
    if (state.language === "te") {
      reply = `సందేశం అర్ధం కాలేదు. సహాయం కోసం 'HELP' అని లేదా పంట సూచిక కొరకు 'CROP 50 40 40 6.5 22' అని పంపండి.`;
    } else if (state.language === "hi") {
      reply = `संदेश समझ नहीं आया। सहायता के लिए 'HELP' भेजें, फसल सुझाव के लिए 'CROP 50 40 40 6.5 22' भेजें।`;
    } else {
      reply = `Command not recognized. Send 'HELP' for instructions or 'CROP N P K pH Moisture' for recommendations.`;
    }
    sendSmsReply(reply);
  }
}

function translateCropName(id, lang) {
  if (lang === "te") {
    if (id === "paddy") return "వరి";
    if (id === "cotton") return "పత్తి";
    if (id === "maize") return "మొక్కజొన్న";
    if (id === "groundnut") return "వేరుశనగ";
    if (id === "ragi") return "రాగులు";
    if (id === "tomato") return "టమోటా";
  } else if (lang === "hi") {
    if (id === "paddy") return "धान";
    if (id === "cotton") return "कपास";
    if (id === "maize") return "मक्का";
    if (id === "groundnut") return "मूंगफली";
    if (id === "ragi") return "रागी";
    if (id === "tomato") return "टमाटर";
  } else if (lang === "kn") {
    if (id === "paddy") return "ಭತ್ತ";
    if (id === "cotton") return "ಹತ್ತಿ";
    if (id === "maize") return "ಮೆಕ್ಕೆಜೋಳ";
    if (id === "groundnut") return "ಕಡಲೆಕಾಯಿ";
    if (id === "ragi") return "ರಾಗಿ";
    if (id === "tomato") return "ಟೊಮೆಟೊ";
  } else if (lang === "ta") {
    if (id === "paddy") return "நெல்";
    if (id === "cotton") return "பருத்தி";
    if (id === "maize") return "சோளம்";
    if (id === "groundnut") return "நிலக்கடலை";
    if (id === "ragi") return "கேழ்வரகு";
    if (id === "tomato") return "தக்காளி";
  }
  return id;
}

function sendSmsReply(text) {
  appendSmsBubble(text, "incoming");
}

function broadcastAdvisory(msgContent) {
  if (!msgContent) return;
  alert(`Broadcast SMS & IVR advisory sent to target group. Check the phone simulator for the broadcast message!`);
  
  switchPhoneView("sms");
  appendSmsBubble(`[ALERT BROADCAST]\n${msgContent}`, "incoming");

  state.activeAlerts++;
  document.getElementById("metric-active-alerts").textContent = `${state.activeAlerts} Active`;
}

// 16. VOICE SIMULATOR CALLS
function startVoiceCallSimulation(contactName) {
  switchPhoneView("voice");
  document.getElementById("voice-caller-name").textContent = contactName;
  document.getElementById("voice-call-status").textContent = "Dialing...";
  document.getElementById("call-btn-answer").classList.remove("active");
  document.getElementById("audio-wave").classList.remove("active");

  setTimeout(() => {
    document.getElementById("voice-call-status").textContent = "Ringing...";
    document.getElementById("call-btn-answer").classList.add("active");
    try { playMockRingtone(); } catch(e) {}
  }, 1200);
}

function playMockRingtone() {
  let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  let osc = audioCtx.createOscillator();
  let gain = audioCtx.createGain();
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.type = "sine";
  osc.frequency.setValueAtTime(440, audioCtx.currentTime);
  
  gain.gain.setValueAtTime(0, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.1);
  gain.gain.setValueAtTime(0.5, audioCtx.currentTime + 0.4);
  gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
  
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 1.2);
}

function answerVoiceCall() {
  document.getElementById("voice-call-status").textContent = "Active Call 00:01";
  document.getElementById("call-btn-answer").classList.remove("active");
  document.getElementById("audio-wave").classList.add("active");

  const advisoryMessage = document.getElementById("advisory-message").value || "Drought conditions active. Irrigate fields.";
  let voiceText = "";
  
  if (state.language === "te") {
    voiceText = "నమస్కారం, కిసాన్ అలర్ట్ వాతావరణ హెచ్చరిక. " + advisoryMessage + " సలహాల కొరకు దయచేసి ఒకటి నొక్కండి.";
  } else if (state.language === "hi") {
    voiceText = "नमस्कार, किसान अलर्ट मौसम सलाह। " + advisoryMessage + " आगे की जानकारी के लिए कृपया एक दबाएं।";
  } else if (state.language === "kn") {
    voiceText = "ನಮಸ್ಕಾರ, ಕಿಸಾನ್ ಅಲರ್ಟ್ ಹವಾಮಾನ ಸಲಹೆ. " + advisoryMessage + " ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗಾಗಿ ದಯವಿಟ್ಟು ಒಂದು ಒತ್ತಿ.";
  } else if (state.language === "ta") {
    voiceText = "வணக்கம், கிசான் அலர்ட் வானிலை ஆலோசனை. " + advisoryMessage + " மேலும் விவரங்களுக்கு தயவுசெய்து ஒன்று அழுத்தவும்.";
  } else {
    voiceText = "Hello, Kisan Alert advisory report. " + advisoryMessage + " To speak with an expert, press zero.";
  }

  document.getElementById("voice-transcript-text").textContent = `[IVR Voice]: "${voiceText}"`;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(voiceText);
    
    if (state.language === "te") utterance.lang = "te-IN";
    else if (state.language === "hi") utterance.lang = "hi-IN";
    else if (state.language === "kn") utterance.lang = "kn-IN";
    else if (state.language === "ta") utterance.lang = "ta-IN";
    else utterance.lang = "en-IN";
    
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

function endVoiceCall() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  document.getElementById("audio-wave").classList.remove("active");
  document.getElementById("voice-call-status").textContent = "Call Ended";
  setTimeout(() => { switchPhoneView("sms"); }, 1000);
}

// 17. APP TRICKS - AI PHOTO DIAGNOSTICS & HELP TICKET LOG
function toggleVoiceMemoRecording() {
  const recorder = document.getElementById("btn-record-voice-memo");
  const statusText = document.getElementById("mic-status-text");

  if (!state.isRecordingVoice) {
    state.isRecordingVoice = true;
    recorder.classList.add("recording");
    statusText.textContent = "Recording voice query... Click to stop";
    try {
      let ctx = new (window.AudioContext || window.webkitAudioContext)();
      let osc = ctx.createOscillator();
      osc.connect(ctx.destination);
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch(e) {}
  } else {
    state.isRecordingVoice = false;
    recorder.classList.remove("recording");
    statusText.textContent = "Voice Query Recorded (3.2 seconds)";
    state.voiceRecordedBytes = "MOCK_AUDIO_BYTES_128K";
  }
}

function submitAppDiagnosisTicket() {
  if (!state.selectedDisease && !state.voiceRecordedBytes) {
    alert("Please select a crop disease sample photo or record a voice memo query first.");
    return;
  }

  const submitBtn = document.getElementById("btn-submit-app-diagnosis");
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i data-lucide="loader" class="animate-spin"></i> Analyzing leaf metrics...`;
  lucide.createIcons();

  setTimeout(() => {
    const key = state.selectedDisease || "rice_blast";
    const diagnosis = diseaseDatabase[key];

    submitBtn.disabled = false;
    submitBtn.innerHTML = `<i data-lucide="upload-cloud"></i> Submit to Rythu Seva`;
    lucide.createIcons();

    // Create tickets state
    const ticketId = `t-${Math.floor(100 + Math.random()*900)}`;
    const selectedDist = indiaDistricts.find(d => d.id === state.location) || indiaDistricts[0];
    
    // Read user role details
    let farmerName = "Guest Farmer";
    let village = selectedDist.name + " village";
    let phoneNum = "+91 94481 00000";

    if (state.userRole === "farmer" && state.farmerProfile) {
      farmerName = state.farmerProfile.name;
      village = selectedDist.name;
      phoneNum = state.farmerProfile.phone;
    }

    const newTicket = {
      id: ticketId,
      farmerName: farmerName,
      village: village,
      phone: phoneNum,
      type: state.selectedDisease ? "photo" : "voice",
      status: "Pending Review",
      timestamp: "Just Now",
      diseaseKey: key,
      diseaseData: diagnosis,
      voiceTranscript: state.voiceRecordedBytes ? "Why are my rice crop nodes breaking and turning black?" : diagnosis.audioTranscript
    };

    state.tickets.unshift(newTicket);
    state.openTicketsCount++;
    
    // Update metric widgets
    document.getElementById("metric-open-tickets").textContent = `${state.openTicketsCount} Cases`;
    document.getElementById("ticket-badge").textContent = state.openTicketsCount;

    alert(`AI Crop Diagnosis Success!\nDisease: ${diagnosis.disease}\nConfidence: ${diagnosis.confidence}\nRemedy: ${diagnosis.organicRemedy}\n\nTicket ${ticketId} created in the Rythu Seva Kendra Dashboard.`);

    // Reset phone app inputs
    state.selectedDisease = null;
    state.voiceRecordedBytes = null;
    const uploadBox = document.getElementById("camera-upload-trigger");
    uploadBox.classList.remove("has-image");
    uploadBox.style.backgroundImage = "none";
    document.getElementById("upload-box-text").textContent = "Click sample leaf to upload";
    document.getElementById("mic-status-text").textContent = "Tap to record voice query";
    document.querySelectorAll(".mock-image-picker").forEach(p => p.classList.remove("selected"));

    // Render tickets visually
    renderTicketQueue();

    switchPhoneView("sms");
    appendSmsBubble(`[SYSTEM ALERT]\nTicket ${ticketId} logged with Rythu Seva Kendra. AI Diagnosis: ${diagnosis.disease} (Conf: ${diagnosis.confidence}). Expert is reviewing.`, "incoming");
  }, 2000);
}

function refreshAppSensors() {
  const btn = document.getElementById("app-sens-refresh-btn");
  btn.innerHTML = `<i data-lucide="loader" class="animate-spin"></i> Syncing...`;
  lucide.createIcons();

  setTimeout(() => {
    btn.innerHTML = `<i data-lucide="refresh-cw"></i> Refresh Telemetry`;
    lucide.createIcons();
    updateTelemetryDOM();
  }, 1000);
}

// 18. HELP DESK HELPLINES TICKET HANDLER
function renderTicketQueue() {
  const container = document.getElementById("ticket-queue-list");
  container.innerHTML = "";

  // If farmer is logged in, filter case queue list to only show their own tickets!
  let filteredTickets = state.tickets;
  if (state.userRole === "farmer" && state.farmerProfile) {
    filteredTickets = state.tickets.filter(t => t.phone === state.farmerProfile.phone || t.farmerName === state.farmerProfile.name);
  }

  if (filteredTickets.length === 0) {
    container.innerHTML = `<div class="dropdown-item" style="text-align:center;padding:2rem;">No pending tickets logged.</div>`;
    document.getElementById("open-ticket-count").textContent = `0 Pending`;
    return;
  }

  filteredTickets.forEach(ticket => {
    const item = document.createElement("div");
    item.className = `queue-item ${state.activeTicketId === ticket.id ? 'active' : ''}`;
    item.setAttribute("data-id", ticket.id);
    
    item.innerHTML = `
      <div class="item-title-row">
        <span class="item-farmer">${ticket.farmerName} (${ticket.village})</span>
        <span class="item-badge-type ${ticket.type}">${ticket.type.toUpperCase()}</span>
      </div>
      <div class="item-desc-row">${ticket.diseaseData.disease}</div>
      <div class="item-meta-row">
        <span>ID: ${ticket.id}</span>
        <span>${ticket.timestamp}</span>
      </div>
    `;

    item.addEventListener("click", () => {
      state.activeTicketId = ticket.id;
      renderTicketQueue();
      showTicketDetails(ticket.id);
    });

    container.appendChild(item);
  });

  // Calculate only pending filtered tickets count
  const pendingCount = filteredTickets.filter(t => t.status === "Pending Review").length;
  document.getElementById("open-ticket-count").textContent = `${pendingCount} Pending`;
}

function showTicketDetails(id) {
  const ticket = state.tickets.find(t => t.id === id);
  const pane = document.getElementById("ticket-details-pane");
  if (!ticket) return;

  pane.innerHTML = `
    <div class="ticket-detail-header">
      <div class="detail-top-row">
        <div class="detail-farmer-info">
          <h3>${ticket.farmerName}</h3>
          <span class="detail-farmer-sub">${ticket.village} | Mobile: ${ticket.phone}</span>
        </div>
        <div class="detail-meta-tags">
          <span class="badge-tag warning">${ticket.status}</span>
          <span class="badge-tag success">AI Conf: ${ticket.diseaseData.confidence}</span>
        </div>
      </div>
    </div>

    <div class="detail-body">
      <div class="diagnosis-summary-box">
        <div class="summary-heading">
          <i data-lucide="shield-check"></i>
          <span>AI Diagnosed: ${ticket.diseaseData.disease}</span>
        </div>
        <p class="summary-text"><strong>Symptoms:</strong> ${ticket.diseaseData.symptoms}</p>
      </div>

      <div class="detail-split-content">
        <div class="photo-preview-box">
          <img src="assets/${ticket.diseaseKey}.png" class="preview-img" alt="Leaf Disease photo">
        </div>
        
        <div class="voice-transcript-log">
          <div class="transcript-header-box">
            <span>Farmer Voice Query</span>
            <div class="audio-mock-playback" id="rsk-audio-play">
              <i data-lucide="play"></i>
              <span>Listen note</span>
            </div>
          </div>
          <p class="transcript-quote">"${ticket.voiceTranscript}"</p>
        </div>
      </div>

      <div class="remedy-list-box">
        <h4>Agronomic Recommended Remedies</h4>
        <ul>
          <li><strong>Organic:</strong> ${ticket.diseaseData.organicRemedy}</li>
          <li><strong>Chemical:</strong> ${ticket.diseaseData.chemicalRemedy}</li>
        </ul>
      </div>

      <div class="action-row-tickets">
        <button class="action-btn success w-100" id="btn-ticket-resolve">
          <i data-lucide="check-circle-2"></i>
          <span>Approve and Send SMS Resolution</span>
        </button>
        <button class="action-btn secondary" id="btn-ticket-call-farmer">
          <i data-lucide="phone"></i>
          <span>Call Farmer</span>
        </button>
      </div>
    </div>
  `;
  lucide.createIcons();

  document.getElementById("btn-ticket-resolve").addEventListener("click", () => resolveTicket(ticket));
  document.getElementById("btn-ticket-call-farmer").addEventListener("click", () => startVoiceCallSimulation(ticket.farmerName));

  document.getElementById("rsk-audio-play").addEventListener("click", () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(ticket.voiceTranscript);
      if (state.language === "te") utt.lang = "te-IN";
      else if (state.language === "hi") utt.lang = "hi-IN";
      else utt.lang = "en-IN";
      window.speechSynthesis.speak(utt);
    }
  });
}

function resolveTicket(ticket) {
  ticket.status = "Resolved";
  state.openTicketsCount--;
  document.getElementById("metric-open-tickets").textContent = `${state.openTicketsCount} Cases`;
  document.getElementById("ticket-badge").textContent = state.openTicketsCount;
  
  state.tickets = state.tickets.filter(t => t.id !== ticket.id);
  state.activeTicketId = null;
  
  alert(`Ticket ${ticket.id} Resolved. SMS Resolution dispatched.`);

  switchPhoneView("sms");
  const resolutionText = `[RSK RESOLUTION]\nDear farmer, our experts reviewed ticket ${ticket.id} (${ticket.diseaseData.disease}).\nRecommended treatment:\n1. Organic: ${ticket.diseaseData.organicRemedy}\n2. Chemical: ${ticket.diseaseData.chemicalRemedy}`;
  appendSmsBubble(resolutionText, "incoming");

  renderTicketQueue();
  
  document.getElementById("ticket-details-pane").innerHTML = `
    <div class="crop-card-placeholder">
      <i data-lucide="shield-alert" class="placeholder-icon"></i>
      <p>Select an active ticket from the queue to view AI diagnostics, crop photo logs, and trigger direct farmer advisories.</p>
    </div>
  `;
  lucide.createIcons();
}

// 19. LANGUAGE MATRIX UPDATE
function updateLanguage(lang) {
  state.language = lang;
  
  // Re-translate all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Autocomplete and search inputs placeholders translations
  const searchInput = document.getElementById("location-search-input");
  if (lang === "te") searchInput.placeholder = "జిల్లా కోసం వెతకండి...";
  else if (lang === "hi") searchInput.placeholder = "जिला खोजें...";
  else if (lang === "kn") searchInput.placeholder = "ಜಿಲ್ಲೆಗಾಗಿ ಹುಡುಕಿ...";
  else if (lang === "ta") searchInput.placeholder = "மாவட்டத்தை தேடுக...";
  else searchInput.placeholder = "Search District...";

  const smsInput = document.getElementById("sms-input-box");
  if (lang === "te") smsInput.placeholder = "SMS టైప్ చేయండి...";
  else if (lang === "hi") smsInput.placeholder = "SMS टाइप करें...";
  else if (lang === "kn") smsInput.placeholder = "SMS ಟೈಪ್ ಮಾಡಿ...";
  else if (lang === "ta") smsInput.placeholder = "SMS தட்டச்சு செய்க...";
  else smsInput.placeholder = "Type SMS command...";

  // Advisory Template loader translation
  const advTemplate = document.getElementById("advisory-template");
  const advMsg = document.getElementById("advisory-message");
  if (advTemplate.value !== "custom") {
    advMsg.value = translations[lang][advTemplate.value] || translations["en"][advTemplate.value] || "";
  }

  // Update crop list recommendation results layout language
  if (document.getElementById("crop-results-list").querySelector(".crop-card")) {
    runCropRecommender();
  }

  // Reload ticket detail translations
  if (state.activeTicketId) {
    showTicketDetails(state.activeTicketId);
  }
}


