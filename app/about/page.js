import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";

export const metadata = {
  title: "About Me",
};

const About = () => {
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"About Me"} />

      <div className="about-main-image-area pt-40">
        <div className="container">
          <div className="about-main-image wow fadeInUp delay-0-5s">
            <img src="assets/images/about/about-page.png" alt="About Page" />
          </div>
        </div>
      </div>
      {/* About Page Area start */}
      <section id="about" className="about-area rel z-1">
  <div className="for-bgc-black py-130 rpy-100">
    <div className="container">
      <div className="row gap-100 align-items-center">
        <div className="col-lg-7">
          <div className="about-content-part rel z-2 rmb-55">
            <div className="section-title mb-35 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">About Me</span>
              <h2>Building Solutions through Frontend and Backend Development</h2>
              <p>
                I am Muhammad Azhar, an Associate Software Engineer with over a year of hands-on experience in ReactJS and TypeScript. My work focuses on creating dynamic, responsive web applications that are clean, scalable, and user-friendly. Along with my frontend expertise, I have basic backend experience in Node.js, allowing me to work on full-stack projects.
              </p>
              <p>
                I specialize in React.js, with skills in Redux for state management, API integration, and robust application development. My goal is to deliver high-quality code that meets client needs and improves digital products.
              </p>
            </div>
            <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
              <li>React.js Development</li>
              <li>Full-Stack Application Development</li>
              <li>API Integration</li>
              <li>UI/UX Design</li>
            </ul>
            <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
              <div className="info-box-item">
                <i className="far fa-envelope"></i>
                <div className="content">
                  <span>Email Me</span>
                  <br />
                  <a href="mailto:ahmadmujtabanaeem@gmail.com">ahmadmujtabanaeem@gmail.com</a>
                </div>
              </div>
              <div className="info-box-item">
                <i className="far fa-phone"></i>
                <div className="content">
                  <span>Make A Call</span>
                  <br />
                  <a href="callto:++44-7405380735">++44-7405380735</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="about-image-part wow fadeInUp delay-0-3s">
            <img src="assets/images/about/about.jpg" alt="About Me" />
            <div className="about-btn btn-one wow fadeInRight delay-0-4s">
              <img src="assets/images/about/btn-image1.png" alt="Image" />
              <h6>Experienced React Developer</h6>
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="about-btn btn-two wow fadeInRight delay-0-5s">
              <img src="assets/images/about/btn-image2.png" alt="Image" />
              <h6>Muhammad Azhar</h6>
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="dot-shape">
              <img src="assets/images/shape/about-dot.png" alt="Shape" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-lines">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</section>
      {/* About Page Area end */}
      {/* Services Area start */}
      <Services extraClass={"bgc-black"} />
      {/* Services Area end */}
      {/* FAQs Area start */}
      {/* <section id="faqs" className="faqs-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-image-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="image-one">
                  <img src="assets/images/faqs/faq-one.jpg" alt="FAQ" />
                </div>
                <div className="image-two">
                  <img src="assets/images/faqs/faq-two.jpg" alt="FAQ" />
                </div>
                <div className="square-shape" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content-part rel z-2">
                <div className="section-title mb-40 wow fadeInUp delay-0-4s">
                  <h2>
                    Professional Solutions For Your <span>Digital Product</span>{" "}
                    Design and development
                  </h2>
                </div>
                <Faq />
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
      {/* FAQs Area end */}
      {/* Testimonial Area start */}
      {/* <Testimonial /> */}
      {/* Testimonial Area end */}
      {/* Client Log start */}
     {/* <Clients />   */}
    </NoxfolioLayout>
  );
};
export default About;
