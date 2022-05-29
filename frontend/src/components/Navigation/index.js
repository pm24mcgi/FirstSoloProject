import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='ModalBtns'>
        <div className='SignupFormModal'>
          <SignupFormModal />
        </div>
        <div className='LoginFormModal'>
          <LoginFormModal className='LoginFormModal'/>
        </div>
      </div>
    );
  }

  return (
    <nav className='LandingNav'>
      <NavLink exact to="/" className='LandingNavBtn'>Home</NavLink>
      <div>
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
