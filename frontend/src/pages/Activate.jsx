import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import { useState } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
const Activate = () => {
  const { uid, token } = useParams(); //{uid , token}
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true)
    try{
    const res = await api
      .post("/api/auth/users/activation/", { uid, token })
      .then((res) => {
        navigate("/login");
      });
      
    setLoading(false);
      

    }catch(error){
        
      alert("YOUR ACCOUNT HAS BEEN ACTIVATED PLEASE LOGIN TO CONTINUE");
      navigate("/login");
    }

    finally{
      setLoading(false)
    }
    
  };

  const handleclick2=()=>{

    navigate("/resend-activation-email")
  }



  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "top",
        marginTop: "100px",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <h1 style={{ color: "red" }}>Activate Your Account</h1>

      <h3 style={{ color: "blue" }}>
        Click on the following button to activate your account
      </h3>

      <button
        className="form-button"
        style={{ width: "300px" }}
        onClick={handleClick}
      >
        Activate
      </button>
      {loading && <LoadingIndicator />}

      <h3>haven't receive email? Click following button to resend activation email.</h3>
      <button
        className="form-button"
        style={{ width: "300px" }}
        onClick={handleclick2}
      >
        Resend Activation Email
      </button>
    </div>
  );
};

export default Activate;
