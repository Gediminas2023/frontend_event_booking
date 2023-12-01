import { Link } from "react-router-dom";
import profile from "../../assets/about.jpg";
import HomeLayout from "../../components/HomeLayout";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <h3 className="title" data-title="Who Am I">
            About me
          </h3>
        </div>

        <div className="section-body grid-2">
          <div className="column-1">
            <h3 className="title-sm ">Im Brigita</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium distinctio doloribus quam? Ut, laudantium a dolore,
              minima repudiandae iure iste molestiae exercitationem earum neque
              tempora?
            </p>
            <div className="skills"></div>
            <Link to="/about/more" className="btn">
              Read more
            </Link>
          </div>

          <div className="column-2 image">
            <img src={profile} className="z-index" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
