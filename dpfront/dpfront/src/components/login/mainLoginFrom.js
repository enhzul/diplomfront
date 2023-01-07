import React from "react";
// import Sidebar from "./Sidebar";
import Login from "./Login";
import Main from "./Main";
import styled from "styled-components";
const LoginFrom = () => {

    return (
        <>
    <Container>
     <Wrapper>
        <Login/>
        <Main/>
     </Wrapper>
    </Container>
        </>
    )
}
const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;
export default LoginFrom;