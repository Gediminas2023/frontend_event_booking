import HomeLayout from "../../components/HomeLayout";
import "./Home.css";
import profile from "../../assets/profile.png";
import { Link } from "react-router-dom";
import About from "../About";
import Services from "../Services";
import Portfolios from "../portfolios";
import Contact from "../Contact";

const Home = () => {
  return (
    <HomeLayout>
      <div className="container grid-2">
        <div className="column-1">
          <h1 className="header-title">Feel The Beauty</h1>
          <p className="text">You can book appoitment now</p>
          <Link to="/calendar" className="btn">
            Book Now
          </Link>
          <div className="social">
            <Link to="#">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        <div className="column-2 image ">
          <img src={profile} className="img-element z-index " alt="" />
        </div>
      </div>
      <About />
      <Services />
      <Portfolios />
      <Contact />
    </HomeLayout>
  );
};

export default Home;
