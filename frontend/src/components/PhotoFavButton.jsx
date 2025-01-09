import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {
  const [favouritePhoto, setFavouritePhoto] = useState(false);
  
  const handleClick = () => {
    setFavouritePhoto((prev) => !prev);
  };
  
  return (
    <div>
      <button
        className={`photo-list__fav-icon ${
          favouritePhoto ? "photo-list__fav-icon-active" : ""
        }`}
        onClick={handleClick}
      >
        <FavIcon selected={favouritePhoto} />
      </button>
    </div>
  );
}

export default PhotoFavButton;