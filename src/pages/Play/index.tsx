import React from 'react';

import NavBar from '../../components/NavBar';
import Game from '../../components/Game';

import { MainStyle } from './styles';

const Play: React.FC = () => {
  return (
    <>
      <MainStyle>
        <NavBar />

        <div className="game-area">
          <Game />
        </div>
      </MainStyle>
    </>
  );
};

export default Play;
