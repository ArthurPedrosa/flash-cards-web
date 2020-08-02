import React from 'react';

import { Container } from './style'
import Card from '../Card'

const Welcome: React.FC = () => {
  return (
      <Container>
        <div className="content">
          <div className="title">
            <h4 className="text-title">What is Lorem Ipsum?</h4>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </span>
          </div>
          <div className="cardMenu">
            <Card />
          </div>
        </div>
      </Container>
  )
}

export default Welcome;
