# 🌱 SoilRevive

> **Transforming Soil Health into Visible Assets for Sustainable Agriculture in Nigeria**

SoilRevive is an AI-powered agronomy and digital soil health platform designed specifically for Nigerian farmers, extension agents, agricultural cooperatives, and agribusiness stakeholders. It bridges the gap between scientific soil analytics and actionable field-level practices.

---

## 🚀 Key Features

* **🌾 Digital Soil Passport**: Comprehensive farm health credentials tracking pH, Nitrogen (N), Phosphorus (P), Potassium (K), Organic Carbon, and micronutrients with verifiable tamper-proof certificates.
* **🛰️ Satellite & Proximal Sensing Diagnostics**: AI-assisted multispectral analysis, NDVI vegetation indexing, and moisture retention mapping.
* **🗣️ Multilingual Agronomy AI**: Interactive real-time advisory supporting English, Hausa, Yoruba, and Igbo with voice and text capabilities.
* **🚜 Enterprise Precision Suite**: Machine-to-Machine (M2M) telemetry, ISOBUS tractor support, VRA shapefile exports, and commercial farm dashboards.
* **🛒 Active Verified Marketplace**: Anti-counterfeit subsidized fertilizer blends with direct ordering and QR authenticity verification.
* **🤝 Trust & Verification Hub**: Integrations and data validation aligned with standards from IITA, NAQS, and FMARD.
* **🌦️ Climate & Irrigation Alerts**: Real-time agro-meteorological forecasting, pest alerts, and water-saving irrigation guidance.

---

## 🛠️ Technology Stack

* **Frontend Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite 5](https://vitejs.dev/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Form Handling**: [React Hook Form](https://react-hook-form.com/)

---

## 📦 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
* [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aminayusufyahaya-softdev/SOILREVIVE.git
   cd SOILREVIVE
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```text
SOILREVIVE/
├── public/                 # Static assets and icons
├── src/
│   ├── assets/             # Images, logos, and illustrations
│   ├── components/         # Modular React UI components
│   │   ├── ClimateIrrigationAlert.tsx
│   │   ├── DigitalSoilPassportModal.tsx
│   │   ├── DualPathSection.tsx
│   │   ├── FarmerModal.tsx
│   │   ├── FeatureGridBento.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── MultilingualAiChat.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProximalSensingScannerModal.tsx
│   │   ├── SoilPulseLoader.tsx
│   │   ├── TrustAndPartnershipsSection.tsx
│   │   └── UserJourneysSection.tsx
│   ├── data/               # Regional soil benchmarks, mock data & constants
│   ├── App.tsx             # Root React Application component
│   ├── index.css           # Tailwind & global stylesheet
│   └── main.tsx            # React application entry point
├── legacy/                 # Original HTML/JS prototype files (archived)
├── index.html              # Main HTML entry point
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Custom theme colors and typography
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build and path alias configuration
```

---

## 👥 Authors & Acknowledgments

* **Author**: Amina Yusuf Yahaya ([@aminayusufyahaya-softdev](https://github.com/aminayusufyahaya-softdev))
* **License**: ISC