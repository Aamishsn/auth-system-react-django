import React from 'react'
import FormLogin from "../components/FormLogin"

const Login = () => {
  return (

    <FormLogin route="/api/auth/jwt/create/" method="login" />
  )
}

export default Login