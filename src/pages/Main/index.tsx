import React from 'react';

import Header from '../../components/Header';
import Deck from '../../components/Deck';
import LogoFlashCardBackground from '../../assets/LogoFlashCardBackground.svg';

// import api from '../../services/api';

import { MainStyle, SubTitle, PrimaryDeck } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <MainStyle>
        <Header />

        <div className="half-bottom">
          <SubTitle>
            <span className="title">Categorias</span>
            <p className="text">
              Selecione uma categoria que você deseja jogar.
            </p>
          </SubTitle>
          <div className="img-background">
            <img
              className="logo"
              src={LogoFlashCardBackground}
              alt="GuessCard"
            />
          </div>

          <PrimaryDeck>
            <div className="mg">
              <Deck name="Geral" />
            </div>
            <div className="mg">
              <Deck name="Paises" />
            </div>
            <div className="mg">
              <Deck name="Cores" />
            </div>
          </PrimaryDeck>
        </div>
      </MainStyle>
    </>
  );
};

export default Main;
