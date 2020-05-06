import React from 'react';
import { Link } from 'react-router-dom';
import Delete from './Delete';
import Moment from 'react-moment';

const CardActions = ({ dragon, isCreating, editing, isInfo, handleCreate, handleEdit, update, changeIsEditing }) => {

  return (
    <div className="card-actions">
      {!isCreating && editing ?
        <>
          <button
            className="action save-edit"
            onClick={handleEdit}>
            Save
        </button>
          <button
            className="action cancel-edit"
            onClick={changeIsEditing}>
            Cancel
        </button>
        </>
        :
        !isCreating &&
        <>
          <button
            className="action edit-dragon"
            onClick={changeIsEditing}>
            Edit
          </button>
          {!isInfo ?
            <Link to={`/info/${dragon.id}`}>Details</Link>
            :
            <div className="dragon-creation">{isInfo &&
              <p>
                created <Moment date={dragon.createdAt} format="DD/MM/YYYY" />
              </p>
            }</div>}
        </>}
      {!isCreating ?
        <Delete id={dragon.id} update={update} />
        :
        <>
          <div></div>
          <button className="action create" onClick={handleCreate}>Create</button>
        </>
      }
    </div>
  );
}

export default CardActions;
