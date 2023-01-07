
import React,{useContext} from 'react';

import LoginFrom from '../src/components/login/MainLoginForm';
import { Route, Routes } from "react-router-dom"; 
import styled from 'styled-components';
import Students from './components/students';
import  Dashboard from './components/dashboard/dashboard'
import Settings from './components/dashboard/profile';
import Navbar from './components/Navbar';
import Register from  "./components/login/Register"
function App() {
  return (
    <Container >
     <Routes>
        <Route path='/' element={<LoginFrom/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/profile' element={<Settings/>}/>
        <Route path= '/Navbar' element={<Navbar/>}/>
        <Route path= '/Register' element={<Register/>}/>
     </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div `
`