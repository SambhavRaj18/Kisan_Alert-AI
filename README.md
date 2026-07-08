# Kisan Alert

**Indic AI Voice-and-SMS Agricultural Intelligence Platform for Small and Marginal Farmers**

Farmers face significant financial risks due to unpredictable monsoon patterns, soil degradation, and a lack of scientific crop guidance. **Kisan Alert** bridges this gap by delivering localized agricultural intelligence directly to basic phones via **SMS and Voice (IVR)**, and providing an expert dashboard for agricultural extension centers (**Rythu Seva Kendras (RSK)**) to monitor ground conditions and diagnose crop illnesses.

---

## 🌟 Key Components

1. **Smart Crop Recommendation Engine**
   - Utilizes real-time soil factors: Nitrogen (N), Phosphorus (P), Potassium (K), soil pH, and moisture levels, cross-referenced with seasonal rainfall forecasts and groundwater tables.
   - Recommends agronomic-grade suitable crops, along with projected yields, water footprint parameters, Minimum Support Price (MSP) benchmarks, and tailored fertilizer adjustments.

2. **Weather Advisory & Dry-Spell Alert Center**
   - Integrates live IoT ground sensor telemetry feeds with micro-climate localized forecasts (temperature, relative humidity, wind speed, solar radiation).
   - Generates automated dry-spell warnings and allows agricultural officers to broadcast advisories to specific farmer clusters.

3. **AI Crop Health Diagnosis & Rythu Seva Support**
   - Farmers can log crop disease symptoms via photo uploads or voice recordings.
   - A built-in diagnostic scan identifies plant pests and pathogens (such as Paddy Blast, Cotton Leaf Curl, or Tomato Early Blight), gives organic/chemical remedies, and automatically logs a support ticket directly to the nearest Rythu Seva Kendra.

---

## 🛠️ System Architecture

The project is structured to demonstrate both the administrative portal and the farmer's end-device interaction in a single, responsive web dashboard:

```
  +---------------------------------------------------------------------------------+
  |                                Kisan Alert Web UI                               |
  +---------------------------------------+-----------------------------------------+
                                          |
        +---------------------------------+---------------------------------+
        |                                                                   |
        v                                                                   v
+-------------------------------+                                 +-------------------+
|  Expert Dashboard (RSK Panel) |                                 |  Phone Simulator  |
+-------------------------------+                                 +-------------------+
  - Live IoT Sensor Telemetry                                       - SMS Chat Interface
  - Interactive Crop Recommender                                    - Interactive Voice
  - Dry-Spell Warning Board                                           (IVR Web Speech)
  - Ticket Resolution Helpline                                      - Camera & Mic App
        |                                                                   |
        +---------------------------- API / STATE --------------------------+
```

### Production Deployment Blueprint
- **SMS Gateway**: Twilio SMS API or SMS Gupshup (India) connected to a Node.js/Python server.
- **Voice (IVR)**: Twilio Voice or Amazon Polly/Lex for custom Interactive Voice Response nodes, using Speech-to-Text (whisper-indic) and Text-to-Speech (Google TTS/Bhashini APIs).
- **AI Diagnostics**: TensorFlow Lite or PyTorch image classifier (EfficientNet trained on PlantVillage dataset) hosted as a serverless microservice.
- **Data Warehousing**: PostgreSQL with PostGIS extensions to query village geometries, satellite vegetation index (NDVI), and meteorological forecasts.

---

## 📱 Farmer Simulator Command Guide

In the simulator, you can interact with the system using SMS, voice calls, or a dedicated smartphone app.

### 1. SMS Gateway Syntax
Farmers can query the platform by sending structured commands to `+91 800-KISAN`.

- **Crop Recommendation Query**:
  - **Syntax**: `CROP <Nitrogen> <Phosphorus> <Potassium> <pH> <SoilMoisture>`
  - **Example**: `CROP 85 45 50 6.5 22`
  - **Action**: The system parses the soil values and returns the two highest-matching crops, match percentages, and prompts the farmer to request weather advisories.

- **Advisory Query**:
  - **Syntax**: Send `WEATHER` or `ADVISORY`
  - **Action**: Returns current moisture trends, regional temperature, drought risk metrics, and immediate irrigation suggestions.

- **System Reset / Instructions**:
  - **Syntax**: Send `HELP` or `START`
  - **Action**: Resends welcome instructions and sample codes.

### 2. IVR Voice Call Simulator
- Click the **Phone Icon** in the header or switch to the dialer tab inside the phone simulator.
- Click **ANSWER** to pick up the incoming call.
- The browser will use the **Web Speech Synthesis API** to speak the localized weather advisory in the active language (English, Hindi, Telugu, Kannada, Tamil).
- Dynamic audio waveforms simulate live speech processing.

### 3. Kisan App Mode (Crop Health Scan)
- Switch to the app layout in the smartphone emulator.
- Select a crop leaf sample representing a disease (Rice Leaf Blast, Cotton Leaf Curl, or Tomato Early Blight).
- Click **Tap to record voice query** to simulate recording a voice message.
- Click **Submit to Rythu Seva**. The simulator performs an AI scan and logs a case directly to the expert ticket portal.

---

## 📈 Running the Application

Since the platform is designed as an interactive web-based product showcase, it is completely build-free and executes directly in any modern browser.

1. Clone or copy this directory to your machine.
2. Ensure the `assets/` folder contains the sample disease images.
3. Open `index.html` in your web browser.
4. **Interact!** Change languages, run recommendations, send SMS messages in the phone, or trigger dry-spell alerts.

*Note: For the Voice/IVR Call feature to speak aloud, make sure your computer volume is on and your browser supports standard Text-to-Speech (SpeechSynthesis).*
