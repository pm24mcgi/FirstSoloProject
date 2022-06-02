import {deleteProperties} from '../../store/properties'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './DeleteProperty.css'

const PropertyDelete = ({propertyId}) => {
  const sessionUser = useSelector(state => state.session.user);
  const {id} = propertyId

  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteProperties(id))
    return history.push('/properties')
  };

  return (
    <button onClick={handleDelete}>
      Delete Property
    </button>
  )
};

export default PropertyDelete;
