import React from 'react';

export function RollerCoasterVR(pData) {
  return <>
    
   
    
    <h3>Roller Coaster design and physics</h3>
      <p>I've created a roller coaster based on Vekoma MK-1200 and a simple scenario. The model is made with Blender. The track of the coaster (in orange in the next figure) is saved as an .obj file and used to compute the speed. In this simulation the train has 4 wagons and has to calculate the position and the view for each one.</p>
    
      
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/RollerCoasterVR/BlenderTrack.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">3D model of the roller coaster and scenario. In orange the track used in the computing process.</figcaption>
          </figure>
        </div>
      
      
   
    <p>
      Then I created some physics of this simulation. The roller coaster is lifted by a chain, as the Vekoma MK-1200, and then driven by inertia. I added some disruption forces such as the wagon weights distribution, the wind direction and intensity.
    </p>

    <div className='row'>
      <div className='col-lg-6 col-sm-12'>
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/RollerCoasterVR/PreDrop.jpg' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">Weight distribution dynamics</figcaption>
          </figure>
        </div>
      </div>
      <div className='col-lg-6 col-sm-12'>
        <div className='d-flex justify-content-center'>
          <p>
            In the example in figure the train is at the end of the lift, on the predrop.
            Let's suppose the first 2 wagons (red and green) are full of people while the others (yellow and blue) are empty.
            The weight of the people in the first 2 wagons will make the train drop faster, in other words the train will accelerate more.
            Now suppose the opposite: if the train is heavier in the last wagons it will be held back for longer. Having a lower speed while the heavier wagons are still going up.
          <br/>
            This example also shows how the 4 wagons VR visor have to display 4 different images: the green wagon is facing down while the blue one is facing up.
         
          </p>
        </div>
      </div>
    </div>


    <p>
      In this application I'm supposing the roller coaster have a set of N speed sensors along the track. So that when the train hit one of this sensors we can determine the real position and speed. 
      With the physics set up I then ran about a houndred simulation changing pseudo-randomly the disruption parameters and recorded the speed at every sensor.
    </p>

    <h3>Neural Network with TensorFlow and Google Colab</h3>


    <div className='row'>
      <div className='col-lg-6 col-sm-12'>
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/RollerCoasterVR/tensorFlowData.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">Data used in the Neural Network</figcaption>
          </figure>
        </div>
      </div>
      <div className='col-lg-6 col-sm-12'>
        <div className='d-flex justify-content-center'>
        <p>
      The data recorded in the simulation has been fed to a simple regression Neural Network. To create the network I used TensorFlow and Google Colab.
    </p> 
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='col-lg-6 col-sm-12'>
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/RollerCoasterVR/tensorFlowCompileMSE.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">Neural Network Structure and MSE evaluation</figcaption>
          </figure>
        </div>
      </div>
      <div className='col-lg-6 col-sm-12'>
        <div className='d-flex justify-content-center'>
        <p>
      125 samples have been recorded:
      <li>80 for the training set</li> 
      <li>20 for the testing set</li> 
      <li>25 for evaluation</li> 

      Since at each sensor we will have more data I trained N-1 network having from less to full data. The network is sequential with 2 layers: from 50 to 1 dense neurons.
      I used Adam as optimezer algorithm and MSE for metrics and loss.
    </p>  
        </div>
      </div>
    </div>

  
      
  </>;
}
