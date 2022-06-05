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
    <>
      <form onSubmit={handleSubmit} className='PostPropertyForm'>
        <label  className='PostPropertyFormLvl1'>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className='PostPropertyFormLvl2'
          />
        </label>
        <label  className='PostPropertyFormLvl1'>
          Deatils
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className='PostPropertyFormLvl2'
          />
        </label>
        <button type="submit" className='PostPropertyFormLvl3'>Submit</button>
      </form>
      <button onClick={() => {setAddNoteOpen(false)}}>Cancel</button>
    </>
  );
};

export default PostNote;
