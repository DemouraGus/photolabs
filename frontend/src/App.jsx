import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photo) => {
    setFavourites((prevFavourites) => 
      prevFavourites.some((fav) => fav.id === photo.id)
        ? prevFavourites.filter((fav) => fav.id !== photo.id)
        : [...prevFavourites, photo]
    );
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favourites={favourites} toggleFavourite={toggleFavourite}/>
    </div>
  );
};

export default App;
