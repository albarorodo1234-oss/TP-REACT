import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import './App.css'
import Contador from './components/Contador'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div>
      <Header />
      <main className="cards-container">

        
        

        <Card
          titulo="Notebook Lenovo"
          descripcion="Procesador Intel i5, 8GB RAM"
          imagen="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          precio={1500}
        />

        <Card
          titulo="Mouse Gamer"
          descripcion="Mouse inalámbrico RGB 1600DPI"
          imagen="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          precio={350}
        />

        <Card
          titulo="Teclado Mecánico"
          descripcion="Teclado con switches azules"
          imagen="https://plus.unsplash.com/premium_photo-1683543124615-fb42e42c6201?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          precio={800}
        />

        <Card
          titulo="Monitor 24 pulgadas"
          descripcion="Full HD 144Hz"
          imagen="https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <p>¡Oferta del mes!</p>
        </Card>

        <Contador />
        <ContactForm />
        

      </main>
      <Footer />
    </div>
  )
}

export default App