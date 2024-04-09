import React from "react";
import DishesCard from "../layouts/DishesCard";

const CategoryDetail = ({ menuItems }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Categories
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        {console.log(
          "%csrc/components/Menu.jsx:13 categoryDetail",
          "color: #26bfa5;",
          menuItems
        )}
        {/* {menuItems.length > 0 &&
          menuItems.map((item, index) => (
            <DishesCard
              key={index}
              img={item.imageUrl}
              title={item.name}
              price={item.price}
            />
          ))} */}
      </div>
    </div>
  );
};

export default CategoryDetail;
