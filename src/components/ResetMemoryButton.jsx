import React from "react"
import { useTranslation } from "react-i18next"

function ResetMemoryButton() {
  const { t } = useTranslation()
  return <button className="btn btn-outline-secondary w-100 my-3">{t("resetMemory")}</button>
}

export default ResetMemoryButton
