import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CartCount } from "../AllComponents";
import { BsBagHeartFill } from "react-icons/bs";

const Nav = () => {
  const {
    count1,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
  } = useContext(CartCount);

  return (
    <nav>
      <div className="logo">
        <h2>
          <BsBagHeartFill />
          ShopHOME
        </h2>
      </div>
      <div>
        <input
          type="text"
          className="searchbox"
          placeholder="Search for Products, Brands and More"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="dropdownBox"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All Categoreis">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div className="right-nav">
        <div className="cartbox">
          <span className="cartCount">{count1}</span>
          <FaCartShopping />
          <h6>Cart</h6>
        </div>
        <button>login</button>
      </div>
    </nav>
  );
};

export default Nav;
