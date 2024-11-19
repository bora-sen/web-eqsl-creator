import { action_types, useConfigContext } from "../Context/ConfigContext"

function ContextUpdateFunctions() {
  const { dispatch } = useConfigContext()

  function updateCallsign(e) {
    dispatch({
      type: action_types.UPDATE_CALLSIGN,
      payload: e.target.value,
    })
  }

  function updateToCallSign(e) {
    dispatch({
      type: action_types.UPDATE_TOCALLSIGN,
      payload: e.target.value,
    })
  }

  function updateNameSurname(e) {
    dispatch({
      type: action_types.UPDATE_NAMESURNAME,
      payload: e.target.value,
    })
  }

  function updateCountry(e) {
    dispatch({
      type: action_types.UPDATE_COUNTRY,
      payload: e.target.value,
    })
  }

  function updateState(e) {
    dispatch({
      type: action_types.UPDATE_STATE,
      payload: e.target.value,
    })
  }

  function updateBand(e) {
    dispatch({
      type: action_types.UPDATE_BAND,
      payload: e.target.value,
    })
  }

  function updateDate(e) {
    let newDate = new Date(e.target.value)
    dispatch({
      type: action_types.UPDATE_DATE,
      payload: newDate,
    })
  }

  function updateCallSignPos(text, e) {
    e.preventDefault()
    dispatch({
      type: action_types.UPDATE_CALLSIGN_POS,
      payload: text,
    })
    console.log("Call Sign Position Set to -> " + text)
    console.log(action_types)
  }

  function updateNameSurnamePos(text, e) {
    e.preventDefault()
    dispatch({
      type: action_types.UPDATE_NAMESURNAME_POS,
      payload: text,
    })
    console.log("Name&Surname Position Set to -> " + text)
  }

  function updateQsoInfoPos(text, e) {
    e.preventDefault()
    dispatch({
      type: action_types.UPDATE_QSO_INFO_POS,
      payload: text,
    })
    console.log("QsoInfo Position Set to -> " + text)
  }

  function updateStateCountryPos(text, e) {
    e.preventDefault()
    dispatch({
      type: action_types.UPDATE_STATE_COUNTRY_POS,
      payload: text,
    })
    console.log("QsoInfo Position Set to -> " + text)
  }

  function updateBgUrl(event) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (e) {
      let newUrl = e.target.result
      console.log(typeof newUrl)
      dispatch({
        type: action_types.UPDATE_BG_URL,
        payload: newUrl.toString(),
      })
    }
  }

  function updateQsoMode(e) {
    dispatch({
      type: action_types.UPDATE_MODE,
      payload: e.target.value,
    })
  }

  function updateTime(e) {
    let newDate = new Date(e.target.value)
    dispatch({
      type: action_types.UPDATE_TIME,
      payload: newDate,
    })
  }

  return {
    updateCallsign,
    updateNameSurname,
    updateNameSurnamePos,
    updateQsoInfoPos,
    updateCallSignPos,
    updateDate,
    updateBand,
    updateState,
    updateCountry,
    updateToCallSign,
    updateStateCountryPos,
    updateBgUrl,
    updateQsoMode,
    updateTime,
  }
}

export default ContextUpdateFunctions
