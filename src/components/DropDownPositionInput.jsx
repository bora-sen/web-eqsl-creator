import React from "react"
import { Dropdown } from "bootstrap"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"

function DropDownPositionInput({ index, labelText, updateFunction }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  return (
    <div id={`dropdown_${index}`} className="m-1">
      <button className="form-control dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        {t(labelText)}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a
            className="dropdown-item"
            onClick={(e) => {
              dispatch(updateFunction("start"))
            }}
            href="#"
          >
            {t("left")}
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={(e) => {
              dispatch(updateFunction("center"))
            }}
            href="#"
          >
            {t("center")}
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={(e) => {
              dispatch(updateFunction("end"))
            }}
            href="#"
          >
            {t("right")}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default DropDownPositionInput
