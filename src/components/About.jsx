import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Vizyonumuz?
        </h1>
        <p>
          Anadolunun eşsiz lezzetlerini usta ellerde siz değerli müşterilerimize
          taşımak değerimize değer katacaktır. Anadolunun bir çok şehrinden
          meşhur yemekleri, tatlıları ve içinizi ferahlatacak içecekleri ile
          size güzel bir yemek molası oluşturacağız.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
