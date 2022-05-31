import React from 'react';
import { useSelector } from 'react-redux';
import PropertyList from '../PropertyList/index'
import './LandingPage.css';

function LandingPage({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    let mainDisplay;
    if (sessionUser) {
        mainDisplay = (
          <>
            <div className='MainDisplayDiv'>
              <div className='MainDisplayDiv1'>
                <PropertyList />
              </div>
              <div className='MainDisplayDiv2'>2</div>
              <div className='MainDisplayDiv3'>3</div>
            </div>
            <div>Footer</div>
          </>
        );
      } else {
        mainDisplay = (
            <div className="LPMainDiv">
                <div className='LPDiv1'>CTA 1</div>
                <div className='LPDiv2'>Component Blocks</div>
                <div className='LPDiv3'>App Picture</div>
                <div className='LPDiv4'>CTA 2</div>
                <div className='LPDiv5'>Footer</div>
            </div>
        );
      }

    return (
        <div>
            {!isLoaded && mainDisplay}
            {isLoaded && mainDisplay}
        </div>
    );
}

export default LandingPage;
