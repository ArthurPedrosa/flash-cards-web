/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from 'react-router-dom';
import LogoFlashCard from '../../assets/LogoFlashCard.svg';

import { Container, Menu } from './style';

const NavBar: React.FC = () => {
  return (
    <Menu>
      <Container>
        <Link to="/">
          <img className="logo" src={LogoFlashCard} alt="FlashCard" />
        </Link>
        <nav>
          <ul className="menu-list">
            <li>
              <a href="#" className="link">
                Categorias
              </a>
              <a href="#" className="link">
                Ajuda
              </a>
              <a href="#" className="link">
                Sobre
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </Menu>
  );
};

export default NavBar;
