import React from 'react';
import {useJsApiLoader, GoogleMap} from '@react-google-maps/api'


const Maps = ({GMapKey}) => {

  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {lat: 48.8584, lng: 2.2945}

  const {isLoaded} = useJsApiLoader ({
    googleMapsApiKey: GMapKey,
    id: 'google-map-script'
  });

  return (
    <div>
      {isLoaded && (
        <GoogleMap center={center} zoom={15} mapContainerStyle={containerStyle}>
        </GoogleMap>
      )}
    </div>
  );
};

export default Maps;
