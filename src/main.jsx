import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import App from './App.jsx'
import Camisetas from './Camisetas.jsx'
import Moletons from './Moletons.jsx'
import Acessorios from './Acessorios.jsx'
import Posters from './Posters.jsx'
import Personalizados from './Personalizados.jsx'
import Produto from './Produto.jsx'


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/camisetas", element: <Camisetas /> },
  { path: "/moletons", element: <Moletons /> },
  { path: "/acessorios", element: <Acessorios /> },
  { path: "/posters", element: <Posters /> },
  { path: "/personalizados", element: <Personalizados /> },
  { path: "/produto", element: <Produto />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
