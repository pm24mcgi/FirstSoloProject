import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import PropertyDelete from '../DeleteProperty';
import './SoloProperty.css'


const SoloProperty = () => {
  const sessionUser = useSelector(state => state.session.user);
  const currentProperty = useParams().PropertyId

  return (
    <div>
      <PropertyDelete
        propertyId={{id:currentProperty}}
      />
    </div>
  )
};

export default SoloProperty;
