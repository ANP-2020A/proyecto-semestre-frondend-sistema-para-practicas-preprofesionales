import React from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import getUrl from "../utils/url";
import { useUserSession } from "../context/user-context";
const baseUrl = getUrl();
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const LoginForm = () => {
  const { login } = useUserSession();

  const onFinish = (values) => {
    console.log("Success:", values);
    var url = baseUrl + "/login";
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(values), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log(response);
        //localStorage.setItem("token", response.token);
        login(response);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://files.tofugu.com/articles/japan/2013-09-12-color-in-japan/blue-night-woodblock-print.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "565px",
      }}
    >
      <Card
        title="Inicio de Sesión"
        extra={<a href="#">More</a>}
        style={{ width: 300, margin: "0 auto", top: "18%" }}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Correo"
            name="email"
            rules={[{ required: true, message: "Digite su correo" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Digite su pasword" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
