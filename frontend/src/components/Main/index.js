import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import PropertyList from '../PropertyList/index'
import NewPropertyAdd from '../NewPropertyAdd/index'
import PropertyDelete from '../DeleteProperty/index'
import './Main.css';

function Main({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);

    let mainDisplay;
    if (sessionUser) {
        mainDisplay = (
          <>
            <div className='MainDisplayDiv'>
              <div className='MainDisplayDiv1'>
                {/* <NewPropertyAdd />
                <PropertyList /> */}
              </div>
              {/* <div className='MainDisplayDiv2'>2</div>
                <PropertyDelete />
              <div className='MainDisplayDiv3'>3</div> */}
            </div>
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

export default Main;
