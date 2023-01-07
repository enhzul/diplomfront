import {Link} from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import useAxiosPrivate from '../../hook/useAxiosPrivate';
import styled from "styled-components";
import ReactApexChart from 'react-apexcharts';
const Slide = () => {
    const swiperRef = useRef();
    const axiosPrivate = useAxiosPrivate();
    const [data, setData] = useState({});
    const [countData, setCountData] = useState({});
    let chartLabel = []
    let chartLabel1 = []

    useEffect(() => {
        CountList();
        
   },[])
        const CountList  = async () => {
           try {
               const response = await axiosPrivate.get("/school/count")
               setCountData(response.data)
               setData(response.data)
           }
           catch(err) {
               console.error(err);
           }
        }
    if(data  && data.Count){
		data.Count.map((item) => {
			chartLabel.push(item.name)
		})
    }
    if(countData  && countData.Count){
		countData.Count.map((item) => {
			chartLabel1.push(item.countToo)
		})
    }
        const  series = [{
            data: chartLabel1
          }]
        const  options = {
            chart: {
              height: 350,
              type: 'bar',
              events: {
                click: function(chart, w, e) {

                    // console.log(chart, w, e)
                }
              }
            },
            plotOptions: {
              bar: {
                columnWidth: '45%',
                distributed: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            xaxis: {
              categories: chartLabel,
              labels: {
                style: {
                  fontSize: '12px'
                }
              }
            },
            title: {
                text: "МУБИС-Математик, Байгалийн ухааны сургууль",
                align: "center",
                margin: 10,
                offsetY: 10,
                style: {
                  fontSize: "15px"
                }
              }
          }
 

    return (
        <Container className="slider">
        <div className="swiper-wrap">
            <div className="swiper-custom-control">
                <ReactApexChart options={options} series={series} type="bar" height={350} />
            </div>
        </div>
    </Container>
    );
};

export default Slide;

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
