import React from 'react';
import Logo from '../../assets/logo.svg';

import { ContainerCard } from './style'

const Card: React.FC = () => {
  return (
      <ContainerCard>
        <div className="card">
          <span className="title-card">Get Start ?</span>
          <img className="logo" src={Logo} alt="GuessCard" />
          <button className="button-start">Start Now</button>
        </div>
      </ContainerCard>
  )
}

export default Card;
