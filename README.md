Tips PUNTO 3:

"useState es necesario porque una variable normal no actualiza la pantalla en React"
"Siempre uso setCount para modificar el estado, nunca toco count directamente"
"El botón -1 tiene disabled={count === 0} para que no baje de cero"
"El color lo manejo con un operador ternario dentro del objeto de estilos"
"Cada vez que el estado cambia, React vuelve a renderizar el componente automáticamente" 

PUNTO 4 - FORMULARIO

"Un input controlado tiene su valor ligado a un estado de React con value y onChange"
"Cada tecla que presiona el usuario dispara el onChange que actualiza el estado"
"El preview en vivo funciona solo porque React re-renderiza cada vez que el estado cambia"
"e.preventDefault() evita que el formulario recargue la página al enviarse"
"La validación es simple: si cualquier campo está vacío, el botón queda deshabilitado"

# 📚 PUNTO 5 / Teoría de React: Manejo de Arrays (.map y .filter)

En esta sección guardo mis apuntes sobre cómo manipular colecciones de datos en JavaScript para renderizarlos dinámicamente en componentes de React.

---

## 🔄 1. Método `.map()`
Recorre un array original y **devuelve un nuevo array transformado**. En React, es el método por excelencia que usamos para convertir datos puros (objetos) en componentes visuales (JSX).

### 💻 Ejemplo de uso en React:
```jsx
// Convierte cada objeto producto del array en un componente <Card />
productos.map((producto) => (
  <Card titulo={producto.nombre} />
))