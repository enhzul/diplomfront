import Register from './Register';
import React,{useContext} from 'react';
import LoginFrom from '../src/components/login/mainLoginFrom';
import { Route, Routes } from "react-router-dom"; 
import styled from 'styled-components';
import Students from './components/students';
import  Dashboard from './components/dashboard/dashboard'
import Settings from './components/dashboard/profile';

function App() {
  // const {auth} = useContext(AuthContext)
  // if(!auth){
  //   navigator("/")
  // }
  return (
    <Container >
     <Routes>
        <Route path='/' element={<LoginFrom/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/profile' element={<Settings/>}/>
     </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div `
/* height: auto;
width: auto;
    background: rgba(227, 235, 246, 1); */
`