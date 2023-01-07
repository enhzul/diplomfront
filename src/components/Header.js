import React from 'react';
import styled from 'styled-components'
import Link from 'next/link';

const Header = () => {
    return (
        <Container>
            <div className='logo'>
               <img src='./logo192.png'></img>
            </div>
            <div className='header-offset'></div>
        </Container>
    );
}

export default Header

const Container = styled.div`
.header-offset{
    height:70px;
}
.logo{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    img{
        width: 80px;
        cursor: pointer;
        margin-right: 20px;
    }
    .uria{
        height: 70%;
        padding-left: 20px;
        border-left: 1px solid #E3EBF6;
        color: #475667;
        font-size: 13px;
        font-weight: 400;
        display: flex;
        align-items: center;
    }
}
 `