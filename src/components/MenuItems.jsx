import React from "react";
import DishesCard from "../layouts/DishesCard";
// import MenuItemDetail from "./MenuItemDetail";

const Dishes = ({ menuItems }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Menu Items
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {menuItems.map((item, index) => (
          <DishesCard
            key={index}
            img={item.imageUrl}
            title={item.name}
            price={item.price}
          />
        ))}
        {/* <div id="menu-item-detail">
          <MenuItemDetail />
        </div> */}
      </div>
    </div>
  );
};

export default Dishes;
