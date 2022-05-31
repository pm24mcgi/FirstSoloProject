import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form onSubmit={handleSubmit} className='SignupModalForm'>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label  className='SignupModalFormInputLvl1'>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='SignupModalFormInputLvl2'
        />
      </label>
      <label  className='SignupModalFormInputLvl1'>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='SignupModalFormInputLvl2'
        />
      </label>
      <label  className='SignupModalFormInputLvl1'>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='SignupModalFormInputLvl2'
        />
      </label>
      <label  className='SignupModalFormInputLvl1'>
        First Name
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className='SignupModalFormInputLvl2'
        />
      </label>
      <label  className='SignupModalFormInputLvl1'>
        Last Name
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className='SignupModalFormInputLvl2'
        />
      </label>
      <label  className='SignupModalFormInputLvl1'>
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className='SignupModalFormInputLvl2'
        />
      </label>
      <button type="submit" className='SignupModalFormInputLvl3'>Sign Up</button>
    </form>
  );
}

export default SignupForm;
