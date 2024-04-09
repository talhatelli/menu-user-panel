import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import CategoryDetail from "./components/CategoryDetail";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import {
  fetchCategories,
  fetchMenuItems,
  categoryDetail,
} from "./requests/Requests";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await fetchCategories();
        const menuItemsData = await fetchMenuItems();
        setCategories(categoriesData);
        setMenuItems(menuItemsData);
        console.log(categoryDetail);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar categories={categories} />

      <main>
        <div id="home">
          <Home />
        </div>
        <div id="category-detail">
          <CategoryDetail />
        </div>
        <div id="dishes">
          <Dishes menuItems={menuItems} />
        </div>
        <div id="about">
          <About />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
