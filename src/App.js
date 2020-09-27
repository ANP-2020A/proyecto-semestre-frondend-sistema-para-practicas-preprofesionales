import React, { useState } from "react";
import Auth from "./components/auth";
import { UserSessionContext } from "./context/user-context";
import "./App.css";
const GUEST_USER = { token: null, infoUsuario: [] };

function App() {
  const [token, setToken] = useState("");
  const [infoUsuario, setInfoUsuario] = useState([]);
  function login(response) {
    setToken(response.token);
    setInfoUsuario(response.user);
    localStorage.setItem("token", response.token);
    localStorage.setItem("infoUsuario", response.user);
  }

  function logout() {
    setToken(GUEST_USER.token);
    setInfoUsuario(GUEST_USER.infoUsuario);
  }

  return (
    <UserSessionContext.Provider value={{ token, infoUsuario, login, logout }}>
      <>
        <div className="container">
          <Auth />
        </div>
      </>
    </UserSessionContext.Provider>
  );
}

export default App;
