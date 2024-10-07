import Counter from "./Counter";

const About = () => {
  return (
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
                  <a href="mailto:muhammedazhar.csfl20@gmail.com">muhammedazhar.csfl20@gmail.com</a>
                </div>
              </div>
              <div className="info-box-item">
                <i className="far fa-phone"></i>
                <div className="content">
                  <span>Make A Call</span>
                  <br />
                  <a href="callto:+03257847141">+03257847141</a>
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
  );
};
export default About;

// export const About2 = () => {
//   return (
//     <section
//       id="about"
//       className="about-area-two rel z-1 pt-130 rpt-100 pb-130 rpb-100"
//     >
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-7">
//             <div className="about-content-two rel z-2 rmb-55">
//               <div className="section-title mb-35 wow fadeInUp delay-0-2s">
//                 <span className="sub-title mb-15">
//                   <i className="flaticon-asterisk-1" />
//                   Introduction of Myself
//                 </span>
//                 <h2>
//                   i,m a digital <span>designer</span> studio connecting brands
//                   to people through
//                 </h2>
//               </div>
//               <div className="text pb-5">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </div>
//               <div className="row">
//                 <div className="col-xl-3 col-sm-4 col-6">
//                   <div className="about-info-item wow fadeInUp delay-0-2s">
//                     <small>born In</small>
//                     <b>New york</b>
//                   </div>
//                 </div>
//                 <div className="col-xl-3 col-sm-4 col-6">
//                   <div className="about-info-item wow fadeInUp delay-0-3s">
//                     <small>experience</small>
//                     <b>20+ Years</b>
//                   </div>
//                 </div>
//                 <div className="col-xl-3 col-sm-4 col-6">
//                   <div className="about-info-item wow fadeInUp delay-0-4s">
//                     <small>date of birth</small>
//                     <b>27 June 1983</b>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-5">
//             <div className="about-counter-wrap">
//               <div className="row gap-40 justify-content-center">
//                 <div className="col-lg-5 col-6 mx-5">
//                   <div className="counter-item counter-text-wrap mb-25 wow fadeInUp delay-0-2s">
//                     <Counter end={8} extraClass={"k"} />
//                     <span className="counter-title">project completed</span>
//                   </div>
//                 </div>
//                 <div className="col-lg-5 col-6">
//                   <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
//                     <Counter end={8} extraClass={"k"} />
//                     <span className="counter-title">Awward achievmentd</span>
//                   </div>
//                 </div>
//                 <div className="col-lg-5 col-6">
//                   <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
//                     <Counter end={80} extraClass={"k"} />
//                     <span className="counter-title">Satisfied customers</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="counter-logo">
//                 <img
//                   className="wow zoomIn delay-0-2s"
//                   src="assets/images/shape/circle-logo.png"
//                   alt="Logo"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
