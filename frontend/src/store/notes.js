import { csrfFetch } from './csrf';

const LOAD = '/notes/LOAD';
const CREATE = '/notes/CREATE'
const REMOVE = '/notes/REMOVE'
const EDIT = '/notes/EDIT'

// ACTION CREATORS
const load = list => ({
  type: LOAD,
  list
});

const create = note => ({
  type: CREATE,
  note
});

const remove = note => ({
  type: REMOVE,
  note
})

const edit = note => ({
  type: EDIT,
  note
});

// "THUNK" ACTIONS CREATORS
export const getNotes = (propertyId) => async dispatch => {
  const response = await csrfFetch(`/api/notes/${propertyId}`, {
        method: 'GET',
      });

  if (response.ok) {
    const noteList = await response.json();
    dispatch(load(noteList));
    return noteList
  }
};

export const deleteNote = (noteId) => async dispatch => {
  const response = await csrfFetch(`/api/notes/${noteId}`, {
    method: 'DELETE',
    body: JSON.stringify({noteId})
  })
  if (response.ok) {
    const note = await response.json();
    dispatch(remove(note.id));
  }
}

export const editNote = (propertyId, payload) => async dispatch => {
  const res = await csrfFetch(`/api/notes/${propertyId}`, {
    method: "PUT",
    body: JSON.stringify({propertyId, payload})
  })

  const note = await res.json()
  if (note) {
    dispatch(edit(note))
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
    case EDIT:
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
