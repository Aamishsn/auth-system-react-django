import React, { useEffect, useState } from "react";
import FormLogin from "../components/FormLogin";
import { ACCESS_TOKEN } from "../constants";
import {Navigate} from "react-router-dom"
const Login = () => {
  const [isAutherised, setIsAutherised] = useState(null);

  useEffect(() => {
    auth().catch(() => setIsAutherised(false));
  }, []);

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      setIsAutherised(false);
      return;
    } else {
      setIsAutherised(true);
    }
  };

  return isAutherised ?  <Navigate to="/" />:<FormLogin route="/api/auth/jwt/create/" method="login" />;
};

export default Login;
