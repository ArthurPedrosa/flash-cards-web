import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Deck from '../../components/Deck';

// import api from '../../services/api';

import { MainStyle, SubTitle, PrimaryDeck, FinalText } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <MainStyle>
        <Header />

        <SubTitle>
          <span className="title">Lorem Ipsum</span>
          <p>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          </p>
        </SubTitle>

        <PrimaryDeck> {/* Decks principais Temporariamente assim, depois colocamos em um "v-for" */}
          <div className="mg">
            <Deck
              name="Animais"
            />
          </div>

          <div className="mg">
            <Deck
              name="Geral"
            />
          </div>

          <div className="mg">
            <Deck
              name="Paises"
            />
          </div>

          <div className="mg">
            <Deck
              name="Comidas"
            />
          </div>
        </PrimaryDeck>

        <FinalText>
          <span className="title"> Why do we use it? </span>
          <p className="text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
            for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over
            the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </FinalText>

        <Footer />

      </MainStyle>
    </>
  );
};

export default Main;
