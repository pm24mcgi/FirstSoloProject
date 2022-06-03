import { useEffect, useState } from 'react';
import {editNote} from '../../store/notes'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './EditNote.css'


const EditNote = ({note, setEditOpen}) => {
  // const sessionUser = useSelector(state => state.session.user);
  // const propObj = useSelector(state => state.properties)
  // const dispatch = useDispatch();
  // const history = useHistory();

  // const [description, setDescription] = useState('');
  // const [body, setBody] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const payload = {
  //     description,
  //     body,
  //     propertyId
  //   }

  //   await dispatch(editNote(id, payload))
  //       .then(() => history.push('/properties'))

    return (
      <>
        Hello From Edit Form
        <button onClick={() => {setEditOpen(false)}}>Cancel</button>

      </>
    )
}


export default EditNote
