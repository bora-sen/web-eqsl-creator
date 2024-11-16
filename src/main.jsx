import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./scss/style.scss"
import App from "./App.jsx"
import "./i18n.js"
import { LanguageProvider } from "./Context/LanguageContext.jsx"
import { ConfigProvider } from "./Context/ConfigContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </LanguageProvider>
  </StrictMode>
)
