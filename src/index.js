import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

const userLanguage = navigator.language.toLowerCase();

const languageToUse = userLanguage.startsWith("es") ? "es" : "en";

i18next.init({
  interpolation: { escape: false },
  lng: languageToUse,
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
