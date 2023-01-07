import React from "react";
import styled from "styled-components";
import { MdOutlinePeople } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import Slide from "./Slide";
import Slide2 from "./Slide2";
import Users from "./user";
import Root from "../../components/Root";
const Dashboard = () => {
  const [revealed, setRevealed] = React.useState(false);
  return (
    <Root>
      <Container>
        <div className="middle-section">
          <div className="one">
            <Slide />
          </div>
          <div className="two">
            <Slide2 />
          </div>
        </div>
        <div className="table">
          <p>Хэрэглэгч</p>
          <Users />
        </div>
      </Container>
    </Root>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .table {
    padding-left: 10px;
  }
  .top-section {
    flex: 1;
    display: flex;
    gap: 15px;
    height: 270px;
    width: 100%;
    .slider {
      height: 270px;
    }
  }
  .middle-section {
    flex: 1;
    display: flex;
    gap: 15px;
    height: 400px;
    .one {
      width: 64%;
      height: 400px;
      display: flex;
      flex-direction: column;
      .news {
        width: 100%;
        height: 542px;
        margin-bottom: 15px;
      }
      .jobpost {
        width: 100%;
        height: 345px;
      }
    }
    .two {
      width: 35%;
      display: flex;
      flex-direction: column;
      height: 400px;
      .banner {
        height: 550px;
        margin-bottom: 15px;
      }
      .foodorder {
        height: 350px;
      }
    }
  }
  .bottom-section {
    display: flex;
    gap: 15px;
    height: 450px;
    flex: 1;
    .video {
      width: 65%;
      height: 450px;
    }
    .post {
      width: 64%;
      height: 450px;
    }
    .advise {
      width: 35%;
      height: 450px;
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
    height: 100%;
    overflow-y: auto;
    .top-section {
      margin-bottom: 10px;
    }
    .middle-section {
      display: block;
      padding: 0 10px;
      margin-bottom: 10px;
      height: 100%;
      .one {
        width: 100%;
        margin-bottom: 15px;
      }
      .two {
        width: 100%;
      }
    }
    .bottom-section {
      display: flex;
      flex-direction: column;
      .video {
        width: 100%;
        margin-top: 10px;
      }
      .post {
        width: 100%;
      }
      .advise {
        width: 100%;
      }
    }
  }
`;
