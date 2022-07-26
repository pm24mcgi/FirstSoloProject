import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGMapKey } from '../../store/maps';

const GetCoordinates = (address) => {

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

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`)
    .then(console.log(response => response.json()))
    .then(data => {
      const lat = data.results[0].geometry.location.lat;
      const lng = data.results[0].geometry.location.lng;
      const center = [lat, lng]
      return center
    })
};

export default GetCoordinates;
