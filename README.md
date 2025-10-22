# 🎬 Sesión 1 — Estructura + Props + micro-interacción

## 🎯 Objetivos

- Comprender **JSX** y el uso de **props** en componentes.
- Entender la **estructura básica** del directorio `app/` (App Router).
- Implementar una **micro-interacción** con `useState` que cambie la UI al hacer clic.

## 🧩 Qué añadiremos a la demo

- `app/layout.js` (estructura base y Tailwind aplicado al `<body>`).
- `app/_components/Header.js` (props + estilos con Tailwind).
- `app/_components/WelcomeBanner.js` (props + `useState` para cambiar texto/tema).
- `app/page.js` (composición de los componentes).

> **Archivos tocados hoy:** `app/page.js`, `app/_components/Header.js`

---

## 🧱 Pasos de la sesión

1. Crear la estructura base con `layout.js`.
2. Crear un componente `Header` que reciba props.
3. Crear un componente `WelcomeBanner` con props y `useState`.
4. Componerlos en `page.js`.
5. Probar que al hacer clic cambia la UI.

---

## 🧪 Prueba rápida

Ejecuta el proyecto y comprueba:

- El **Header** muestra el título pasado por props.
- El **WelcomeBanner** recibe `title` y `subtitle`.
- Los botones cambian **tema** y **saludo** mediante `useState`.

```bash
npm run dev
```
