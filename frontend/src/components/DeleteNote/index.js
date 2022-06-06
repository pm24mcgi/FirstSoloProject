import { useEffect, useState } from 'react';
import {deleteNote} from '../../store/notes'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './DeleteNote.css'

const DeleteNote = ({note}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const propertyId = note.propertyId;
  const id = note.id;

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteNote(id))
    return history.push(`/properties/${propertyId}`)
  };

  return (
    <button className='NoteDetailBtn' onClick={handleDelete}>
      Delete
    </button>
  )
};

export default DeleteNote;
