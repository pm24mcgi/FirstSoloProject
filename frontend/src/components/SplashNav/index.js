import React from 'react';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal'
import './SplashNav.css';

function SplashNav ({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
    !sessionUser ?
    <nav className='SplashNav-Container'>
      <div className='SplashNav'>
        <div className='ModalBtns'>
          <div className='SignupFormModal'>
            <SignupFormModal />
          </div>
          <div className='LoginFormModal'>
            <LoginFormModal className='LoginFormModal'/>
          </div>
        </div>
      </div>
    </nav>
    : null
  );
}

export default SplashNav
