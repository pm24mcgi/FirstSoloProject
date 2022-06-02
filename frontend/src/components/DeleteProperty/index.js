import {deleteProperties} from '../../store/properties'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './DeleteProperty.css'

const PropertyDelete = () => {
  const sessionUser = useSelector(state => state.session.user);
  const currentProperty = useParams().PropertyId
  console.log(useParams())

  console.log("---------->", currentProperty)
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    console.log('HandleDelete entry')
    e.preventDefault();
    console.log(currentProperty)

    await dispatch(deleteProperties(currentProperty))
    return history.push('/properties')
  };

  return (
    <button onClick={handleDelete}>
      Delete Property
    </button>
  )
};

export default PropertyDelete;
