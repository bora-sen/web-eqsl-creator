import React from "react"
import { useLanguage } from "../Context/LanguageContext"
import html2canvas from "html2canvas"
import { useConfigContext } from "../Context/ConfigContext"

function DownloadCardButton() {
  const { t } = useLanguage()
  const { state } = useConfigContext()
  async function handleDownloadClick(e) {
    e.preventDefault()
    const previewCardEl = document.querySelector("#eqsl_card_preview")
    const previewCanvas = await html2canvas(previewCardEl, {
      scale: 1,
    })
    const previewImage = previewCanvas.toDataURL("image/jpeg")
    let downLinkEl = document.createElement("a")
    let fileName = `${state.callsign}-${state.toCallSign}-${state.mode}-`
    downLinkEl.href = previewImage
    downLinkEl.download = fileName
    downLinkEl.click()
    downLinkEl.remove()
  }
  return (
    <button onClick={(e) => handleDownloadClick(e)} className="btn btn-primary w-100">
      {t("downloadCard")}
    </button>
  )
}

export default DownloadCardButton
