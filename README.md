# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# mui-router-site

A simple 3-page website built with **React**, **React Router**, and **MUI (Material-UI)**.

---

## Pages

- **Home** (`/`)
- **About** (`/about`)
- **Contact** (`/contact`)

Each page contains different text and a simple design.

---

## Features

- **Navbar** using **MUI AppBar** and **Toolbar**
- **Buttons** with **MUI Button**
- **React Icons** displayed next to buttons
- Styling with **primary** and **secondary** colors from MUI
- Simple routing between pages with **React Router v6**

---

## Installation & Running

1. Clone the project:

git clone https://github.com/<username>/mui-router-site.git
Navigate into the project folder:

cd mui-router-site
Install dependencies:


npm install
Run the project:


npm run div
The website will be available at http://localhost:3000.
