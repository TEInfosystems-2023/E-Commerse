import "./ExploreCategories.css";
import { exploreCategories } from "../../data/exploreCategories";
import { useNavigate } from "react-router-dom";

const ExploreCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="explore-categories-section">
      <div className="container-custom">
        <div className="explore-categories-heading">
          <h2>Explore More By Categories</h2>
        </div>

        <div className="explore-categories-grid">
          {exploreCategories.map((item) => (
            <div
              className="explore-category-card"
              key={item.id}
              onClick={() => navigate(item.link)}
            >
              <div className="explore-category-image-wrap">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="explore-category-overlay">
                <h3>{item.title}</h3>
                <p>{item.offer}</p>

                <button className="explore-btn">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;