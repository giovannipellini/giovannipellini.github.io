import React from 'react';

export function GistCode(gistURL) {
  return <iframe title='sourceCode' style={{ minWidth: 200, width: '100%', height: '450px' }} scrolling="no" seamless="seamless" srcdoc={GistURL(gistURL)}></iframe>;
}
function GistURL(gistURL) {
  return '<html><body><style type="text/css">.gist .gist-data { height: 400px; }</style><script src="' + gistURL + '"></script></body></html>';
}
