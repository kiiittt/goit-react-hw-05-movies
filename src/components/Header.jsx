import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.Header}>
      <ul className={css.List}>
        <li>
          <NavLink to="/" className={css.Link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={css.Link}>
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
