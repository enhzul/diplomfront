import {Link, useNavigate} from 'react-router-dom';
import React, { useContext, useState,useEffect } from 'react'
import styled from 'styled-components'
import useAxiosPrivate from '../hook/useAxiosPrivate';
import AuthService from '../api/auth.service'
const LeftbarDesktop = ({ }) => {
    const [user, setUser] = useState();
    const axiosPrivate = useAxiosPrivate();
    const [activeAcc, setActiveAcc] = React.useState(null)
  const navigate = useNavigate();

    const handleClick = (i) => { 
        if (activeAcc == i)
            setActiveAcc(null)
        else
            setActiveAcc(i)
    }
    useEffect(() => {
        const id =localStorage.getItem("id")
        console.log(id)
        if(!id){
            navigate("/")
        }
        const userMedeelel = async () => {
            try {
                const response = await axiosPrivate.get("/students/"+id,);
                  setUser(response.data.data[0]);
            }
            catch (err) {
                console.error(err);
            }
        }
        userMedeelel()
      }, []);
      const logOut = () => {
        AuthService.logout();
      };

   
    // const { user } = React.useContext(getContext)

    return (
        <Container>
            <div className='menu-nav'>
                <div className='head'>
                    <div className='logo'>
                        <Link to={'/dashboard'}><img src='/img/download.png' /></Link>
                    </div>
                    <div className='menu-list'>
                        <ul>
                        <div className="caption">МУБИС</div>
                            <li>
                                <Link to='/dashboard'>
                                    <div className='menu'>
                                        <div className='menu-a'>
                                            <img src='/img/home-icon.svg' />
                                            <h5>Нүүр хуудас</h5>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/students">
                                    <div className='menu'>
                                        <div className='menu-a'>
                                          <img src='/img/user.svg' />
                                            <h5>Оюутны мэдээлэл</h5>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/dashboard'}>
                                    <div className='menu'>
                                        <div className='menu-a'>
                                            <img src='/img/user.svg' />
                                            <h5>Хэрэглэгч</h5>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className='team'>
                        
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='foot'>
                    <div className='profile'>
                    <img src='/img/userlogo.png' />
                        <div className='username'>{user?.first_name} {user?.last_name}</div>
                        <div className='job-title'>{user?.zeregName}</div>
                    </div>
                    <div className='settings'>
                        <Link to="/profile"><h5>Профайл засах</h5></Link>
                        <Link to="/" onClick={logOut}><h5>Гарах</h5></Link>
                    </div>
                </div>
            </div>
        </Container >
    )
}

export default LeftbarDesktop

const Container = styled.div`
    width: 270px;
    height: 100vh;
    display: flex;
    position: fixed;
    .menu-nav{
    padding-left: 30px;
    padding-right: 30px;
    width: 80%;
    background: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
    &::-webkit-scrollbar{
            width: 3px;
          }
          &::-webkit-scrollbar-thumb{
            border-radius: 8px;
            background-color: #c3c3c3;
          }
    .head{
        .title{
            margin-top: 35px;
            margin-bottom: 15px;
            h5{
                font-size: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 4px;
                margin:0;
                background: linear-gradient(180deg, #2957A4 0%, #00A859 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-family: 'Montserrat', sans-serif;
            }
        }
        .logo{
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 120px;
                img{
                    width: 120px;
                    height: 60px;
                    cursor: pointer;
                }
            }
        .menu-list{
            ul{
                padding-left: 0;
                margin: 0;
                li{
                    list-style: none;
                    cursor: pointer;
                    &:hover{
                        .menu{
                            .menu-a{
                                h5{
                                    font-weight: 500;
                                }
                            }
                        }
                    }
                    a{
                        text-decoration: none;
                    }
                    .menu{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 35px;
                        .menu-a{
                            display: flex;
                            align-items: center;
                            img{
                                margin-right: 10px;
                            }
                            h5{
                                font-size: 12px;
                                color: #475667;
                                font-weight: 400;
                                font-family: "Roboto";
                                margin: 0;
                            }
                        }
                    }
                    .chevr{
                            .chev{
                                transform: rotate(90deg);
                            }
                        }
                }
                .caption {
                        text-transform: uppercase;
                        letter-spacing: 0.03125rem;
                        font-size: 0.65625rem;
                        font-weight: 600;
                        color: #8c98a4;
                        margin-top: 20px;
                        margin-bottom: 10px;
                        background: linear-gradient(180deg, #2957A4 0%, #00A859 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-family: 'Montserrat', sans-serif;
                    }
                .team{
                    .menu-drop{
                        /* transition: all 1s; */
                        height: 0;
                        overflow: hidden;
                    }
                    .active{
                        height: auto;
                        margin-top: 0px;
                        background: rgba(227, 235, 246, 0.3);
                        border-radius: 8px;
                        padding-bottom: 10px;
                        h5{
                            font-size: 12px;
                            color : #475667;
                            font-weight: 400;
                            line-height: 1.1;
                            margin-left: 25px;
                            padding-top: 15px;
                        }
                    }
                }
            }
        }
    }
    
    .foot{
        margin-top: 15px;
        .settings{
            padding-top: 25px;
            h5{
                font-family: "Roboto";
                font-size: 12px;
                font-weight: 400;
                color: rgba(71, 86, 103, 1);
                cursor: pointer;
                &:first-of-type{
                    border-bottom: 1px solid #E3EBF6;
                    padding-bottom: 20px;
                }
                &:last-of-type{
                    padding-bottom: 10px;
                    padding-top: 10px;
                }
            }
        }
        .profile{
            border-top: 1px solid #E3EBF6;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            img{
                width: 80px;
                height: 80px;
                border-radius: 50%;
                margin-top: 30px;
                margin-bottom: 14px;
            }
            .username{
                font-family: "Roboto";
                font-size: 16px;
                font-weight: 500;
                text-transform: uppercase;
                color: rgba(71, 86, 103, 1);
            }
            .job-title{
                margin-top: 5px;
                font-family: "Roboto";
                font-size: 12px;
                font-weight: 400;
                color: rgba(71, 86, 103, 1);
                text-align: center;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    z-index: 10;
    position: fixed;
    right: 0;
    left: 0;
    height: 80px;
    top: 0;
    width: 100%;
    .menu-nav{
        display: flex;
    }
}
`