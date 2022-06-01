import { csrfFetch } from './csrf';

const LOAD = '/LOAD';
const CREATE = '/CREATE'
const REMOVE = '/REMOVE'
const EDIT = '/EDIT'

// ACTION CREATORS
const load = list => ({
  type: LOAD,
  list
});

const create = property => ({
  type: CREATE,
  property
});

const remove = property => ({
  type: REMOVE,
  property
})

const edit = property => ({
  type: EDIT,
  property
})

// "THUNK" ACTIONS CREATORS
export const getProperites = () => async dispatch => {
  const response = await csrfFetch(`/api/properties`);

  if (response.ok) {
    const propertyList = await response.json();
    dispatch(load(propertyList));
    return propertyList
  }
};

export const postProperites = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/properties`, {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const detail = await response.json();
    dispatch(create(detail));
    return detail;
  }
}

export const deleteProperties = (propertyId) => async dispatch => {
  console.log('DELETE THUNK ENTRY')
  const response = await csrfFetch(`/api/properties/${propertyId}`, {
    method: 'DELETE',
    body: JSON.stringify({propertyId})
  })
  console.log('DELETE THUNK TEST')
  if (response.ok) {
    const property = await response.json();
    dispatch(remove(property.id));
  }
}

// export const editProperty = (propertyId, payload) => dispatch => {
//   const res = await csrfFetch(`/api/properties/${propertyId}`, {
//     method: "PUT",
//     body: JSON.stringify({payload})
//   })
//   const property = await res.json()
//   if (property) {
//     dispatch(edit(property))
//   }
//   return property
// }

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
      console.log(action.property)
      return {...state, [action.property.id]: action.property}
    case REMOVE:
      const deleteState = {...state};
      delete deleteState[action.property];
      return deleteState;
    default:
      return state;
  }
}

  export default propertyReducer;
