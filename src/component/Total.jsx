import React from "react";

export default function ({ price }) {
  return (
    <div className="total">
      <h1>
        Total-Price :<br />
        {price}
      </h1>
    </div>
  );
}
