'use client'
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"
import bgEvent from "../../public/meeting.jpg"

const BackgroudImage = ({ img }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div>
      <div>
        <div data-aos="fade-up" data-aos-duration="3000"
          className="hero min-h-screen"
          style={{
            backgroundImage:
              `url(${img.src})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroudImage
