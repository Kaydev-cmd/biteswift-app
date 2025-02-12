import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Required Modules
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HeroSlide = ({ title, description, imageSrc, onButtonClick }) => {
  return (
    <div className="content">
      <div className="left-wrapper">
        <div className="text">
          <h2>
            {title}
            <br />
            Delivery Your <span>Food</span>
          </h2>
          <p>{description}</p>
        </div>
        <button onClick={onButtonClick}>Get Started</button>
      </div>
      <img src={`${imageSrc}`} alt="Food" />
    </div>
  );
};

export const Hero = () => {
  const navigate = useNavigate();

  // Navigate to the order page
  const handleButtonClick = () => {
    navigate("/order");
  };

  // Dyanamic Slide data
  const slides = [
    {
      title: "Be the Fastest In",
      description: `Craving a delicious meal? With our fast and reliable delivery service, you can enjoy your favorite dishes
        in no time. Whether you're at home, at work, or on the go, we bring the restaurant experience to you.
        No more waiting - get your food  delivered fresh, hot, and fast.`,
      imageSrc: "/images/home/img-hero.png",
    },
    {
      title: "Be the Fastest In",
      description: `Hungry, Don't wait! Get your meals delivered fast, fresh, and hot to your door with just a click. From
        comforting classics to new cravings, we've got it all, ready to go when you are. Experience convenience
        at its best - order now and enjoy every bite!`,
      imageSrc: "/images/home/img-hero.png",
    },
    {
      title: "Be the Fastest In",
      description: `No matter what you're craving, we've got you covered. From quick bites to hearty meals, enjoy your
        favorite foods delivered straight to you - fast, hot, and hassle-free. Order now and get ready for a
        delicious experience at your doorstep!
        `,
      imageSrc: "/images/home/img-hero.png",
    },
  ];

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
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <HeroSlide
                  title={slide.title}
                  description={slide.description}
                  imageSrc={slide.imageSrc}
                  onButtonClick={handleButtonClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;
