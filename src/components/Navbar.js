import { Input } from "antd";
import Routes from "../constants/routes";
import { useAuth } from "../providers/Auth";
import React from "react";
import {
  LogoutOutlined,
  LoginOutlined,
  LoadingOutlined,
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isAuthenticated, isCheckingAuth, currentUser } = useAuth();
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Input style={{ width: "50%", marginLeft: "25%" }} />
          <Link
            to={Routes.LOGOUT}
            className="logout-link"
            style={{ marginLeft: "15%" }}
          >
            {isCheckingAuth ? (
              <LoadingOutlined />
            ) : (
              <>
                <LogoutOutlined /> Salir
              </>
            )}
          </Link>
        </div>
      ) : (
        <Link to={Routes.LOGIN} style={{ marginLeft: "92%" }}>
          {isCheckingAuth ? (
            <LoadingOutlined />
          ) : (
            <>
              <LoginOutlined /> Ingresar
            </>
          )}
        </Link>
      )}
    </div>
  );
};

export default Navbar;
