import React from "react";
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header className='welcome-header'>
        <h1>Welcome to the ultimate fan site!</h1>
        <div className='link-container'>
          <Link className='characters-link' to='/characters'>List of Characters</Link>
          <Link className='characters-link' to='/locations'>List of Locations</Link>
        </div>
      </header>
      <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
    </section>
  );
}