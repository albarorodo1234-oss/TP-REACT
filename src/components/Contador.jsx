import { useState } from 'react'

function Contador() {
  const [count, setCount] = useState(0)

  const sumar = () => {
    setCount(count + 1)
  }

  const restar = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const reset = () => {
    setCount(0)
  }

  const estilo = {
    color: count > 0 ? 'green' : 'red',
    fontSize: '48px',
    fontWeight: 'bold'
  }

  return (
    <div className="contador">
      <h2>Contador</h2>
      <p style={estilo}>{count}</p>
      <button onClick={sumar}>+1</button>
      <button onClick={restar} disabled={count === 0}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Contador