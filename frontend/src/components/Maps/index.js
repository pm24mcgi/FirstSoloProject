import {useJsApiLoader, GoogleMap} from '@react-google-maps/api'

const Maps = () => {
  const center = {lat: 48.8584, lng: 2.2945}

  const {isLoaded} = useJsApiLoader ({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  return (
    <div>
      {!isLoaded && <div>Map is loading...</div>}
      {isLoaded &&
        <GoogleMap center={center} zoom={15} className='Map'>
          {/* display markers, directions */}
        </GoogleMap>
      }
    </div>
  );
};

export default Maps;
