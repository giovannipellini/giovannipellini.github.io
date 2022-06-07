import React from 'react';

export function _3DScanner(pData) {
  return <>
    <h3>Download full thesis</h3>
    <tr>
      <td>Download (25Mb)</td>      
      <td><a href='/thesis/Thesis-IT.pdf'><img src='/img/Icon/PDF_icon.svg' height={30} width={30} alt='Thesis IT'></img></a></td>
    </tr>

    <h3>Stereoscopic disparity Map</h3>
    <p>The application at first starts with the acquistion of the images. </p>
    <div className='row'>
      <div className='col-lg-6 col-sm-12'>
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/3DScanner/stereo.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">Example of stereoscopic detection of object depth</figcaption>
          </figure>
        </div>
      </div>
      <div className='col-lg-6 col-sm-12'>
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/3DScanner/stereo2.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">Stereoscopic system in standard form</figcaption>
          </figure>
        </div>
      </div>
    </div>
    <p>
      For each couple of L/R images a disparity map is drawn, which is an image where each pixel retain the information of how far the same feature is detected in both images
    </p>

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/3DScanner/disparity.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Example of disparity map</figcaption>
      </figure>
    </div>

    <p>
      From a disparity map the first cloud point can be displayed.
    </p>

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/3DScanner/Cloud1.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Example of disparity map</figcaption>
      </figure>
    </div>
    <h3>3D Joining phase from multiple views</h3>
    <p>
      From the first couple of images now the camera is free to move around the object. To get the new camera posistion and rotation the same match algorithm is applied between the 1st and the 2nd acquisition. This way we can estimate a new location/rotation. Later this information is refined using the current object information.
    </p>

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/3DScanner/conjunction.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Joining phase from two separate clouds</figcaption>
      </figure>
    </div>

    <p>
      At last redundant information is deleted, to improve performance the points are stored in an Octree structure.
    </p>

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/3DScanner/Octree.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Octree data structure</figcaption>
      </figure>
    </div>


    <h3>Examples</h3>
    <h5>Dragon</h5>
    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/3DScanner/Dragon-A.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">input</figcaption>
      </figure>
    </div>
    <div className='row'>
      <div className='col-lg-6 col-sm-12'>
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/3DScanner/Dragon-B.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">output cloud (1)</figcaption>
          </figure>
        </div>
      </div>
      <div className='col-lg-6 col-sm-12'>
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/3DScanner/Dragon-C.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">output cloud (2)</figcaption>
          </figure>
        </div>
      </div>
    </div>
    <h5>ED-209</h5>
    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/3DScanner/ED209-A.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">input</figcaption>
      </figure>
    </div>
    <div className='row'>
      <div className='col-lg-6 col-sm-12'>
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/3DScanner/ED209-B.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">output cloud (1)</figcaption>
          </figure>
        </div>
      </div>
      <div className='col-lg-6 col-sm-12'>
        <div className='d-flex justify-content-center'>
          <figure className="figure">
            <img src='/img/3DScanner/ED209-C.png' className="img-fluid" alt="..." />
            <figcaption className="figure-caption">output cloud (2)</figcaption>
          </figure>
        </div>
      </div>
    </div>


  </>;
}
