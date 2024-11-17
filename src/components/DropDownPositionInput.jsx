import React from "react"
import { useLanguage } from "../Context/LanguageContext"
import { Dropdown } from "bootstrap"

function DropDownPositionInput({ index, labelText, updateFunction }) {
    const {t} = useLanguage()
  return (
    <div id={`dropdown_${index}`} className="m-1">
      <button className="form-control dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        {t(labelText)}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" onClick={(e) => {updateFunction("start",e)}} href="#">
            {t("left")}
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={(e) => {updateFunction("center",e)}} href="#">
            {t("center")}
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={(e) => {updateFunction("end",e)}} href="#">
            {t("right")}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default DropDownPositionInput
