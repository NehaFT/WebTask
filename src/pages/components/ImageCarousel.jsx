import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "../constants/webPage.constants";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#f8f9fb",
                padding: "40px 10px 20px 60px",
                flexDirection: "row",
                gap: "60px",
                flexWrap: "nowrap",
                minHeight: "400px",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              {/* Left: Text */}
              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#1a3d7c",
                    marginBottom: "20px",
                  }}
                >
                  {slide.title}
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#444",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                  }}
                >
                  {slide.description}
                </p>
                <button
                  style={{
                    backgroundColor: "#1a3d7c",
                    color: "white",
                    padding: "12px 24px",
                    fontSize: "14px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Know More ▶
                </button>
              </div>

              {/* Right: Image */}
              <div style={{ textAlign: "center" }}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{ width: "100%", maxWidth: "400px", height: "100%", maxHeight:"500px" }}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
