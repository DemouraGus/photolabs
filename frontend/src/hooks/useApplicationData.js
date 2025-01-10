import { useState } from "react";
import topics from "mocks/topics";
import photos from "mocks/photos";

const useApplicationData = () => {
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
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const state = {
    photos,
    topics,
    favourites,
    selectedPhoto,
  };

  return {
    state,
    toggleFavourite,
    handlePhotoClick,
    closePhotoModal,
  };
};

export default useApplicationData;
