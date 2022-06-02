import { csrfFetch } from './csrf';

const LOAD = '/LOAD';
// const CREATE = '/CREATE'
// const REMOVE = '/REMOVE'

// ACTION CREATORS
const load = list => ({
  type: LOAD,
  list
});

// const create = property => ({
//   type: CREATE,
//   property
// });

// const remove = property => ({
//   type: REMOVE,
//   property
// })

// "THUNK" ACTIONS CREATORS
export const getNotes = () => async dispatch => {
  const response = await csrfFetch(`/api/notes`);

  if (response.ok) {
    const noteList = await response.json();
    dispatch(load(noteList));
    return noteList
  }
};

// export const postProperites = (payload) => async dispatch => {
//   const response = await csrfFetch(`/api/properties`, {
//     method: 'POST',
//     body: JSON.stringify(payload)
//   });

//   if (response.ok) {
//     const detail = await response.json();
//     dispatch(create(detail));
//     return detail;
//   }
// }

// export const deleteProperties = (propertyId) => async dispatch => {
//   const response = await csrfFetch(`/api/properties/${propertyId}`, {
//     method: 'DELETE',
//     body: JSON.stringify({propertyId})
//   })
//   if (response.ok) {
//     const property = await response.json();
//     dispatch(remove(property.id));
//   }
// }

// export const editProperty = (propertyId, payload) => async dispatch => {
//   const res = await csrfFetch(`/api/properties/${propertyId}`, {
//     method: "PUT",
//     body: JSON.stringify({propertyId, payload})
//   })

//   const property = await res.json()
//   if (property) {

//     dispatch(create(property))
//   }
//   return property
// }

// REDUCER
const noteReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      const allNotes = {};
      action.list.forEach(note => {
        allNotes[note.id] = note;
      });
      return allNotes
    // case CREATE:
    //   return {...state, [action.property.id]: action.property}
    // case REMOVE:
    //   const deleteState = {...state};
    //   delete deleteState[action.property];
    //   return deleteState;
    default:
      return state;
  }
}

  export default noteReducer;
