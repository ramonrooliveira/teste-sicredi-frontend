import React from 'react';
import rand from '../lib/random-img';

const CardImage = ({id}) => {
  return (
    <div className={`card-img card-img-${rand(id || 7)}`}>
    </div>
  );
}

export default CardImage;
