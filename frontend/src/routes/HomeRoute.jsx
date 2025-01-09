import React from "react";
import '../styles/HomeRoute.scss'
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ photos, topics, favourites, toggleFavourite, onPhotoClick }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouriteCount={favourites.length} />
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} onPhotoClick={onPhotoClick} />
    </div>
  )
}

export default HomeRoute;