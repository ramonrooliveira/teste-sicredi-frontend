import React, { useEffect, useState } from 'react';
import Card from './Card';
import DragonService from '../services/DragonService';
import { useParams, Link } from 'react-router-dom';

const Info = () => {
  const [currDragon, setCurrDragon] = useState(false);
  const [update, setUpdate] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    DragonService.get(id).then(dragon => setCurrDragon(dragon.data));
  }, [id, update]);

  const updateInfo = () => {
    setUpdate(!update);
  };
  
  return (
    <div className="dragon-list create">
      {currDragon && <Card dragon={currDragon} isInfo update={updateInfo}/>}
      <span className="outline link">
        <Link to="/list">Cancel</Link>
      </span>
    </div>
  );
}

export default Info;
