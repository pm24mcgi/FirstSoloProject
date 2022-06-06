import {useState} from 'react'
import EditNote from '../EditNote'
import DeleteNote from '../DeleteNote'
import './NoteDisplay.css'

const NoteDisplay = ({note}) => {

  const [editOpen, setEditOpen] = useState(false)

  return (
    <div className='NotesDisplayContainer'>
      <div className='NoteText'>
        <div className='NoteDesctiption'>{note.description}</div>
        <div>{note.body}</div>
      </div>
      <div className='NoteDetailBtns'>
        <button className='NoteDetailBtn' onClick={() => setEditOpen(!editOpen)}>Edit</button>
        <DeleteNote note={note}/>
      </div>
      {editOpen && <EditNote note={note} setEditOpen={setEditOpen} />}
    </div>
  )
}

export default NoteDisplay
