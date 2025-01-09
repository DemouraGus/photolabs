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

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick}
      />
      {selectedPhoto && (<PhotoDetailsModal photo={selectedPhoto} />
    )}
    </div>
  );
};

export default App;
