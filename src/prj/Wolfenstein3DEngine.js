import React from 'react';

export function Wolfenstein3DEngine(pData) {
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

  </>;
}
