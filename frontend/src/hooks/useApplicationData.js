import { useReducer, useEffect } from "react";
import topics from "mocks/topics";
import photos from "mocks/photos";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVOURITES":
      return { ...state, favourites: action.favourites };
    case "SET_SELECTED_PHOTO":
      return { ...state, selectedPhoto: action.photo };
    case "CLOSE_PHOTO_MODAL":
      return { ...state, selectedPhoto: null };
    case "SET_APPLICATION_DATA":
      return { ...state, photos: action.photos, topics: action.topics };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const initialState = {
    photos: [],
    topics: [],
    favourites: [],
    selectedPhoto: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (photo) => {
    const isFavourite = state.favourites.some((fav) => fav.id === photo.id);
    const updatedFavourites = isFavourite
      ? state.favourites.filter((fav) => fav.id !== photo.id)
      : [...state.favourites, photo];

    dispatch({ type: "SET_FAVOURITES", favourites: updatedFavourites });
  };

  const handlePhotoClick = (photo) => {
    dispatch({ type: "SET_SELECTED_PHOTO", photo });
  };

  const closePhotoModal = () => {
    dispatch({ type: "CLOSE_PHOTO_MODAL" });
  };

  useEffect(() => {
    dispatch({ type: "SET_APPLICATION_DATA", photos, topics });
  }, []);

  return {
    state,
    toggleFavourite,
    handlePhotoClick,
    closePhotoModal,
  };
};

export default useApplicationData;
