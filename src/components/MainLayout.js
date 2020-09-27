import React, { Fragment, useEffect, useState } from "react";
import { useUserSession } from "../context/user-context";
import Home from "./Home";
import About from "./About";
import History from "./History";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button, Input } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Offers from "./Offers";
import getUrl from "../utils/url";
const baseUrl = getUrl();
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const MainLayout = () => {
  const { token, infoUsuario, logout } = useUserSession();
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState([]);
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(baseUrl + "/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await result.json();
      setUser(data.data);
      console.log(data);
    };
    fetchData();
  }, []);

  function onClick(e) {
    e.preventDefault();
    logout();
  }

  return (
    <Fragment>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/profile">Perfil</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<DesktopOutlined />}>
                <Link to="/history">Historial</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <Input style={{ marginLeft: "35%", width: "25%" }} />
              <Button
                type="primary"
                onClick={onClick}
                style={{ marginLeft: "30%" }}
              >
                Salir
              </Button>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Switch>
                  <Route exact path="/">
                    <Offers />
                  </Route>
                  <Route path="/profile">
                    <About />
                  </Route>
                  <Route path="/history">
                    <History />
                  </Route>
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </Fragment>
  );
};

export default MainLayout;
