import React, { useState } from "react";
import "./Sidebar.css";
import DishesCardBasket from "../layouts/DishesCardBasket";
import { fetchOrdes } from "../requests/Requests";

const Sidebar = ({ onClose }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleOpenConfirmation = () => {
    setIsConfirmationOpen(true);
  };
  const handleSidebarClick = (e) => {
    e.stopPropagation(); // Dışarı tıklamalarda kapanmayı engellemek için
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const handlePlaceOrder = async () => {
    console.log("Sipariş verildi!");
    const response = await fetchOrdes(cartItems); // Tüm eklenen siparişleri gönder
    console.log("response", response);
    localStorage.removeItem("cartItems");
    setCartItems([]);
    setIsOrderPlaced(true);
  };

  return (
    <div className="sidebar" onClick={handleSidebarClick}>
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Cart Items</h2>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="sidebar-content">
          {cartItems.length ? (
            <>
              {cartItems.map((item, index) => (
                <DishesCardBasket
                  key={index}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                />
              ))}
              {!isConfirmationOpen && (
                <button
                  class=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-24 py-4 text-center me-2 mb-2"
                  type="button"
                  onClick={handleOpenConfirmation}
                >
                  Siparişi Onayla{" "}
                </button>
              )}
              {isConfirmationOpen && (
                <div className="order-confirmation">
                  <p>Siparişi vermek istediğinize emin misiniz?</p>
                  <div className="confirmation-buttons">
                    <button
                      className="confirm-button"
                      onClick={handlePlaceOrder}
                    >
                      Evet
                    </button>
                    <button
                      className="cancel-button"
                      onClick={handleCloseConfirmation}
                    >
                      İptal
                    </button>
                  </div>
                </div>
              )}
              {isOrderPlaced && (
                <div className="order-placed-message">
                  Siparişiniz alınmıştır!
                </div>
              )}
            </>
          ) : (
            <div className="empty-cart">
              Sepetiniz boş.
              <br />
              Lütfen ekleme yapın.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
