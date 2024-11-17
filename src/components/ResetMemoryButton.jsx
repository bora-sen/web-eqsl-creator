import React from "react"
import { useLanguage } from "../Context/LanguageContext"

function ResetMemoryButton() {
  const { t } = useLanguage()
  return <button className="btn btn-outline-secondary w-100 my-3">{t("resetMemory")}</button>
}

export default ResetMemoryButton
