import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getNotes } from '../../store/notes'
import EditProperty from '../EditProperty';
import NoteDisplay from '../NoteDisplay';
import './NoteList.css';

const PropertyList = ({propertyId}) => {
  const {id} = propertyId

  const dispatch = useDispatch();
  const notes = Object.values(useSelector(state => state.notes))

  useEffect (() => {
    dispatch(getNotes(id))
  }, [dispatch, id])

  return (
    <>
      <h2>Notes List</h2>
      {notes.length > 0 &&
        notes.map((note) => { return (
          <NoteDisplay note={note} />
        )
      })}
      {notes.length === 0 &&
        <div>No notes have been added</div>
      }
    </>
  )
}

export default PropertyList;
