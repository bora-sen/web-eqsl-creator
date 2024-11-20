import { createSlice } from "@reduxjs/toolkit"

const PreviewSettingsSlice = createSlice({
  name: "PreviewSettings",
  initialState: {
    callSignPos: "center",
    nameSurnamePos: "center",
    dxCallSignPos: "end",
    qsoInfoPos: "center",
    stateCountryPos: "end",
    bgUrl: "/images/default-bg.webp",
  },
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
    savePreviewSettingsToLocalMemory: () => {
      //TODO: Save info to localstorage
      console.log("Saving current Preview Settings to Local Memory")
    },
  },
})

export const { setCallSignPos, setNameSurnamePos, setDxCallSignPos, setQsoInfoPos, setStateCountryPos, setBgUrl, savePreviewSettingsToLocalMemory } =
  PreviewSettingsSlice.actions

export default PreviewSettingsSlice.reducer
