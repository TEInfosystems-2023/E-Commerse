import { useEffect, useRef, useState } from "react";
import "./DealOfTheDay.css";
import { dealOfTheDay } from "../../data/dealOfTheDay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DealOfTheDay = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const getScrollAmount = () => {
    const width = window.innerWidth;
    if (width <= 575) return 216;
    if (width <= 991) return 260;
    return 302;
  };

  const handleNext = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const scrollAmount = getScrollAmount();
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft + scrollAmount >= maxScrollLeft - 10) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const scrollAmount = getScrollAmount();

    if (slider.scrollLeft <= 10) {
      slider.scrollTo({ left: slider.scrollWidth, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3200);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="deal-section">
      <div className="container-custom">
        <div className="deal-header">
          <h2>Deal Of The Day</h2>
        </div>

        <div
          className="deal-carousel"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button
            className="deal-arrow deal-arrow-left"
            onClick={handlePrev}
            aria-label="Previous deals"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="deal-track" ref={sliderRef}>
            {dealOfTheDay.map((item) => (
              <div
                className="deal-card"
                key={item.id}
                onClick={() => navigate(item.link)}
              >
                <div className="deal-card-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="deal-card-content">
                  <p className="deal-card-title">{item.title}</p>
                  <h4 className="deal-card-offer">{item.offer}</h4>

                  <button className="deal-shop-btn">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="deal-arrow deal-arrow-right"
            onClick={handleNext}
            aria-label="Next deals"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;