import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { emailandPasswordLogin } from '../../../actions/auth'

const login = () => {
  const dispatch = useDispatch()
  const [data, setData] = useDate(
    {
      email:'',
      passwordo:''
    }
  );

  const {email, password} = data

  const habdleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data, 
      [e.target.name]: value
    })
  }

  const handleEmailLogin = (e) => {
    e.preventDefault()
    if(email.trim()==="" || !email.trim().include==="@"){
      return
    }
    if(password.trim().length<6){
      return
    }
    dispatch(emailandPasswordLogin(email, password))
  }

  return (
    <div>Login
      <html lang="es">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Formulario</title>
        </head>
      <body>
        <label htmlFor="email">Email: </label>
        <input type='email' name='email' id='email' />
        <label htmlFor="password">Contraseña: </label>
        <input type='password' name='password' id='password' />
      </body>
    </html>
    </div>
  )
}

export default login