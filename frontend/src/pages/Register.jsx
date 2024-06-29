import React from 'react'
import FormLogin from "../components/FormLogin"

const Register = () => {
  return (
    <FormLogin route="/api/auth/users/" method="register" />
  )
}

export default Register