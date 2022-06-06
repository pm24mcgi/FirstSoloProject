import { useEffect, useState } from 'react';
import {editNote} from '../../store/notes'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './EditNote.css';


const EditNote = ({note, setEditOpen}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const propertyId = note.propertyId;
  const id = note.id;

  const noteObject = useSelector(state => state.notes)
  const thisNote = noteObject[id]

  const [description, setDescription] = useState(thisNote.description || '');
  const [body, setBody] = useState(thisNote.body || '');

  useEffect (() => {
    setDescription(thisNote.description)
    setBody(thisNote.body)
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id,
      description,
      body,
      propertyId
    };
    await dispatch(editNote(id, payload))
        .then(() => history.push(`/properties/${propertyId}`))
        .then(() => {setEditOpen(false)})
  };

  return (
    <div className='EditNoteFormContainer'>
      <form onSubmit={handleSubmit} className='EditNoteForm'>
        <label  className='EditNoteFormLvl1'>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className='EditNoteFormLvl2'
          />
        </label>
        <label  className='EditNoteFormLvl1'>
          Deatils
          <textarea
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className='EditNoteFormLvl2 Details'
          />
        </label>
        <button type="submit" className='EditNoteFormLvl3'>Submit</button>
      </form>
      <button className='EditNoteFormLvl3' onClick={() => {setEditOpen(false)}}>Cancel</button>
    </div>
  );
};

export default EditNote;
