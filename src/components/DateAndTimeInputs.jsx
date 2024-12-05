import React from "react"
import { setDay, setTime } from "../Stores/slices/UserInfo"
import FloatingTimeInput from "./FloatingTimeInput"
import FloatingDateInput from "./FloatingDateInput"

function DateAndTimeInputs() {
  return (
    <div className="row">
      <div className="col">
        <FloatingTimeInput index={5656} labelText="time" updateFunction={setTime} />
      </div>
      <div className="col">
        <FloatingDateInput labelText="date" index={30} updateFunction={setDay} />
      </div>
    </div>
  )
}

export default DateAndTimeInputs
