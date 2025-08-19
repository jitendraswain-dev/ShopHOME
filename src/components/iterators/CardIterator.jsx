import React, { useContext } from "react";
import { MdStarRate } from "react-icons/md";
import { CartCount } from "../AllComponents";
import { BsPersonRaisedHand } from "react-icons/bs";

const CardIterator = ({
  item: {
    image,
    title,
    price,
    description,
    rating: { rate, count },
  },
}) => {

  const {count1,setCount} = useContext(CartCount)
  console.log(count1,setCount);
  
  return (
    <>
      <div className="cards">
        <div className="card-top">
          <img src={image} alt={title} />
        </div>
        <div className="card-bottom">
          <p className="title">{title}</p>
          <span className="price">Price : ${price}</span>
          <p className="description">
            {description.length > 100
              ? description.slice(0, 60) + "..."
              : description}
          </p>
          <div className="rate-count">
            <span>
              <MdStarRate /> {rate} <br />
              Review Count: {count}<BsPersonRaisedHand />
            </span>
          </div>
        </div>
        <div> <button onClick={()=>setCount(count1+1)}>Add to Cart</button>
        <button>Buy Now</button></div>
       
      </div>
    </>
  );
};

export default CardIterator;
