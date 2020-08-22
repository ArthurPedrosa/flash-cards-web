import React from 'react';

import NavBar from '../../components/NavBar';
import Game from '../../components/Game';
import Footer from '../../components/Footer';

import { MainStyle } from './styles';

const Play: React.FC = () => {
  return (
    <>
    <MainStyle>
      <NavBar/>

      <div className="game-area">
        <Game/>
      </div>

      <Footer/>
    </MainStyle>
    </>
  );
};

export default Play;
