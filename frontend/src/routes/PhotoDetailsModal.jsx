import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onClose }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <div className="photo-details-modal__top-bar">
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
      <div className="photo-details-modal__images">
        <img
          className="photo-details-modal__image"
          src={photo.urls.full}
          alt={photo.description || 'Photo'}
        />
      </div>
      <p className="photo-details-modal__header">
        {photo.description || 'No description available.'}
      </p>
    </div>
  )
};

export default PhotoDetailsModal;
