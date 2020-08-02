import React from 'react';

import { ContainerDeck } from './style'

interface IDeck {
  name: string;
}

const Deck: React.FC<IDeck> = ({
  name
}: IDeck) => {
  return (
      <ContainerDeck>
        <div className="image-slot">
          {/* slot to put images */}
        </div>
        <span className="text">{name}</span>
      </ContainerDeck>
  )
}

export default Deck;
