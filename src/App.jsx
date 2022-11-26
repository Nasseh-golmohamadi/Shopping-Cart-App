import { useState } from "react";
import "./App.css";
import Card from "./component/Card";
import FormInput from "./component/FormInput";
import Total from "./component/Total";

function App() {
  const [products, setProducts] = useState([]);
  const price = products.reduce((acc, curr) => {
    return +acc + +curr.finalPrice;
  }, 0);

  return (
    <div className="App">
      <FormInput setProducts={setProducts} />
      <Card products={products} />
      <Total price={price} />
    </div>
  );
}

export default App;
