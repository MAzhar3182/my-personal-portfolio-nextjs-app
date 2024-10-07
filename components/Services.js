import Link from "next/link";

const Services = ({ extraClass }) => {
  const services = [
    {
      id: 1,
      title: "Full Stack Web Development",
      text: "End-to-end development with React.js, Node.js, and MongoDB, delivering responsive and scalable web applications.",
    },
    {
      id: 2,
      title: "Front-End Development",
      text: "Expert in React.js and TypeScript, building intuitive user interfaces with a focus on performance and user experience.",
    },
    {
      id: 3,
      title: "Back-End Development",
      text: "Designing efficient server-side logic with Node.js and Express, ensuring smooth integration with front-end applications.",
    },
    {
      id: 4,
      title: "API Integration",
      text: "Seamlessly integrating RESTful APIs to enhance the functionality and performance of your web applications.",
    },
    {
      id: 5,
      title: "Responsive Design",
      text: "Ensuring websites look great on any device by implementing mobile-friendly, responsive designs.",
    },
    {
      id: 6,
      title: "UI/UX Design",
      text: "Delivering user-centric designs that enhance user experience and engagement across web and mobile platforms.",
    },
  ];
  
  return (
    <section
      id="services"
      className={`services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 ${extraClass}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">My Services</span>
              <h2>
                Professional <span>Development Solutions</span> For Your Business
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-6" key={service.id}>
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="number">
                  {service.id >= 9 ? service.id : `0${service.id}`} 
                </div>
                <div className="content">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
                <Link legacyBehavior href="/#">
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
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

export default Services;
