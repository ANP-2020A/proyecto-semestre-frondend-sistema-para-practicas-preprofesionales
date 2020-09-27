import React, { useEffect } from "react";
import Login from "./Login";

const Content = (props) => {
  useEffect(() => {
    console.log(props.isAuthenticated);
  }, []);
  return props.isAuthenticated ? <p>esta autenticado</p> : <Login />;
};

export default Content;
