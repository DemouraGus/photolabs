import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, onTopicClick }) => {
  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <li key={topic.id}>
          <TopicListItem topic={topic} onTopicClick={onTopicClick} />
        </li>
      ))}
    </ul>
  );
};

export default TopicList;
