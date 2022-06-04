import {useState} from 'react'
import EditNote from '../EditNote'
import DeleteNote from '../DeleteNote'

const NoteDisplay = ({note}) => {

  const [editOpen, setEditOpen] = useState(false)

  return (
    <div>
      <div>{note.body}</div>
      <button onClick={() => setEditOpen(!editOpen)}>Edit Note</button>
      <DeleteNote note={note}/>
      {editOpen && <EditNote note={note} setEditOpen={setEditOpen} />}
    </div>
  )
}

export default NoteDisplay
