"use client";
// Styles
const boxStyle = {
  background: "linear-gradient(45deg, #f29c17, #fd1a8f)",
  borderRadius: "8px",
  border: "1px solid transparent",
  padding: "20px 10px",
  width: "200px",
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const activeBoxStyle = {
  ...boxStyle,
  background: "linear-gradient(45deg, #fd1a8f, #f29c17)",
};
const Hero = () => {
  return (
    <section id="home" className="main-hero-area pt-150 pb-80 rel z-1" style={{ backgroundColor: "#141414" }}>
      <div className="container mb-4">
        <div className="row align-items-center">
          {/* Left Column: Text Content */}
          <div className="col-lg-6">
            <div className="hero-content wow fadeInUp">
              <h2 style={{
  background: "linear-gradient(45deg, #f29c17, #fd1a8f)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold"
}}>DIGITAL MARKETING</h2>
              <h4 style={{
  background: "linear-gradient(45deg, #f29c17, #fd1a8f)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold"
}}>SOCIAL MEDIA MANAGEMENT</h4>
              <h4 style={{
  background: "linear-gradient(45deg, #f29c17, #fd1a8f)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold"
}}>WEB DEVELOPMENT</h4>
              <h4 style={{
  background: "linear-gradient(45deg, #f29c17, #fd1a8f)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold"
}}>SEO</h4>
              <p style={{ color: "#fff" }}>
                Are you ready to take your business to the next level? A strong online presence is key to growing your business
                and increasing revenue. Let us help you achieve that with our expert services.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-6 background-gradient-image">
            <img src="/assets/images/hero/hero-image.png" alt="Digital Services" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container mt-5">
  <div className="row text-center">
    <div className="col-md-3 col-sm-12 mb-4 d-flex justify-content-center align-items-center">
      <div className="service-box p-3" style={boxStyle}>
        {/* Brochure Font Awesome Icon */}
        <i className="fas fa-file-alt fa-4x mb-2" style={{ color: "#fff" }}></i>
        <h5 style={{ color: "#fff", marginTop: "10px" }}>Brochure</h5>
      </div>
    </div>

    <div className="col-md-3 col-sm-12 mb-4 d-flex justify-content-center align-items-center">
      <div className="service-box p-3" style={boxStyle}>
        {/* Booking Font Awesome Icon */}
        <i className="fas fa-calendar-check fa-4x mb-2" style={{ color: "#fff" }}></i>
        <h5 style={{ color: "#fff", marginTop: "10px" }}>Booking</h5>
      </div>
    </div>

    <div className="col-md-3 col-sm-12 mb-4 d-flex justify-content-center align-items-center">
      <div className="service-box p-3" style={activeBoxStyle}>
        {/* E-Commerce Font Awesome Icon */}
        <i className="fas fa-shopping-cart fa-4x mb-2" style={{ color: "#fff" }}></i>
        <h5 style={{ color: "#fff", marginTop: "10px" }}>E-Commerce</h5>
      </div>
    </div>

    <div className="col-md-3 col-sm-12 mb-4 d-flex justify-content-center align-items-center">
      <div className="service-box p-3" style={boxStyle}>
        {/* Portfolio Font Awesome Icon */}
        <i className="fas fa-folder fa-4x mb-2" style={{ color: "#fff" }}></i>
        <h5 style={{ color: "#fff", marginTop: "10px" }}>Portfolio</h5>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default Hero;

export const Hero2 = () => {
  return (
    <div id="home" className="hero-area-two pt-150 rel z-2">
      <div className="container rel z-3">
        <div className="hero-two-content">
          <span className="sub-title wow fadeInLeft delay-0-1s">
            <i className="flaticon-asterisk-1" /> UI/UX Designer
          </span>
          <span className="title wow fadeInLeft delay-0-2s">
            Hello <small>i,m</small>
          </span>
          <span className="name wow fadeInRight delay-0-4s">henry gayle</span>
          <span className="designations wow fadeInLeft delay-0-6s">
            <span>Ux</span> Designer
          </span>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img src="assets/images/hero/hero-two.png" alt="Author" />
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-down">
        <img src="assets/images/hero/scroll-down.png" alt="" />
      </a>
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
    </div>
  );
};
