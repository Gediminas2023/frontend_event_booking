import HomeLayout from "../../components/HomeLayout";
import "./Home.css";
import Hero from "../Hero";
import About from "../About";
import Services from "../Services";
import Portfolios from "../portfolios";
import Contact from "../Contact";

const Home = () => {
  return (
    <HomeLayout>
      <Hero />
      <About />
      <Services />
      <Portfolios />
      <Contact />
    </HomeLayout>
  );
};

export default Home;
