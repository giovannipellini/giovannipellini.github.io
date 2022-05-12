import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Project from './project';
import 'bootstrap/dist/css/bootstrap.css';
import ProjectData from './projectData.json'

//import vpt1 from './img/VPT/vpt1.png'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{backgroundImage: `url('./img/BackGround/2.png')`, backgroundSize:'cover'}} ><div className='top-50 fs-1 text-center p-5 position-relative' ><span className='text-light h1' style={{fontSize:'3rem'}}>Giovanni Pellini</span></div></div>
    {/* <img src="./Img/Code2.png" alt="" style={{width:'100%', height:'20rem', margin:'0px 0 0 -0px', paddingBottom:'5rem'}} /> */}
    
    <div className='container'>
    <h2 className='text-center'>About me</h2>
    <p>I'm a software engineer with 10+ year experience. I'm currently working full time for an italian insurance company.</p>
    <h1 className='text-center'>Projects</h1>
      <div className='row'>
        {
          
          ProjectData.map(
            pData => {
              return (

                <Project key={pData.id} image={pData.image} title={pData.title} description={pData.description} features={pData.features} tech={pData.tech} />

              )
            }
          )
        }
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
