import React, { useState } from "react";
import Product from "./Product";
import { PRODUCTS } from "../../products";
import "./Shop.css";

const Shop = () => {
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const newCategory = [...category];
    if (e.target.checked && !newCategory.includes(e.target.value)) {
      newCategory.push(e.target.value);
    }
    if (!e.target.checked && newCategory.includes(e.target.value)) {
      const index = newCategory.indexOf(e.target.value);
      newCategory.splice(index, 1);
    }
    setCategory(newCategory);
  };

  const filteredProducts =
    category.length === 0
      ? PRODUCTS
      : PRODUCTS.filter((product) => category.includes(product.category));

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Garden Tools</h1>
      </div>
      <div className="categories">
        <form className="form">
          <label>
            <input
              type="checkbox"
              id="chain-saw"
              name="chain-saw"
              value="Chain Saw"
              onChange={handleChange}
            />
            Chain Saw
          </label>
          <label>
            <input
              type="checkbox"
              id="pruning-saw"
              name="pruning-saw"
              value="Pruning Saw"
              onChange={handleChange}
            />
            Pruning Saw
          </label>
          <label>
            <input
              type="checkbox"
              id="leaf-vacuum"
              name="leaf-vacuum"
              value="Leaf Vacuum"
              onChange={handleChange}
            />
            Leaf Vacuum
          </label>
          <label>
            <input
              type="checkbox"
              id="tiller"
              name="tiller"
              value="Tiller"
              onChange={handleChange}
            />
            Tiller
          </label>
          <label>
            <input
              type="checkbox"
              id="knife-shedder"
              name="knife-shedder"
              value="Knife Shedder"
              onChange={handleChange}
            />{" "}
            Knife Shedder
          </label>
        </form>
        <div className="price-category"></div>
      </div>
      <div className="products">
        {" "}
        {filteredProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
