import React, { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const DishesCardBasket = (props) => {
  const [showDescription, setShowDescription] = useState(false);
  const [note, setNote] = useState(props.note || "");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [exitShowSuccessMessage, setExitShowSuccessMessage] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleAddToCart = () => {
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let updatedItems = [];
    let itemFound = false;

    existingItems.forEach((item) => {
      if (item.name === props.name) {
        item.count++;
        itemFound = true;
      }
      updatedItems.push(item);
    });

    if (!itemFound) {
      const newItem = {
        name: props.name,
        price: props.price,
        description: props.description,
        img: props.img,
        note: note,
        count: 1,
      };
      updatedItems.push(newItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleRemoveFromCart = () => {
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedItems = existingItems
      .map((item) => {
        if (item.name === props.name) {
          if (item.count > 1) {
            item.count--;
          } else {
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);

    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setExitShowSuccessMessage(true);
    setTimeout(() => {
      setExitShowSuccessMessage(false); // 3 saniye sonra mesajı kapat
    }, 3000);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedItems = existingItems.map((item) => {
      if (item.name === props.name) {
        return { ...item, note: e.target.value };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
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

          <div
            onClick={handleAddToCart}
            style={{
              textAlign: "-webkit-center",
              alignContent: "center",
              padding: "10px",
              height: "43px",
              with: "40px",
              backgroundColor: "#F4511F ",
              borderRadius: "50px",
            }}
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
              />
            </svg>
          </div>
          <div
            onClick={handleRemoveFromCart}
            style={{
              textAlign: "-webkit-center",
              alignContent: "center",
              padding: "10px",
              height: "43px",
              with: "40px",
              backgroundColor: "#F4511F ",
              borderRadius: "50px",
            }}
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
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
            onChange={handleNoteChange}
            className="border border-gray-300 rounded-lg px-3 py-2 mt-2"
          />
        </div>
        {showSuccessMessage && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline"> Ürün sepete eklendi.</span>
          </div>
        )}
        {exitShowSuccessMessage && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline"> Ürün sepete çıkarıldı.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DishesCardBasket;
