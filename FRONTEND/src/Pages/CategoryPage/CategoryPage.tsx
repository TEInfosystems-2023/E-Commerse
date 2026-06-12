import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import "./CategoryPage.css";
import {
  categoryProductsData,
  categoriesPageData,
} from "../../data/categoriesPageData";

const CategoryPage = () => {
  const { slug } = useParams();

  const [sort, setSort] = useState("popularity");
  const [search, setSearch] = useState("");

  const [selectedBrands, setSelectedBrands] =
    useState<string[]>([]);

  const [selectedPrice, setSelectedPrice] =
    useState("");

  const [selectedRating, setSelectedRating] =
    useState(0);

  const [selectedDiscount, setSelectedDiscount] =
    useState(0);

  const category = categoriesPageData.find(
    (item) => item.slug === slug
  );

  /* DYNAMIC BRANDS */
  const brands = useMemo(() => {
    const items = categoryProductsData.filter(
      (item) => item.slug === slug
    );

    return [...new Set(items.map((i) => i.brand))];
  }, [slug]);

  /* FILTER PRODUCTS */
  const products = useMemo(() => {
    let filteredProducts =
      categoryProductsData.filter(
        (item) => item.slug === slug
      );

    /* SEARCH */
    filteredProducts = filteredProducts.filter(
      (item) =>
        item.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.brand
          .toLowerCase()
          .includes(search.toLowerCase())
    );

    /* BRAND */
    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter(
        (item) =>
          selectedBrands.includes(item.brand)
      );
    }

    /* PRICE */
    if (selectedPrice === "under500") {
      filteredProducts = filteredProducts.filter(
        (item) => item.price < 500
      );
    }

    if (selectedPrice === "500to1000") {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.price >= 500 &&
          item.price <= 1000
      );
    }

    if (selectedPrice === "1000plus") {
      filteredProducts = filteredProducts.filter(
        (item) => item.price > 1000
      );
    }

    /* RATING */
    if (selectedRating > 0) {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.rating >= selectedRating
      );
    }

    /* DISCOUNT */
    if (selectedDiscount > 0) {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.discount >= selectedDiscount
      );
    }

    /* SORT */
    if (sort === "low") {
      filteredProducts.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "high") {
      filteredProducts.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "rating") {
      filteredProducts.sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (sort === "discount") {
      filteredProducts.sort(
        (a, b) =>
          b.discount - a.discount
      );
    }

    return filteredProducts;
  }, [
    slug,
    sort,
    search,
    selectedBrands,
    selectedPrice,
    selectedRating,
    selectedDiscount,
  ]);

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter(
          (b) => b !== brand
        )
      );
    } else {
      setSelectedBrands([
        ...selectedBrands,
        brand,
      ]);
    }
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedBrands([]);
    setSelectedPrice("");
    setSelectedRating(0);
    setSelectedDiscount(0);
    setSort("popularity");
  };

  if (!category) {
    return (
      <h2 className="not-found">
        Category Not Found
      </h2>
    );
  }

  return (
    <div className="category-page">

      {/* BANNER */}
      <div className="category-banner">

        <img
          src={category.banner}
          alt={category.title}
        />

        <div className="category-banner-content">
          <h1>{category.title}</h1>
          <p>{category.subtitle}</p>
        </div>

      </div>

      <div className="category-container">

        {/* FILTERS */}
        <aside className="filters">

          <div className="filter-header">

            <h3>Filters</h3>

            <button
              className="clear-btn"
              onClick={clearFilters}
            >
              Clear
            </button>

          </div>

          {/* SEARCH */}
          <div className="filter-section">

            <h4>Search</h4>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="search-box"
            />

          </div>

          {/* PRICE */}
          <div className="filter-section">

            <h4>Price</h4>

            <label>
              <input
                type="radio"
                checked={
                  selectedPrice === "under500"
                }
                onChange={() =>
                  setSelectedPrice(
                    "under500"
                  )
                }
              />
              Under ₹500
            </label>

            <label>
              <input
                type="radio"
                checked={
                  selectedPrice ===
                  "500to1000"
                }
                onChange={() =>
                  setSelectedPrice(
                    "500to1000"
                  )
                }
              />
              ₹500 - ₹1000
            </label>

            <label>
              <input
                type="radio"
                checked={
                  selectedPrice ===
                  "1000plus"
                }
                onChange={() =>
                  setSelectedPrice(
                    "1000plus"
                  )
                }
              />
              ₹1000+
            </label>

          </div>

          {/* BRAND */}
          <div className="filter-section">

            <h4>Brand</h4>

            {brands.map((brand) => (
              <label key={brand}>

                <input
                  type="checkbox"
                  checked={selectedBrands.includes(
                    brand
                  )}
                  onChange={() =>
                    toggleBrand(brand)
                  }
                />

                {brand}

              </label>
            ))}

          </div>

          {/* RATING */}
          <div className="filter-section">

            <h4>Rating</h4>

            <label>
              <input
                type="radio"
                checked={
                  selectedRating === 4
                }
                onChange={() =>
                  setSelectedRating(4)
                }
              />
              4★ & above
            </label>

            <label>
              <input
                type="radio"
                checked={
                  selectedRating === 3
                }
                onChange={() =>
                  setSelectedRating(3)
                }
              />
              3★ & above
            </label>

          </div>

          {/* DISCOUNT */}
          <div className="filter-section">

            <h4>Discount</h4>

            <label>
              <input
                type="radio"
                checked={
                  selectedDiscount === 10
                }
                onChange={() =>
                  setSelectedDiscount(10)
                }
              />
              10% & above
            </label>

            <label>
              <input
                type="radio"
                checked={
                  selectedDiscount === 30
                }
                onChange={() =>
                  setSelectedDiscount(30)
                }
              />
              30% & above
            </label>

            <label>
              <input
                type="radio"
                checked={
                  selectedDiscount === 50
                }
                onChange={() =>
                  setSelectedDiscount(50)
                }
              />
              50% & above
            </label>

          </div>

        </aside>

        {/* PRODUCTS */}
        <section className="products-section">

          {/* TOPBAR */}
          <div className="top-bar">

            <div>
              <h2>{category.title}</h2>
              <p>
                {products.length} items found
              </p>
            </div>

            <div className="sort">

              <span>Sort By:</span>

              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
              >
                <option value="popularity">
                  Popularity
                </option>

                <option value="low">
                  Price Low to High
                </option>

                <option value="high">
                  Price High to Low
                </option>

                <option value="rating">
                  Top Rated
                </option>

                <option value="discount">
                  Highest Discount
                </option>

              </select>

            </div>

          </div>

          {/* ACTIVE FILTERS */}
          <div className="active-filters">

            {selectedBrands.map((brand) => (
              <span
                key={brand}
                className="filter-chip"
              >
                {brand}
              </span>
            ))}

            {selectedPrice && (
              <span className="filter-chip">
                Price Filter
              </span>
            )}

            {selectedRating > 0 && (
              <span className="filter-chip">
                {selectedRating}★+
              </span>
            )}

          </div>

          {/* PRODUCT GRID */}
          <div className="product-grid">

            {products.length > 0 ? (
              products.map((item) => (

                <div
                  key={item.id}
                  className="product-card"
                >

                  <div className="image-wrapper">

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <span className="discount-badge">
                      {item.discount}% OFF
                    </span>

                    <button className="wishlist-btn">
                      ♡
                    </button>

                  </div>

                  <div className="product-info">

                    <h4>{item.brand}</h4>

                    <p className="title">
                      {item.title}
                    </p>

                    <div className="price">

                      <span className="new">
                        ₹{item.price}
                      </span>

                      <span className="old">
                        ₹{item.oldPrice}
                      </span>

                    </div>

                    <div className="bottom-row">

                      <div className="rating">
                        {item.rating} ★
                      </div>

                      <span className="delivery">
                        Free Delivery
                      </span>

                    </div>

                    <button>
                      Add To Cart
                    </button>

                  </div>

                </div>
              ))
            ) : (
              <div className="empty-state">

                <h2>
                  No Products Found 😔
                </h2>

                <p>
                  Try changing filters or
                  search keywords.
                </p>

              </div>
            )}

          </div>

        </section>

      </div>

    </div>
  );
};

export default CategoryPage;