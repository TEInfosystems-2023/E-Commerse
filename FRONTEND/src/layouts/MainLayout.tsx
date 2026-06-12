import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />   {/* MUST */}
      <Footer />
    </>
  );
};

export default MainLayout;