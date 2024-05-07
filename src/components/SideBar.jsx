import React, { useState } from "react";
import "./Sidebar.css";
import DishesCardBasket from "../layouts/DishesCardBasket";
import { fetchOrdes } from "../requests/Requests";

const Sidebar = ({ onClose }) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleOpenConfirmation = () => {
    setIsConfirmationOpen(true);
  };
  const handleSidebarClick = (e) => {
    e.stopPropagation();
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const handlePlaceOrder = async () => {
    console.log("Sipariş verildi!");
    const orders = JSON.parse(localStorage.getItem("cartItems")) || [];
    const response = await fetchOrdes(orders); // Sepetteki ürünleri fetchOrdes fonksiyonuna parametre olarak gönder
    console.log("response", response);
    localStorage.removeItem("cartItems");
    setCartItems([]);
    setIsOrderPlaced(true);
  };

  const handleCloseSidebar = () => {
    console.log("%csrc/components/SideBar.jsx:36 ", "color: #26bfa5;");
    setIsOpen(false); // Sidebar'ı kapalı olarak işaretleyin
    onClose(); // Üst bileşene kapatma işlemini iletiyoruz
  };

  return (
    <div
      className={`sidebar ${isOpen ? "open" : ""}`}
      onClick={handleSidebarClick}
    >
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Cart Items</h2>
          <button className="close-button" onClick={handleCloseSidebar}>
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
                <div style={{ padding: "20px 0 0 10px" }}>
                  <button
                    class=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-24 py-6 text-center me-2 mb-2"
                    type="button"
                    onClick={handleOpenConfirmation}
                  >
                    Siparişi Onayla{" "}
                  </button>
                </div>
              )}
              {isConfirmationOpen && (
                <div className="order-confirmation" style={{ padding: "20px" }}>
                  <p>Siparişi vermek istediğinize emin misiniz?</p>
                  <div
                    className="confirmation-buttons"
                    style={{ padding: "10px 0 0 4px" }}
                  >
                    <button
                      class=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-12 py-4 text-center me-2 mb-2"
                      onClick={handlePlaceOrder}
                    >
                      Evet
                    </button>
                    <button
                      class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-12 py-4 text-center me-2 mb-2"
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
