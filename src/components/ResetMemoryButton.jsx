import React from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"

function ResetMemoryButton({resetFunction}) {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  function handeClick(e) {
    e.preventDefault()
    dispatch(resetFunction())
  }
  return (
    <button onClick={(e) => handeClick(e)} className="btn btn-outline-secondary w-100 my-3">
      {t("resetMemory")}
    </button>
  )
}

export default ResetMemoryButton
