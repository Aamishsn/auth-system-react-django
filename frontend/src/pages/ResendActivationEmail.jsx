import React from 'react'
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";

const ResendActivationEmail = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const token = localStorage.getItem(ACCESS_TOKEN)
    
        try {
            const res = await api.post("/api/auth/users/resend_activation/", { email });
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
      <h1>Resend Activation Email</h1>
      <input
        className="form-input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      
      {loading && <LoadingIndicator />}
      <button className="form-button" type="submit">
        Resend Activation Email
      </button>
    </form>
    </>
  )
}

export default ResendActivationEmail