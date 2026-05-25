import { useState } from 'react'

function TodoApp() {
  const [inputTarea, setInputTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const agregarTarea = () => {
    if (inputTarea === '') return
    const nuevaTarea = {
      id: Date.now(),
      texto: inputTarea,
      completada: false
    }
    setTareas([...tareas, nuevaTarea])
    setInputTarea('')
  }

  const toggleTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    )
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  const tareasPendientes = tareas.filter((t) => t.completada === false).length

  return (
    <div className="todo-container">
      <h2>To-Do App</h2>
      <p className="pendientes">Tareas pendientes: {tareasPendientes}</p>

      <div className="todo-form">
        <input
          type="text"
          value={inputTarea}
          onChange={(e) => setInputTarea(e.target.value)}
          placeholder="Escribí una tarea..."
        />
        <button
          onClick={() => agregarTarea()}
          disabled={inputTarea === ''}
        >
          Agregar
        </button>
      </div>

      {tareas.length === 0 ? (
        <p className="sin-tareas">No hay tareas</p>
      ) : (
        <ul className="todo-lista">
          {tareas.map((tarea) => (
            <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
              <span onClick={() => toggleTarea(tarea.id)}>
                {tarea.texto}
              </span>
              <div>
                <button
                  className="btn-realizada"
                  onClick={() => toggleTarea(tarea.id)}
                >
                  Realizada
                </button>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarTarea(tarea.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default TodoApp