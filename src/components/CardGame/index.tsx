import React from 'react';
import Logo from '../../assets/lamp.svg';
import { CardGameStyle } from './style'

const CardGame: React.FC = () => {
  return (
    <CardGameStyle>
      <img className="logo" src={Logo} alt="GuessCard" />
      <h1 className="question">
        Who is the richest person in the world in 2020?
      </h1>
    </CardGameStyle>
  )
}

export default CardGame;
