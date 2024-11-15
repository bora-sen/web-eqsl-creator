function App() {
  return (
    <>
      <div className="container mx-auto bg-body-secondary d-grid text-center">
        <span className="fw-bold fs-1">Hello World</span>
        <button
          onClick={(e) => {
            e.preventDefault()
            alert("Hellooo")
          }}
          className="btn btn-primary"
        >
          Initial Setup With Bootstrap
        </button>
      </div>
    </>
  )
}

export default App
