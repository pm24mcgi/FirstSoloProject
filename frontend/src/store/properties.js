import { csrfFetch } from './csrf';

const LOAD = '/LOAD';

// ACTION CREATORS
const load = list => ({
  type: LOAD,
  list
});

// "THUNK" ACTIONS CREATORS
export const getProperites = () => async dispatch => {
  console.log('Thunk action creator start')
  const response = await csrfFetch(`/api/properties`);

  if (response.ok) {
    const propertyList = await response.json();
    dispatch(load(propertyList));
  }
};

// REDUCER
const propertyReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      const allProperties = {};
      action.list.forEach(property => {
      allProperties[property.id] = property;
      });
      return allProperties
    default:
      return state;
  }
}

  export default propertyReducer;
