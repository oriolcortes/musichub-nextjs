# 🎓 Guion del profesor — Sesión 1: Estructura + Props + Micro-interacción

**Demo en directo (videoconferencia) — Proyecto MusicHub (Next.js + Tailwind)**
⏱️ Duración total: 55–60 minutos
🎯 Nivel: sin conocimientos previos de React ni Next.js

---

## 🕐 Estructura temporal

|  Min  | Bloque                      | Objetivo principal                                  |
| :---: | :-------------------------- | :-------------------------------------------------- |
|  0–5  | Introducción                | Contexto: qué haremos y cómo funciona React/Next.js |
| 5–15  | Teoría base                 | Componentes, props, JSX, estado                     |
| 15–30 | Layout + Header             | Entender estructura y primer componente             |
| 30–45 | WelcomeBanner + interacción | Introducir `useState` y reactividad                 |
| 45–55 | Pruebas y mini-reto         | Ejecutar, probar y repasar conceptos                |
| 55–60 | Cierre                      | Resumen y conexión con próxima sesión               |

---

## 📦 Material previo

- VSCode preparado para crear la app
- VSCode con la mini-demo abierta.
- Navegador.

---

## 🪜 BLOQUE 1 — Introducción (0–5 min)

🖥️ **Qué mostrar:**

- Abre los 3 enlaces:
  - **React** → <https://es.react.dev/> — creado por **Meta (Facebook)**
  - **Angular** → <https://angular.dev/> — desarrollado por **Google**
  - **Vue** → <https://vuejs.org/>

🎙️ **Qué decir:**

> “Hoy empezamos con la primera demo de _MusicHub_, una aplicación que construiremos paso a paso con **Next.js**.
> Next.js es un framework que usa **React**, y React es una librería para crear **interfícies interactivas**. Verás que en la documentación oficial, **React recomienda usar Next.js** como framework para crear nuevas aplicaciones.
> Antes de entrar en código, veamos rápidamente las tres principales opciones actuales para construir aplicaciones web modernas:
>
> - **React** → <https://es.react.dev/> — creado por **Meta (Facebook)**
> - **Angular** → <https://angular.dev/> — desarrollado por **Google**
> - **Vue** → <https://vuejs.org/> — creado por **Evan You**, ex-ingeniero de Google
>
> Nosotros usaremos **React**, a través de **Next.js**, porque combina la potencia de React con funciones avanzadas como el renderizado en el servidor y la generación estática.
>
> Nuestro objetivo de hoy es entender cómo React actualiza la interfaz sin recargar la página.”

🎙️

- Empezamos creando nuestra aplicación.

🖥️

- Abre la **guía oficial de React para iniciar un proyecto**: <https://es.react.dev/learn/start-a-new-react-project>.

- En la terminal, ejecuta:

  ```bash
  npx create-next-app@latest
  ```

  y sigue las indicaciones. **Cuando pregunte por TypeScript, elige JavaScript** (desmarca TypeScript; por defecto viene activado).

- Una vez creado el proyecto, abre la carpeta (`app/`) en tu editor.

🎙️

> “En React, las páginas están formadas por **componentes**.
> Cada componente es una pequeña pieza que muestra algo en pantalla: un título, un botón, una lista, etc.
> Hoy crearemos nuestros primeros componentes y veremos cómo reaccionan a los clics.”

---

## 🧠 BLOQUE 2 — Teoría base (5–15 min)

