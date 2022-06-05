import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import PropertyDelete from '../DeleteProperty';
import EditProperty from '../EditProperty';
import NotesList from '../GetNote'
import Maps from '../Maps'
import './PropertyDetail.css'


const SoloProperty = () => {
  const allProperties = useSelector(state => state.properties)
  const sessionUser = useSelector(state => state.session.user);
  const currentProperty = useParams().PropertyId
  const history = useHistory();
  const currentPropertyDetail = allProperties[currentProperty]
  const street = currentPropertyDetail.street
  const city = currentPropertyDetail.city
  const state = currentPropertyDetail.state
  const postal = currentPropertyDetail.postal

  if (!sessionUser) {
    history.push('/')
  }

  return (
    <div className='SoloPropContainer'>
      <div className='Container1'>
        <h2>{street}, {city}, {state}, {postal}</h2>
        <div className='PropertyEditContainer'>
          <h3>Edit Property Information:</h3>
          <div className='PropertyEdit'>
            <EditProperty
              propertyId={{id:currentProperty}}
            />
            <PropertyDelete
              propertyId={{id:currentProperty}}
            />
          </div>
        </div>
        <NotesList
          propertyId={{id:currentProperty}}
        />
      </div>
      <div className='Container2'>
        <Maps />
      </div>
    </div>
  )
};

export default SoloProperty;
