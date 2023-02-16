import React from 'react';

export function ServiceBridge(pData) {
  return <>
    <h3>Featues</h3>
    <h4>Forward Proxy Calls</h4>
    <p>
      Anytime the client can make a request to ServiceBridge and it will be queued up in RabbitMQ. When available it will passed to the correct Service. As a standard forward proxy this can be used to renstrict policy to server hosting ServiceBridge.
      
    </p>


    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/ServiceBridge/ServiceBridge.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Schema of the application</figcaption>
      </figure>
    </div>


    <h4>Saving requests and handling failures</h4>
    <p>
      ServiceBridge will store the request and the relative response. This is to recover in case of failure. If needed ServiceBridge can search the most relevant response for that particular request. The same mechanism can be used to mock the real service.
    </p>
   

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/ServiceBridge/ServiceBridgeFailure.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Example of Failure handling</figcaption>
      </figure>
    </div>



  </>;

}
