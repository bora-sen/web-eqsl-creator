import React from "react"
import html2canvas from "html2canvas"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

function DownloadCardButton() {
  const { t } = useTranslation()
  const {callSign,dxCallSign,mode} = useSelector((state) => state.UserInfo)
  async function handleDownloadClick(e) {
    e.preventDefault()
    const previewCardEl = document.querySelector("#eqsl_card_preview")
    const previewCanvas = await html2canvas(previewCardEl, {
      scale: 1,
    })
    const previewImage = previewCanvas.toDataURL("image/jpeg")
    let downLinkEl = document.createElement("a")
    let fileName = `${callSign}-${dxCallSign}-${mode}-`
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
