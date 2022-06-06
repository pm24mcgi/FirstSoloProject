import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGMapKey } from '../../store/maps';
import Maps from './Maps';
import './Maps.css'

const MapsRender = () => {
  const key = useSelector((state) => state.maps.googleAPIKey);
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
    <Maps GMapKey={key} />
  );
};

export default MapsRender;
