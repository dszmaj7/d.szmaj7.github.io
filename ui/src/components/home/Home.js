import Banner from "./Banner";
import Footer from "./Footer";
import Services from "./Services";
import Team from "./Team";
import "./styles/home.scss";

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Services />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
