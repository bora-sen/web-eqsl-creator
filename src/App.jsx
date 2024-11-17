import { ConfigForm, Footer, Header } from "./components"
import CardPreview from "./components/CardPreview"
import { useLanguage } from "./Context/LanguageContext"

function App() {
  const { t } = useLanguage()
  return (
    <>
      <Header />
      <section className="bg-light">
        <section className="container mx-auto pt-3">
          <div className="w-full text-center">
            <span className="fw-bold fs-1">{t("welcome")}</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum. Recusandae libero velit fuga?</p>
          </div>
          <div className="row">
            <div className="col">
              <ConfigForm />
            </div>
            <div className="col">
              <CardPreview />
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default App
