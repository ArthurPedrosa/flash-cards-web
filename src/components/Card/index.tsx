import React from 'react';
import Logo from '../../assets/logo.svg';

import { ContainerCard } from './style'

const Card: React.FC = () => {
  return (
      <ContainerCard>
        <div className="card">
          <span className="titleCard">Get Start ?</span>
          <img className="logo" src={Logo} alt="GuessCard" />
          <button className="buttonStart">Start Now</button>
        </div>
      </ContainerCard>
  )
}

export default Card;
