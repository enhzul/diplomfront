import { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import AuthContext from "../../context/AuthProvider";
import { useNavigate,useLocation } from 'react-router-dom'
import axios from "../../api/axios"
const LOGIN_URL = '/users/login';

const Login = () => {
    const { setAuth, setUser} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                { username, password },
                { withCredentials: true }
            
            );
            if(response.data.success === 0) {
              setErrMsg('Нэвтрэх нэр эсвэл нууц үг буруу байна.');
            }else{
              const accessToken = response.data.accessToken;
              const roles = response.data.roles;
              setAuth({ username, password, roles, accessToken });
              localStorage.setItem('user', JSON.stringify(response.data.Onestudent));
              localStorage.setItem('id', JSON.stringify(response.data.userId));
              setUsername('');
              setPassword('');
              setSuccess(true);
              navigate(from, { replace: true });
              navigate("/dashboard");
            }
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Нэвтрэх нэр эсвэл нууц үг буруу байна.');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            // errRef.current.focus();
        }
    }

    return (
                <Container>
                <div className="container">
                <LogoWrapper>
                    <h3>
                    Hi <span>Logo</span>
                    </h3>
                </LogoWrapper>
                {
                    errMsg ? 
                    <p>{errMsg}</p>
                : null}
                <Div>
                <Form onSubmit={handleSubmit}>
                    <h3>Нэвтрэх</h3>
                    <input type="text" placeholder="Оюутны код" id="studentCode" 
                    value={username}
                    autoComplete="off" onChange={(e) => setUsername(e.target.value)} required/>
                    <input type="password" placeholder="Нууц үг" 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} required
                    />
                    <button type="submit">Нэвтрэх</button>
                </Form>
                </Div>
                <div>
                    <Terms>
                    Монгол Улсын Боловсролын Их Сургууль<br /> МБУС - Програм хагнамж анги
                    2022 он
                    </Terms>
                    <h4>
                    Бүртгэлгүй юу?<span> Бүртгүүлэх</span>
                    </h4>
                </div>
                </div>
                </Container>
    )
}


const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 75%;
    max-width: 260px;
    margin-right:10px ;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;
const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  display: flex;
  position: initial;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  input { 
    width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
}
`;

const LogoWrapper = styled.div`
   margin-top: -40%;
   padding: 10%;
  img {
    height: 6rem;
  }

  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 450px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export default Login
