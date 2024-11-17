import React from "react"
import { useLanguage } from "../Context/LanguageContext"

function FloatingTextInput({labelText, index, updateFunction }) {
  const { t } = useLanguage()
  return (
    <div className="mb-3 form-floating">
      <input type="text" onChange={(e) => updateFunction(e)} className="form-control" required id={`form_input_id_${index}`} />
      <label className="" htmlFor={`form_input_id_${index}`}>
        {t(labelText)} :
      </label>
    </div>
  )
}

export default FloatingTextInput
