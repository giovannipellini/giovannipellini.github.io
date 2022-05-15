import React from 'react';

export function HearthstoneMercenariesBot(pData) {
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
        title="Embedded youtube" />
    </div>
  </>;

}
