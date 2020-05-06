import React, { useState } from 'react';
import '../styles/Card.scss';
import DragonService from '../services/DragonService';
import CardImage from './CardImage';
import CardInfo from './CardInfo';
import CardActions from './CardActions';
import notify from '../lib/notify';

const Card = ({ dragon, isEditing, update, isCreating, handleCreate, isInfo }) => {
  const [editing, setEditing] = useState(!!isEditing);
  const [currDragon, setCurrDragon] = useState(dragon);

  const handleEdit = () => {
    DragonService.update(dragon.id, currDragon).then(updated => {
      changeIsEditing();
      update && update();
      notify('Dragon saved!');
    }).catch(err => console.log('Error updating dragon: ', err));
  };

  const changeIsEditing = () => {
    setEditing(!editing);
  };

  return (
    <div className="dragon-card">
      <CardImage id={dragon.id} />
      <CardInfo 
        dragon={dragon} 
        editing={editing} 
        isCreating={isCreating} 
        currDragon={currDragon} 
        setCurrDragon={setCurrDragon} />
      <CardActions 
        dragon={dragon} 
        isCreating={isCreating} 
        editing={editing}
        isInfo={isInfo}
        handleCreate={() => handleCreate(currDragon)} 
        handleEdit={handleEdit}
        update={update} 
        changeIsEditing={changeIsEditing}/>
    </div>
  );
}

export default Card;