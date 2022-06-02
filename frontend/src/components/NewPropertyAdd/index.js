import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import { postProperites } from '../../store/properties'
import './NewPropertyAdd.css'


const NewPropertyAdd = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal, setPostal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = sessionUser.id

    const payload = {
      street,
      city,
      state,
      postal,
      userId
    }

    let newProperty = await dispatch(postProperites(payload))
      if (newProperty) {
       return history.push('/')
      }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    console.log(e)
    e.className === 'AddPropertyFormToggleHidden' ? e.className='AddPropertyFormToggle' : e.className='AddPropertyFormToggleHidden'
  };

  return (
    // <div onClick={handleCancelClick} className='AddPropertyFormToggle'>
      <form onSubmit={handleSubmit} className='AddPropertyForm'>
        <label  className='AddPropertyFormLvl1'>
          Street
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
            className='AddPropertyFormLvl2'
          />
        </label>
        <label  className='AddPropertyFormLvl1'>
          City
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className='AddPropertyFormLvl2'
          />
        </label>
        <label  className='AddPropertyFormLvl1'>
          State
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className='AddPropertyFormLvl2'
          />
        </label>
        <label  className='AddPropertyFormLvl1'>
          Postal
          <input
            type="text"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
            required
            className='AddPropertyFormLvl2'
          />
        </label>
        <button type="submit" className='AddPropertyFormLvl3'>+ Add New Property</button>
      </form>
    // </div>
  );
}

export default NewPropertyAdd
