// ✅ Correct unique imports (no duplicates)
import allenSolly from "../assets/images/brands/allensolly.png";
import bata from "../assets/images/brands/bata.jpg";
import boat from "../assets/images/brands/boat.webp";
import johnson from "../assets/images/brands/Johnsons-Baby.jpg";
import lakme from "../assets/images/brands/lakme.png";
import libas from "../assets/images/brands/libas.png";
import mamaearth from "../assets/images/brands/mamaearth.jpg";
import mars from "../assets/images/brands/mars.png";
import nivea from "../assets/images/brands/nivea.png";
import oppo from "../assets/images/brands/oppo.jpg";
import plum from "../assets/images/brands/plum.webp";
import samsung from "../assets/images/brands/samsung.webp";
import wildstone from "../assets/images/brands/wildstone.webp";

// 🔥 Type
export interface BrandItem {
  id: number;
  name: string;
  logo: string;
}

// 🔥 Dynamic heading content
export const brandSection = {
  title: "Explore Top Brands",
  subtitle: "Trusted by millions of customers",
  showViewAll: true,
};

// 🔥 Brand list (clean mapping)
export const brands: BrandItem[] = [
  { id: 1, name: "Allen Solly", logo: allenSolly },
  { id: 2, name: "Bata", logo: bata },
  { id: 3, name: "Boat", logo: boat },
  { id: 4, name: "Johnson's Baby", logo: johnson },
  { id: 5, name: "Lakme", logo: lakme },
  { id: 6, name: "Libas", logo: libas },
  { id: 7, name: "Mamaearth", logo: mamaearth },
  { id: 8, name: "Mars", logo: mars },
  { id: 9, name: "Nivea", logo: nivea },
  { id: 10, name: "Oppo", logo: oppo },
  { id: 11, name: "Plum", logo: plum },
  { id: 12, name: "Samsung", logo: samsung },
  { id: 13, name: "Wildstone", logo: wildstone },
];