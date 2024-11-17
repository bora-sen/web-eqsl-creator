import React from "react"
import { useLanguage } from "../Context/LanguageContext"
import { action_types, useConfigContext } from "../Context/ConfigContext"

function ConfigForm() {
  const { t } = useLanguage()
  return (
    <div className="p-3">
      <div className="mb-3 form-floating">
        <input onChange={(e) => updateCallsign(e)} className="form-control" required id="callsign_input" type="text" />
        <label className="" htmlFor="callsign_input">
          {t("callsign")} :
        </label>
      </div>

      <div className="mb-3 form-floating">
        <input onChange={(e) => updateToCallSign(e)} className="form-control" required id="tocallsign_input" type="text" />
        <label className="" htmlFor="tocallsign_input">
          {t("toCallSign")} :
        </label>
      </div>

      <div className="mb-3 form-floating">
        <input onChange={(e) => updateNameSurname(e)} className="form-control" required id="nameSurname_input" type="text" />
        <label className="" htmlFor="nameSurname_input">
          {t("nameSurname")} :
        </label>
      </div>

      <div className="mb-3 form-floating">
        <input onChange={(e) => updateCountry(e)} className="form-control" required id="country_input" type="text" />
        <label className="" htmlFor="country_input">
          {t("country")} :
        </label>
      </div>

      <div className="mb-3 form-floating">
        <input onChange={(e) => updateState(e)} className="form-control" required id="state_input" type="text" />
        <label className="" htmlFor="state_input">
          {t("state")} :
        </label>
      </div>

      <div className="mb-3 form-floating">
        <input onChange={(e) => updateBand(e)} className="form-control" required id="band_input" type="text" />
        <label className="" htmlFor="band_input">
          Band :
        </label>
      </div>

      <div className="mb-3 form-floating">
        <input onChange={(e) => updateDate(e)} className="form-control" required id="date_input" type="date" />
        <label className="" htmlFor="date_input">
          {t("date")} :
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="date_input">
          {t("backgroundImage")} :
        </label>

        <input onChange={(e) => updateDate(e)} className="form-control" required id="date_input" type="file" />
      </div>
      <button className="btn btn-outline-primary w-100">{t("downloadCard")}</button>
    </div>
  )
}

export default ConfigForm
