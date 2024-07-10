// // i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import nextI18NextConfig from './next-i18next.config';

// const createI18nInstance = () => {
//   i18n
//     .use(initReactI18next)
//     .init({
//       fallbackLng: 'en',
//       debug: true,
//       interpolation: {
//         escapeValue: false, // React already safes from XSS
//       },
//       backend: {
//         loadPath: '/locales/{{lng}}/{{ns}}.json',
//       },
//     });

//   return i18n;
// };

// export default createI18nInstance;

// i18n.js

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend'; // Import i18next-http-backend
// import nextI18NextConfig from './next-i18next.config';

// const createI18nInstance = () => {
//   i18n
//     .use(Backend) // Use i18next-http-backend as the backend connector
//     .use(initReactI18next)
//     .init({
//       fallbackLng: 'en',
//       debug: true,
//       interpolation: {
//         escapeValue: false, // React already safes from XSS
//       },
//       backend: {
//         loadPath: '/locales/{{lng}}/{{ns}}.json', // Adjust the path based on your folder structure
//       },
//     });

//   return i18n;
// };

// export default createI18nInstance;

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// const createI18nInstance = () => {
//   i18n
//     .use(Backend)
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//       fallbackLng: 'en',
//       debug: true,
//       interpolation: {
//         escapeValue: false,
//       },
//     });

//   return i18n;
// };

// export default createI18nInstance;

import { initReactI18next } from "react-i18next";

import en from "./public/locales/en/common.json";
import ar from "./public/locales/ar/common.json";
import sv from "./public/locales/ar/common.json";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
      sv: {
        translation: sv,
      },
    },
    lng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;