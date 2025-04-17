import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#282c34' }}>
      <Link style={{ marginRight: '1rem', color: 'white' }} to="/">Home</Link>
      <Link style={{ marginRight: '1rem', color: 'white' }} to="/login">Login</Link>
      <Link style={{ color: 'white' }} to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;