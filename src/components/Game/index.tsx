import React from 'react';

import CardGame from '../CardGame';
import Answer from '../Answer';

import { GameStyle } from './style';

interface IAnswer {
  text: string;
  isCorrect: boolean;
  why: string;
}
interface ICard {
  question: string;
  answers: IAnswer[];
}

const Game: React.FC<ICard> = ({ question, answers }) => {
  return (
    <GameStyle>
      <CardGame question={question} />
      <div className="answers">
        {answers.map((answer, index) => (
          <Answer
            key={answer.text}
            answer={answer.text}
            index={index}
            isCorrect={answer.isCorrect}
            why={answer.why}
          />
        ))}
      </div>
    </GameStyle>
  );
};

export default Game;
