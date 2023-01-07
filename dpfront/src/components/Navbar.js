import React from 'react'

import Root from "./Root";
import styled from "styled-components";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import "./navbar.css"
const Navbar = () => {
  return (
    <Root>
    <Container>
        <div className="mainTable">
       
      
        </div>
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
    </Container>
</Root>
 
  )
}

export default Navbar

const Container = styled.div`
    .mainTable{
        padding: 10px;
    
    }
    .table{
        width: 80%;
    }
`;