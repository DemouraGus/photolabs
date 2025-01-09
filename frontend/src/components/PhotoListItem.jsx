import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo }) => {

  return (
    <article className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={photo.urls.full} alt="" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt="" />
        <div>
          <p className="photo-list__user-info">{photo.user.name}</p>
          <p className="photo-list__user-info photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </article>
  )
};

export default PhotoListItem;
