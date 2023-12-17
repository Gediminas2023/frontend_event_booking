import Layout from "../../components/Layout";
import "./dash.css";
import { BsPeopleFill, BsFillBellFill } from "react-icons/bs";
import { GiCrossedSlashes, GiAtomicSlashes } from "react-icons/gi";
import { useAppointment } from "../../contexts/ApiContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useEffect } from "react";

const Home = () => {
  const { users, getUser } = useAppointment();

  useEffect(() => {
    getUser();
  }, []);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
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
              <GiAtomicSlashes className="card_icon animate-spins" />
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
            <h1>{users.length - 1}</h1>
          </div>
          <div className="card transition ease-in-out delay-100 hover:-translate-y-1">
            <div className="card-inner">
              <h3 className="uppercase">ALERTS</h3>
              <BsFillBellFill className="card_icon animate-ping" />
            </div>
            <h1>1</h1>
          </div>
        </div>
        <div className="charts">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
