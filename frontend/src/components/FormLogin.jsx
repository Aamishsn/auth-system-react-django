import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";

function FormLogin({ route, method }) {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setre_Password] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const heading = method === "login" ? "Login" : "Register";

  const showEmail = method === "login" ? false : true;

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      
      if (method === "login") {
        const res = await api.post(route, { email, password });
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        const res = await api.post(route, { name, email, password, re_password });
        navigate("/login");
      }
    } catch (error) {
      alert('Invalid credentials!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{heading}</h1>
      <input
        className="form-input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      {showEmail && (
        <input
          className="form-input"
          type="text"
          value={name}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Name"
        />
      )}
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      {showEmail && (
        <input
          className="form-input"
          type="password"
          value={re_password}
          onChange={(e) => setre_Password(e.target.value)}
          placeholder="please type your Password again"
        />
      )}

      {loading && <LoadingIndicator />}
      <button className="form-button" type="submit">
        {heading}
      </button>


      {/* {!showEmail&& <a href="/forget-password" style={{textDecoration: 'none', color: 'blue'}}>Forget Password???</a>} */}
    </form>
  );
}

export default FormLogin;
