import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'


import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import Inicial from './routes/Inicial.jsx'
import Login from './routes/Login.jsx'
import RegistroUsuario from './routes/RegistroUsuario.jsx'
import RegistroHorario from './routes/RegistroHorario.jsx'
import RegistroBarbeiro from './routes/RegistroBarbeiro.jsx'
import ConfirmaHorario from './routes/ConfirmaHorario.jsx'

const router = createBrowserRouter([
  {path:"/", element:<Home />},
  {path:"/contact", element:<Contact/>},
  {path:"/inicial", element:<Inicial/>},
  {path:"/login", element:<Login/>},
  {path:"/registrosusuario", element:<RegistroUsuario/>},
  {path:"/registrarhorario", element:<RegistroHorario/>},
  {path:"/registroBarbeiro", element:<RegistroBarbeiro/>},
  {path:"/confirmarhorario", element:<ConfirmaHorario/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
