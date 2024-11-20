import { createSlice } from "@reduxjs/toolkit"
import i18n from "../../i18n"

export const LanguageSlice = createSlice({
  name: "language",
  initialState: {
    current: i18n.language,
  },
  reducers: {
    setLang: (state, action) => {
      state.language = action.payload
      i18n.changeLanguage(action.payload)
    },
  },
})

export const { setLang } = LanguageSlice.actions

export default LanguageSlice.reducer