🖥️ Mostrar el diagrama simple de conceptos de Canvan. [Link a Canvan](https://www.canva.com/design/DAG2cTFaeV4/Cv9ordxv_b1l3wmYqI8AbA/edit?utm_content=DAG2cTFaeV4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

🎙️

> “Antes de tocar código, entendamos tres palabras clave: **componente**, **props** y **estado**.”

🖥️ Muestra un componente de ejemplo. (En la 2a página del Canvan anterior hay uno)

### 🧩 1. Componente

> “Un componente es como una **función** que devuelve HTML.
> Por ejemplo, un bloque con el título del proyecto o una tarjeta de canción.”

### 🧩 2. Props

> “Las _props_ son la forma en que un componente recibe información.
> Son como los parámetros de una función. Si le paso `title="MusicHub"`, el componente mostrará ese título.”

### 🧩 3. Estado (`useState`)

> “El estado es lo que permite que una parte de la pantalla cambie cuando el usuario hace algo.
> Por ejemplo, cuando pulsas un botón y cambia el texto o el color: eso lo controla el estado.”

🖥️ Puedes mostrar una mini-demo de un botón que cambia texto (2 líneas) ya preparado, sin explicar el código aún.

🎙️

> “Todo esto lo haremos hoy: crearemos componentes, les pasaremos props y añadiremos una pequeña interacción.”

---

## 🧱 BLOQUE 3 — Layout + Header (15–30 min)

🖥️ **Muestra:** estructura de carpetas en el explorador.

🎙️ **Explicación sobre la extensión `.jsx`:**

> “Antes de escribir nada, fijaos que el archivo termina en `.jsx` en lugar de `.js`.
> La diferencia es que los archivos `.jsx` contienen **JSX**,
> es decir, **JavaScript mezclado con etiquetas HTML**.
>
> Al usar `.jsx`, el editor y las herramientas de desarrollo entienden que dentro habrá
> estructuras como `<header>` o `<main>`, y aplican un resaltado de sintaxis y autocompletado mejores.
>
> En proyectos React es una **buena práctica** usar `.jsx` siempre que el archivo
> devuelva elementos visuales o tenga contenido HTML dentro del JavaScript.”

🎙️

> “En resumen:
>
> - `.js` → código lógico o de servidor
> - `.jsx` → componentes visuales con etiquetas HTML
>
> Así que `layout.jsx` es perfecto para este caso, porque va a renderizar toda la estructura visual de nuestra aplicación.”

### 🔹 Paso 1 — Editar `app/layout.jsx`

🖥️ **Qué haces en directo:**

1. Añadir import de `./globals.css` (líneas 1–2).
2. Importar el componente `Header` (línea 3).
3. Escribir la función `RootLayout` con `<html>`, `<body>` y `{children}` (líneas 5–15).
4. Guardar y mostrar cómo no da error (aún no se ve nada visual).

🎙️

> “Todo lo que esté en `layout.jsx` se verá en todas las páginas.
> `children` es el contenido que cambia: la página actual.”

---

### 🔹 Paso 2 — Crear `Header.jsx`

🖥️ Crea el archivo `app/_components/Header.jsx`.

🎙️

> “Ahora sí, creamos nuestro primer componente: **Header**.
> Es una función que recibe una prop llamada `title` y devuelve HTML con el título del sitio.”

🖥️ **Guía visual:**

- Añadir 10–12 líneas de código.
- Mostrar el `<h1>` con `{title}`.
- Guardar y ver el título “MusicHub” en el navegador.

⚠️ **Error común:**
Si sale “Component not found” → revisar import en `layout.jsx`.

🎙️

> “Acabamos de pasar una prop desde el layout al componente.
> Si cambiamos el título en `layout.jsx`, React lo actualiza automáticamente.”

---

## ⚡ BLOQUE 4 — WelcomeBanner + interacción (30–45 min)

🎙️

> “Vamos a crear ahora un componente que sí **reacciona al usuario**.
> Lo llamaremos `WelcomeBanner`.”

🖥️ Crea el archivo `app/_components/WelcomeBanner.jsx`.

### 🔹 Paso 1 — Preparar el cliente

🖥️

- Añade `"use client"` (línea 1).

🎙️

> “Esto indica a Next.js que este componente se ejecutará **en el navegador**,
> porque vamos a usar una función especial de React llamada **hook**.”

**Explicación (breve):**

> En React, un **hook** es una **función especial** que permite añadir **comportamientos dinámicos**
> a un componente (por ejemplo, guardar datos, reaccionar a eventos, o ejecutar efectos).
>
> Todos los hooks de React **empiezan por `use...`** —por eso se llaman así.
> El más importante y el que usaremos hoy es **`useState`**, que permite que un componente **recuerde información** entre renderizados.

🎙️

> “Podéis pensar en un hook como un ‘enchufe’ que conecta el componente con las funciones internas de React.
> Hoy solo enchufaremos uno: `useState`, para que el componente recuerde si estamos en modo oscuro o claro.”

### 🔹 Paso 2 — Añadir estados

🖥️

- Añade import de `useState` (línea 2).
- Declara dos estados: `dark` y `hola` (líneas 5–7).

🎙️

> “Con `useState`, el componente **guarda un valor y una función para cambiarlo**.
> Guardaremos si el tema está oscuro (`dark`) y si el saludo es ‘Hola’ o ‘Adiós’.
> Cada vez que uno de esos valores cambie, **React vuelve a pintar automáticamente** el componente con la nueva información.”

**Ejemplo verbal:**

> “Es como si el componente tuviera memoria:
> recuerda si la luz está encendida o apagada, y cambia el color en consecuencia.”

**Analogía para mantener la atención:**

> “Imaginad un interruptor: cada vez que lo pulsamos, cambiamos de estado.
> `useState` es ese interruptor dentro del código.”

### 🔹 Paso 3 — Estructura y botones

🖥️

- Añade el JSX visual con título, subtítulo y dos botones (líneas 10–35).
- Guarda y muestra la interfaz.
- Pulsa los botones y muestra cómo cambia el texto o el color.

🎙️

> “Este es el momento mágico: hemos creado nuestra **primera interacción**.
> Al hacer clic, React cambia el estado, y el componente se vuelve a pintar sin recargar la página.”

⚠️ **Errores típicos:**

- “useState is not defined” → falta el import.
- “Invalid hook call” → faltó `"use client"`.
- “Unexpected token <” → se está mezclando JS y JSX en un archivo `.js` (recuerda: usamos `.jsx`).

---

## 💡 BLOQUE 5 — Componer la página principal (45–50 min)

🎙️

> “Ahora vamos a juntar todas las piezas dentro de la página principal.”

🖥️ Abre `app/page.jsx`.

🧩 **Qué haces:**

- Importar `WelcomeBanner` (líneas 1–3).
- Añadir dentro del return el componente con props (`title`, `subtitle`) (líneas 7–20).
- Guardar y ver la página completa funcionando.

🎙️

> “Esto es React en acción: componentes que reciben datos y reaccionan a eventos.
> Ya tenemos una pequeña app que vive y respira.”

---

## 🧪 BLOQUE 6 — Prueba conjunta y mini-reto (50–55 min)

🎙️

> “Vamos a probar todos juntos. Abrid la app en el navegador y tocad los botones.
> Cambiad el título, el texto o los colores y observad cómo todo se actualiza al instante.”

🧩 **Mini-reto opcional:**

1. Hacer que el botón “Tema” cambie también el texto.
2. Añadir una nueva prop `ctaLabel` (solo coméntalo, no lo teclees).

🎙️

> “Estas props y estados son las bases para cualquier app real, como un reproductor de música o una lista de tareas.”

---

## 🧾 BLOQUE 7 — Cierre y conexión con próxima sesión (55–60 min)

🎙️

> “Hoy hemos aprendido los pilares de React:
> 1️⃣ Componentes → piezas reutilizables.
> 2️⃣ Props → comunicación entre ellos.
> 3️⃣ Estado → interacción dinámica.
>
> En la próxima sesión veremos cómo **renderizar listas** de canciones usando arrays y `.map()`,
> que es lo que da vida a aplicaciones como Spotify o YouTube.”

🖥️ Muestra una diapositiva con una lista de canciones ficticia (visual, sin código).

---

## 🧠 Notas de apoyo para el profesor/a

- 💬 **Mantén la voz narrativa:** usa frases tipo “¿veis lo que ha pasado?” o “si cambio esto, mirad cómo reacciona la UI”.
- ⏸️ **Cada 7–8 min haz una pausa** de 10–15 segundos para que los alumnos prueben.
- 🧍‍♂️ **No leas código:** descríbelo (“ahora añadimos una función que...”) mientras lo escribes.
- 📹 **Activa la cámara en el inicio y cierre**, para conectar con el grupo.
- 🧾 **Ten preparado un enlace** (Gist o repo) con el código final de la sesión.
- 🔁 **Repite los conceptos clave** tres veces durante la demo: _“componente → prop → estado”_.

---

🎯 **Meta final:**
Al acabar, los alumnos entienden visualmente que **React actualiza la interfaz sin recargar**
y saben identificar qué partes del código son **componentes, props y estado**.
