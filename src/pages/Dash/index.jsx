import Layout from "../../components/Layout";
import "./dash.css";
import { BsPeopleFill, BsFillBellFill } from "react-icons/bs";
import { GiCrossedSlashes, GiAtomicSlashes } from "react-icons/gi";
import { useAppointment } from "../../contexts/ApiContext";
import users from "../../constants/users";

const Home = () => {
  // const { users } = useAppointment();
  return (
    <Layout>
      <main className="main-container ">
        <div className="main-title">
          <h3 className="uppercase">DASHBOARD</h3>
        </div>

        <div className="main-cards text-gray-100">
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
            <h1>{users.length}</h1>
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
