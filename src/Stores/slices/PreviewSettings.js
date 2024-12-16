import { createSlice } from "@reduxjs/toolkit"

function getDataFromLocalStorage(defaultValue) {
  try {
    let localObject = localStorage.getItem("PreviewSettings")
    if (localObject === null) {
      console.log("Data is not set!!!")
      return defaultValue
    } else {
      return JSON.parse(localObject)
    }
  } catch (error) {
    console.log(error)
  }
}
const defaultSettings = {
  callSignPos: "center",
  nameSurnamePos: "center",
  dxCallSignPos: "end",
  qsoInfoPos: "center",
  stateCountryPos: "end",
  bgUrl: "/web-eqsl-creator/images/default-bg.webp",
}
const initialState = getDataFromLocalStorage(defaultSettings)

const PreviewSettingsSlice = createSlice({
  name: "PreviewSettings",
  initialState,
  reducers: {
    setCallSignPos: (state, action) => {
      state.callSignPos = action.payload
    },
    setNameSurnamePos: (state, action) => {
      state.nameSurnamePos = action.payload
    },
    setDxCallSignPos: (state, action) => {
      state.dxCallSignPos = action.payload
    },
    setQsoInfoPos: (state, action) => {
      state.qsoInfoPos = action.payload
    },
    setStateCountryPos: (state, action) => {
      state.stateCountryPos = action.payload
    },
    setBgUrl: (state, action) => {
      state.bgUrl = URL.createObjectURL(action.payload)
    },
    savePreviewSettingsToLocalMemory: (state) => {
      const { callSignPos, nameSurnamePos, dxCallSignPos, qsoInfoPos, stateCountryPos, bgUrl } = state
      const PreviewSettings = { callSignPos, nameSurnamePos, dxCallSignPos, qsoInfoPos, stateCountryPos, bgUrl }
      const parsedPreviewSettings = JSON.stringify(PreviewSettings)
      localStorage.setItem("PreviewSettings", parsedPreviewSettings)
      console.info("Saved 'PreviewSettings' to LocalStorage!")
    },
    removePreviewSettingsFromStorage: () => {
      if (localStorage.getItem("PreviewSettings") !== undefined) {
        localStorage.removeItem("PreviewSettings")
        console.info("Removing 'PreviewSettings' from LocalStorage!")
      } else {
        console.info("There is no 'PreviewSettings' in LocalStorage.")
      }
    },
  },
})

export const {
  setCallSignPos,
  setNameSurnamePos,
  setDxCallSignPos,
  setQsoInfoPos,
  setStateCountryPos,
  setBgUrl,
  savePreviewSettingsToLocalMemory,
  removePreviewSettingsFromStorage,
} = PreviewSettingsSlice.actions

export default PreviewSettingsSlice.reducer
