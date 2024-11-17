import React from "react"
import { useLanguage } from "../Context/LanguageContext"

function FloatingDateInput({ index, labelText, updateFunction }) {
  const { t } = useLanguage()
  return (
    <div className="mb-3 form-floating">
      <input onChange={(e) => updateFunction(e)} className="form-control" required id="date_input" type="date" />
      <label className="" htmlFor="date_input">
        {t(labelText)} :
      </label>
    </div>
  )
}

export default FloatingDateInput
