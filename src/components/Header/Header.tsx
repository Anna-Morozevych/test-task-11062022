import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import image from '../../images/image.svg';
import logo from '../../images/logo.svg';
import menu from '../../images/menu.svg';

export const Header: React.FC = () => {
  return (
    <header className="Header">
      <Link to="/" className="Header__link">
        <img
          src={image}
          alt="headerImage"
          className="Header__image"
        />
      </Link>

      <Link to="/" className="header__link">
        <img
          src={logo}
          alt="logo"
          className="Header__logo"
        />
      </Link>

      <Link to="/" className="header__link">
        <img
          src={menu}
          alt="menu"
          className="Header__menu"
        />
      </Link>
    </header>
  );
};
