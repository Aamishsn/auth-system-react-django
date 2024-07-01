import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import { useState } from "react";

const ConfirmPass = () => {
  const { uid, token } = useParams(); //{uid , token}
  const [re_new_password, setPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit =  () => {
 
        const res = api.post("/api/auth/users/reset_password_confirm/", {
      uid,
      token,
      new_password,
      re_new_password,
    });
    navigate("/login");


  };

  return (
    <>
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
    </>
  );
};

export default ConfirmPass;
