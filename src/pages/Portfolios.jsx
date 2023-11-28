import portfolio from "../assets/portfolio/port1.jpg";
import portfolio1 from "../assets/portfolio/port2.png";
import portfolio2 from "../assets/portfolio/port3.png";
import portfolio3 from "../assets/portfolio/port4.png";
import portfolio4 from "../assets/portfolio/port5.jpg";
import portfolio5 from "../assets/portfolio/port6.jpg";
import portfolio6 from "../assets/portfolio/port7.jpg";
import portfolio7 from "../assets/portfolio/port8.png";
import portfolio8 from "../assets/portfolio/port9.png";
import portfolio9 from "../assets/portfolio/port9.png";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="background-bg"></div>
      <div className="container">
        <div className="section-header">
          <h3 className="title" data-title="My works">
            Portfolio
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={portfolio}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={portfolio1}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={portfolio2}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={portfolio3}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={portfolio4}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={portfolio5}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={portfolio6}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={portfolio7}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={portfolio8}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={portfolio9}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={portfolio}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={portfolio1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
