import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";

import en from "./Locales/en.json";
import ru from "./Locales/ru.json";
import uz from "./Locales/uz.json";

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",

    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uz: { translation: uz },
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
