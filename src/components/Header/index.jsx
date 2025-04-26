import React from 'react';
import { Navbar } from 'react-bootstrap';
import './style.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="header">
      <Navbar.Brand className="mx-4 title">AutoCrud</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
