import React from "react";
import DishesCard from "../layouts/DishesCard";

const CategoryDetail = ({ allCategoriesWithItems }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <div className="flex flex-wrap gap-8 justify-center">
        {allCategoriesWithItems.map((category, index) => (
          <div key={index}>
            <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
              {category.name}{" "}
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              {category.items.map((menuItem, index) => (
                <DishesCard
                  key={index}
                  img={menuItem.imageUrl}
                  title={menuItem.name}
                  price={menuItem.price}
                  description={menuItem.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;
