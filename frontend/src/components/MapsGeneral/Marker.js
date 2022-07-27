import React from 'react';
import { Marker } from '@react-google-maps/api'

const CustomMarker = ({prop, session}) => {

let marker = {lat:39.8282, lng:-98.5795}

  return (
    <div>
      {prop.map((property) => {
          marker = {lat: Number(property.lat), lng: Number(property.long)}
          return (
            (session.id === property.userId) &&
            <Marker position={marker} />
            )
        })}
    </div>
  );
};

export default CustomMarker;
