import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/lamp.svg';
import Play from '../../assets/play.svg';

import { ContainerCard } from './style';

const Card: React.FC = () => {
  return (
    <ContainerCard>
      <div className="card">
        <span className="title-card">FlashCard</span>
        <img className="logo" src={Logo} alt="GuessCard" />
        <Link to="/play" className="button-start">
          <img className="play" src={Play} alt="Play" />
          Start Now
        </Link>
      </div>
    </ContainerCard>
  );
};

export default Card;
