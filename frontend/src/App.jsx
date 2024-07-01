import react from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProtectedComp from "./components/ProtectedComp";
import Activate from "./pages/Activate";
import ResendActivationEmail from "./pages/ResendActivationEmail";
import ForgetPass from "./pages/ForgetPass";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComp>
              <HomePage />
            </ProtectedComp>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/activate/:uid/:token" element={<Activate />} />
        <Route
          path="/change-password"
          element={
            <ProtectedComp>
              <ForgetPass />
            </ProtectedComp>
          }
        />
        <Route
          path="/resend-activation-email"
          element={<ResendActivationEmail />}
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
