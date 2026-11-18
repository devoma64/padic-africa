# PADIC Africa - React Web Application

A modern, responsive web application for PADIC Africa restructured from the Studiova template into a clean, component-driven **React + Vite** single-page architecture with **React Router v6**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port specified by Vite).

### 3. Build for Production
```bash
npm run build
```
Generates an optimized, production-ready static build inside `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture

```
padic-africa/
├── legacy-html/               # Safely archived original static HTML files
├── public/
│   └── assets/                # Static assets (images, css, vendor libraries)
│       ├── css/
│       ├── images/
│       ├── libs/
│       └── scss/
├── src/
│   ├── components/
│   │   ├── common/            # Shared UI components (ScrollToTop, BannerInner)
│   │   ├── home/              # Modular homepage sections (Hero, Stats, Services, etc.)
│   │   └── layout/            # Application chrome (Navbar, Footer, Layout wrapper)
│   ├── data/                  # Structured mock data & content models
│   │   ├── blogData.js
│   │   ├── faqData.js
│   │   ├── pricingData.js
│   │   ├── projectsData.js
│   │   ├── servicesData.js
│   │   ├── teamData.js
│   │   └── testimonialsData.js
│   ├── pages/                 # Route-level page components
│   │   ├── AboutUs.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogDetail.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Projects.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   └── TermsAndConditions.jsx
│   ├── App.jsx                # Route definitions & router configuration
│   └── main.jsx               # React 18 application root entry
├── index.html                 # Vite HTML entry point
├── package.json               # Dependencies and scripts
└── vite.config.js             # Vite configuration
```

---

## 🌐 Routes & Flow

| Path | Component | Purpose |
| :--- | :--- | :--- |
| `/` | `Home.jsx` | Main landing page (Hero, Stats, Featured, Services, Pricing, Contact) |
| `/about` | `AboutUs.jsx` | Company overview, stats, mission, and leadership team |
| `/projects` | `Projects.jsx` | Filterable portfolio grid |
| `/projects/:id` | `ProjectDetail.jsx` | Dynamic project case study breakdown |
| `/blog` | `Blog.jsx` | Articles and insights index |
| `/blog/:id` | `BlogDetail.jsx` | Full article reader with author metadata and sharing |
| `/contact` | `Contact.jsx` | Dedicated inquiries and contact form |
| `/sign-in` | `SignIn.jsx` | Authentication login view |
| `/sign-up` | `SignUp.jsx` | Account registration view |
| `/terms` | `TermsAndConditions.jsx`| Legal terms of service |
| `/privacy` | `PrivacyPolicy.jsx` | Data privacy guidelines |
| `*` | `NotFound.jsx` | Custom 404 error page |
