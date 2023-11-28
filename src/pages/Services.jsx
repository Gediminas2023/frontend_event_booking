import React from "react";

import vol from "../assets/vol.jpg";

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <h3 className="title" data-title="What I Do">
            Services
          </h3>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            vero?
          </p>
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={vol} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Clasics</div>
              <p className="text-gray-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={vol} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Volume</div>
              <p className="text-gray-400 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
