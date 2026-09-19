# 🌾 Kisan Alert AI (कृषि अलर्ट)
### Indic Voice-and-SMS Agricultural Intelligence & Micro-Climate Advisory Platform for Small and Marginal Farmers

[![Live Preview](https://img.shields.io/badge/Interface-Interactive_Dashboard-success?style=flat&logo=html5&logoColor=white)](https://github.com/SambhavRaj18/Kisan_Alert-AI)
[![Multilingual Indic](https://img.shields.io/badge/Languages-EN_|_HI_|_TE_|_KN_|_TA-teal?style=flat)](https://github.com/SambhavRaj18/Kisan_Alert-AI)
[![Web Speech API](https://img.shields.io/badge/IVR_Voice-Web_Speech_API-blue?style=flat&logo=google&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
[![Zero Build](https://img.shields.io/badge/Dependencies-Zero_Build_/_Vanilla_JS-orange?style=flat)](https://github.com/SambhavRaj18/Kisan_Alert-AI)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/SambhavRaj18/Kisan_Alert-AI)

> **Kisan Alert AI** is an end-to-end agricultural intelligence and decision-support system designed to empower smallholder farmers across India. It bridges the digital divide by delivering agronomic recommendations, dry-spell weather warnings, and crop disease remedies via accessible channels—**structured SMS gateways and Interactive Voice Response (IVR)** for basic feature phones—alongside an advanced administrative command panel for agricultural extension centers (**Rythu Seva Kendras / RSKs**).

---

## 📌 Table of Contents

- [Problem Statement & Agricultural Context](#-problem-statement--agricultural-context)
- [System Architecture](#-system-architecture)
- [Core Platform Capabilities](#-core-platform-capabilities)
  - [1. Smart Agronomic Crop Recommender](#1-smart-agronomic-crop-recommender)
  - [2. Micro-Climate Telemetry & Dry-Spell Warning Center](#2-micro-climate-telemetry--dry-spell-warning-center)
  - [3. AI Crop Health Diagnosis & Support Ticketing](#3-ai-crop-health-diagnosis--support-ticketing)
  - [4. Dual-Portal Simulator (RSK Panel & Phone Emulator)](#4-dual-portal-simulator-rsk-panel--phone-emulator)
- [Interactive Phone Simulator & Gateway Protocol](#-interactive-phone-simulator--gateway-protocol)
- [Multilingual Indic Language Coverage](#-multilingual-indic-language-coverage)
- [Production Architecture Blueprint](#-production-architecture-blueprint)
- [Repository & File Structure](#-repository--file-structure)
- [How to Run Locally](#-how-to-run-locally)
- [Engineering Highlights](#-engineering-highlights)
- [Future Roadmap](#-future-roadmap)
- [Author](#-author)

---

## 🚜 Problem Statement & Agricultural Context

Small and marginal farmers (>85% of India's agricultural workforce) face acute financial vulnerabilities due to:
1. **Unpredictable Monsoon & Weather Volatility:** Sudden dry spells or unseasonal rainfall damage standing crops without early warning.
2. **Imbalanced Fertilizer Usage:** Overuse of Urea ($N$) and underutilization of Phosphorus ($P$) and Potassium ($K$) degrades soil health and inflates input costs.
3. **Information Asymmetry:** Complex scientific advisories, English-only smartphone apps, and delayed agricultural extension visits leave farmers vulnerable to crop diseases (e.g. Paddy Blast, Cotton Leaf Curl, Tomato Early Blight).
4. **Hardware Divide:** Millions of farmers rely on basic \$15 2G feature phones incapable of installing modern smartphone apps.

**Kisan Alert AI** solves this by offering a dual-interface model: high-level telemetry and case management for district extension officers, and instant, zero-friction voice/SMS access in native regional languages for ground-level farmers.

---

## 🏗️ System Architecture

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                KISAN ALERT AI PLATFORM                                 │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │
           ┌────────────────────────────────┴────────────────────────────────┐
           │                                                                 │
           ▼                                                                 ▼
┌──────────────────────────────────────┐          ┌──────────────────────────────────────┐
│  EXPERT COMMAND PANEL (RSK PORTAL)   │          │     FARMER INTERACTION SIMULATOR     │
├──────────────────────────────────────┤          ├──────────────────────────────────────┤
│ • Live IoT Ground Sensor Telemetry   │          │ • Structured 2G SMS Gateway          │
│ • Precision Soil N-P-K Matrix        │  ◄────►  │   (CROP, WEATHER, ADVISORY commands) │
│ • Regional Dry-Spell Warning Engine  │   STATE  │ • Interactive IVR Voice Dialer       │
│ • Crop Suitability & MSP Benchmarks  │   BUS    │   (Multilingual Web Speech Synthesis)│
│ • Diagnostic Case Resolution Queue   │          │ • Crop Leaf Photo Diagnosis Scanner  │
└──────────────────────────────────────┘          └──────────────────────────────────────┘
```

---

## 🌟 Core Platform Capabilities

### 1. Smart Agronomic Crop Recommender
- Evaluates real-time soil chemistry: Nitrogen ($N$), Phosphorus ($P$), Potassium ($K$), soil $\text{pH}$ ($0 - 14$), and volumetric soil moisture ($\% \text{ VWC}$).
- Cross-references parameters with regional agro-climatic zones, seasonal precipitation forecasts, and groundwater depth.
- Outputs suitability scores, projected yield per acre, water footprint ratings, Minimum Support Price (MSP) economic benchmarks, and precision N-P-K fertilizer adjustment guidelines.

### 2. Micro-Climate Telemetry & Dry-Spell Warning Center
- Ingests ground-level IoT environmental telemetry: Ambient Temperature ($^\circ\text{C}$), Relative Humidity ($\%$), Wind Speed ($\text{km/h}$), and Solar Radiation ($\text{W/m}^2$).
- Computes evapotranspiration indices and soil moisture depletion rates to flag critical **Dry-Spell Risks** before irreversible crop wilting occurs.
- Enables RSK extension officers to trigger one-click broadcast alerts targeted to specific regional clusters.

### 3. AI Crop Health Diagnosis & Support Ticketing
- Integrated computer vision diagnostic workflow for key regional cash crops:
  - **Paddy / Rice Leaf Blast** (*Magnaporthe oryzae*)
  - **Cotton Leaf Curl Virus** (*CLCuV*)
  - **Tomato Early Blight** (*Alternaria solani*)
- Provides immediate organic remedies (e.g. Neem oil spray, Trichoderma bio-fungicide) and chemical treatment dosages.
- Automatically generates priority support tickets dispatched to the local Rythu Seva Kendra queue.

### 4. Dual-Portal Simulator (RSK Panel & Phone Emulator)
- Unified split-screen architecture showcasing both sides of the ecosystem simultaneously:
  - **Left Side:** Comprehensive administrative dashboard for RSK agricultural scientists and field officers.
  - **Right Side:** Realistic mobile device emulator supporting SMS chat, IVR voice calls, and leaf image uploads.

---

## 📱 Interactive Phone Simulator & Gateway Protocol

Farmers can interact with the system using standard text messaging or automated telephone calls.

### 1. Structured SMS Gateway (`+91 800-KISAN`)

```text
┌────────────────────────────────────────────────────────────────────────┐
│                              SMS COMMANDS                              │
├──────────────────────────┬─────────────────────────────────────────────┤
│ Command Syntax           │ Action & Response                           │
├──────────────────────────┼─────────────────────────────────────────────┤
│ CROP <N> <P> <K> <pH> <M>│ Parses 5 soil inputs (e.g. CROP 85 45 50    │
│                          │ 6.5 22) and returns top 2 recommended crops │
│                          │ with match percentages and fertilizer tips. │
├──────────────────────────┼─────────────────────────────────────────────┤
│ WEATHER / ADVISORY       │ Returns live localized temperature, soil    │
│                          │ moisture trends, and drought risk metrics.  │
├──────────────────────────┼─────────────────────────────────────────────┤
│ HELP / START             │ Resends instruction menu and sample syntax. │
└──────────────────────────┴─────────────────────────────────────────────┘
```

### 2. Interactive Voice Response (IVR) Simulator
- Clicking the dialer tab or incoming call banner triggers an automated voice call.
- Uses the **Web Speech API (`speechSynthesis`)** to speak advisories in regional accents and languages.
- Real-time animated audio waveforms provide visual feedback for active speech streams.

### 3. Leaf Photo Diagnosis App Mode
- Switch to camera mode to test leaf image samples (`rice_leaf_blast.png`, `cotton_leaf_curl.png`, `tomato_early_blight.png`).
- Simulates voice note recording and submits a formal diagnosis case to the RSK ticket queue.

---

## 🗣️ Multilingual Indic Language Coverage

Kisan Alert AI supports 5 major Indian languages to maximize accessibility across diverse regional agricultural belts:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                  SUPPORTED REGIONAL INDIC LANGUAGES                    │
│                                                                        │
│   🇬🇧 English (EN)          🇮🇳 Hindi / हिंदी (HI)                       │
│   🇮🇳 Telugu / తెలుగు (TE)    🇮🇳 Kannada / ಕನ್ನಡ (KN)                     │
│   🇮🇳 Tamil / தமிழ் (TA)                                               │
└────────────────────────────────────────────────────────────────────────┘
```

All UI labels, diagnostic cards, weather advisories, SMS templates, and IVR speech syntheses adapt dynamically based on the selected language.

---

## 🌐 Production Architecture Blueprint

For nationwide deployment, the system is designed to interface with scalable enterprise and government APIs:

```text
  [ Ground Sensors / Satellite NDVI ]         [ Basic 2G Phones ]
                 │                                     │
                 ▼                                     ▼
        ┌───────────────────┐                 ┌──────────────────┐
        │ IoT MQTT Gateway  │                 │ GSM / SMS / IVR  │
        │ (AWS IoT Core)    │                 │ (Twilio/Gupshup) │
        └─────────┬─────────┘                 └────────┬─────────┘
                  │                                    │
                  ▼                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │             Core Microservices Backend (FastAPI)        │
       │  ├── Indic NLP / ASR (Bhashini / Whisper-Indic)         │
       │  ├── Crop Recommender (Decision Ensemble)               │
       │  └── Plant Disease Vision API (EfficientNet-B4)         │
       └──────────────────────────┬──────────────────────────────┘
                                  │
                                  ▼
       ┌─────────────────────────────────────────────────────────┐
       │   Spatial Database & Warehousing (PostgreSQL + PostGIS) │
       │   └── Soil Health Cards, Meteorological Data, RSK Queues│
       └─────────────────────────────────────────────────────────┘
```

- **SMS / Voice Gateway:** Twilio Programmable SMS/Voice or SMS Gupshup (India) integrated with IVR webhook listeners.
- **Speech Engine:** Integration with **AI4Bharat / Bhashini** APIs for high-accuracy Indic Automatic Speech Recognition (ASR) and Text-to-Speech (TTS).
- **Vision Pipeline:** Lightweight **EfficientNet-B4 / MobileNetV3** deep learning model trained on the PlantVillage dataset, deployed as a serverless container.
- **Geospatial Storage:** PostgreSQL with PostGIS extensions to query village boundaries, Soil Health Card (SHC) baselines, and IMD meteorological gridded data.

---

## 📂 Repository & File Structure

```text
Kisan_Alert-AI/
│
├── index.html                   # Master interactive dual-portal web application
├── presentation.html            # Standalone project slide presentation deck
├── style.css                    # Responsive styling, glassmorphism UI & phone emulator
├── app.js                       # Core application state, SMS parser, IVR engine & recommender
├── README.md                    # Comprehensive technical portfolio documentation
│
└── assets/
    ├── rice_leaf_blast.png      # Sample diagnostic leaf image: Paddy Blast
    ├── cotton_leaf_curl.png     # Sample diagnostic leaf image: Cotton Leaf Curl
    ├── tomato_early_blight.png  # Sample diagnostic leaf image: Tomato Early Blight
    ├── slide_welcome.png        # Presentation asset
    ├── slide_dashboard.png      # Presentation asset
    └── slide_app.png            # Presentation asset
```

---

## 🚀 How to Run Locally

Since the application is built using modern standards with zero heavy bundler prerequisites, it runs instantly in any modern web browser:

### Option 1: Direct File Open
Simply double-click `index.html` or open it directly in Chrome, Firefox, Safari, or Edge.

### Option 2: Local HTTP Server (Recommended)

```bash
# Clone the repository
git clone https://github.com/SambhavRaj18/Kisan_Alert-AI.git
cd Kisan_Alert-AI

# Start a local static server using Python 3
python -m http.server 8000
```

Open your browser and navigate to:
👉 **`http://localhost:8000`**

*(Note: Ensure your device audio is unmuted to hear the multilingual IVR voice synthesis).*

---

## ⚡ Engineering Highlights

- **Zero-Dependency Architecture:** Standalone single-page web app built with Vanilla JS, CSS3 custom properties, and semantic HTML5.
- **Native Web Speech API:** Implements hardware-accelerated speech synthesis without external third-party audio streaming latency.
- **State Synchronization:** Bidirectional state bus synchronizing sensor parameters, diagnostic tickets, and SMS/IVR simulator queues in real-time.
- **Full Responsive Design:** Seamlessly adapts across widescreen 4K displays, laptops, tablets, and mobile browsers.

---

## 🔮 Future Roadmap

- [ ] **Bhashini Live API Integration:** Direct cloud hookup to government Indic language translation and ASR endpoints.
- [ ] **Soil Health Card (SHC) QR Scanner:** Allow farmers to scan their physical 12-digit Soil Health Card QR code to auto-populate N-P-K parameters.
- [ ] **Mandi Price Scraper:** Real-time web scraper fetching daily AGMARKNET mandi commodity prices for local APMC market yards.
- [ ] **WhatsApp Business Bot:** WhatsApp messaging channel using interactive button menus and voice notes.

---

## 👤 Author

**Sambhav Raj**  
- **GitHub:** [@SambhavRaj18](https://github.com/SambhavRaj18)  
- **Repository:** [https://github.com/SambhavRaj18/Kisan_Alert-AI](https://github.com/SambhavRaj18/Kisan_Alert-AI)
