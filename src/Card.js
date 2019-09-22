import React from "react";

const Card = ({ value, name, suite }) => {
  const getSuiteIcon = () => {
    switch (suite) {
      case "hearts":
        return "🧡";
      case "diamonds":
        return "🔶";
      case "spades":
        return "♠";
      case "clubs":
        return "♣";
      default:
        return;
    }
  };
  return (
    <div className="card">
      <div className="card__number card__number--top">{name}</div>
      <span className="card__suite">{getSuiteIcon()}</span>
      <div className="card__number card__number--bottom">{name}</div>
    </div>
  );
};

export default Card;
