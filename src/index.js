import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import App from './App';
import ProjectDetail from './ProjectDetail';
import Resume from './resume';

//import vpt1 from './img/VPT/vpt1.png'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{backgroundImage: `url('./img/BackGround/2.png')`, backgroundSize:'cover'}} ><div className='top-50 fs-1 text-center p-5 position-relative' ><span className='text-light h1' style={{fontSize:'3rem'}}>Giovanni Pellini</span></div></div>
    
    <BrowserRouter>

    

    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <div className='navbar-brand' >
    <Link className='navbar-brand' to="/"> 
      <img src="./img/Icon/icons8-home.svg" alt="" width="24" height="24" className="d-inline-block align-text-top" />
      Home
      </Link>
    
      <Link className='navbar-brand' to="/resume"> 
      <img src="./img/Icon/curriculum-resume-svgrepo-com.svg" alt="" width="24" height="24" className="d-inline-block align-text-top" />
      Resume
      </Link>
    </div>
  
  </div>
</nav>

    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/resume" element={<Resume />} />
      <Route path="project/:projectname" element={<ProjectDetail />} />
      
    </Routes>
  </BrowserRouter>

   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
