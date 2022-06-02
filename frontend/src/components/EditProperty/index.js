import { useEffect, useState } from 'react';
import {editProperty} from '../../store/properties'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './EditProperty.css'


const EditProperty = ({propertyId}) => {


  const sessionUser = useSelector(state => state.session.user);
  const {id} = propertyId
  const propObj = useSelector(state => state.properties)
  console.log(propObj)
  const thisProp = propObj[id]
  console.log(thisProp)

  const dispatch = useDispatch();
  const history = useHistory();
  const [street, setStreet] = useState(thisProp.street || '');
  const [city, setCity] = useState(thisProp.city || '');
  const [state, setState] = useState(thisProp.state || '');
  const [postal, setPostal] = useState(thisProp.postal || '');

  // const [street, setStreet] = useState('');
  // const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  // const [postal, setPostal] = useState('');

  useEffect (() => {
    setStreet(thisProp.street)
    setCity(thisProp.city)
    setState(thisProp.state)
    setPostal(thisProp.postal)
  }, [id])


  const handleSubmit = async (e) => {
    console.log('Comp 2')
    e.preventDefault();

    const userId = sessionUser.id

    const payload = {
      id,
      street,
      city,
      state,
      postal,
      userId
    }
    console.log('Comp 3')
    await dispatch(editProperty(id, payload))
        .then(() => history.push('/properties'))
  };

  return (
    <form onSubmit={handleSubmit} className='EditPropertyForm'>
      <label  className='EditPropertyFormLvl1'>
        Street
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
          className='EditPropertyFormLvl2'
        />
      </label>
      <label  className='EditPropertyFormLvl1'>
        City
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          className='EditPropertyFormLvl2'
        />
      </label>
      <label  className='EditPropertyFormLvl1'>
        State
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
          className='EditPropertyFormLvl2'
        />
      </label>
      <label  className='EditPropertyFormLvl1'>
        Postal
        <input
          type="text"
          value={postal}
          onChange={(e) => setPostal(e.target.value)}
          required
          className='EditPropertyFormLvl2'
        />
      </label>
      <button type="submit" className='EditPropertyFormLvl3'>Edit Property</button>
    </form>
  );
}

export default EditProperty
