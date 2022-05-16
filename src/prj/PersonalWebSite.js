import React from 'react';
import { GistCode } from '../GistCode';

export function PersonalWebSite(pData) {
  return <>
    <h5>Features</h5>
    <p>A JSON file stores all the projects descriptions and features. In this way every element can be rendered as a React Component in different sections.</p>

    <p>Source code is displayed thanks to gist from github (<a href='https://gist.github.com'>https://gist.github.com</a>), a custom functional component is used to display source code</p>
    <figure className="">
      {GistCode("https://gist.github.com/giovannipellini/b8bc15581416a57f0ee2de096299df8a.js")}
      <figcaption className="figure-caption">JSON Project Data.</figcaption>
    </figure>
  </>;

}
