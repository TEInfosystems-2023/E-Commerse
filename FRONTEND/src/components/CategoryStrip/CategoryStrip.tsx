import "./CategoryStrip.css";
import { categories } from "../../data/categories";

const CategoryStrip = () => {
  return (
    <section className="category-strip">
      <div className="container-custom">
        <div className="category-strip-inner">
          {categories.map((category) => (
            <a href="#" className="category-strip-item" key={category.id}>
              <div className="category-strip-image">
                <img src={category.image} alt={category.name} />
              </div>
              <span className="category-strip-title">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryStrip;