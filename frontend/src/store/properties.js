import { csrfFetch } from './csrf';

const LOAD = '/LOAD';
const CREATE = '/CREATE'

// ACTION CREATORS
const load = list => ({
  type: LOAD,
  list
});

const create = property => ({
  type: CREATE,
  property
});

// "THUNK" ACTIONS CREATORS
export const getProperites = () => async dispatch => {
  const response = await csrfFetch(`/api/properties`);

  if (response.ok) {
    const propertyList = await response.json();
    dispatch(load(propertyList));
  }
};

export const postProperites = (payload) => async dispatch => {
  console.log('postProperties ENTRY----')
  const response = await csrfFetch(`/api/properties`, {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     },
    body: JSON.stringify(payload)
  });

  console.log(payload)
  console.log(JSON.stringify(payload))

  console.log('postProperties MIDDLE----')
  console.log(response)

  if (response.ok) {
    const detail = await response.json();
    console.log('postProperties EXIT----')
    dispatch(create(detail));
    return detail;
  }
}

// REDUCER
const propertyReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      const allProperties = {};
      action.list.forEach(property => {
      allProperties[property.id] = property;
      });
      return allProperties
    case CREATE:
      console.log ('Reducer ENTRY----')
      return {...state, [action.property.id]: action.property}
    default:
      return state;

  }

}

  export default propertyReducer;
