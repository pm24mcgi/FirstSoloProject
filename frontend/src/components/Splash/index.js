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
                    <div className='SplashDiv3Container'>
                        <div className='SplashDiv3Title'>See what R.E.mind can do for you</div>
                        <div className='SplashDiv3Text'>Sign up and take your business to the next level today</div>
                        <button onClick={() => setShowModal(true)} className='SignUpCTA'>Sign Up</button>
                            {showModal && (
                                <Modal onClose={() => setShowModal(false)}>
                                <SignupForm />
                                </Modal>
                            )}
                    </div>
                </div>
                <div className='SplashFooter'>
                    <div>@ 2022 R.E.mind</div>
                    <a className='SplashFooterLink' href='https://github.com/pm24mcgi/R.E.mind'>GitHub Repo: pm24mcgi/R.E.mind</a>
                    <div className='SplashTech'>
                        <a className='SplashFooterLink' href='https://reactjs.org/'>| React.js |</a>
                        <a className='SplashFooterLink' href='https://redux.js.org/'>| Redux |</a>
                        <a className='SplashFooterLink' href='https://expressjs.com/'>| Express |</a>
                        <a className='SplashFooterLink' href='https://www.javascript.com/'>| JavaScript |</a>
                    </div>
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
