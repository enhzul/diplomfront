import React, { useState } from "react";
import styled from "styled-components";
import Root from "../../components/Root";
import { Link } from "react-router-dom";
import { Button, Form, Input, Select, Alert, Col, Row,Switch , Image, Avatar, Space} from "antd";
import { UserOutlined, BankOutlined, FieldNumberOutlined,SolutionOutlined,MailOutlined,
  PhoneOutlined ,EyeInvisibleOutlined,EyeOutlined} from '@ant-design/icons';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};
const Profile = () => {
  const axiosPrivate = useAxiosPrivate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("Local User ", user)
  const id = JSON.parse(localStorage.getItem("id"));
  const [success, setSuccess] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await axiosPrivate.put(`/students/${id}`, values);
      if (response.status === 200) {
        setSuccess(true);
      }
      localStorage.setItem("user", JSON.stringify(response.data.data));
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const selectOptions = [
    { value: 1, label :"Тийм"},
    { value: 0, label :"Үгүй"}
  ]
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };
  return (
    <Root>
      <Container>
        {/* <div className="pro">
          <div className="profile-image">
            <div className='img'>
                  <img src="/img/userlogo.png"/>
              </div>
          </div>
        </div> */}
        {success ? <Alert message="Амжилттай" type="success" /> : null}
        <br></br>
        <div class="profile-edit">
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Row>
            <Col span={1}></Col>
          <Col span={10}>
          <Row>
          <Col span={7}></Col>
            <Col span={5}>
            <Avatar src="/img/userlogo.png" size={180}/>
            </Col>
          </Row>
          <br></br>
          <Form.Item name="code" label="Оюутны код">
            <Input defaultValue={user[0].userName} disabled prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item name="code" label="Тэнхим">
            <Input defaultValue={user[0].dp_name} disabled prefix={<BankOutlined />}/>
          </Form.Item>
          <Form.Item name="code" label="Регистрийн дугаар">
            <Input defaultValue={user[0].rd} disabled prefix={<FieldNumberOutlined />}/>
          </Form.Item>
          <Form.Item name="zeregName" label="Зэрэг">
            <Input defaultValue={user[0].zeregName} disabled prefix={<SolutionOutlined />}/>
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="lastname"
            label="Овог"

            rules={[
              {
                required: true,
                message: "Та Овог өөрчилж  оруулна уу",
              },
            ]}
          >
            <Input defaultValue={user[0].last_name} prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="firstname"
            label="Нэр"
            rules={[
              {
                required: true,
                message: "Та нэр өөрчилж  оруулна уу",
              },
            ]}
          >
            <Input defaultValue={user[0].first_name} prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="email"
            label="мэйл хаяг"
            rules={[
              {
                required: true,
                message: "Та мэйл хаяг өөрчилж  оруулна уу",
              },
            ]}
          >
            <Input defaultValue={user[0].email} prefix={<MailOutlined />}/>
          </Form.Item>
          <Form.Item
            name="phone"
            label="Утасны дугаар"
            rules={[
              {
                required: true,
                message: "Та утасны дугаараа өөрчилж  оруулна уу",
              },
            ]}
          >
            <Input defaultValue={user[0].phone} prefix={<PhoneOutlined />}/>
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <Select
              placeholder="Select a option and change input text above"
              allowClear
              defaultValue={user[0].gender}
            >
              <Option value="male">Эрэгтэй</Option>
              <Option value="female">Эмэгтэй</Option>
            </Select>
          </Form.Item>
          
          <Form.Item name="visible" label="Нийтэд харагдах эсэх">
          <Switch
            checkedChildren={<EyeOutlined />}
            unCheckedChildren={<EyeInvisibleOutlined />}
            defaultChecked
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Хадгалах
            </Button>  
          </Form.Item>
          </Col>
          <Col span={1}></Col>
          </Row>
        </Form>
        </div>
      </Container>
    </Root>
  );
};

export default Profile;

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: white;
  border-radius: 8px;
  margin-left: 20px;
  overflow-y: auto;
  min-height: calc(100vh - 30px);
  max-height: 100%;
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
    .link{
      color: yellow;
      width: 20px;

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
  .profile-edit{
    padding-top: 100px;
  }
`;
