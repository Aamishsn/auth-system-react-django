import React from "react";
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

import LoadingIndicator from "../components/LoadingIndicator";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {

        const res = await api.post("/api/auth/users/reset_password/", { email });

      
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
      navigate("/login");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <h1>FORGET PASSWORD</h1>
        <input
          className="form-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="YOUR EMAIL ADDRESS"
        />

        {loading && <LoadingIndicator />}
        <button className="form-button" type="submit">
         SEND EMAIL
        </button>
      </form>
    </>
  );
}

export default ForgetPassword