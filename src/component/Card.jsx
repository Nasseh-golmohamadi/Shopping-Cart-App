import React from "react";

export default function Card({ products }) {
  return (
    <div className="parentCard">
      <h1>Orders:</h1>
      {products.map((item) => {
        return (
          <div className="cards" key={item.name}>
            <div>
              Name: <p key={item.discount}>{item.name}</p>
            </div>
            <div>
              Price: <p key={item.discount}>{item.price * item.count}$</p>
            </div>
            <div>
              Count: <p key={item.discount}>{item.count}</p>
            </div>
            <div>
              Discount: <p key={item.discount}>{item.discount}%</p>
            </div>
            <div>
              Final Price: <p key={item.discount}>{item.finalPrice}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
