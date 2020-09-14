import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';
import Play from '../../assets/play.svg';
import Lamp from '../../assets/logoYellow.svg';

const Welcome: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <img src={Lamp} alt="Lâmpada" className="lamp" />
        <div className="title">
          <h4 className="text-title">Você está pronto para esse desafio ?</h4>
          <span className="text">
            Aprenda e aprimore o seu conhecimento, melhore o seu raciocínio e a
            sua lógica. Receba cartas com perguntas, e tente adivinhar a
            resposta correta.
          </span>
        </div>
        <Link to="/play" className="button-start">
          <img className="play" src={Play} alt="Play" />
          Start Now
        </Link>
      </div>
    </Container>
  );
};

export default Welcome;
