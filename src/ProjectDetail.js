import { useParams } from 'react-router-dom'
import React from 'react'
import ProjectData from './projectData.json';
import Tech from './tech';
import './ProjectDetails.css';


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
      return VitaPowerTool();
    case 2:
      return HearthstoneMercenariesBot();
    case 3:
      return Wolfenstein3DEngine();
    default:
      break;
  }
}

function VitaPowerTool(pData) {
  return <>

  </>;

}


function Wolfenstein3DEngine(pData) {
  return <>

    <h3>Main problems</h3>
    <p>The main problem of this Engine is to get which blocks needs are in the field of view and how to calculate the screen projection. </p>
    <h3>Solution</h3>
    <p>
      At first the algorithm takes a portion of the map based on the character position, for each wall is calculated the angle from the player.
      If it's inside the field of view it goes on the render part.  </p>

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/W3DEngine/BlockDetection.svg' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Block detection process</figcaption>
      </figure>
    </div>

    <p>
      Each square will project 4 x 2 points on the screen. First I get the angle of the vertex from the player, the X coordinate will be proportionate from -θ/2 to +θ/2 going from 0 
      and the screenWitdh. An angle of -θ/2 will be rendered on the left of the screen (X = 0), an angle of +θ/2 will go on the right side (X = screenWidth).
      </p><p>
      The Y coordinate is calculated from the inverse distance from the player, nearest the vertex the bigger the object will be. From the center of the screenHeight this value is added and substracted to create the 2 Y coordinate.
      The distance is not strictly linear from the player but from the line of the player where is looking at. This is to prevent the FishEye effect on the projection, so in this example the 3 left blocks will be rendered at the same height.
    </p>

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/W3DEngine/ScreenProjection.svg' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Point Projection</figcaption>
      </figure>
    </div>
    <h3>Demo</h3>
    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/W3DEngine/WolfensteinEngine.gif' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Demo of the application.</figcaption>
      </figure>
    </div>

  </>
}

function HearthstoneMercenariesBot(pData) {
  return <>

    <h3>Main problems</h3>
    <p>The main problem of this BOT is the character recognition and the skill learning.
      In this game there are a lot of characters and a lot of skills and since each skill can have different targets I wanted an automatic character learning and a basic skill system such: if a skill deals damage cast it on enemies, if a skill heals cast it on the allies.</p>
    <h3>Solution</h3>
    <p>To do this I needed to read the game log file combined with some computer vision functions.
      First thing the BOT locates the characters position on the screen and takes a picture of them.
      Then the log file is read with some custom Regular Expressions to get all the information.
      At the end of this process the BOT has the picture of the characters with the skill list. The informations are saved as an Object and serialazed into a JSON file. Once a characters has been learned there is no more need to read the game logs. </p>
    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/Hearthstone Mercenaries BOT/CharJson.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">JSON file created while learning characters.</figcaption>
      </figure>
    </div>
    <h3>Demo</h3>
    <div className='d-flex justify-content-center'>
      <iframe
        width="500"
        height="300"
        src={`https://youtube.com/embed/A7LPvXzeS9I`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </>;

}


