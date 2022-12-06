import React, { useState } from "react";
import { useEffect } from "react";

export default function FormInput({ setProducts }) {
  const [values, setValues] = useState({
    name: "",
    price: 0,
    count: 1,
    discount: 20,
    finalPrice: 0,
  });

  function handleInput(key, value) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  useEffect(() => {
    setValues((prev) => ({
      ...prev,
      finalPrice:
        prev.count * (prev.price - (prev.price * prev.discount) / 100),
    }));
  }, [values.price, values.count, values.discount]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    setProducts((prev) => [...prev, values]);
    setValues({
      name: "",
      price: 0,
      count: 1,
      discount: 20,
      finalPrice: 0,
    })
  }

  return (
    <form className="formPart" onSubmit={handleSubmit}>
      <h2>Add Your Shoppings</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          value={values.name}
          type="text"
          id="name"
          placeholder="Enter Name"
          onChange={(e) => handleInput("name", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="count">Count: </label>
        <input
          type="number"
          value={values.count}
          id="count"
          placeholder="Enter Count"
          onChange={(e) => handleInput("count", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          value={values.price}
          id="price"
          placeholder="Enter Price"
          onChange={(e) => handleInput("price", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="discount">Discount: {values.discount}% </label>
        <input
          value={values.discount}
          type="range"
          id="discount"
          onChange={(e) => handleInput("discount", e.target.value)}
        />
      </div>
      <div>
        <div>Final-Price : {values.finalPrice}$</div>
      </div>
      <input type="submit" />
    </form>
  );
}
