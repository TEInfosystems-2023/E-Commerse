import { useEffect, useRef, useState } from "react";
import "./NewArrivals.css";
import { newArrivals } from "../../data/newArrivals";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const getScrollAmount = () => {
    const width = window.innerWidth;
    if (width <= 575) return 216;
    if (width <= 991) return 260;
    return 312;
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
    <section className="new-arrivals-section">
      <div className="container-custom">
        <div className="new-arrivals-header">
          <h2>New Arrivals</h2>
        </div>

        <div
          className="new-arrivals-carousel"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button
            className="new-arrivals-arrow new-arrivals-arrow-left"
            onClick={handlePrev}
            aria-label="Previous new arrivals"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="new-arrivals-track" ref={sliderRef}>
            {newArrivals.map((item) => (
              <div
                className="new-arrival-card"
                key={item.id}
                onClick={() => navigate(item.link)}
              >
                <div className="new-arrival-tag">{item.tag}</div>

                <div className="new-arrival-image-wrap">
                  <img src={item.image} alt={item.title} />
                  <div className="new-arrival-overlay" />
                  <p className="new-arrival-title">{item.title}</p>
                </div>

                <div className="new-arrival-offer">{item.offer}</div>

                <button className="new-arrival-btn">Shop Now</button>
              </div>
            ))}
          </div>

          <button
            className="new-arrivals-arrow new-arrivals-arrow-right"
            onClick={handleNext}
            aria-label="Next new arrivals"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;