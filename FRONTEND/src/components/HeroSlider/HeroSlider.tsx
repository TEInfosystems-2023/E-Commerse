import { useEffect, useState } from "react";
import "./HeroSlider.css";
import { heroSlides } from "../../data/heroSlides";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider-section">
      <div className="container-custom">
        <div className="hero-slider">
          <div
            className="hero-slider-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((slide) => (
              <div className="hero-slide" key={slide.id}>
                <img src={slide.image} alt={slide.alt} />

                <div className="hero-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>

                  <button
                    className="shop-btn"
                    onClick={() => navigate(slide.link)}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="hero-arrow hero-arrow-left"
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="hero-arrow hero-arrow-right"
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          <div className="hero-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;