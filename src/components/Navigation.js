/**
 * Created by chalosalvador on 2/7/20
 */
import React, { useState } from "react";

import Routes from "../constants/routes";
import { useAuth } from "../providers/Auth";
import { Menu } from "antd";
import {
  LogoutOutlined,
  LoginOutlined,
  LoadingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import "../styles/navigation.css";

const linkStyle = {};

const Navigation = (props) => {
  let location = useLocation();

  const [menuState, setMenuState] = useState({
    current: location.pathname, // set the current selected item in menu, by default the current page
    collapsed: false,
    openKeys: [],
  });
  const { isAuthenticated, isCheckingAuth, currentUser } = useAuth();

  React.useEffect(() => {
    setMenuState({
      ...menuState,
      current: location.pathname,
    });
  }, [location, isAuthenticated]);

  const handleClick = (e) => {
    console.log("click ", e);
    setMenuState({
      ...menuState,
      current: e.key,
    });
  };

  return (
    <>
      <Menu
        mode={props.mode}
        onClick={handleClick}
        className="menu"
        theme="light"
        selectedKeys={[menuState.current]}
        style={{
          lineHeight: "64px",
          width: "fit-content",
          opacity:"100%",
        }}
      >

        {isAuthenticated ? (
          <Menu.SubMenu 
            icon={<UserOutlined />}
            title={currentUser && currentUser.name}
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>

            <Menu.Item key={Routes.LOGIN}>
              <Link to={Routes.LOGOUT} className="logout-link">
                {isCheckingAuth ? (
                  <LoadingOutlined />
                ) : (
                  <>
                    <LogoutOutlined /> Salir
                  </>
                )}
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={Routes.LOGIN}>
            <Link to={Routes.LOGIN}>
              {isCheckingAuth ? (
                <LoadingOutlined />
              ) : (
                <>
                  <LoginOutlined /> Iniciar Sesión
                </>
              )}
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </>
  );
};

export default Navigation;
