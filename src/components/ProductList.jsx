import { useState } from 'react'
import Card from './Card'

const productos = [
  { id: 1, nombre: 'Notebook Lenovo', precio: 1500, categoria: 'Electronica', enStock: true },
  { id: 2, nombre: 'Mouse Gamer', precio: 350, categoria: 'Electronica', enStock: true },
  { id: 3, nombre: 'Teclado Mecánico', precio: 800, categoria: 'Electronica', enStock: false },
  { id: 4, nombre: 'Remera Deportiva', precio: 120, categoria: 'Ropa', enStock: true },
  { id: 5, nombre: 'Campera de Abrigo', precio: 450, categoria: 'Ropa', enStock: false },
  { id: 6, nombre: 'Zapatillas Running', precio: 600, categoria: 'Ropa', enStock: true },
]

function ProductList() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')
  const [soloEnStock, setSoloEnStock] = useState(false)

  const productosFiltrados = productos
    .filter((producto) => {
      if (categoriaSeleccionada === 'Todas') return true
      return producto.categoria === categoriaSeleccionada
    })
    .filter((producto) => {
      if (soloEnStock) return producto.enStock === true
      return true
    })

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>

      <div className="filtros">

        <select
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Electronica">Electrónica</option>
          <option value="Ropa">Ropa</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={soloEnStock}
            onChange={(e) => setSoloEnStock(e.target.checked)}
          />
          Solo en stock
        </label>

      </div>

      <div className="cards-container">
        {productosFiltrados.length === 0 ? (
          <p>No hay productos</p>
        ) : (
          productosFiltrados.map((producto) => (
            <Card
              key={producto.id}
              titulo={producto.nombre}
              descripcion={producto.categoria}
              precio={producto.precio}
              imagen="https://via.placeholder.com/200"
            />
          ))
        )}
      </div>

    </div>
  )
}

export default ProductList