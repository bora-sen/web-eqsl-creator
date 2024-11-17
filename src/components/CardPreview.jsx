import { useConfigContext } from "../Context/ConfigContext"
import s from "./CardPreview.module.css"

function CardPreview() {
  const { state } = useConfigContext()
  return (
    <div className="container d-flex align-items-center justify-content-center p-5">
      <div id="eqsl_card_preview" style={{ backgroundImage: `url(${state.bgUrl})` }} className={`preview-container shadow position-relative pe-none`}>
        <span className={`${s.previewCallsign} text-${state.callsignPos}`}>{state.callsign}</span>
        <span className={`${s.previewNameSurname} text-${state.nameSurnamePos}`}>{state.nameSurname}</span>
        <div className={`${s.previewInfoContainer} text-${state.qsoInfoPos}`}>
          <span>
            TO: {state.toCallSign} Confirming 2-Way SSB QSO, Band: {state.band}
          </span>
          <span>Date: {state.date}</span>
        </div>
        <div>
          <span className={`${s.previewAddress} text-${state.stateCountryPos}`}>
            {state.state} / {state.country}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardPreview
