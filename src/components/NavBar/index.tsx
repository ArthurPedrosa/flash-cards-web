import React from 'react';

import Logo from '../../assets/logoYellow.svg';

import { Container, DropdownStyles } from './style'
import DropdownOption from '../DropdownOption'
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <DropdownStyles>
      <Container>
        <Link to="/">
          <img className="logo" src={Logo} alt="GuessCard" />
        </Link>
        <nav>
          <ul className="menu-list">
            <li>
              <DropdownOption
                name="Sobre"
                content={() => <h1>Sobre</h1>}
              />
            </li>
          </ul>
        </nav>
      </Container>
    </DropdownStyles>
  )
}

export default NavBar;
