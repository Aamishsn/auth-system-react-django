import React, { useEffect, useState } from 'react'
import FormLogin from "../components/FormLogin"
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN } from "../constants";

const Login = () => {
  // const navigate = useNavigate()
  // const [loggedIn, setLoggedIn] = useState(false)

  // const token = localStorage.getItem(ACCESS_TOKEN)

  // const checkLoggedIn = () => {
  //   setLoggedIn(!!token)
  //   return !!token
  // }

  // useEffect(() => {
  //   if (checkLoggedIn()) {
  //     navigate('/');
  //   }
  // }, [navigate, loggedIn]);



  return (
        <>
            {/* {loggedIn && <h1>YOU ARE LOGGED IN</h1> } */}
            {/* {!token && <FormLogin route="/api/auth/jwt/create/" method="login" /> */}
            <FormLogin route="/api/auth/jwt/create/" method="login" />
            
            </>
  )
}

export default Login