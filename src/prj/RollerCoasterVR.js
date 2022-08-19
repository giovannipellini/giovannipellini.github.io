import React from 'react';

export function RollerCoasterVR(pData) {
  return <>
    
   
    
    <h3>Roller Coaster design</h3>
      <p>I've created a roller coaster based on Vekoma MK-1200 and a simple scenario. The model is made with Blender. The track of the coaster (in orange in the next figure) is saved as an .obj file and used to compute the speed. In this simulation the train has 4 wagons and has to calculate the position and the view for each one.</p>
    
      
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/RollerCoasterVR/BlenderTrack.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">3D model of the roller coaster and scenario. In orange the track used in the computing process.</figcaption>
          </figure>
        </div>
      
      
    <h3>Output video</h3>

    <p>
      For this application I decided to use a set of prerendered frames to show in the VR device, each frame is linked to a position in the roller coaster.


    </p>

    


    
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/RollerCoasterVR/PreDrop.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">Example of train position with the relative VR frame</figcaption>
          </figure>
        </div>

   

    <p>
  
      This example shows how the 4 wagons VR visor have to display 4 different images: the green wagon is facing down while the blue one is facing up. Each wagon will also approach the same position in the roller coaster at different speed, which means they have to see the video at different speeds. A limitation of this approach is that static animation in the video will not be static anymore, the animation playback will follow the train speed. To solve this problem the output video has to be rendered real time.
  
    </p>

    <h3>Physics</h3>
    <p>
      Then I created some physics of this simulation. The roller coaster is lifted by a chain, as the Vekoma MK-1200, which builds the potential energy and then driven by inertia. I added some disruption forces such as the wagon weights distribution, the wind direction and intensity.
    </p>


    <p>
      In the example in figure the train is at the end of the lift, on the predrop.
      Let's suppose the first 2 wagons (red and green) are full of people while the others (yellow and blue) are empty.
      The weight of the people in the first 2 wagons will make the train drop faster, in other words the train will accelerate more.
      Now suppose the opposite: if the train is heavier in the last wagons it will be held back for longer. Having a lower speed while the heavier wagons are still going up.
      
    </p>


    

    <p>
      In this application I'm supposing the roller coaster have a set of N speed sensors along the track. So that when the train hit one of this sensors we can determine the real position and speed. 
      With the physics set up I then ran about a houndred simulation changing pseudo-randomly the disruption parameters and recorded the speed at every sensor.
    </p>

    <h3>Neural Network with TensorFlow and Google Colab</h3>


    <div className='row'>
      <div className='col-lg-4 col-sm-12'>
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/RollerCoasterVR/tensorFlowData.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">Data used in the Neural Network</figcaption>
          </figure>
        </div>
      </div>
      <div className='col-lg-8 col-sm-12'>
        <div className='d-flex justify-content-center'>
        <p>
      The data recorded in the simulation has been fed to a regression Neural Network. To create the network I used TensorFlow and Google Colab.
      <br/>125 samples have been recorded:
      <li>80 for the training set</li> 
      <li>20 for the testing set</li> 
      <li>25 for evaluation</li> 
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
      

      Since at each sensor we will have more data I trained N-1 network having from less to full data. The network is sequential with 2 layers: from 50 to 1 dense neurons.
      I used Adam as optimizer algorithm and MSE for metrics and loss.
      <br/>
      The prediction rate is quite good, less than .2 MSE for each checkpoint with a couple exceptions. 
    </p>  
        </div>
      </div>
    </div>

    <h3>RealTime speed correction</h3>
    
    <p>
      At every checkpoint the exact train position and speed is retrieved. Based on the predicted position we can calculate how off the prediction was.
      If the predicted position is ahead of the real position the train (and so the video) has to go proportionally slower to meet the next predicted checkpoint position.

      Viceversa, if the predicted position is behind, the train has to speed up.

      This is to minimize the error between the predicted and real position. The predicted position (linked to the relative video frame) cannot jump back and forward to keep the most realistic user experience, so it must stick with the video timeline adjusting just the speed to correct the error.


    </p>
  <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/RollerCoasterVR/SpeedCorrection.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">Example of speed correction when the prediction is behind the real position. (in red the expected speed, in green the adjusted speed)</figcaption>
          </figure>
        </div>
    <h3>Demo</h3>

    <div className='d-flex justify-content-center'>
      <iframe
        width="700"
        height="500"
        src={`https://youtube.com/embed/guvko0opA7g`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube" />
    </div>
      
  </>;
}
