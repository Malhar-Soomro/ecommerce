import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Category from "../components/Category";

const Home = () => {
  return (
  <>
    <Announcement/>
    <Navbar />
    <Slider/>
    <Category/>
  </>
  );
};

export default Home;
