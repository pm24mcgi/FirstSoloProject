import { useEffect, useState } from 'react';
import {editNote} from '../../store/notes'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './EditNote.css'


const EditNote = ({note, setEditOpen}) => {
  const history = useHistory();
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
        .then(() => history.push('/properties'))
  }

  return (
    <>

      <button onClick={() => {setEditOpen(false)}}>Cancel</button>
    </>
  )
}

export default EditNote
