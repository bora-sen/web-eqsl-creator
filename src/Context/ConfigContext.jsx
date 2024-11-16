import { createContext, useContext, useReducer } from "react"

export const action_types = {
  UPDATE_CALLSIGN: "UPDATE_CALLSIGN",
  UPDATE_TOCALLSIGN:"UPDATE_TOCALLSIGN",
  UPDATE_NAMESURNAME: "UPDATE_NAMESURNAME",
  UPDATE_COUNTRY: "UPDATE_COUNTRY",
  UPDATE_STATE: "UPDATE_STATE",
  UPDATE_BAND: "UPDATE_BAND",
  UPDATE_DATE: "UPDATE_DATE",
}

function ConfigReducer(state, action) {
  switch (action.type) {
    case action_types.UPDATE_CALLSIGN:
      return {
        ...state,
        callsign: action.payload,
      }
    case action_types.UPDATE_NAMESURNAME:
      return {
        ...state,
        nameSurname: action.payload,
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

    default:
      return state
  }
}

export const ConfigContext = createContext()
export function ConfigProvider({ children }) {
  const initialState = {
    callsign: "TA1TTT",
    toCallSign:"TB2AAA",
    nameSurname: "ASD XYZ",
    country: "TÜRKİYE",
    state: "İSTANBUL",
    band: "439.200",
    date: "15.11.2024",
  }

  const [state, dispatch] = useReducer(ConfigReducer, initialState)
  return <ConfigContext.Provider value={{ state, dispatch }}>{children}</ConfigContext.Provider>
}

export const useConfigContext = () => useContext(ConfigContext)
