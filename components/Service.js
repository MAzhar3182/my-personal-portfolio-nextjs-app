const Services = () => {
  const boxStyle = {
    background: 'linear-gradient(45deg, #fd1a8f, #f29c17)',
    borderRadius: '10px',
    padding: '20px',
    color: '#fff',
    textAlign: 'center',
    margin: '20px 0',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <section id="services" className="services-area py-130 rpy-100">
      <div className="container">
        <div className="section-title mb-35 text-center">
          <span className="sub-title mb-15">Our Services</span>
          <h2>Grow Your Business with Our Digital Solutions</h2>
        </div>
        <div className="row text-center mt-5 d-flex justify-content-center">
          <div className="col-md-3 col-sm-6">
            <div className="service-box" style={boxStyle}>
              <i className="fas fa-chart-line fa-4x mb-3"></i>
              <h5>Digital Marketing</h5>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="service-box" style={boxStyle}>
              <i className="fas fa-laptop-code fa-4x mb-3"></i>
              <h5>Web Development</h5>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="service-box" style={boxStyle}>
              <i className="fas fa-search fa-4x mb-3"></i>
              <h5>SEO Optimization</h5>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="service-box" style={boxStyle}>
              <i className="fas fa-bullhorn fa-4x mb-3"></i>
              <h5>Social Media Management</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
