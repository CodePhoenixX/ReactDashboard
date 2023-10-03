import './App.css';
import React from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import CallReport from './components/CallReporting/CallReport';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import ForgotPass from './components/ForgotPass/ForgotPass';



function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/sign-in" element={<Login/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/forgot-password" element={<ForgotPass/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/call-reporting" element={<CallReport/>} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;

