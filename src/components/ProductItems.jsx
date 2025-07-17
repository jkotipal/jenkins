import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { allProducts } from "../data";
import { CartContext } from "./CartContext";
import "./ProductItems.css";

const ProductItems = () => {
  const { addToCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");

  const handleAddToCart = (item) => {
    addToCart(item);
    setPopupText(`${item.title || "Item"} added successfully to cart!`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  return (
    <div className="productdiv">
      <Link to="/productsingle">ALL STYLES</Link>
      <div className="filter">
        <div className="sort">
          <h3>Sort By: </h3>
          <select className="color" id="">
            <option value="0">Type</option>
            <option value="1">Rings</option>
            <option value="2">Chains</option>
            <option value="3">Braclet</option>
          </select>
        </div>
        <div className="size">
          <h3>Size:{"\t"}</h3>
          <select className="Size" id="">
            <option value="0">Size</option>
            <option value="1">Small</option>
            <option value="2">Medium</option>
            <option value="3">Large</option>
          </select>
        </div>
      </div>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#4BB543",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            zIndex: 1000,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          {popupText}
        </div>
      )}
      <div className="productImg">
        {allProducts.map((items) => (
          <div className="imgContainer" key={items.id}>
            <img className="eachimage" src={items.img} alt="" />
            <button onClick={() => handleAddToCart(items)}>Add item</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItems;
