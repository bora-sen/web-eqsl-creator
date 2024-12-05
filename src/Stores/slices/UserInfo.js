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

const defaultState = {
  callSign: "TA1TWB",
  dxCallSign: "TB2AAA",
  nameSurname: "Bora Şen",
  country: "Türkiye",
  city: "İstanbul",
  band: "2M",
  mode: "SSB",
  date: new Date().toISOString(),
}
const initialState = getDataFromLocalStorage(defaultState)

const UserInfoSlice = createSlice({
  name: "UserInfo",
  initialState,
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
    setCity: (state, action) => {
      state.city = action.payload
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
    saveUserInfoToLocalMemory: (state) => {
      const { callSign, nameSurname, city, country } = state
      const UserInfo = { callSign, nameSurname, city, country }
      const ParsedUserInfo = JSON.stringify(UserInfo)
      localStorage.setItem("UserInfo", ParsedUserInfo)
      console.info("Saved 'UserInfo' to LocalStorage!")
    },
    removeUserInfoFromLocalMemory: () => {
      if (localStorage.getItem("UserInfo") !== undefined) {
        localStorage.removeItem("UserInfo")
        console.info("Removing 'UserInfo' from LocalStorage!")
      } else {
        console.info("There is no 'UserInfo' in LocalStorage.")
      }
    },
  },
})

export const {
  setCallSign,
  setDxCallSign,
  setNameSurname,
  setCountry,
  setCity,
  setBand,
  setMode,
  setDay,
  setTime,
  saveUserInfoToLocalMemory,
  removeUserInfoFromLocalMemory,
} = UserInfoSlice.actions

export default UserInfoSlice.reducer
