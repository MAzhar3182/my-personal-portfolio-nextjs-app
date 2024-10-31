import React from 'react';
import Image from 'next/image'; // Import Image from next/image

function Certificate() {
  const certificates = [
    {
      title: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
      description:
        "Completed an in-depth course on the MERN stack, covering React, NodeJS, Express, and MongoDB, which has greatly strengthened my full-stack development skills.",
      instructor: "Taught by Academind and Maximilian Schwarzmüller",
      link: "https://www.udemy.com/certificate/UC-b7f6990f-bd31-49a7-a3dd-9ef4401bf8ff/",
      image: "/assets/images/certificates/mern.jpg", // Ensure this path points to the 'public' folder
    },
    {
      title: "JavaScript Pro: Mastering Advanced Concepts and Techniques",
      description:
        "Mastered advanced JavaScript concepts in this comprehensive course, solidifying my understanding and expertise in JavaScript.",
      instructor: "Taught by Colt Steele",
      link: "https://www.udemy.com/certificate/UC-32930bd1-b70a-40f5-a456-a391790e326e/",
      image: "/assets/images/certificates/javascrypt.jpg",
    },
    {
      title: "Next.js 15 & React - The Complete Guide",
      description:
        "Acquired proficiency in Next.js and React with this thorough course, adding server-side rendering and optimized React practices to my toolkit.",
      instructor: "Taught by Maximilian Schwarzmüller",
      link: "https://www.udemy.com/certificate/UC-0c046300-241f-429e-9d60-0da5a84867e8/",
      image: "/assets/images/certificates/nextjs.jpg",
    },
  ];

  return (
    <section id="certificate"  className="projects-area pt-130 rpt-100 pb-50 rpb-70 rel z-1">
      <div className="container">
      <h2 className="section-title text-center mt-4 wow fadeInUp delay-0-2s">Certificates</h2>
      <span className="sub-title mb-15">Latest Certificates</span>
              <h2>
                Explore My Certificates 
              </h2>
    <div className="row row align-items-center">
        {certificates.map((cert, index) => (
          <div key={index} className="col-lg-4">
            <div>
             <div className="project-image wow fadeInLeft delay-0-2s">
             <Image
                src={cert.image}
                className=''
                alt={`${cert.title} certificate`}
                width={500} // Adjust width for better image display
                height={300} // Adjust height as needed

              />
              <div className="content mt-3">
                <h5>{cert.title}</h5>
                <p>{cert.description}</p>
                <p >{cert.instructor}</p>
              </div>
              <div className="card-footer text-center">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="details-btn">
                  View Certificate
                </a>
              </div>
             </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Certificate;
