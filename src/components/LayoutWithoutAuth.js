import React, { Fragment } from "react";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./Login";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const LayoutWithoutAuth = () => {
  return (
    <Fragment>
      <Router>
        <Layout>
          <Header id="header-home">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/login">Iniciar Sesión</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/signin">Registrarse</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Layout>
              <Content
                className="site-layout-background"
                style={{
                  margin: 0,
                }}
              >
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/login">
                    <LoginForm />
                  </Route>
                  <Route path="/signin">
                    <Dashboard />
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </Fragment>
  );
};

export default LayoutWithoutAuth;
