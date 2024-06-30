import React from "react";
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

import LoadingIndicator from "../components/LoadingIndicator";

const ForgetPass = () => {
  const [re_new_password, setPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [current_password, setre_Password] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {

      if (method === "login") {
        const res = await api.post("/api/auth/users/set_password/", { new_password, re_new_password, current_password });

      } 
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <h1>RESET PASSWORD</h1>
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

        <input
          className="form-input"
          type="text"
          value={current_password}
          onChange={(e) => setre_Password(e.target.value)}
          placeholder="Old Password"
        />

        {loading && <LoadingIndicator />}
        <button className="form-button" type="submit">
          SEND PASSWORD RESET EMAIL
        </button>
      </form>
    </>
  );
};

export default ForgetPass;
