import React from 'react';
import DragonService from '../services/DragonService';
import { useHistory, Link } from 'react-router-dom';
import Card from './Card';
import notify from '../lib/notify';

const Create = () => {
  const history = useHistory();

  const handleCreate = (currDragon) => {
    DragonService.create(currDragon).then(created => {
      history.push('/list');
      notify('Dragon created!');
    }).catch(err => console.log('Error creating dragon: ', err));

  };
  return (
    <>
    <div className="title create">
        <h1>CREATE YOUR DRAGON</h1>
      </div>
    <div className="dragon-list create">
      <Card 
        dragon={{}} 
        isCreating 
        handleCreate={handleCreate} />
      <span className="outline link">
        <Link to="/list">Cancel</Link>
      </span>
    </div>
    </>
  );
}

export default Create;
