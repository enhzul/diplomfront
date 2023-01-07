import {Link} from 'react-router-dom';
import React from "react";
import styled from "styled-components";
import LeftbarDesktop from './LeftbarDesktop';
const Layout = (props) => {
    return (
        <Container>
            <LeftbarDesktop/>
            <div className="main_wrapper">
                {props.children}
                {/* <Link href={""}>
                        <a target="_blank">
                            <div className="link">Profile</div>
                        </a>
                    </Link> */}
                <div className="wr">
                </div>
                <Link href={"/"}>
                        <div className="copyright">
                            УлаанБаатар хот © 2022. Student by{" "}
                            <span>МУБИС</span>
                        </div>
                </Link>
            </div>
        </Container>
    );
};

export default React.memo(Layout);

const Container = styled.div`
    font-family: "Inter", sans-serif;
    font-family: "Roboto", sans-serif;
    display: flex;
    gap: 15px;
    height: 100%;
    .main_wrapper {
        flex: 1;
        margin-top: 15px;
        margin-bottom: 15px;
        border-radius: 8px;
        overflow: hidden;
        margin-left: 275px;
        margin-right: 15px;
        a {
            text-decoration: none;
        }
        &::-webkit-scrollbar {
            width: 3px;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: #c3c3c3;
        }
        .copyright {
            width: 100%;
            height: 40px;
            background-color: white;
            margin-top: 15px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            color: #95aac9;
            cursor: pointer;
            span {
                font-weight: 400;
                color: black;
                margin-left: 3px;
            }
        }
        .wr{
            position: fixed;
            z-index: 1;
            top: 20px;
            right: 20px;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .link{
                position: fixed;
                z-index: 1;
                top: 21em;
                right: 20px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 12px 28px rgba(0, 0, 0, 0.2);
                border: 1px solid rgba(0, 0, 0, 0.1);
                background: rgba(44,123,229,1);
                height: 48px;
                display: flex;
                justify-content: center;
                gap: 10px;
                padding: 0 25px;
                align-items: center;
                font-size: 12px;
                color: #fff;
                cursor: pointer;
                border-radius: 25px;
                text-transform: uppercase;
                font-weight: 500;
                svg{
                    font-size: .8125rem!important;
                    color: #fff;
                }
        }
    }
    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
        .main_wrapper {
            margin-top: 90px;
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 0;
            .copyright {
                width: 100%;
                background-color: white;
                margin-top: 15px;
                font-size: 0.75rem;
                height: 60px;
                text-align: center;
                color: #95aac9;
                display: flex;
                flex-direction: column;
                cursor: pointer;
            }
            .link{
                position: fixed;
                z-index: 1;
                top: 28em;
                right: 20px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 12px 28px rgba(0, 0, 0, 0.2);
                border: 1px solid rgba(0, 0, 0, 0.1);
                background: rgba(44,123,229,1);
                height: 48px;
                display: flex;
                justify-content: center;
                gap: 10px;
                padding: 0 25px;
                align-items: center;
                font-size: 12px;
                color: #fff;
                cursor: pointer;
                border-radius: 25px;
                text-transform: uppercase;
                font-weight: 500;
                svg{
                    font-size: .8125rem!important;
                    color: #fff;
                }
        }
        }
    }
`;
