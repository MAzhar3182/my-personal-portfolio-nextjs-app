import Link from "next/link";

const items = [
  {
    id: 1,
    name: "React.js",
   // image: "assets/images/skills/reactjs.png",
    value: "90",
  },
  {
    id: 2,
    name: "TypeScript",
   // image: "assets/images/skills/typescript.png",
    value: "85",
  },
  {
    id: 3,
    name: "JavaScript",
   // image: "assets/images/skills/javascript.png",
    value: "88",
  },
  {
    id: 4,
    name: "Node.js",
   // image: "assets/images/skills/nodejs.png",
    value: "80",
  },
  {
    id: 5,
    name: "Express.js",
   // image: "assets/images/skills/expressjs.png",
    value: "75",
  },
  {
    id: 6,
    name: "MongoDB",
   // image: "assets/images/skills/mongodb.png",
    value: "70",
  },
  {
    id: 7,
    name: "Firebase",
   // image: "assets/images/skills/firebase.png",
    value: "65",
  },
  {
    id: 8,
    name: "Git & GitHub",
   // image: "assets/images/skills/git.png",
    value: "92",
  },
  {
    id: 9,
    name: "CSS & Bootstrap",
   // image: "assets/images/skills/css.png",
    value: "85",
  },
  {
    id: 10,
    name: "C++",
   // image: "assets/images/skills/c++.png",
    value: "75",
  },
  {
    id: 11,
    name: "OOP",
   // image: "assets/images/skills/oop.png",
    value: "80",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Let’s Explore My <span>Technical Skills &amp; Experience</span>
                  </h2>
                  <p>
                    With hands-on experience in full-stack development, I have gained strong proficiency in both frontend and backend technologies. Below is a breakdown of my key skills and expertise that I bring to each project.
                  </p>
                </div>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn">
                    Learn More <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {items.map((item) => (
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6" key={item.id}>
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        {/* <img src={item.image} alt={item.name} /> */}
                        <h5>{item.name}</h5>
                        <span className="percent">{item.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

export default Skill;

export const Skill2 = () => {
  return (
    <section
      id="skills"
      className="skill-area-two rel z-1 pt-130 rpt-100 pb-105 rpb-70"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="skill-content-two rel z-2 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-60">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> Technical Expertise
                </span>
                <h2>Professional Skills</h2>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-8">
                  <img src="assets/images/skills/skill-man.png" alt="Skills" />
                </div>
                <div className="col-4">
                  <img src="assets/images/shape/skill-arrow.png" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="skill-wrap-two">
              <div className="row gap-40">
                {items.map(
                  (item) =>
                    item.id <= 6 && (
                      <div className="col-md-4 col-sm-4 col-6" key={item.id}>
                        <div className="skill-item-two wow fadeInUp delay-0-3s">
                          <div className="icon-percent">
                            <img src={item.image} alt={item.name} />
                            <span className="percent">{item.value}%</span>
                          </div>
                          <h5 className="title">{item.name}</h5>
                        </div>
                      </div>
                    )
                )}
              </div>
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
