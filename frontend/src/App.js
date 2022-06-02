import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Main from './components/Main'
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
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/properties'>
              <div>random</div>
            </Route>
            <Route exact path='/properties/:PropertyId'>
              <div className='test10'>
                <PropertyDelete />
              </div>
            </Route>
          </Switch>
        <div>Footer</div>
        </div>
      )}
    </>
  );
}

export default App;
