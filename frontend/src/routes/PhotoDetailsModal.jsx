import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ photo, onClose, isFavourite, toggleFavourite, onPhotoClick, similarPhotos, favourites }) => {
  console.log('Similar Photos:', similarPhotos);
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton isFavourite={isFavourite} toggleFavourite={() => toggleFavourite(photo)} />
        <img
          className="photo-details-modal__image"
          src={photo.urls.full}
          alt=""
        />
      <div className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photo.user.profile}
            alt={`${photo.user.name}'s profile`}
          />
          <div>
            <p className="photo-details-modal__photographer-info">
              {photo.user.name}
            </p>
            <p className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </p>
          </div>
        </div>
      </div>
      </div >
      <div className="photo-details-modal__header">
      <PhotoList 
        photos={similarPhotos} 
        favourites={favourites} 
        toggleFavourite={toggleFavourite} 
        onPhotoClick={onPhotoClick} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
