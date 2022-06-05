import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm'
import './Splash.css';

function Main({ isLoaded }){
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    let mainDisplay;
    if (sessionUser) {
        history.push('/properties')
      } else {
        mainDisplay = (
            <div className="SplashMainDiv">
                <div className='SplashDiv1'>
                    <div>
                        <div className='SplashLogo1'></div>
                        <div className='SplashTextDiv1Container'>
                            <div className='SplashTextDiv1Child1'>Meet the last Real Estate companion app you'll ever need.</div>
                            <div className='SplashTextDiv1Child2'>R.E.mind has everything your business needs to succeed all within one powerful platform.</div>
                        </div>
                    </div>
                    <div className='SplashAppPhoto1'></div>
                </div>
                <div className='SplashDiv2'>
                    <div className='CompBlock'>
                        <div className='CompBlockImg One'></div>
                        <div className='CompBlockTitle 1'>Multi-family</div>
                        <div className='CompBlockText 1'>Streamlined processes and smart automation free your team to focus on delivering an outstanding resident experience.</div>
                    </div>
                    <div className='CompBlock'>
                        <div className='CompBlockImg Two'></div>
                        <div className='CompBlockTitle 2'>Single-family</div>
                        <div className='CompBlockText 2'>From maintenance to accounting operations, with R.E.mind your team can do anything from anywhere in a fully digital environment.
                    </div>
                    </div>
                    <div className='CompBlock'>
                        <div className='CompBlockImg Three'></div>
                        <div className='CompBlockTitle 3'>Commercial</div>
                        <div className='CompBlockText 3'>Whether through our purpose-built note tools or the ability to easily surface information, R.E.mind has your commercial needs covered.</div>
                    </div>
                    <div className='CompBlock'>
                        <div className='CompBlockImg Four'></div>
                        <div className='CompBlockTitle 4'>Hit every deadline</div>
                        <div className='CompBlockText 4'>Create notes with due dates, flags and reminders so nothing falls through the cracks.
                    </div>
                    </div>
                </div>
                <div className='SplashDiv3'>
                    <div></div>
                    <button onClick={() => setShowModal(true)} className='LandingNavBtn'>Sign Up</button>
                        {showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                            <SignupForm />
                            </Modal>
                        )}
                </div>
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
