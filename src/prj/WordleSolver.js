import React from 'react';

export function WordleSolver(pData) {
  return <>

    <h3>Main problems</h3>
    <p>The main problem of this application is how to decide which word has most probability to get the best hint. </p>
    <h3>Solution</h3>
    <p>
      At first the application loads all the english words (but it can be any language) and takes all the 5 characters long.

      Taking a guess consists in counting how may times a character is found in a certain spot. For example there are many 5 letter words which ends with the letter 's'.
      The same logic is applied for every position. With the current dictionary the 5 most frequent character are in order c-a-i-e-s, caies is not a valid word for the game so the algorithm needs
      to find the nearest valid word to it, in this case is "cafes". After the guess the hints are read and the dictionary is filtered accordingly. If, for example, the letter 'c' is not found, every word with the
      letter 'c' will be filtered out. If the letter 'a' is found but not in the right spot, the algorithm filters out every word without an 'a' or with an 'a' in 2nd position.
      If letter 'f' is found in place, the algorithm keeps only the word with the letter 'f' in 3rd position.
    </p>


    <figure className="">

      <iframe title='sourceCode' style={{ minWidth: 200, width: '100%', height: '450px' }} scrolling="no" seamless="seamless" srcdoc='<html><body><style type="text/css">.gist .gist-data { height: 400px; }</style><script src="https://gist.github.com/giovannipellini/0dc60e560667059706045203637f7bf5.js"></script></body></html>'></iframe>

      <figcaption className="figure-caption">Code section of the word filter according to the List of hints.</figcaption>
    </figure>





    <h3>Demo</h3>

    <div className='d-flex justify-content-center'>
      <iframe
        width="500"
        height="300"
        src={`https://youtube.com/embed/jsX34kHNo_o`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube" />
    </div>
  </>;
}
