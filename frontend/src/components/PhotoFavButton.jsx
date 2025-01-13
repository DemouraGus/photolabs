import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({ isFavourite, toggleFavourite }) {
  const handleClick = (event) => {
    event.stopPropagation();
    toggleFavourite();
  }
  
  return (
    <div>
      <button
        className={`photo-list__fav-icon ${isFavourite ? "photo-list__fav-icon-active" : ""}`}
        onClick={handleClick}
      ><FavIcon selected={isFavourite} />
      </button>
    </div>
  );
}

export default PhotoFavButton;