import React from 'react';
import { useEffect, useState } from 'react';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api'


const Maps = ({GMapKey}) => {

  const [result, setResult] = useState({lat: 38.57528494361009, lng: -90.2932520234125})

  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {lat: result.lat, lng: result.lng}

  const {isLoaded} = useJsApiLoader ({
    googleMapsApiKey: GMapKey,
    id: 'google-map-script'
  });

  return (
    <div>
      {isLoaded && (
        <GoogleMap center={center} zoom={16} mapContainerStyle={containerStyle}>
          <Marker position={center} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Maps;
