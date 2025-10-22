# 🧩 Ejercicios — Sesión 1

## Ejercicio 1 — Contador de “Me gusta”

Crea un componente llamado **LikeCounter.jsx** que muestre un botón con un contador de “likes”.

### 📝 Requisitos

- El componente debe mostrar un texto como:

  ❤️ 0 Me gusta

- Cada vez que el usuario haga clic en el botón, el número de “Me gusta” debe aumentar en 1.
- Si se vuelve a pulsar el botón, debe volver a 0 (alternar entre “me gusta” y “no me gusta”).
- El color del texto o fondo **puede cambiar al activarse**, pero **no es obligatorio**.
  (Si quieres practicar un poco de Tailwind, puedes usar clases como `text-pink-500` o `bg-pink-500`, pero también puedes dejarlo sin estilos).

### ⚙️ Props sugeridas

- **inicial**: número inicial de likes (por defecto 0)
- **titulo**: texto opcional que aparezca encima del botón (por ejemplo: “Canción favorita”)

### 🎯 Objetivo

Practicar **useState** con números y condicionales simples en JSX.

---

## Ejercicio 2 — Tarjeta de información dinámica

Crea un componente llamado **InfoCard.jsx** que muestre una tarjeta con título, descripción y un botón para alternar el contenido.

### 📝 Requisitos

- El componente debe recibir dos props:
  - **titulo**: texto principal (por ejemplo “¿Sabías que…?”)
  - **texto**: un texto explicativo o curiosidad.
- Muestra por defecto solo el título y un botón con el texto “Mostrar más”.
- Al pulsar el botón, debe mostrarse también el texto explicativo, y el botón cambiar su texto a “Ocultar”.
- Usa `useState` para controlar si la tarjeta está abierta o cerrada.
- Los **estilos son opcionales**: puedes dejarlo simple, o practicar con algunas clases de Tailwind (`rounded-xl`, `shadow`, `p-4`, `bg-gray-50`, etc.).

### 🎯 Objetivo

Practicar **renderizado condicional** con `useState` y props combinadas.

---

## 🧠 Conceptos clave

- `useState()`
- Renderizado condicional (`{condición && <Elemento />}`)
- Props con valores por defecto
- Clases dinámicas (opcional)

---

## 💡 Pistas

- Puedes usar un estado booleano (`activo`, `abierto`) para alternar entre mostrar/ocultar.
- Si aún no dominas Tailwind, céntrate en que **la lógica funcione**; los estilos son secundarios.
- Empieza probando los componentes directamente en `app/page.jsx`.
