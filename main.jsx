import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'     

import App from './App.jsx'
import Calendario from './components/Calendario.jsx'
import Navbar from './components/Nav-bar.jsx'
import Login from './components/Login.jsx'
import RegistroSuperUsuarios from './pages/RegistroSuperUsuarios.jsx'
import RegistroUsuarios from './pages/RegistroUsuarios.jsx'
import User from './pages/Usuario.jsx'
import UserConsult from './pages/UsuarioConsultar.jsx'
import UserModific from './pages/UsuarioModificar.jsx'
import UserCancel from './pages/UsuarioCancelar.jsx'
import Admin from './pages Admin/Admin.jsx'
import AdminPanel from './pages Admin/AdminPanel.jsx'

import UserAgeCita from './pages/UsuarioAgeCita.jsx'
createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <StrictMode>
      <Navbar/>
        <App />
        {/* <Calendario/> */}
        <Login/>
        <RegistroSuperUsuarios/>
        <RegistroUsuarios/>
        <User/>
        <UserAgeCita/>
        <UserConsult/>
        <UserModific/>
        <UserCancel/>
        <Admin/>
        <AdminPanel/>
    </StrictMode>
  </ChakraProvider>

)
