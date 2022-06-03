import {useState} from 'react'
import EditNote from '../EditNote'

const NoteDisplay = ({note}) => {

  const [editOpen, setEditOpen] = useState(false)

  return (
    <div>
      <div>{note.body}</div>
      <button onClick={() => setEditOpen(!editOpen)}>Edit Note</button>
      {editOpen && <EditNote note={note} setEditOpen={setEditOpen} />}
    </div>
  )
}

export default NoteDisplay
