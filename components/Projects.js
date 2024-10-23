import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Projects</span>
              <h2>
                Explore My <span>Digital Marketing</span> Works
              </h2>
              <p>
                Take a look at some of my most successful digital marketing projects, including social media management, SEO optimization, and web development that have driven growth and engagement for clients.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project1.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Social Media Campaign</span>
              <h2>
                <Link legacyBehavior href="project-details">
                  Instagram Growth Strategy
                </Link>
              </h2>
              <p>
                Developed a tailored social media strategy that increased followers by 30% and engagement by 50% over three months for a retail client.
              </p>
              <Link legacyBehavior href="#contact">
                <a className="details-btn">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project2.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">SEO Optimization</span>
              <h2>
                <Link legacyBehavior href="project-details">
                  E-commerce Website SEO Boost
                </Link>
              </h2>
              <p>
                Implemented on-page and off-page SEO tactics that led to a 25% increase in organic search traffic and a rise in search engine rankings.
              </p>
              <Link legacyBehavior href="#contact">
                <a className="details-btn">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project3.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Web Development</span>
              <h2>
                <Link legacyBehavior href="project-details">
                  Custom WordPress Website
                </Link>
              </h2>
              <p>
                Built a responsive and SEO-optimized WordPress website for a startup that helped increase traffic by 40% in the first month.
              </p>
              <Link legacyBehavior href="#contact">
                <a className="details-btn">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project4.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Content Strategy</span>
              <h2>
                <Link legacyBehavior href="project-details">
                  Blogging and SEO Content Creation
                </Link>
              </h2>
              <p>
                Created a content strategy for a tech blog that boosted page views by 60% and improved time on site through engaging, SEO-driven articles.
              </p>
              <Link legacyBehavior href="#contact">
                <a className="details-btn">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="#contact">
            <a className="theme-btn">
              Contact Us 
            </a>
          </Link>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};

export default Projects;



export const Projects2 = () => {
  return (
    <section
      id="projects"
      className="projects-area-four pt-135 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> Explore my projects
              </span>
              <h2>Explore My Projects</h2>
            </div>
          </div>
        </div>
        <div className="row gap-50">
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="#contact">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="#contact">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="#contact">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="#contact">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="#contact">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="#contact">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="#contact">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="#contact">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-3">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two5.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="#contact">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="#contact">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="project-details-btn mb-50">
              <Link legacyBehavior href="#contact">
                <a className="more-btn wow zoomIn delay-0-2s">
                  <span>More</span>
                  <i className="fal fa-arrow-up" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
