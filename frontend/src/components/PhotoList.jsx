import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, toggleFavourite }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem photo={photo} 
          isFavourite={favourites.some((fav) => fav.id === photo.id)}
          toggleFavourite={toggleFavourite} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
