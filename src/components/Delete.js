import React from 'react';
import DragonService from '../services/DragonService'
import notify from '../lib/notify';
import { useHistory } from 'react-router-dom';

const Delete = ({ id, update }) => {
  
  const history = useHistory();
  const handleDelete = () => {
    DragonService.remove(id).then(deleted => {
      update();
      history.push('/list');
      notify('Dragon deleted!');
    }).catch(err => console.log('Error deleting dragon: ', err));
  }

  return (
    <div className="action">
      <button 
        type="button" 
        className="outline danger" 
        onClick={handleDelete}>
          Delete
      </button>
    </div>
  );
}

export default Delete;
