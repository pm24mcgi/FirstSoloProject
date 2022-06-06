import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Main from './components/Splash'
import SoloProperty from "./components/PropertyDetail";
import MapsRender from './components/Maps'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (!sessionUser) {
    history.push('/')
  }

  return (
    <div className='TopLevelParentContainer'>
      <Navigation isLoaded={isLoaded} />
      <div className='TopLevelInternalContainer'>
        <div className='BottomLevelInternalContainer'>
          {isLoaded && (
            <Switch>
              <Route exact path='/'>
                <Main />
              </Route>
              <Route exact path='/properties'>
                <div>
                  TEST
                  <MapsRender />
                </div>
              </Route>
              <Route exact path='/properties/:PropertyId'>
                <SoloProperty />
              </Route>
            </Switch>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
