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
    <img src="./Img/Code2.png" alt="" style={{width:'100%', height:'20rem', margin:'0px 0 0 -0px', paddingBottom:'5rem'}} />
    <div className='container'>
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
