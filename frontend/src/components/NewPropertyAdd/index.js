// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink, Route, useParams } from 'react-router-dom';
// import { getProperites } from '../../store/properties'
// import './NewPropertyAdd.css'


// const NewPropertyAdd = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getProperites());
//   }, [dispatch]);

//   return (
//     <form onSubmit={handleSubmit} className='SignupModalForm'>
//       <ul>
//         {errors.map((error, idx) => <li key={idx}>{error}</li>)}
//       </ul>
//       <label  className='SignupModalFormInputLvl1'>
//         Email
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className='SignupModalFormInputLvl2'
//         />
//       </label>
//       <label  className='SignupModalFormInputLvl1'>
//         Username
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           className='SignupModalFormInputLvl2'
//         />
//       </label>
//       <label  className='SignupModalFormInputLvl1'>
//         First Name
//         <input
//           type="text"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//           className='SignupModalFormInputLvl2'
//         />
//       </label>
//       <label  className='SignupModalFormInputLvl1'>
//         Last Name
//         <input
//           type="text"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           required
//           className='SignupModalFormInputLvl2'
//         />
//       </label>
//       <label  className='SignupModalFormInputLvl1'>
//         Password
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className='SignupModalFormInputLvl2'
//         />
//       </label>
//       <label  className='SignupModalFormInputLvl1'>
//         Confirm Password
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//           className='SignupModalFormInputLvl2'
//         />
//       </label>
//       <button type="submit" className='SignupModalFormInputLvl3'>Sign Up</button>
//     </form>
//   );
// }

// export default NewPropertyAdd
