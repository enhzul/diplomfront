import React from "react";
import styled from "styled-components";
import ReactApexChart from 'react-apexcharts';
const Slide2 = () => {

    const series = [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }]
   const options = {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Математик, Байгалийн ухааны сургууль',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }

    return (
        <Container className="slider">
        <div className="swiper-wrap">
            <div className="swiper-custom-control">
            <ReactApexChart options={options} series={series} type="line" height={350} />
            </div>
        </div>
    </Container>
    );
};

export default Slide2;

const Container = styled.div`
 padding: 1%;
    width: 100%;
    height: 100%;
    .swiper-wrap {
       
        width: 100%;
        height: 100%;
        .swiper-custom-control {
            border-radius: 17px;
            background-color: white;
            width: 100%;
            height: 100%;
            display: inline-table;
            .swiper {
                width: 100%;
                height: 100%;
                .swiper-pagination {
                    .swiper-pagination-bullet {
                        background-color: rgba(227, 235, 246, 1);
                    }
                    .swiper-pagination-bullet-active {
                        background-color: white;
                    }
                }
                .swiper-slide {
                    width: 100%;
                    .slide {
                        background: white;
                        border-radius: 8px;
                        height: 100%;
                        width: 100%;
                        .slide-inner {
                            height: 100%;
                            width: 100%;
                            background: rgba(0, 0, 0, 0.3);
                            padding: 50px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            border-radius: 8px;
                            .top {
                                .type {
                                    letter-spacing: 0.05em;
                                    color: white;
                                    text-transform: uppercase;
                                    font-size: 12px;
                                    font-weight: 500;
                                    margin-bottom: 10px;
                                }
                                .title {
                                    color: white;
                                    font-size: 26px;
                                    width: 70%;
                                    line-height: 1.3;
                                    font-weight: 700;
                                }
                            }
                            .text {
                                width: 150px;
                                height: 30px;
                                background-color: white;
                                color: black;
                                border-radius: 8px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-size: 12px;
                                cursor: pointer;
                                &:hover {
                                    background-color: rgba(227, 235, 246, 1);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        .swiper-wrap{
            .swiper-custom-control{
                .swiper{
                    .swiper-slide{
                        .slide{
                            .slide-inner{
                                .top{
                                    .title{
                                        width: 100%;
                                        font-size: 20px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
