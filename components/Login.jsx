import React, { useState } from 'react'
import '../styles/login.css'
//import { useNavigate } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  //const navigate = useNavigate()

  //Aqui por si necesitas configurar algo
  const onButtonClick = () => {
    // Configuracion inicial para valores de errores
    setEmailError('')
    setPasswordError('')
  
    // Verificamos
    if ('' === email) {
      setEmailError('Porfavor ingrese su correo')
      return
    }
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Porfavor ingrese un correo que sea valido')
      return
    }
  
    if ('' === password) {
      setPasswordError('Porfavor ingrese su contraseña')
      return
    }
  
    if (password.length < 7) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres')
      return
    }
  
    // Aqui configuramos las llamadas que haremos
  }

  return (
    <div className={'mainContainer'}>
        <div className='card'>
            <div className={'titleContainer'}>
            <FaUserCircle size={100}/>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                value={email}
                placeholder="Ingresa tu correo aqui"
                onChange={(ev) => setEmail(ev.target.value)}
                className={'inputBox'}
                />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                value={password}
                placeholder="Ingresa tu contraseña aqui"
                
                onChange={(ev) => setPassword(ev.target.value)}
                className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Iniciar'} />
            </div>
            </div>
        </div>
      
  )
}

export default Login