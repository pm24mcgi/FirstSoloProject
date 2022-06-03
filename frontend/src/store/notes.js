import { csrfFetch } from './csrf';

const LOAD = '/notes/LOAD';
const CREATE = '/notes/CREATE'
const REMOVE = '/notes/REMOVE'

// ACTION CREATORS
const load = list => ({
  type: LOAD,
  list
});

const create = note => ({
  type: CREATE,
  note
});

const remove = noteId => ({
  type: REMOVE,
  noteId
})

// "THUNK" ACTIONS CREATORS
export const getNotes = (propertyId) => async dispatch => {
  const response = await csrfFetch(`/api/notes/${propertyId}`, {
        method: 'GET',
        // body: JSON.stringify({propertyId})
      });

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

export const editNote = (propertyId, payload) => async dispatch => {
  const res = await csrfFetch(`/api/notes/${propertyId}`, {
    method: "PUT",
    body: JSON.stringify({propertyId, payload})
  })

  const note = await res.json()
  if (note) {

    dispatch(create(note))
  }
  return note
}

// REDUCER
const noteReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      const allNotes = {};
      action.list.forEach(note => {
        allNotes[note.id] = note;
      });
      return allNotes
    case CREATE:
      return {...state, [action.note.id]: action.note}
    case REMOVE:
      const deleteState = {...state};
      delete deleteState[action.noteId];
      return deleteState;
    default:
      return state;
  }
}

  export default noteReducer;
