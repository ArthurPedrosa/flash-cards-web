import React from 'react';
import Logo from '../../assets/lamp.svg';
import { CardGameStyle } from './style';

interface IQuestion {
  question: string;
}
const CardGame: React.FC<IQuestion> = ({ question }) => {
  return (
    <CardGameStyle>
      <img className="logo" src={Logo} alt="GuessCard" />
      <h1 className="question">{question}</h1>
    </CardGameStyle>
  );
};

export default CardGame;
