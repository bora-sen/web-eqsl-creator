import { useSelector } from "react-redux"
import s from "./CardPreview.module.css"

function CardPreview() {
  const { callSign, dxCallSign, nameSurname, country, city, band, mode, date } = useSelector((state) => state.UserInfo)
  const { callSignPos, nameSurnamePos, qsoInfoPos, stateCountryPos, bgUrl } = useSelector((state) => state.PreviewSettings)

  return (
    <div className="container d-flex align-items-center justify-content-center p-5 fw-bold">
      <div id="eqsl_card_preview" style={{ backgroundImage: `url(${bgUrl})` }} className={`preview-container shadow position-relative pe-none`}>
        <span className={`${s.previewCallsign} text-${callSignPos}`}>{callSign}</span>
        <span className={`${s.previewNameSurname} text-${nameSurnamePos}`}>{nameSurname}</span>
        <div className={`${s.previewInfoContainer} text-${qsoInfoPos}`}>
          <span>
            TO: {dxCallSign} Confirming 2-Way {mode} QSO, Band: {band}
          </span>
          <span>Date: {`${new Date(date).toDateString()} - ${new Date(date).toLocaleTimeString()}`}</span>
        </div>
        <div>
          <span className={`${s.previewAddress} text-${stateCountryPos}`}>
            {city} / {country}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardPreview
