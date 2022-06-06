import React from 'react';
import {useJsApiLoader, GoogleMap} from '@react-google-maps/api'


const Maps = ({key}) => {

  const center = {lat: 48.8584, lng: 2.2945}

  const {isLoaded} = useJsApiLoader ({
    googleAPIKey: key,
    id: 'google-map-script'
  });

  return (
    <div>
      {isLoaded && (
        <GoogleMap center={center} zoom={15} className='Map'>
          {/* display markers, directions */}
        </GoogleMap>
      )}
    </div>
  );
};

export default Maps;
