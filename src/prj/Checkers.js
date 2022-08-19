import React from 'react';

export function Checkers(pData) {
  return <>



    <h3>FrontEnd</h3>
    <p>The FrontEnd is built in Angular, each element of the game (board, cell, piece) is a separate component so this elements can be reused
      multiple times with different layouts. For example in the main board pawns and kings are rendered as SVGs while in the smaller boards are simples rounded divs.</p>


    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/Checkers/Main.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">The Main Board with SVG pieces</figcaption>
      </figure>
    </div>


    <h3>BackEnd</h3>

    <p>
      The BackEnd is built in Java using Spring Boot Framework. It features several APIs to manage the game state and move suggestion. Here is an example of API the FrontEnd can invoke.
      <ul>
        <li>Get possible moves</li>
        <li>Resolve a move</li>
        <li>Get hint for the best move</li>
        <li>Get the list of evaluation for the best possible moves</li>
      </ul>

    </p>




    <h4>Best Moves</h4>
    <p>

      The best move is found by exploring the tree of possible moves using the MinMax strategy. For each move a score is assigned based on the board state. Some criteria are:
      <ul>
        <li>Difference between number of pawns and kings for current and opponent player</li>
        <li>Number of krowned pieces</li>
        <li>Piece positioning</li>

      </ul>

    </p>

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/Checkers/Tree.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Example of tree of possible moves</figcaption>
      </figure>
    </div>



    <p>
      One interesting feature is to explore a board state and get an evaluation of the possible moves, so the player can determine is his move was good or bad based on the application prediction.

      Here is and example of this feature:
    </p>

    <div className='d-flex justify-content-center'>
      <figure className="figure">
        <img src='/img/Checkers/MoveEvaluation.png' className="img-fluid" alt="..." />
        <figcaption className="figure-caption">Example of move evaluation</figcaption>
      </figure>
    </div>

  </>;
}
