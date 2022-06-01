import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './MainNav.css';


function MainNav({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
    sessionUser ?
    <nav className='MainNav'>
      <NavLink exact to="/" className='LandingNavBtn'>Home</NavLink>
      <div className='MainNav'>
        <ProfileButton user={sessionUser} />
      </div>
    </nav> : null
  );
}

export default MainNav;
