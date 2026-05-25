import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {
  return (
    <div>
      <Header />
      <main>
        <Card titulo="Tarjeta 1" descripcion="Descripcion de ejemplo" />
      </main>
      <Footer />
    </div>
  )
}

export default App