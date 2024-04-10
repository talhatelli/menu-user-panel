import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Menu Marvel</h1>
          <p className=" text-sm">
            Lezzetli yemeklerin her biri, bir tuval gibi temsil edilir, mutfak
            ustalığının muhteşemliğiyle harmanlanmış bir sanat eseridir. Bu
            lezzet senfonisi, damakları şenlendiren bir yolculuktur.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="menu-items"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Menu Items
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="category-detail"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Category Detail
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Home</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Back to Top
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a className=" hover:text-brightColor transition-all cursor-pointer">
              ahmettalhatelli1453@email.com
            </a>
            <a className=" hover:text-brightColor transition-all cursor-pointer">
              +90 000 000 00 00
            </a>
            <a className=" hover:text-brightColor transition-all cursor-pointer">
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @ahmettalha by
            <span className=" text-brightColor">
              {" "}
              full stack developer
            </span>{" "}
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
