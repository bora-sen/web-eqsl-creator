import React from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { savePreviewSettingsToLocalMemory } from "../Stores/slices/PreviewSettings"

function SaveToMemoryButton() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  function handeClick(e) {
    e.preventDefault()
    dispatch(savePreviewSettingsToLocalMemory())
  }
  return (
    <button onClick={(e) => handeClick(e)} className="btn btn-outline-secondary w-100 my-3">
      {t("saveToLocalMemory")}
    </button>
  )
}

export default SaveToMemoryButton
