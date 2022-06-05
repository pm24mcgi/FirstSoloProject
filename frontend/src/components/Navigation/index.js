import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal'
import PropertyList from '../GetProperty/index'
import NewPropertyAdd from '../AddProperty/index'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <nav className="LandingNav">
        <div className="MainNav">
          <div className='Properties Nav'>
            <div className="PropertiesNav Internal">
              <NavLink exact to="/properties" className='HomeBtn'>Home</NavLink>
              <ProfileButton user={sessionUser} />
            </div>
              <NewPropertyAdd />
              <PropertyList />
          </div>
        </div>
      </nav>
    );
  } else {
    sessionLinks = (
      <div className="SpashPageNav">
        <div className='ModalBtns'>
          <div className="SpashPageNavLogo"></div>
          <div className="SignupLoginBtns">
            <div className='SignupFormModal'>
              <SignupFormModal />
            </div>
            <div className='LoginFormModal'>
              <LoginFormModal className='LoginFormModal'/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoaded && sessionLinks}
    </>
  );
}

export default Navigation;
