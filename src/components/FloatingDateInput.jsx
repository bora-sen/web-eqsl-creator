import React from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"

function FloatingDateInput({ index, labelText, updateFunction }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  return (
    <div className="mb-3 form-floating">
      <input onChange={(e) => dispatch(updateFunction(e.target.valueAsDate))} className="form-control" required id="date_input" type="date" />
      <label className="" htmlFor="date_input">
        {t(labelText)} :
      </label>
    </div>
  )
}

export default FloatingDateInput
