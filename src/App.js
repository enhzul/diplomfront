// import Register from "./Register";
import RequireAuth from "./components/RequireAuth";
import React, { useEffect } from "react";
import LoginFrom from "../src/components/login/mainLoginFrom";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Students from "./components/students";
import Dashboard from "./components/dashboard/dashboard";
import Profile from "./components/dashboard/profile";
import Change from "./components/dashboard/password";
function App() {
  const ROLES = {
    User: 1,
  };
  return (
    <Container>
      <Routes>
        <Route path="/login" element={<LoginFrom />} />
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/students" element={<Students />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/changepassword" element={<Change />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  /* height: auto;
width: auto;
    background: rgba(227, 235, 246, 1); */
`;
