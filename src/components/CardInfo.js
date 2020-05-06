import React from 'react';

const CardInfo = ({ dragon, editing, isCreating, currDragon, setCurrDragon }) => {
  return (
    <>
      {editing || isCreating ?
        <div className="card-info">
          <input 
            type="text" 
            className="editable-input" 
            defaultValue={currDragon.name} 
            placeholder="Name" 
            onChange={e => setCurrDragon({ ...currDragon, name: e.target.value })} />
          <input 
            type="text" 
            className="editable-input" 
            defaultValue={currDragon.type} 
            placeholder="Type" 
            onChange={e => setCurrDragon({ ...currDragon, type: e.target.value })} />
          <input 
            type="text" 
            className="editable-input" 
            defaultValue={currDragon.history} 
            placeholder="History" 
            onChange={e => setCurrDragon({ ...currDragon, history: e.target.value })} />
        </div> :
        <div className="card-info">
          <p className="dragon-name" >{dragon.name || "*Unnamed*"}</p>
          <p className="dragon-type" >{dragon.type || "Normal"}</p>
          <span className="dragon-history" >{dragon.history || "untold story"}</span>
        </div>}
    </>
  );
}

export default CardInfo;
