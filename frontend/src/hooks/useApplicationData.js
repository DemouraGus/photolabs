import { useReducer, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PHOTO_DATA":
      return { ...state, photoData: action.payload };
    case "SET_TOPIC_DATA":
      return { ...state, topicData: action.payload };
    case "SET_FAVOURITES":
      return { ...state, favourites: action.favourites };
    case "SET_SELECTED_PHOTO":
      return { ...state, selectedPhoto: action.photo };
    case "CLOSE_PHOTO_MODAL":
      return { ...state, selectedPhoto: null };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const initialState = {
    photoData: [],
    topicData: [],
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

  const handleTopicClick = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_PHOTO_DATA", payload: data}))
  };

  const closePhotoModal = () => {
    dispatch({ type: "CLOSE_PHOTO_MODAL" });
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_PHOTO_DATA", payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_TOPIC_DATA", payload: data }))
  }, []);

  return {
    state,
    toggleFavourite,
    handlePhotoClick,
    closePhotoModal,
    handleTopicClick,
  };
};

export default useApplicationData;
