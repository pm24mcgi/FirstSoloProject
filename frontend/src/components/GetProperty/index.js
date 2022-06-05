import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getProperites } from '../../store/properties'
import './PropertyList.css';

const PropertyList = () => {
  const { propertyId } = useParams();
  const dispatch = useDispatch();
  const properties = Object.values(useSelector(state => state.properties))
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(getProperites());
  }, [dispatch]);

  if (!properties) {
    return null
  } else {
    return (
      <div className='PropertyList MainDiv'>
        <nav className='PropertyList MainNav'>
        {properties.map((property) => {
          return (
            (sessionUser.id === property.userId) &&
              (<NavLink key={property.id} to={`/properties/${property.id}`}
                className={
                Number.parseInt(propertyId) === property.id
                  ? "nav-entry is-selected"
                  : "nav-entry"
              }>
                <div>
                  <div>
                    <div className="primary-text">{property.street}</div>
                  </div>
                </div>
              </NavLink>)
            )
        })}
        </nav>
      </div>
    )
  }
}

export default PropertyList;
