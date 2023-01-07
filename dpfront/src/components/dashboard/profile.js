import React from 'react'
import styled from 'styled-components'
import Root from '../../components/Root'
import  "./profile.css"

import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Settings = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  return (
      <Root>
          <div>
      <section className='head'>
      <div className='container flexSB'>
          <div className='logo'>
            <h1 >МУБИС</h1>
            <span>МБУС</span>
          </div>
          <div className='social'>
          <FaFacebook className='icons facebook'/>
            <FaYoutube className='icons youtube'/>
            <FaTwitter className='icons twitter'/>
        </div>
        </div>
      </section>
        
    </div>
          <div className='pro'>
          
          
          <div className='about'>
          <input className='input' type="text" placeholder="Овог" value={user[0].first_name} />
            <input className='input' type="text" placeholder="нэр" value={user[0].last_name} />
            <input className='input' type="email" placeholder="мэйл хаяг" value={user[0].email} />
            <input className='input'  type="number" placeholder="Утас" value={user[0].phone} />
            <button className='save'>Хадгалах</button>
            
          </div>

</div>
      </Root>
  )
}

export default Settings;

const Container = styled.div`

font-family: 'Roboto', sans-serif;
    background-image: url("../../../public/img/pro.jfif");
    border-radius: 8px;
    margin-left: 20px;
    overflow-y: auto;
    min-height: calc(100vh - 30px);
    max-height: 100%;
    &::-webkit-scrollbar{
            width: 3px;
    }
    &::-webkit-scrollbar-thumb{
            border-radius: 8px;
            background-color: #c3c3c3;
    }
    .pro{
        display: flex;
        padding-left: 20px;
        height: 60%;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgba(227, 235, 246, 1);
      .profile-image{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
        width: 80%;
        .img{
          display: flex;
          align-items: center;
          img{
            width: 90px;
            height: 90px;
            border-radius: 50%;
          }
      }
    }
  }
  .about{
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input{
      height: 38px;
      width: 30%;
      border: 1px solid rgba(229, 234, 239, 1);
      color: black;
      font-size: 13px;
      font-weight: 400;
      color: rgba(71, 86, 103, 1);
      margin-bottom: 15px;
      padding: 0 20px;
      border-radius: 8px;
      &:focus{
        outline: none;
      }
    }
    .save{
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
`