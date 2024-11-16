import { createContext, useContext, useState } from "react"
import { useTranslation } from "react-i18next"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState()

  const { t, i18n } = useTranslation()
  function changeLanguage(lang) {
    i18n.changeLanguage(lang)
  }
  return <LanguageContext.Provider value={{t, changeLanguage}}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)