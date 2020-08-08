import React from 'react';

import { ContainerDeck } from './style'

interface IDeck {
  name: string;
}

const Deck: React.FC<IDeck> = ({
  name
}: IDeck) => {
  return (
      <ContainerDeck title={name}>
          {/* imagem temporaria */}
        <img className="image-slot" src="https://portal-amb-imgs.clubedaana.com.br/2018/11/pastel-de-feira.jpg" alt="country"/>
        <span className="text">{name}</span>
      </ContainerDeck>
  )
}

export default Deck;
