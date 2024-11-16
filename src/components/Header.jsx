import React from "react"
import TRIcon from "../assets/icons/tr.svg"
import ENIcon from "../assets/icons/en.svg"
import { useLanguage } from "../Context/LanguageContext"

function Header() {
  const { changeLanguage } = useLanguage()
  return (
    <header className="bg-dark sticky-top">
      <div className="d-flex align-items-center justify-content-between container py-4 px-2">
        <a className="text-decoration-none text-light ms-3 fs-2 fw-bold" href="#">
          eQSL Creator
        </a>
        <div className="d-flex align-items-center justify-content-evenly gap-2">
          <img onClick={(e) => changeLanguage("tr")} width="32px" className="  rounded-5" src={TRIcon} alt="" />
          <img onClick={(e) => changeLanguage("en")} width="32px" className="  rounded-5" src={ENIcon} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header
