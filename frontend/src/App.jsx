import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavourite = (photo) => {
    setFavourites((prevFavourites) => 
      prevFavourites.some((fav) => fav.id === photo.id)
        ? prevFavourites.filter((fav) => fav.id !== photo.id)
        : [...prevFavourites, photo]
    );
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  }

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

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
        similarPhotos={Object.values(selectedPhoto.similar_photos)}
        favourites ={favourites} />
    )}
    </div>
  );
};

export default App;
