import React, { useState } from "react";
import { useUserSession } from "../context/user-context";
import { Form, Input, Button, Checkbox } from "antd";
import getUrl from "../utils/url";
import MainLayout from "./MainLayout";
import LayoutWithoutAuth from "./LayoutWithoutAuth";

const Auth = () => {
  const { token, infoUsuario, logout } = useUserSession();

  if (token == null) {
    return <LayoutWithoutAuth />;
  }

  return (
    <div>
      <MainLayout />
    </div>
  );
};

export default Auth;
