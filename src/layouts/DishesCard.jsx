import React, { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = (props) => {
  const [showDescription, setShowDescription] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleAddToCart = () => {
    const newItem = {
      title: props.title,
      price: props.price,
      description: props.description,
      img: props.img,
    };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className="rounded-xl" src={props.img} alt="img" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">
          {props.title}
        </h3>
        <div className="flex flex-row justify-center">
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarHalf className="text-brightColor" />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{props.price}tl</h3>
          {props.description && (
            <>
              <div className="cursor-pointer" onClick={toggleDescription}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    showDescription ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#f96163"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </>
          )}
          <Button title="+" onClick={handleAddToCart} />
        </div>
        {showDescription && (
          <div className="text-center">
            <h6>{props.description}</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default DishesCard;
