import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import {getProperites} from '../../store/properties'

const PropertyList = () => {
  const dispatch = useDispatch();
  const properties = useSelector(state => state.properties)
  console.log(properties)

  useEffect(() => {
    dispatch(getProperites());
  }, [dispatch]);

  if (!properties) {
    console.log('No properties to fetch')
    return null
  } else {
    return (
      <div>
        <nav>
          {properties.map((property => {
            return (
              <NavLink key={property.id} to={`/properties`}>test</NavLink>
            )
          }))}
        </nav>
      </div>
    )
  }
}

export default PropertyList;
