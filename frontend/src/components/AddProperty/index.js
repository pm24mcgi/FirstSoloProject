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
  const [errors, setErrors] = useState([]);
  const [addOpen, setAddOpen] = useState(false)

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

    dispatch(postProperites(payload))
      .then(() => history.push('/properties'))
      .then(setAddOpen(!addOpen))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      })

  };

  return (
    <div>
      <button  onClick={() => setAddOpen(!addOpen)} className='AddNewPropButton'>+ Add New Property</button>
      { addOpen &&
      <div className='AddPropertyForm'>
        <h3 id='property-create-header'>Add New Property:</h3>
        <form className='AddPropertyFormInner' onSubmit={handleSubmit}>
            {errors.length > 0 &&
              <ul  className='ErrorList'>
                  {errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>
            }
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
          <button type="submit" className='AddPropertyFormLvl3'>+ Add</button>
        </form>
        <button className='AddPropertyFormLvl3' onClick={() => setAddOpen(false)}>Cancel</button>
      </div>
      }
    </div>
  );
}

export default NewPropertyAdd
