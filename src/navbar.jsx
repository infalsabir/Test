import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {user && (
          <li className='username'>
            <img src={user.photoURL}  />
            <span>{user.displayName}</span>
            
            <button onClick={onLogout} className='logout'>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
