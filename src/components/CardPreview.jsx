import React from "react"
import { useConfigContext } from "../Context/ConfigContext"

function CardPreview() {
    const {state} = useConfigContext()
  return (
    <div className="container bg-success d-flex align-items-center justify-content-center p-5">
      <div className="preview-container bg-danger">
        <span className="preview-callsign">{state.callsign}</span>
        <span className="preview-nameSurname">{state.nameSurname}</span>
      </div>
    </div>
  )
}

export default CardPreview
