import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicClick }) => {
  return (
    <div className="topic-list__item">
      <button className="topic-list__item" key={topic.id} onClick={() => onTopicClick(topic.id)}>{topic.title}</button>
    </div>
  );
};

export default TopicListItem;
