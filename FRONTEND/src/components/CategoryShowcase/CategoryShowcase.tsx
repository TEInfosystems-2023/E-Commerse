import "./CategoryShowcase.css";
import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationModal from "../Location/LocationModal";

import {
  ChevronDown,
  Sparkles,
  Shirt,
  Smartphone,
  Heart,
  Tv,
  Home,
  CookingPot,
  Baby,
  Apple,
  Car,
  Dumbbell,
  Book,
  Sofa,
  MapPin,
} from "lucide-react";

interface CategoryItem {
  id: number;
  name: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  dropdownItems: string[];
}

const categoryShowcase: CategoryItem[] = [
  {
    id: 1,
    name: "For You",
    icon: Sparkles,
    dropdownItems: [
      "Top Picks",
      "Recommended",
      "Best Sellers",
      "Trending Now",
      "New Launches",
      "Budget Buys",
      "Premium Picks",
      "Daily Deals",
      "Editor's Choice",
      "Recently Viewed",
    ],
  },
  {
    id: 2,
    name: "Fashion",
    icon: Shirt,
    dropdownItems: [
      "Men's Wear",
      "Women's Wear",
      "Ethnic Wear",
      "Western Wear",
      "Footwear",
      "Watches",
      "Bags",
      "Jewellery",
      "Sportswear",
      "Kids Fashion",
    ],
  },
  {
    id: 3,
    name: "Mobiles",
    icon: Smartphone,
    dropdownItems: [
      "Smartphones",
      "5G Phones",
      "Budget Phones",
      "Premium Phones",
      "Power Banks",
      "Chargers",
      "Cases & Covers",
      "Screen Protectors",
      "Wireless Earbuds",
      "Smartwatches",
    ],
  },
  {
    id: 4,
    name: "Beauty",
    icon: Heart,
    dropdownItems: [
      "Skincare",
      "Makeup",
      "Hair Care",
      "Bath & Body",
      "Fragrances",
      "Men's Grooming",
      "Beauty Tools",
      "Face Wash",
      "Lipsticks",
      "Sunscreen",
    ],
  },
  {
    id: 5,
    name: "Electronics",
    icon: Tv,
    dropdownItems: [
      "Televisions",
      "Laptops",
      "Headphones",
      "Speakers",
      "Cameras",
      "Monitors",
      "Printers",
      "Gaming",
      "Storage Devices",
      "Computer Accessories",
    ],
  },
  {
    id: 6,
    name: "Home",
    icon: Home,
    dropdownItems: [
      "Bedsheets",
      "Curtains",
      "Sofas",
      "Wall Decor",
      "Lighting",
      "Kitchen Storage",
      "Dining",
      "Cleaning Supplies",
      "Home Furnishing",
      "Plants & Decor",
    ],
  },
  {
    id: 7,
    name: "Appliances",
    icon: CookingPot,
    dropdownItems: [
      "Refrigerators",
      "Washing Machines",
      "Microwaves",
      "Water Purifiers",
      "Air Conditioners",
      "Fans",
      "Mixers",
      "Induction Cooktops",
      "Vacuum Cleaners",
      "Irons",
    ],
  },
  {
    id: 8,
    name: "Toys",
    icon: Baby,
    dropdownItems: [
      "Soft Toys",
      "Remote Control Toys",
      "Educational Toys",
      "Board Games",
      "Outdoor Toys",
      "Action Figures",
      "Dolls",
      "Building Blocks",
      "Baby Toys",
      "Ride-ons",
    ],
  },
  {
    id: 9,
    name: "Food",
    icon: Apple,
    dropdownItems: [
      "Snacks",
      "Beverages",
      "Dry Fruits",
      "Breakfast",
      "Organic Food",
      "Baby Food",
      "Health Drinks",
      "Tea & Coffee",
      "Staples",
      "Sauces & Spreads",
    ],
  },
  {
    id: 10,
    name: "Auto",
    icon: Car,
    dropdownItems: [
      "Car Accessories",
      "Bike Accessories",
      "Helmets",
      "Car Care",
      "Seat Covers",
      "Mobile Holders",
      "Cleaning Kits",
      "Tyre Care",
      "Lights",
      "Air Fresheners",
    ],
  },
  {
    id: 11,
    name: "Sports",
    icon: Dumbbell,
    dropdownItems: [
      "Gym Equipment",
      "Yoga Mats",
      "Cricket",
      "Football",
      "Badminton",
      "Cycling",
      "Running",
      "Protein & Nutrition",
      "Sports Shoes",
      "Accessories",
    ],
  },
  {
    id: 12,
    name: "Books",
    icon: Book,
    dropdownItems: [
      "Fiction",
      "Non-Fiction",
      "Educational",
      "Children Books",
      "Comics",
      "Biographies",
      "Business",
      "Self Help",
      "Exam Prep",
      "Magazines",
    ],
  },
  {
    id: 13,
    name: "Furniture",
    icon: Sofa,
    dropdownItems: [
      "Sofas",
      "Beds",
      "Dining Tables",
      "Chairs",
      "Wardrobes",
      "Study Tables",
      "TV Units",
      "Coffee Tables",
      "Office Furniture",
      "Storage",
    ],
  },
];

