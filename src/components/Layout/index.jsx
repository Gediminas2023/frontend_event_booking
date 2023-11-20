import "./layout.css";
import Nav from "../NavBar";
import LeftSide from "../LeftSide";

function Layout({ children }) {
  return (
    <div className="wrapper">
      <LeftSide />
      <div className="main-container">
        <Nav />
        <div className="user-box first-box">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
