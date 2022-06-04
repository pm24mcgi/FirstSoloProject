import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(history.push('/properties'))
      .catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
      );
  };

  const handleDefaultButton = (e) => {
    e.preventDefault();
    const credential = 'test'
    const password = 'password'
    return dispatch(sessionActions.login({ credential, password }))
        .then(() => history.push('/properties'))
        .catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
}

  return (
    <form onSubmit={handleSubmit} className='LoginModalForm'>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className='LoginModalFormInputLvl1'>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
          className='LoginModalFormInputLvl2'
        />
      </label>
      <label className='LoginModalFormInputLvl1'>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='LoginModalFormInputLvl2'
        />
      </label>
      <button type="submit" className='LoginModalFormInputLvl3'>Log In</button>
      <button id='splash-login-button' onClick={(e) => handleDefaultButton(e)}>Log In With Demo User</button>
    </form>
  );
}

export default LoginForm;
