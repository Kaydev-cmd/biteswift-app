// import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Required Modules
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 12000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="hero-swiper"
          >
            <SwiperSlide>
              <div className="content">
                <div className="left-wrapper">
                  <div className="text">
                    <h2>
                      Be The Fastest In
                      <br />
                      Delivering Your <span>Food</span>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      <br />
                      adipiscing elit ut aliquam, purus sit amet
                    </p>
                  </div>
                  <button>Get Started</button>
                </div>
                <img src="/images/home/img-hero.png" alt="Food" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <div className="left-wrapper">
                  <div className="text">
                    <h2>
                      Be The Fastest In
                      <br />
                      Delivering Your <span>Food</span>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      <br />
                      adipiscing elit ut aliquam, purus sit amet
                    </p>
                  </div>
                  <button>Get Started</button>
                </div>
                <img src="/images/home/img-hero.png" alt="Food" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <div className="left-wrapper">
                  <div className="text">
                    <h2>
                      Be The Fastest In
                      <br />
                      Delivering Your <span>Food</span>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur
                      <br />
                      adipiscing elit ut aliquam, purus sit amet
                    </p>
                  </div>
                  <button>Get Started</button>
                </div>
                <img src="/images/home/img-hero.png" alt="Food" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
