import React from "react"
import { useLanguage } from "../Context/LanguageContext"

function SaveToMemoryButton() {
    const {t} = useLanguage()
  return <button className="btn btn-outline-secondary w-100 my-3">{t("saveToLocalMemory")}</button>
}

export default SaveToMemoryButton
