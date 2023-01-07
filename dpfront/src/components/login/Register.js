import React from "react"
import register from "./register.css"
import { useState } from "react"
import styled from "styled-components"
import login from "./Login"
import { Link } from 'react-router-dom'


import {FaRegShareSquare, } from "react-icons/fa";

const Register= () =>{
 
  const [data, setData]= useState({
    first_name:"",
    last_name:"",
    email:"",
    password:""

  })
  const logOut = () => {
    
  };

  const handleChange=(e)=>{
    setData({...data, [e.target.name]: e.target.value});

    console.log(data)

  }
  return(

    <Container>



    <div className="main-box" >
    <div className="row">
      <div className="col-md-6 text-center"> <h1> Register</h1> </div>
      
    </div>
    <div className="row">
      <div className="col-md-6"> First Name</div>
      <div className="col-md-6"> 
            <input type="text" name= "first_name" className="form-control"
            
            onChange={handleChange} value= {data.first_name}
            /></div>
    </div>


    <div className="row">
      <div className="col-md-6"> Last Name</div>
      <div className="col-md-6"> 
            <input type="text" name= "last_name" className="form-control"
             onChange={handleChange} value= {data.last_name}
             /></div>
    </div>



    <div className="row">
      <div className="col-md-6"> Email </div>
      <div className="col-md-6"> 
            <input type="email" name= "email" className="form-control"
               onChange={handleChange} value= {data.email}
            /></div>
    </div>


    <div className="row">
      <div className="col-md-6"> Password </div>
      <div className="col-md-6"> 
            <input type="password" name= "password" className="form-control"
                onChange={handleChange} value= {data.password}
            /></div>
    </div>



    <div className="row">

      <div className="col-md-12" text-cener> 
            <input type="submit" name= "submit" value="Бүртгүүлэх" className="button"/></div>
    </div>


    <div className="row">
      <div className="col-md-12"> -------or------- </div>
      
    </div>
    <Link to="/" onClick={logOut}>
      <div className="col-md-12" text-center>
    <input type="submit" name= "submit" value="Нэвтрэх" className="button1"/></div>
    </Link>
    <div className="row">
      <div className="col-md-6"> </div>
      <div className="col-md-6"> 
            </div>
    </div>

    </div>

    </Container>
  );
};


const  Container = styled.div`
img {
  height: 100%;
  width: 100%;
}
`;
export default Register;