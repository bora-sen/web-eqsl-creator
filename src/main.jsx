import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./scss/style.scss"
import App from "./App.jsx"
import "./i18n.js"
import { Provider } from "react-redux"
import MainStore from "./Stores/MainStore.js"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={MainStore}>
      <App />
    </Provider>
  </StrictMode>
)
