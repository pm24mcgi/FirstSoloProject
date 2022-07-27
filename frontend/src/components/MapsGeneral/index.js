import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGMapKey } from '../../store/maps';
import MapsGeneral from './MapsGeneral';
import './Maps.css'

const MapsGeneralRender = () => {
  const key = useSelector((state) => state.maps.googleAPIKey);
  const sessionUser = useSelector(state => state.session.user)
  const properties = Object.values(useSelector(state => state.properties))
  const dispatch = useDispatch();

  useEffect(() => {
    if (!key) {
      dispatch(getGMapKey());
    }
  }, [dispatch, key]);

  if (!key) {
    return null;
  }

  return (
    <MapsGeneral GMapKey={key} session={sessionUser} prop={properties} />
  );
};

export default MapsGeneralRender;
