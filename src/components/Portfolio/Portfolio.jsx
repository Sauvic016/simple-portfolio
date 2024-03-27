import React from "react";
import "./portfolio.css";
import ezflightsImg from "../../assets/ezflights.png";
import techspaceImg from "../../assets/Techspace.png";
import twitter from "../../assets/twitter.png";

const Portfolio = () => {
  const myProjects = [
    {
      name: "Ezflighs",
      Github: "https://github.com/Sauvic016/Ezflights",
      Link: "https://airline-frontend.vercel.app/",
      image: ezflightsImg,
    },
    {
      name: "Techspace",
      Github: "https://github.com/Sauvic016/Tech-Space",
      Link: "https://tech-space-xi.vercel.app/",
      image: techspaceImg,
    },
    {
      name: "Twitter Backend",
      Github: "https://github.com/Sauvic016/Twitter-Backend",
      Link: "",
      image: twitter,
    },
  ];
  return (
    <section className="section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Recent Work</span>

      <div className="container portfolio__container grid">
        {myProjects.map((project) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={project.image} alt="alt" />
              </div>
              <h3 className="portfolio__title">{project.name}</h3>
              <div className="a-flex-end">
                <a
                  href={project.Github}
                  className="button button--flex"
                  target="_blank"
                  // style={{ marginRight: "5px" }}
                >
                  {" "}
                  GitHub
                </a>
                {project.Link && (
                  <a href={project.Link} className="button button--flex " target="_blank">
                    Live demo
                  </a>
                )}
              </div>
            </article>
          );
        })}

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={img}
              alt="alt"
              // style={{ width: "280px", height: "250px" }}
            />
          </div>
          <h3 className="portfolio__title">ProjectName</h3>
          <div className="a-flex-end">
            <a
              href="#"
              className="button button--flex"
              target="_blank"
              // style={{ marginRight: "5px" }}
            >
              {" "}
              GitHub
            </a>
            <a href="#" className="button-primary button--flex " target="_blank">
              Live demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={img}
              alt="alt"
              // style={{ width: "280px", height: "250px" }}
            />
          </div>
          <h3 className="portfolio__title">ProjectName</h3>
          <div className="a-flex-end">
            <a
              href="#"
              className="button button--flex"
              target="_blank"
              // style={{ marginRight: "5px" }}
            >
              {" "}
              GitHub
            </a>
            <a href="#" className="button-primary button--flex " target="_blank">
              Live demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={img}
              alt="alt"
              // style={{ width: "280px", height: "250px" }}
            />
          </div>
          <h3 className="portfolio__title">ProjectName</h3>
          <div className="a-flex-end">
            <a
              href="#"
              className="button button--flex"
              target="_blank"
              // style={{ marginRight: "5px" }}
            >
              {" "}
              GitHub
            </a>
            <a href="#" className="button-primary button--flex " target="_blank">
              Live demo
            </a>
          </div>
        </article> */}

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={img}
              alt="alt"
              // style={{ width: "280px", height: "250px" }}
            />
          </div>
          <h3 className="portfolio__title">ProjectName</h3>
          <div className="a-flex-end">
            <a
              href="#"
              className="button button--flex"
              target="_blank"
              // style={{ marginRight: "5px" }}
            >
              {" "}
              GitHub
            </a>
            <a href="#" className="button-primary button--flex " target="_blank">
              Live demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
