import React from 'react';
import { Logo } from '../Components/logo/logo';
import './styles/header.css';
import { Link } from 'react-router-dom';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

export function AppHeader() {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderMenu />
    </header>
  );
}
