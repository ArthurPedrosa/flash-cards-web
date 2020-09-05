import React from 'react';

import CardGame from '../CardGame';
import Answer from '../Answer';

import { GameStyle } from './style';

const Game: React.FC = () => {
  const Cards = [
    {
      text: 'Jeff Bezos',
      isCorrect: true,
      why: 'US$ 113 bilhões',
    },
    {
      text: 'Bill Gates',
      isCorrect: false,
      why: 'US$ 98 bilhões',
    },
    {
      text: 'Bernard Arnault e família',
      isCorrect: false,
      why: 'US$ 76 bilhões',
    },
    {
      text: 'Warren Buffett',
      isCorrect: false,
      why: 'US$ 67,5 bilhões',
    },
  ];

  return (
    <GameStyle>
      <CardGame />
      <div className="answers">
        {Cards.map((item, index) => (
          <Answer
            key={item.text}
            answer={item.text}
            index={index}
            isCorrect={item.isCorrect}
            why={item.why}
          />
        ))}
      </div>
    </GameStyle>
  );
};

export default Game;
