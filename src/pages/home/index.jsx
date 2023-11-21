import Layout from "../../components/Layout";
import "./Home.css";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  GiCrossedSlashes,
  GiClawSlashes,
  GiAtomicSlashes,
} from "react-icons/gi";

const Home = () => {
  return (
    <Layout>
      <main className="main-container">
        <div className="main-title">
          <h3>DASHBOARD</h3>
        </div>

        <div className="main-cards">
          <div className="card transition ease-in-out delay-100 hover:-translate-y-1 ">
            <div className="card-inner">
              <h3 className="uppercase">today</h3>
              <GiAtomicSlashes className="card_icon animate-spin" />
            </div>
            <h1>3</h1>
          </div>
          <div className="card transition ease-in-out delay-100 hover:-translate-y-1">
            <div className="card-inner">
              <h3 className="uppercase">tomorrow</h3>
              <GiCrossedSlashes className="card_icon animate-wiggle" />
            </div>
            <h1>4</h1>
          </div>
          <div className="card transition ease-in-out delay-100 hover:-translate-y-1">
            <div className="card-inner">
              <h3 className="uppercase">CUSTOMERS</h3>
              <BsPeopleFill className="card_icon animate-bounce" />
            </div>
            <h1>33</h1>
          </div>
          <div className="card transition ease-in-out delay-100 hover:-translate-y-1">
            <div className="card-inner">
              <h3 className="uppercase">ALERTS</h3>
              <BsFillBellFill className="card_icon animate-ping" />
            </div>
            <h1>2</h1>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
