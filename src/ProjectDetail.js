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
    default:
      break;
  }
}


