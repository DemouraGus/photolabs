import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  
  // Bringing in the initial state and logic from the custom hook
  const {
    state,
    toggleFavourite,
    handlePhotoClick,
    closePhotoModal,
    handleTopicClick,
  } = useApplicationData();

  const { photoData, topicData, favourites, selectedPhoto } = state

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick}
        onTopicClick={handleTopicClick}
      />
      {selectedPhoto && 
      (<PhotoDetailsModal 
        photo={selectedPhoto} 
        onClose={closePhotoModal} 
        isFavourite={favourites.some((fav) => fav.id === selectedPhoto.id)} 
        toggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick}
        similarPhotos={selectedPhoto.similar_photos ? Object.values(selectedPhoto.similar_photos) : []} 
        favourites ={favourites} 
      />
    )}
    </div>
  );
};

export default App;