type PanelPos = {
  left: number;
  top: number;
  width: number;
};

const CategoryShowcase = () => {
  const navigate = useNavigate();
  const closeTimer = useRef<number | null>(null);

  const [activeId, setActiveId] = useState<number | null>(null);
  const [panelPos, setPanelPos] = useState<PanelPos | null>(null);

  // ✅ LOCATION STATE
  const [showLocationModal, setShowLocationModal] = useState(false);
  const city = localStorage.getItem("userCity") || "Select Location";

  const activeCategory = useMemo(
    () => categoryShowcase.find((item) => item.id === activeId) ?? null,
    [activeId]
  );

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openDropdown = (id: number, el: HTMLButtonElement) => {
    clearCloseTimer();
    const rect = el.getBoundingClientRect();
    setActiveId(id);
    setPanelPos({
      left: rect.left + rect.width / 2,
      top: rect.bottom + 8,
      width: 220,
    });
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setActiveId(null);
      setPanelPos(null);
    }, 120);
  };

  return (
    <section className="category-showcase-section">
      <div className="container-custom">
        <div className="category-showcase-bar">

          <div className="category-showcase-strip">
            {categoryShowcase.map((item) => {
              const Icon = item.icon;
              const isOpen = activeId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`category-showcase-item ${isOpen ? "active" : ""}`}
                  onMouseEnter={(e) => openDropdown(item.id, e.currentTarget)}
                  onMouseLeave={scheduleClose}
                  onClick={() => {
                    const routeMap: Record<string, string> = {
                      "For You": "foryou",
                      Fashion: "fashion",
                      Mobiles: "mobiles",
                      Beauty: "beauty",
                      Electronics: "electronics",
                      Home: "home",
                      Appliances: "appliances",
                      Toys: "toys",
                      Food: "food",
                      Auto: "auto",
                      Sports: "sports",
                      Books: "books",
                      Furniture: "furniture",
                    };

                    const path = routeMap[item.name];
                    if (path) navigate(`/${path}`);
                  }}
                >
                  <div className="category-showcase-icon-box">
                    <Icon size={24} strokeWidth={1.9} />
                  </div>

                  <div className="category-showcase-label">
                    <span className="category-showcase-name">{item.name}</span>
                    <ChevronDown size={14} strokeWidth={2.2} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* ✅ WORKING LOCATION BUTTON */}
          <button
            type="button"
            className="category-location-btn"
            onClick={() => setShowLocationModal(true)}
          >
            <MapPin size={18} strokeWidth={2.1} />
            <span>{city}</span>
          </button>

        </div>
      </div>

      {/* ✅ MODAL */}
      {showLocationModal && (
        <LocationModal onClose={() => setShowLocationModal(false)} />
      )}

      {activeCategory && panelPos && (
        <div
          className="category-floating-dropdown"
          style={{
            left: `${panelPos.left}px`,
            top: `${panelPos.top}px`,
            width: `${panelPos.width}px`,
          }}
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
        >
          {activeCategory.dropdownItems.map((item, index) => (
            <a href="#" className="category-dropdown-link" key={index}>
              {item}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryShowcase;