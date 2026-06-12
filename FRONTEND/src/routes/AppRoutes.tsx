import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

/* IMPORT HEADER PAGE */
import HeaderPages from "../Pages/HeaderPages/HeaderPages";

/* CATEGORY PAGES */
import Fashion from "../Pages/Fashion/Fashion";
import Mobiles from "../Pages/Mobiles/Mobiles";
import Food from "../Pages/Food/Food";
import Electronics from "../Pages/Electronics/Electronics";
import Beauty from "../Pages/Beauty/Beauty";
import Books from "../Pages/Books/Books";
import Sports from "../Pages/Sports/Sports";
import Furniture from "../Pages/Furniture/Furniture";

import Appliances from "../Pages/Appliances/Appliances";
import Toys from "../Pages/Toys/Toys";
import Auto from "../Pages/Auto/Auto";
import ForYou from "../Pages/ForYou/ForYou";

/* OTHER */
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import Wishlist from "../Pages/Wishlist/Wishlist";

/* CHECKOUT */
import Checkout from "../Pages/Checkout/Checkout";

/* ACCOUNT DROPDOWN PAGES */
import Orders from "../Pages/Orders/Orders";
import Payments from "../Pages/Payments/Payments";
import GiftCards from "../Pages/GiftCards/GiftCards";
import Notifications from "../Pages/Notifications/Notifications";
import Settings from "../Pages/Settings/Settings";
import Help from "../Pages/Help/Help";
import Support from "../Pages/Support/Support";
import Account from "../Pages/Account/Account";
import Search from "../Pages/Search/Search";

/* AUTH */
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import ProtectedRoute from "./ProtectedRoute";

/* HOME COMPONENTS */
import CategoryShowcase from "../components/CategoryShowcase/CategoryShowcase";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import FeatureHighlights from "../components/FeatureHighlights/FeatureHighlights";
import DealOfTheDay from "../components/DealOfTheDay/DealOfTheDay";
import PremiumProducts from "../components/PremiumProducts/PremiumProducts";
import BrandMarquee from "../components/BrandMarquee/BrandMarquee";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import TrendingOffer from "../components/TrendingOffer/TrendingOffer";
import ExploreCategories from "../components/ExploreCategories/ExploreCategories";

/* HOME PAGE */
const HomePage = () => {
  return (
    <>
      <CategoryShowcase />
      <HeroSlider />
      <FeatureHighlights />
      <DealOfTheDay />
      <PremiumProducts />
      <BrandMarquee />
      <NewArrivals />
      <TrendingOffer />
      <ExploreCategories />
    </>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* MAIN LAYOUT */}
      <Route path="/" element={<MainLayout />}>
        {/* HOME */}
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />

        {/* CATEGORY ROUTES */}
        <Route path="fashion" element={<Fashion />} />
        <Route path="mobiles" element={<Mobiles />} />
        <Route path="food" element={<Food />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="beauty" element={<Beauty />} />
        <Route path="books" element={<Books />} />
        <Route path="sports" element={<Sports />} />
        <Route path="furniture" element={<Furniture />} />
        <Route path="appliances" element={<Appliances />} />
        <Route path="toys" element={<Toys />} />
        <Route path="auto" element={<Auto />} />
        <Route path="foryou" element={<ForYou />} />

        {/* ADD THESE ROUTES */}
        <Route path="blog" element={<HeaderPages />} />
        <Route path="help-center" element={<HeaderPages />} />
        <Route path="sell-on-remart" element={<HeaderPages />} />
        <Route path="search" element={<Search />} />
        {/* PRODUCT */}
        <Route path="product/:id" element={<ProductDetails />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        {/* ACCOUNT DROPDOWN ROUTES */}
        <Route
          path="orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="payments"
          element={
            <ProtectedRoute>
              <Payments />
            </ProtectedRoute>
          }
        />
        <Route
          path="giftcards"
          element={
            <ProtectedRoute>
              <GiftCards />
            </ProtectedRoute>
          }
        />
        <Route
          path="notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* PUBLIC SUPPORT */}
        <Route path="help" element={<Help />} />
        <Route path="support" element={<Support />} />

        {/* ACCOUNT PAGE */}
        <Route
          path="account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* AUTH ROUTES */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
