import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getProperites } from '../../store/properties'
import './PropertyList.css';

const PropertyList = () => {
  const { propertyId } = useParams();
  const dispatch = useDispatch();
  const properties = Object.values(useSelector(state => state.properties))

  useEffect(() => {
    console.log('---BEFORE---')
    dispatch(getProperites());
    console.log('---AFTER---')
  }, [dispatch]);

  if (!properties) {
    console.log('No properties to fetch')
    return null
  } else {
    console.log(properties)
    return (
      <div>
        <nav>
        {properties.map((property) => {
          return (
            <NavLink key={property.id} to={`/properties/${property.id}`}
              className={
              Number.parseInt(propertyId) === property.id
                ? "nav-entry is-selected"
                : "nav-entry"
            }>
              <div>
                <div>
                  <div className="primary-text">{property.address}</div>
                </div>
              </div>
            </NavLink>
          )
        })}
        </nav>
      </div>
    )
  }
}

export default PropertyList;
