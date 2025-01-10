import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    toggleFavourite,
    handlePhotoClick,
    closePhotoModal,
  } = useApplicationData();

  const { photos, topics, favourites, selectedPhoto } = state

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick}
      />
      {selectedPhoto && 
      (<PhotoDetailsModal 
        photo={selectedPhoto} 
        onClose={closePhotoModal} 
        isFavourite={favourites.some((fav) => fav.id === selectedPhoto.id)} 
        toggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick}
        similarPhotos={selectedPhoto.similar_photos ? Object.values(selectedPhoto.similar_photos) : []}
        favourites ={favourites} />
    )}
    </div>
  );
};

export default App;
