import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Main from './components/Main'
import SoloProperty from "./components/SoloProperty";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

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
                <div>random</div>
              </Route>
              <Route exact path='/properties/:PropertyId'>
                <SoloProperty />
              </Route>
            </Switch>
          )}
        </div>
        <div>Footer</div>
      </div>
    </div>
  );
}

export default App;
