import React from 'react';
import Link from "next/link";
const DigitalMarketing = () => {
  return (
    <section id="digital-marketing" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Digital Marketing Services */}
          <div className="col-md-6">
            <h2 className="mb-4 text-center">Digital Marketing Services</h2>
            <p className="mb-4 text-center">
              Empower your business with our top-notch digital marketing solutions.
            </p>
            <div className="row">
              {/* Service Boxes: 2 on top, 2 below */}
              {/* SEO */}
              <div className="col-md-6 mb-4">
                <div className="service-box p-3" style={boxStyle}>
                  <i className="fas fa-search fa-2x mb-2" style={iconStyle}></i>
                  <h6>SEO Optimization</h6>
                  <p>Boost your site's visibility.</p>
                </div>
              </div>
              {/* Social Media */}
              <div className="col-md-6 mb-4">
                <div className="service-box p-3" style={boxStyle}>
                  <i className="fas fa-thumbs-up fa-2x mb-2" style={iconStyle}></i>
                  <h6>Social Media Marketing</h6>
                  <p>Engage audiences creatively.</p>
                </div>
              </div>
              {/* Email Marketing */}
              <div className="col-md-6 mb-4">
                <div className="service-box p-3" style={boxStyle}>
                  <i className="fas fa-envelope fa-2x mb-2" style={iconStyle}></i>
                  <h6>Email Marketing</h6>
                  <p>Direct outreach to customers.</p>
                </div>
              </div>
              {/* PPC */}
              <div className="col-md-6 mb-4">
                <div className="service-box p-3" style={boxStyle}>
                  <i className="fas fa-bullhorn fa-2x mb-2" style={iconStyle}></i>
                  <h6>Pay-Per-Click Ads</h6>
                  <p>Maximize ad reach with PPC.</p>
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

          {/* Right Column: Image */}
          <div className="col-md-6 text-center">
            <img
              src="/assets/images/hero/digital-marketing.png"
              alt="Digital Marketing"
              className="img-fluid"
              style={{ borderRadius: '10px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Inline styles for gradient and icons
const boxStyle = {
  background: 'linear-gradient(45deg, #fd1a8f, #f29c17)',
  borderRadius: '10px',
  color: '#fff',
  textAlign: 'center',
};

const iconStyle = {
  color: '#fff',
};

export default DigitalMarketing;
