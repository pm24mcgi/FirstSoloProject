import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from './components/LandingPage'
import PropertyDelete from "./components/DeleteProperty";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <div>
          <LandingPage />
          <Switch>
            <Route path='/properties/:PropertyId'>
              <PropertyDelete />
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
