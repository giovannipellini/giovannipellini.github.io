import { useParams } from 'react-router-dom'
import React from 'react'
import ProjectData from './projectData.json';
import Tech from './tech';
import './ProjectDetails.css';
import { WordleSolver } from './prj/WordleSolver';
import { Wolfenstein3DEngine } from './prj/Wolfenstein3DEngine';
import { HearthstoneMercenariesBot } from './prj/HearthstoneMercenariesBot';


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

function VitaPowerTool(pData) {
  return <>
      <h3>Main problems</h3>
      <h6>Entity Copy</h6>
    <p>Entity copy is the feature which allows to copy one entity from one DB to another. The point of this copy is that one entity, say TargetEntity, can require several entity before TargetEntity can be inserted, these entities will be called Foreign Entities.
       TargetEntity may also require a whole set of new entities called LinkedEntities (or entities in which TargetEntity is a ForeignEntity).
        ForeignEntities have to be inserted before [A]. LinkedEntities after.  </p>

    <p>any of this entities may already exist in the target DB, but with a different primary key. The copy needs to keep track of every entity and eventually of any primary key change.</p>

    <p>The entire process is recursive</p>
    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/VPT/ForeignLinkedentity.svg' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Example of Foreign and Linked Entities</figcaption>
      </figure>
    </div>
    <h6>Solution</h6>
    <p>
      </p>

  

    <p>
       </p><p>
       </p>

  
  </>;

}


function PersonalWebSite(pData) {
  return <>

  </>;

}



