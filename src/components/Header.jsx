import React from 'react';
import '../Styles/Header.css'

function Header() {
  return (
    <header className="header">
      <h1>Healthcare.</h1>
      <input type="text" placeholder="Search..." disabled />
      <div className="icons">
        <span>🔔</span>
        <span>User Name</span>
        <button>+</button>
      </div>
    </header>
  );
}

export default Header;
