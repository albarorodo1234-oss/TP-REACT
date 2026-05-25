import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <main className="cards-container">

        <Card
          titulo="Notebook Lenovo"
          descripcion="Procesador Intel i5, 8GB RAM"
          imagen="https://via.placeholder.com/200"
          precio={1500}
        />

        <Card
          titulo="Mouse Gamer"
          descripcion="Mouse inalámbrico RGB 1600DPI"
          imagen="https://via.placeholder.com/200"
          precio={350}
        />

        <Card
          titulo="Teclado Mecánico"
          descripcion="Teclado con switches azules"
          imagen="https://via.placeholder.com/200"
          precio={800}
        />

        <Card
          titulo="Monitor 24 pulgadas"
          descripcion="Full HD 144Hz"
          imagen="https://via.placeholder.com/200"
        >
          <p>¡Oferta del mes!</p>
        </Card>

      </main>
      <Footer />
    </div>
  )
}

export default App