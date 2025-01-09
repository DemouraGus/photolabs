import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {
  const [iconClass, setIconClass] = useState("photo-list__fav-icon")
  
  const handleClick = () => {
    setIconClass((iconClass) =>
    iconClass === "photo-list__fav-icon" ? "photo-list__fav-icon-svg" : "photo-list__fav-icon");
  };

  return (
    <div>
      <button className={iconClass} onClick={handleClick}>
        <FavIcon />
      </button>
    </div>
  );
}

export default PhotoFavButton;