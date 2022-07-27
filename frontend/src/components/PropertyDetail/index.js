import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import PropertyDelete from '../DeleteProperty';
import EditProperty from '../EditProperty';
import NotesList from '../GetNote'
import MapsRender from '../Maps'
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
        <div className='PropertyEditContainer'>
          <h3 className='PropertyEditDetail'>Property Detail:</h3>
          <div className='PropEditDeleteBtns'>
            <div className='PropertyEdit'>
              <EditProperty
                propertyId={{id:currentProperty}}
              />
              <PropertyDelete
                propertyId={{id:currentProperty}}
              />
            </div>
          </div>
        </div>
        <NotesList
          propertyId={{id:currentProperty}}
        />
      </div>
      <div className='Container2'>
        <div className='MapsDetail'>
          <MapsRender property={currentPropertyDetail}/>
        </div>
        <h3 className='Container2Address'>Address:
          <div>{street}, {city}, {state}, {postal}</div>
        </h3>
      </div>
    </div>
  )
};

export default SoloProperty;
