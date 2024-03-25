import React from 'react'
import { Link } from 'react-router-dom'
import { allProducts } from '../data';
import './ProductItems.css'

const ProductItems = () => {
  return (
    <div className='productdiv'>
      <Link to="/productsingle">ALL STYLES</Link>
      <div className="filter">
        <h3>Sort By</h3>
        <h3>Size</h3>
      </div>
      <div className="productImg">
        {allProducts.map((items) => (
          <div className='imgContainer'>
            <img className="eachimage" src={items.img} alt="" key={items.id} />
            <button>Add item</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductItems;