import React from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"

function FloatingTimeInput({ labelText, index, updateFunction }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  return (
    <div className="mb-3 form-floating">
      <input type="time" onChange={(e) => dispatch(updateFunction(e.target.value))} className="form-control" required id={`form_input_id_${index}`} />
      <label className="" htmlFor={`form_input_id_${index}`}>
        {t(labelText)} :
      </label>
    </div>
  )
}

export default FloatingTimeInput
