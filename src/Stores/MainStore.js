import { configureStore } from "@reduxjs/toolkit"
import { LanguageSlice, PreviewSettingsSlice, UserInfoSlice } from "./slices"

const MainStore = configureStore({
  reducer: {
    Language: LanguageSlice,
    PreviewSettings: PreviewSettingsSlice,
    UserInfo: UserInfoSlice,
  },
})

export default MainStore
