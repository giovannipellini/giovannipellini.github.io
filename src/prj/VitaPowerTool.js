import React from 'react';
import { GistCode } from '../GistCode';

export function VitaPowerTool(pData) {
  return <>
    <h3>Main problems</h3>
    <h6>Entity Copy</h6>
    <p>Entity copy is the feature which allows to copy one entity from one DB to another. The point of this copy is that one entity, say TargetEntity, can require several entity before TargetEntity can be inserted, these entities will be called Foreign Entities.
      TargetEntity may also require a whole set of new entities called LinkedEntities (or entities in which TargetEntity is a ForeignEntity).
      ForeignEntities have to be inserted before [A]. LinkedEntities after.  </p>




    <h6>Solution</h6>
    <p>
      The application needs to start from TargetEntity and check if it exists on the target DB. Primary Key are internals and cannot be changed, the comparsion is based on other key elements (for example a person may be identified by his TAX Id code).

      If TargetEntity doesn't exists the application needs to check every ForegnEntity and keep TargetEntity at last.

      After TargetEntity is copied the same process is applied for every LinkedEntity.

    </p>
    <p>Any of this entities may already exist in the target DB, but with a different primary key. The copy needs to keep track of every entity and eventually of any primary key change.</p>


    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/VPT/ForeignLinkedEntity.svg' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Example of Foreign and Linked Entities</figcaption>
      </figure>
    </div>

    <p>The entire process is recursive and under a transaction, if anything fails it causes a Rollback. If the copy is successfull user can see how many entities have been imported and decide to Commit or Rollback.</p>




    <figure className="">
      {GistCode("https://gist.github.com/giovannipellini/fafba9b4cd4975d4aa930aab25490cfc.js")}
      <figcaption className="figure-caption">Code section of the recursive part for ForegnEntities.</figcaption>
    </figure>


    <p>
      Note that the comparsion can be in any type (string, date, int, decimal) so every dictionary and list has to store type Object.
    </p>
    <p>
      The recursive procedure runs under a separate thread and update a synchronized structure in the meanwhile. This is to allow the user to see in real time which (and how many) entities are being copied.
    </p>

    <h3>CI/CD Process</h3>

    <p>This application has a compilation/test/deploy pipeline built in Jenkins. First the NUnit tests are executed, then the application is built for the deployment stage. Once deployed, Jenkins runs a set of Cypress tests and upload the results as HTML in Jenkins itself.</p>

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/VPT/Jenkins1.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Example of tests with errors</figcaption>
      </figure>
    </div>

    <h6>Cypress Dashboard</h6>
    <p>Test results are then imported to a MongoDB database. A custom dashboard display tests result. This dashboard is written using Blazor WebAssembly.</p>

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/VPT/CypressDashboard1.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Dashboard example with the previous run with errors</figcaption>
      </figure>
    </div>

    <p>From this dashboard it is possible to see the video with every run, this can speedup the bug discovery process.</p>

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/VPT/CypressDashboard2.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Video of the run with errors</figcaption>
      </figure>
    </div>

    <p>The error log and stacktrace are displayed with the assertion error found</p>

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/VPT/CypressDashboard3.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Stacktrace of the error</figcaption>
      </figure>
    </div>

  </>;

}
