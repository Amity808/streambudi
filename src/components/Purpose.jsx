"use client";
import React, { useEffect } from "react";
import EventImg from "../../public/event.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Purpose = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div>
      <div className=" bg-dust " data-aos="fade-up"
      data-aos-duration="3000"
      >
        <div className="  flex items-center justify-center  text-center">
          <div className=" mt-10">
            <h2 className=" text-xl font-semibold text-black my-5">
              Our Purpose
            </h2>
            <div>
              <h5 className=" text-5xl font-semibold text-black my-5">
                Join the Future of Streaming
              </h5>
              <p className="text-xl font-semibold text-black mb-10">
                Try Streambudi for free and unlock advanced tools to engage and
                monetize your audience more effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${EventImg.src})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className=" max-w-lg">
                <h1 className="mb-5 text-dust text-5xl font-bold">Transforming Streaming and Content Monetization</h1>
                <p className="mb-5 text-xl text-dust">
                Streambudi is pioneering a future where streamers and content creators can easily engage their audiences and unlock sustainable income. By harnessing Solana’s blockchain, we provide secure, real-time payments and interactive tools that revolutionize viewer engagement and monetization. Our goal is to lead the way in creating innovative, safe, and efficient streaming solutions for creators globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
