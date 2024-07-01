import React from "react";
import { useParams, Navigate } from "react-router-dom";
import api from "../api";
import { useState } from "react";


const ForgetPassActivation = () => {
    const { uid, token } = useParams(); //{uid , token}
    const [re_new_password, setPassword] = useState("");
    const [new_password, setNewPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [loadings, setLoadings] = useState(false);
  
    const handleSubmit = async () => {


      const res = await api
        .post("/api/auth/users/reset_password_confirm/", { uid, token, new_password, re_new_password });
     <Navigate to="/login" />
      
    };
   
    return (
      <div>
     <form onSubmit={handleSubmit} className="form-container">
        <h1>CHANGE PASSWORD</h1>
        <input
          className="form-input"
          type="text"
          value={new_password}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="new password"
        />

        <input
          className="form-input"
          type="text"
          value={re_new_password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Retype New Password"
        />
        <button className="form-button" type="submit">
          CHANGE PASSWORD
        </button>
      </form>
      </div>
    );
}

export default ForgetPassActivation