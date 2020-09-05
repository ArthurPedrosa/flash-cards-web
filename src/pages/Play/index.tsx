import React from 'react';

import { useFetch } from '../../hooks/useFetch';

import NavBar from '../../components/NavBar';
import Game from '../../components/Game';

import { MainStyle } from './styles';

const Play: React.FC = () => {
  const { data } = useFetch('/cards/random');

  if (!data) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <MainStyle>
        <NavBar />

        <div className="game-area">
          <Game question={data.question} answers={data.answers} />
        </div>
      </MainStyle>
    </>
  );
};

export default Play;
