import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import PropertyDelete from '../DeleteProperty';
import EditProperty from '../EditProperty';
import NotesList from '../NotesList'
import './SoloProperty.css'


const SoloProperty = () => {
  const currentProperty = useParams().PropertyId

  return (
    <div>
      <PropertyDelete
        propertyId={{id:currentProperty}}
      />
      <EditProperty
        propertyId={{id:currentProperty}}
      />
      <NotesList
        propertyId={{id:currentProperty}}
      />
    </div>
  )
};

export default SoloProperty;
