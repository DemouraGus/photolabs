import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicClick }) => {
  return (
    <div className="topic-list__item">
      <span key={topic.id} onClick={() => onTopicClick(topic.id)}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
