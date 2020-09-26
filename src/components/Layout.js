/**
 * Created by chalosalvador on 3/1/20
 */
import React from "react";
import Routes from "../constants/routes";
import Navigation from "./Navigation";
import { Layout, Row, Col, Button, Popover } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
  MailOutlined,
  WhatsAppOutlined,
  LoadingOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import logo from "../images/logo-menta.png";
import moment from "moment";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth } from "../providers/Auth";
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

/**
 * Este componente renderiza los elementos comunes para toda la aplicación
 *
 * Header (menu), Content y Footer
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const MainLayout = (props) => {
  console.log("props", props);
  const { isAuthenticated, isCheckingAuth, currentUser } = useAuth();
  return (
    <div className="app">
      {isAuthenticated ? (
        <Layout>
          <Row type="flex" className="header-wrapper">
            <Col span={20}>
              <Header className="header">
                <Row type="flex" justify="space-between" align="bottom">
                  <Col md={14} align="left" className="main-menu">
                    <Navigation mode="horizontal" />
                  </Col>
                </Row>
              </Header>
            </Col>
          </Row>

          <Content className="content">
            <Row type="flex" justify="center" style={{ flex: "auto" }}>
              <Col xs={22} md={20} style={{ marginTop: "-3%" }}>
                <Navbar />
              </Col>
              <Col xs={22} md={20}>
                {props.children}
              </Col>
            </Row>
          </Content>
        </Layout>
      ) : (
        <>
          <Content className="noAuth">
            <Row type="flex" justify="center" style={{ flex: "auto" }}>
              <Col xs={22} md={20} style={{ marginTop: "-3%" }}>
                <Navbar />
              </Col>
              <Col xs={22} md={20}>
                {props.children}
              </Col>
            </Row>
          </Content>
        </>
      )}
    </div>
  );
};

export default MainLayout;
