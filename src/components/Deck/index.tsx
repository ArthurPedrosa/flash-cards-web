import React from 'react';

import { ContainerDeck } from './style'

interface iDeck {
  name: string;
}

const Deck: React.FC<iDeck> = ({
  name
}: iDeck) => {
  return (
      <ContainerDeck>
        <div className="imageSlot">
          {/* slot to put images */}
        </div>
        <span className="text">{name}</span>
      </ContainerDeck>
  )
}

export default Deck;
