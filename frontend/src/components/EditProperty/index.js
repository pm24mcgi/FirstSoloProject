import { useEffect, useState } from 'react';
import {editProperty} from '../../store/properties'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './EditProperty.css'


const EditProperty = ({propertyId}) => {


  const sessionUser = useSelector(state => state.session.user);
  const {id} = propertyId
  // const propObj = useSelector(state => state.properties)
  // const thisProp = propObj[id]

  const dispatch = useDispatch();
  const history = useHistory();
  const [streetEDIT, setStreetEDIT] = useState("");
  const [cityEDIT, setCityEDIT] = useState("");
  const [stateEDIT, setStateEDIT] = useState("");
  const [postalEDIT, setPostalEDIT] = useState("");
  const [errorsEDIT, setErrorsEDIT] = useState([]);

  // const [street, setStreet] = useState(thisProp.street || '');
  // const [city, setCity] = useState(thisProp.city || '');
  // const [state, setState] = useState(thisProp.state || '');
  // const [postal, setPostal] = useState(thisProp.postal || '');

  // useEffect (() => {
  //   setStreet(thisProp.street)
  //   setCity(thisProp.city)
  //   setState(thisProp.state)
  //   setPostal(thisProp.postal)
  // }, [id])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = sessionUser.id

    const payload = {
      id,
      streetEDIT,
      cityEDIT,
      stateEDIT,
      postalEDIT,
      userId
    }

    dispatch(editProperty(id, payload))
        .then(() => history.push('/properties'))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrorsEDIT(data.errors);
        })
  };

  return (
    <form onSubmit={handleSubmit} className='EditPropertyForm'>
      {errorsEDIT.length > 0 &&
        <ul>
            {errorsEDIT.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      }
      <label  className='EditPropertyFormLvl1'>
        Street
        <input
          type="text"
          value={streetEDIT}
          onChange={(e) => setStreetEDIT(e.target.value)}
          required
          className='EditPropertyFormLvl2'
        />
      </label>
      <label  className='EditPropertyFormLvl1'>
        City
        <input
          type="text"
          value={cityEDIT}
          onChange={(e) => setCityEDIT(e.target.value)}
          required
          className='EditPropertyFormLvl2'
        />
      </label>
      <label  className='EditPropertyFormLvl1'>
        State
        <input
          type="text"
          value={stateEDIT}
          onChange={(e) => setStateEDIT(e.target.value)}
          required
          className='EditPropertyFormLvl2'
        />
      </label>
      <label  className='EditPropertyFormLvl1'>
        Postal
        <input
          type="text"
          value={postalEDIT}
          onChange={(e) => setPostalEDIT(e.target.value)}
          required
          className='EditPropertyFormLvl2'
        />
      </label>
      <button type="submit" className='EditPropertyFormLvl3'>Edit Property</button>
    </form>
  );
}

export default EditProperty
