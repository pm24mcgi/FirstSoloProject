import { useEffect, useState } from 'react';
import {editNote} from '../../store/notes'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './EditNote.css'


const EditNote = ({note, setEditOpen}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const propertyId = note.propertyId;
  const id = note.id;

  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id,
      description,
      body,
      propertyId
    }
    await dispatch(editNote(id, payload))
        .then(() => history.push(`/properties/${propertyId}`))
        .then(() => {setEditOpen(false)})
  }

  return (
    <form onSubmit={handleSubmit} className='EditPropertyForm'>
      <label  className='EditPropertyFormLvl1'>
        Description
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className='EditPropertyFormLvl2'
        />
      </label>
      <label  className='EditPropertyFormLvl1'>
        Deatils
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className='EditPropertyFormLvl2'
        />
      </label>
      <button type="submit" className='EditPropertyFormLvl3'>Submit</button>
      <button onClick={() => {setEditOpen(false)}}>Cancel</button>
    </form>
  )
}

export default EditNote
