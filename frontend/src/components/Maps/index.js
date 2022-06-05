import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGMapKey } from '../../store/maps';
import Maps from './Maps';

const MapsRender = () => {
  const key = useSelector((state) => state.maps.key);
  console.log(key)
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
    <Maps key={key} />
  );
};

export default MapsRender;
