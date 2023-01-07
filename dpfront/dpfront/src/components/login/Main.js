import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container >
      {/* <h1>
        ZURAG <br />
        ORUULAH
      </h1> */}
      <img src='/img/back.png' />

    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;

    @media (max-width: 900px) {
      display: none;
    }
  }
  img {
    height: 100%;
    width: 100%;
  }
`;

export default Main;
