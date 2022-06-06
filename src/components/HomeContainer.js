import React from "react";
import Delivery from "../image/img/delivery.png";
import HeroBg from "../image/img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your city
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          perferendis delectus, temporibus dolorem doloremque ea ratione,
          architecto provident, eaque officia ab asperiores accusamus ullam!
          Modi voluptates ratione dicta accusamus veritatis!
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="hero-bg"
          className="lg:h-650 h-420 w-full lg:w-auto ml-auto"
        />

        <div className="w-full h-full absolute flex items-center justify-center top-0 left-0 py-4 gap-4 lg:px-32 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190  p-2 bg-red-500 bg-cardOverlay backdrop-blur-md drop-shadow-lg rounded-3xl flex items-center justify-center flex-col"
              >
                <img
                  src={n.imageSrc}
                  alt="I1"
                  className="w-20 lg:w-40  lg:-mt-20 -mt-10"
                />
                <p className="lg:text-xl text-base font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="lg:text-sm text-[12px] text-lighttextGray font-semibold lg:my-3 my-1">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
