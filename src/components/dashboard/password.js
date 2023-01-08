import React, { useState } from "react";
import styled from "styled-components";
import Root from "../../components/Root";
import { Button, Form, Input, Alert } from "antd";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
const Settings = () => {
  const axiosPrivate = useAxiosPrivate();
  const [compare, setCompare] = useState(true);
  const [comparepass, setComparepass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onFinish = async (values) => {
    console.log("Success:", values);
    for (var key in values) {
      if (key) {
        if (key === "newPassword") {
          var newPassword = values[key];
        }
        if (key === "comparePassword") {
          var comparePassword = values[key];
          if (newPassword === comparePassword) {
            setCompare(true);
          } else {
            setCompare(false);
            setErrorMessage("Баталгаажуулах нууц үг буруу байна!");
          }
        }
      }
    }
    try {
      const response = await axiosPrivate.post("users/reset/password", values);
      console.log(response.status);
      if (response.status === 200) {
        setComparepass("Таны нууц үг амжилттай солигдлоо");
      }
    } catch (error) {
      setComparepass("Өмнөх нууц үг буруу байна!");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Root>
      <Container>
        <div className="pro">
          <div className="profile-image">
            <h3>Нууц үг солих</h3>
            <div className="img"></div>
          </div>
        </div>
        <br />
        {compare ? null : <Alert message={errorMessage} type="error" />}
        {comparepass ? (
          <p>
            <Alert message={comparepass} type="info" />
          </p>
        ) : null}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Өмнөх нууц үг оруулна уу?"
            name="passwordhold"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="password" />
          </Form.Item>
          <Form.Item
            label="Шинэ нууц үг оруулах"
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="password" />
          </Form.Item>
          <Form.Item
            label="Нууц үгээ дахин оруулах"
            name="comparePassword"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="comparePassword" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          ></Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Хадгалах
            </Button>

          </Form.Item>
        </Form>
      </Container>
    </Root>
  );
};

export default Settings;

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: white;
  border-radius: 8px;
  margin-left: 20px;
  overflow-y: auto;
  min-height: calc(100vh - 30px);
  /* max-height: 100%; */
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #c3c3c3;
  }
  .pro {
    display: flex;
    padding-left: 20px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(227, 235, 246, 1);
    .profile-image {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px 0;
      width: 80%;
      .img {
        display: flex;
        align-items: center;
        img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
        }
      }
    }
  }
  .about {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      height: 48px;
      width: 80%;
      border: 1px solid rgba(229, 234, 239, 1);
      color: black;
      font-size: 13px;
      font-weight: 400;
      color: rgba(71, 86, 103, 1);
      margin-bottom: 15px;
      padding: 0 20px;
      border-radius: 8px;
      &:focus {
        outline: none;
      }
    }
    .save {
      width: 150px;
      height: 40px;
      border-radius: 8px;
      background-color: rgba(44, 123, 229, 1);
      color: white;
      font-size: 13px;
      font-weight: 500;
      border: none;
    }
  }
`;
