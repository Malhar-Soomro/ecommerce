import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Category from "../components/Category";
import Products from "../components/Products";

const Home = () => {
  return (
  <>
    <Announcement/>
    <Navbar />
    <Slider/>
    <Category/>
    <Products/>
  </>
  );
};

export default Home;
