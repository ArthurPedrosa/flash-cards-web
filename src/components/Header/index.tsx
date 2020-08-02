import React from 'react';

import  NavBar  from '../NavBar'
import  Welcome  from '../Welcome'

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <header>
      <NavBar/>
      <Welcome />
    </header>
  </Container>
);

export default Header;
