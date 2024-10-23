import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            {/* Text Section */}
            <div className="col-lg-12 col-md-12">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>Expert in Digital Marketing, Social Media, and Web Development</h2>
                  <p>
                    Are you ready to take your business to the next level? A strong online presence is key to growing your business and increasing revenue. Let us help you achieve that with our expert services in **Digital Marketing**, **Social Media Management**, **Web Development**, and **SEO**.
                  </p>
                </div>
                <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                  <li>DIGITAL MARKETING</li>
                  <li>SOCIAL MEDIA MANAGEMENT</li>
                  <li>WEB DEVELOPMENT</li>
                  <li>SEO</li>
                </ul>
                <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                  <div className="info-box-item">
                    <i className="far fa-envelope"></i>
                    <div className="content">
                      <span>Email Me</span>
                      <br />
                      <a href="mailto:ahmadmujtabanaeem@gmail.com">
                        ahmadmujtabanaeem@gmail.com</a>
                    </div>
                  </div>
                  <div className="info-box-item">
                    <i className="far fa-phone"></i>
                    <div className="content">
                      <span>Make A Call</span>
                      <br />
                      <a href="callto:+44-7405380735">+44-7405380735</a>
                    </div>
                  </div>
                </div>
                            {/* Contact Button */}
            <div className="mt-4 project-btn text-center wow fadeInUp delay-0-2s">
            <Link legacyBehavior href="#contact">
              <a className="theme-btn">
                Contact Us 
              </a>
            </Link>
          </div>
              </div>
            </div>
          </div>
        </div>
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
