import React from "react";
import Card from "./Card";

export const Field = ({ fieldName, fieldHand }) => {
  return (
    <section className="field">
      <h2>{fieldName}</h2>
      <div className="field__cards">
        {fieldHand.map(({ id, value, suite, name }) => (
            <Card key={id} value={value} suite={suite} name={name} />
        ))}
      </div>
    </section>
  );
};
