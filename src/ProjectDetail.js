import { useParams } from 'react-router-dom'
import React from 'react'
import ProjectData from './projectData.json';
import Tech from './tech';
import './ProjectDetails.css';
import { WordleSolver } from './prj/WordleSolver';
import { Wolfenstein3DEngine } from './prj/Wolfenstein3DEngine';
import { HearthstoneMercenariesBot } from './prj/HearthstoneMercenariesBot';
import { VitaPowerTool } from './prj/VitaPowerTool';
import { PersonalWebSite } from './prj/PersonalWebSite';
import { _3DScanner } from './prj/3DScanner';
import { RollerCoasterVR } from './prj/RollerCoasterVR';
import { Checkers } from './prj/Checkers';

export default function ProjectDetail() {
  let { projectId } = useParams();
  return (

    <>
      <div className='container'>

        {

          ProjectData.map(
            pData => {
              let jsxRet;
              if (pData.id === parseInt(projectId))
                jsxRet = (
                  <React.Fragment key={pData.id}>

                    {Header(pData)}
                    {Body(pData)}
                  </React.Fragment>
                )


              return jsxRet;
            }
          )
        }
      </div>
    </>

  )
}

function Header(pData) {
  return <>
    <h1>{pData.title}</h1>
    <p>{pData.description}</p>
    <h4>Technologies used</h4>
    <div className="container row justify-content-md-left">
      {
        pData.tech.map(
          tec => {
            return (

              <Tech key={tec.id} title={tec.title} />

            )
          }
        )
      }
    </div>
  </>;
}



function Body(pData) {
  switch (pData.id) {
    case 0:
      return VitaPowerTool();
    case 1:
      return PersonalWebSite();
    case 2:
      return HearthstoneMercenariesBot();
    case 3:
      return Wolfenstein3DEngine();
    case 4:
      return WordleSolver();
    case 5:
      return _3DScanner();
    case 6:
      return RollerCoasterVR();
    case 7:
      return Checkers();
    default:
      break;
  }
}


