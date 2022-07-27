import React from 'react';
import { useEffect, useState } from 'react';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api'
import CustomMarker from './Marker';
import './Maps.css'


const MapsGeneral = ({GMapKey, session, prop}) => {

  const containerStyle = {
    height: '100%',
    width: '100%'
  };

  // mapContainerStyle={containerStyle}

  const center = {lat:39.8282, lng:-98.5795}
  const {isLoaded} = useJsApiLoader ({
    googleMapsApiKey: GMapKey,
    id: 'google-map-script'
  });

  return (
    <div>
      {isLoaded && (
        <div className='MapsMain'>
          <GoogleMap center={center} zoom={4} mapContainerStyle={containerStyle}>
            <CustomMarker prop ={prop} session={session}/>
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default MapsGeneral;
