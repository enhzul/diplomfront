import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Root from '../../components/Root'
import authService from '../../api/auth.service'
const Settings = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  return (
      <Root>
        <Container>
          <div className='pro'>
            <div className='profile-image'>
              {/* <div className='img'>
                  <img src={Url2(user.details.picturetumb, true)}/>
              </div> */}
            </div>
          </div>
          <div className='about'>
          <input className='input' type="text" placeholder="Овог" value={user[0].first_name} />
            <input className='input' type="text" placeholder="нэр" value={user[0].last_name} />
            <input className='input' type="email" placeholder="мэйл хаяг" value={user[0].email} />
            <input className='input'  type="number" placeholder="Утас" value={user[0].phone} />
            <button className='save'>Хадгалах</button>
          </div>
        </Container>
      </Root>
  )
}

export default Settings;

const Container = styled.div`
font-family: 'Roboto', sans-serif;
    background-color: white;
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
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
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