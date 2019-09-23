import React from "react";
import Card from "./Card";

export const Field = ({ fieldName, fieldHand }) => {
  console.log(fieldHand);
  return (
    <section className="field">
      <h2>{fieldName}</h2>
      <div className="field__cards">
        {fieldHand.map(({card}) => (
            <Card key={card.id} value={card.value} suite={card.suite} name={card.name} />
        ))}
      </div>
    </section>
  );
};
