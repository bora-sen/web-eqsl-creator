import React from "react"
import {
  ResetMemoryButton,
  SaveToMemoryButton,
  DropDownPositionInput,
  FloatingTextInput,
  DownloadCardButton,
  DateAndTimeInputs,
} from "../components"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { setBgUrl, setCallSignPos, setNameSurnamePos, setQsoInfoPos, setStateCountryPos } from "../Stores/slices/PreviewSettings"
import { setCallSign, setDxCallSign, setNameSurname, setState, setCountry, setBand, setMode} from "../Stores/slices/UserInfo"

function ConfigForm() {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return (
    <div className="p-3 bg-body-tertiary">
      <div className="mb-5">
        <div className="row">
          <div className="col">
            <FloatingTextInput labelText="callsign" index={10} updateFunction={setCallSign} />
          </div>
          <div className="col">
            <FloatingTextInput labelText="toCallSign" index={11} updateFunction={setDxCallSign} />
          </div>
        </div>

        <FloatingTextInput labelText="nameSurname" index={12} updateFunction={setNameSurname} />

        <div className="row">
          <div className="col">
            <FloatingTextInput labelText="state" index={12} updateFunction={setState} />
          </div>
          <div className="col">
            <FloatingTextInput labelText="country" index={12} updateFunction={setCountry} />
          </div>
        </div>

        <DateAndTimeInputs />

        <div className="row">
          <div className="col">
            <FloatingTextInput labelText="Band" index={12} updateFunction={setBand} />
          </div>
          <div className="col">
            {/* TODO: Make this into a dropdown list of qso modes. */}
            <FloatingTextInput labelText="mode" index={12} updateFunction={setMode} />
          </div>
        </div>

        <div className="row d-flex align-items-center">
          <div className="col">
            <SaveToMemoryButton />
          </div>
          <div className="col">
            <ResetMemoryButton />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="bg_input">
            {t("backgroundImage")} :
          </label>
          <input
            onChange={(e) => {
              dispatch(setBgUrl(e.target.files[0]))
            }}
            className="form-control"
            required
            accept="image/*"
            id="bg_input"
            type="file"
          />
        </div>
      </div>

      <div className="my-3">
        <span>{t("positionSettings") + " :"}</span>
        <div className="row">
          <div className="col">
            <DropDownPositionInput index={5151} labelText="callsign" updateFunction={setCallSignPos} />
            <DropDownPositionInput index={5454} labelText="countryStatePos" updateFunction={setStateCountryPos} />
          </div>
          <div className="col">
            <DropDownPositionInput index={5252} labelText="nameSurname" updateFunction={setNameSurnamePos} />
            <DropDownPositionInput index={5353} labelText="qsoInfoPosition" updateFunction={setQsoInfoPos} />
          </div>
        </div>
      </div>
      <DownloadCardButton />
    </div>
  )
}

export default ConfigForm
