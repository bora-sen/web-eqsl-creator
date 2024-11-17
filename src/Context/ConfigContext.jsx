import { createContext, useContext, useReducer } from "react"

export const action_types = {
  UPDATE_CALLSIGN: "UPDATE_CALLSIGN",
  UPDATE_CALLSIGN_POS: "UPDATE_CALLSIGN_POS",
  UPDATE_TOCALLSIGN: "UPDATE_TOCALLSIGN",
  UPDATE_TOCALLSIGN_POS: "UPDATE_TOCALLSIGN_POS",
  UPDATE_QSO_INFO_POS: "UPDATE_QSO_INFO_POS",
  UPDATE_NAMESURNAME: "UPDATE_NAMESURNAME",
  UPDATE_NAMESURNAME_POS: "UPDATE_NAMESURNAME_POS",
  UPDATE_COUNTRY: "UPDATE_COUNTRY",
  UPDATE_STATE: "UPDATE_STATE",
  UPDATE_STATE_COUNTRY_POS: "UPDATE_STATE_COUNTRY_POS",
  UPDATE_BAND: "UPDATE_BAND",
  UPDATE_DATE: "UPDATE_DATE",
  UPDATE_BG_URL: "UPDATE_BG_URL",
}

function ConfigReducer(state, action) {
  switch (action.type) {
    case action_types.UPDATE_CALLSIGN:
      return {
        ...state,
        callsign: action.payload,
      }
    case action_types.UPDATE_CALLSIGN_POS:
      return {
        ...state,
        callsignPos: action.payload,
      }
    case action_types.UPDATE_TOCALLSIGN:
      return {
        ...state,
        toCallSign: action.payload,
      }

    case action_types.UPDATE_TOCALLSIGN_POS:
      return {
        ...state,
        toCallSignPos: action.payload,
      }
    case action_types.UPDATE_QSO_INFO_POS:
      return {
        ...state,
        qsoInfoPos: action.payload,
      }
    case action_types.UPDATE_NAMESURNAME:
      return {
        ...state,
        nameSurname: action.payload,
      }
    case action_types.UPDATE_NAMESURNAME_POS:
      return {
        ...state,
        nameSurnamePos: action.payload,
      }
    case action_types.UPDATE_COUNTRY:
      return {
        ...state,
        country: action.payload,
      }
    case action_types.UPDATE_STATE:
      return {
        ...state,
        state: action.payload,
      }

    case action_types.UPDATE_STATE_COUNTRY_POS:
      return {
        ...state,
        stateCountryPos: action.payload,
      }
    case action_types.UPDATE_BAND:
      return {
        ...state,
        band: action.payload,
      }
    case action_types.UPDATE_DATE:
      return {
        ...state,
        date: action.payload,
      }

    case action_types.UPDATE_BG_URL:
      return {
        ...state,
        bgUrl: action.payload,
      }

    default:
      return state
  }
}

export const ConfigContext = createContext()
export function ConfigProvider({ children }) {
  const initialState = {
    callsign: "TA1TWB",
    toCallSign: "TB2AAA",
    nameSurname: "Bora Şen",
    country: "Türkiye",
    state: "İstanbul",
    band: "2M",
    date: new Date().toDateString(),
    callsignPos: "center",
    nameSurnamePos: "center",
    toCallSignPos: "end",
    qsoInfoPos: "center",
    stateCountryPos: "end",
    bgUrl: "/images/default-bg.webp",
  }

  const [state, dispatch] = useReducer(ConfigReducer, initialState)
  return <ConfigContext.Provider value={{ state, dispatch }}>{children}</ConfigContext.Provider>
}

export const useConfigContext = () => useContext(ConfigContext)
