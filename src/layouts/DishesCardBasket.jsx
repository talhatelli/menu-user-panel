import React, { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCardBasket = (props) => {
  const [showDescription, setShowDescription] = useState(false);
  const [note, setNote] = useState("");

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleAddToCart = () => {
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const newItem = {
      name: props.name,
      price: props.price,
      description: props.description,
      img: props.img,
      note: note,
    };

    const updatedItems = [...existingItems, newItem];

    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleRemoveFromCart = () => {
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedItems = existingItems.filter(
      (item) => item.name !== props.name
    );

    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className="w-full lg:w-4/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className="rounded-xl" src={props.img} alt="img" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">{props.name}</h3>
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
          <div onClick={handleAddToCart}>
            <Button title="+" />
          </div>
          <div onClick={handleRemoveFromCart}>
            <Button title="-" />
          </div>
        </div>
        {showDescription && (
          <div className="text-center">
            <h6>{props.description}</h6>
          </div>
        )}
        {/* Not alanı */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Notunuzu ekleyin"
            value={note}
            onChange={handleNoteChange} // Not değişikliklerini takip et
            className="border border-gray-300 rounded-lg px-3 py-2 mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default DishesCardBasket;
