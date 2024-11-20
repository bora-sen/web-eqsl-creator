import { createSlice } from "@reduxjs/toolkit"

const UserInfoSlice = createSlice({
  name: "UserInfo",
  initialState: {
    callSign: "TA1TWB",
    dxCallSign: "TB2AAA",
    nameSurname: "Bora Şen",
    country: "Türkiye",
    state: "İstanbul",
    band: "2M",
    mode: "SSB",
    date: new Date().toISOString(),
  },
  reducers: {
    setCallSign: (state, action) => {
      state.callSign = action.payload
    },
    setDxCallSign: (state, action) => {
      state.dxCallSign = action.payload
    },
    setNameSurname: (state, action) => {
      state.nameSurname = action.payload
    },
    setCountry: (state, action) => {
      state.country = action.payload
    },
    setState: (state, action) => {
      state.state = action.payload
    },
    setBand: (state, action) => {
      state.band = action.payload
    },
    setMode: (state, action) => {
      state.mode = action.payload
    },
    setDay: (state, action) => {
      let updatedDate = new Date(state.date)
      updatedDate.setFullYear(action.payload.getFullYear())
      updatedDate.setMonth(action.payload.getMonth())
      updatedDate.setDate(action.payload.getDate())
      state.date = updatedDate.toISOString()
    },
    setTime: (state, action) => {
      let inputTimeString = action.payload
      const [hours, minutes] = inputTimeString.split(":").map(Number)
      const updatedDate = new Date(state.date)
      updatedDate.setHours(hours)
      updatedDate.setMinutes(minutes)
      state.date = updatedDate.toISOString()
    },
    saveUserInfoToLocalMemory: () => {
      //TODO: Save info to localstorage
      console.log("Saving current User Info to Local Memory Memory..")
    },
  },
})

export const { setCallSign, setDxCallSign, setNameSurname, setCountry, setState, setBand, setMode, setDay, setTime, saveUserInfoToLocalMemory } =
  UserInfoSlice.actions

export default UserInfoSlice.reducer
