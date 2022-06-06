import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getNotes } from '../../store/notes'
import PostNote from '../AddNote';
import NoteDisplay from '../NoteDisplay';
import './NoteList.css';

const PropertyList = ({propertyId}) => {
  const {id} = propertyId
  const [addNoteOpen, setAddNoteOpen] = useState(false)

  const dispatch = useDispatch();
  const notes = Object.values(useSelector(state => state.notes))
  const noteWatch = notes.length

  useEffect (() => {
    dispatch(getNotes(id))
  }, [noteWatch, id])

  return (
    <div className='GetNotesContainer'>
      <div className='GetNotesHeaderContainer'>
        <h2 className='GetNotesHeader'>Notes:</h2>
        <button onClick={() => setAddNoteOpen(!addNoteOpen)} className='AddNoteButton'>+ Add Note</button>
      </div>
      {addNoteOpen && <PostNote id={id} setAddNoteOpen={setAddNoteOpen} />}
      <div className='NotesListContainer'>
        {notes.length > 0 &&
          notes.map((note) => { return (
            <NoteDisplay key={note.id} note={note} />
          )
        })}
        {notes.length === 0 &&
          <div>No notes have been added</div>
        }
      </div>
    </div>
  )
}

export default PropertyList;
