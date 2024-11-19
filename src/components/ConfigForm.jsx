import React from "react"
import { FloatingDateInput, ResetMemoryButton, SaveToMemoryButton, DropDownPositionInput, FloatingTextInput, DownloadCardButton } from "../components"
import ContextUpdateFunctions from "../Hooks/useUpdateFunction"
import { useLanguage } from "../Context/LanguageContext"

function ConfigForm() {
  const updatefunctions = ContextUpdateFunctions()
  const { t } = useLanguage()
  return (
    <div className="p-3 bg-body-tertiary">
      <div className="mb-5">
        <div className="row">
          <div className="col">
            <FloatingTextInput labelText="callsign" index={10} updateFunction={updatefunctions.updateCallsign} />
          </div>
          <div className="col">
            <FloatingTextInput labelText="toCallSign" index={11} updateFunction={updatefunctions.updateToCallSign} />
          </div>
        </div>

        <FloatingTextInput labelText="nameSurname" index={12} updateFunction={updatefunctions.updateNameSurname} />

        <div className="row">
          <div className="col">
            <FloatingTextInput labelText="state" index={12} updateFunction={updatefunctions.updateState} />
          </div>
          <div className="col">
            <FloatingTextInput labelText="country" index={12} updateFunction={updatefunctions.updateCountry} />
          </div>
        </div>

        <FloatingTextInput labelText="Band" index={12} updateFunction={updatefunctions.updateBand} />

        <FloatingDateInput labelText="date" index={30} updateFunction={updatefunctions.updateDate} />

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
              updatefunctions.updateBgUrl(e)
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
            <DropDownPositionInput index={5151} labelText="callsign" updateFunction={updatefunctions.updateCallSignPos} />
            <DropDownPositionInput index={5454} labelText="countryStatePos" updateFunction={updatefunctions.updateStateCountryPos} />
          </div>
          <div className="col">
            <DropDownPositionInput index={5252} labelText="nameSurname" updateFunction={updatefunctions.updateNameSurnamePos} />
            <DropDownPositionInput index={5353} labelText="qsoInfoPosition" updateFunction={updatefunctions.updateQsoInfoPos} />
          </div>
        </div>
      </div>

      <button className="btn btn-primary w-100">{t("downloadCard")}</button>
    </div>
  )
}

export default ConfigForm
