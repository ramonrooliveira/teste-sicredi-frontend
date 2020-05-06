import React, { useState, useEffect } from 'react';
import DragonService from '../services/DragonService'
import Card from './Card';
import '../styles/List.scss';

const List = () => {
  const [dragons, setDragons] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    DragonService.getAll().then(response => {
      const sorted = response.data.sort((a, b) => a.name.localeCompare(b.name));
      setDragons(sorted);
    })
  }, [update]);

  const updateList = () => {
    setUpdate(!update);
  };

  return (
    <div className="dragon-list">
      {dragons && dragons.map(dragon => {
        return (
          <Card key={dragon.id} dragon={dragon} update={updateList} />
        )
      })}
    </div>
  );
}

export default List;
