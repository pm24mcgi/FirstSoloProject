import { useEffect, useState } from 'react';
import {postNote} from '../../store/notes';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
import './NewNoteAdd.css';


const PostNote = ({id, setAddNoteOpen}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const propertyId = id;

  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      description,
      body,
      propertyId
    };
    await dispatch(postNote(payload))
        .then(() => history.push(`/properties/${propertyId}`))

    setAddNoteOpen(false);
  };

  return (
    <div className='PostNoteFormContainer'>
      <form onSubmit={handleSubmit} className='PostNoteForm'>
        <label  className='PostNoteFormLvl1'>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className='PostNoteFormLvl2'
          />
        </label>
        <label  className='PostNoteFormLvl1'>
          Deatils
          <textarea
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className='PostNoteFormLvl2 Details'
          />
        </label>
        <button type="submit" className='PostNoteFormLvl3'>Submit</button>
        <button className='PostNoteFormLvl3 C' onClick={() => {setAddNoteOpen(false)}}>Cancel</button>
      </form>
    </div>
  );
};

export default PostNote;
