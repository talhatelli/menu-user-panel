import React from "react";
import img1 from "../assets/img/img1.jpg";
import DishesCard from "../layouts/DishesCard";

const MenuItemDetail = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Menu Items
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Tasty Dish" price="$10.99" />
      </div>
    </div>
  );
};

export default MenuItemDetail;
