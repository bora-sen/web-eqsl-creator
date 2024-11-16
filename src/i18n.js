import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

// Import translation files
import en from "./locales/en.json"
import tr from "./locales/tr.json"

// Configure i18next
i18n
  .use(LanguageDetector) // Automatically detect user language
  .use(initReactI18next) // Passes i18n down to React
  .init({
    resources: {
      tr: { translation: tr },
      en: { translation: en },
    },
    fallbackLng: "en", // Default language if detection fails
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  })

export default i18n
