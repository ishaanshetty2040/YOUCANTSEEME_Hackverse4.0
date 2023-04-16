import React, { useState } from "react";
import Navbar from "../components/landingPage/Navbar";
import Vector from "../assets/img/landingPage/vector.svg";
import Login from "../components/landingPage/Login";
import Footer from "../components/landingPage/Footer";

export default function LandingPage(props) {
  function handleClick() {
    window.open(
      "https://643b83543ca51b7183dc1b00--lighthearted-lamington-29acbc.netlify.app/",
      "_blank"
    );
  }

  return (
    <div className="h-screen max-h-min flex flex-col">
      <Navbar></Navbar>

      <div className="body lg:flex px-16 w-full lg:h-5/6 ">
        <img
          src={Vector}
          alt="Graphics"
          className="lg:w-1/2 lg:my-auto lg:mx-auto mt-24"
        />
        <div>
          <h1
            className="font-poppins font-bold text-sm lg:text-xl mt-2 mb-2"
            style={{ marginBottom: "-30px" }}
          >
            Click here to know more about Medical Tourism
          </h1>

          <button
            onClick={handleClick}
            className="text-lg mt-10  bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary"
          >
            Click
          </button>
        </div>
        <div className="lg:ml-auto lg:w-1/2 w-screen">
          <Login
            setToastShow={props.setToastShow}
            settoastCondition={props.settoastCondition}
          ></Login>
        </div>
      </div>
      <div className="mt-auto relative bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
}
