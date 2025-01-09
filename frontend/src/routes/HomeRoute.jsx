import React from "react";
import '../styles/HomeRoute.scss'
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ photos, topics, favourites, toggleFavourite}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite}/>
    </div>
  )
}

export default HomeRoute;