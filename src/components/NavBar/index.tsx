import React from 'react';

import Logo from '../../assets/logoTexto.svg';

import { Container, DropdownStyles } from './style'
import DropdownOption from '../DropdownOption'

const NavBar: React.FC = () => {
  return (
    <DropdownStyles>
      <Container>
        <img className="logo" src={Logo} alt="GuessCard" />
        <nav>
          <ul className="menu-list">
            <li>
              <DropdownOption
                name="Categorias"
                content={() => <h1>Categorias</h1>}
              />
            </li>
          </ul>
        </nav>
      </Container>
    </DropdownStyles>
  )
}

export default NavBar;
