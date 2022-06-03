import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getNotes } from '../../store/notes'
import './NoteList.css';

const PropertyList = ({propertyId}) => {
  const {id} = propertyId

  const dispatch = useDispatch();
  const notes = Object.values(useSelector(state => state.notes))

  console.log('notes ------>', notes)

  useEffect (() => {
    dispatch(getNotes(id))
  }, [id])
  console.log(notes)

  return (
    <>
      {notes.length > 0 &&
        notes.map((note) => { return (
          <div>Property Description:{note.body}</div>
        )
      })}
    </>
  )
}

export default PropertyList;
