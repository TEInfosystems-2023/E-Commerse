import "./BrandMarquee.css";
import { brands, brandSection } from "../../data/brands";

const BrandMarquee = () => {
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="brand-marquee-section">
      <div className="container-custom">

        {/* 🔥 Dynamic Heading */}
        <div className="brand-header">
          <div className="brand-heading">
            <h2>{brandSection.title}</h2>
            {brandSection.subtitle && <p>{brandSection.subtitle}</p>}
          </div>

          {brandSection.showViewAll && (
            <a href="#" className="brand-view-all">
              View All →
            </a>
          )}
        </div>

        {/* Marquee */}
        <div className="brand-marquee-wrapper">
          <div className="brand-marquee-track">
            {marqueeBrands.map((brand, index) => (
              <div className="brand-card" key={`${brand.id}-${index}`}>
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandMarquee;