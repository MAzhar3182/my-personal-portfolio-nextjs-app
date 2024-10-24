'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
         // Reset form after success
         setFormData({
          name: "",
          email: "",
          phone_number: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error('Failed to send message. Try again.');
        setStatus('Failed to send message. Try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1">
      <div className="container">
        <div className="row">
        <div className="col-lg-4">
  <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
    <div className="section-title mb-40">
      <span className="sub-title mb-15">Get In Touch</span>
      <h2>Let’s Discuss <span>Your Digital Growth</span></h2>
      <p>
        Ready to elevate your business and take your digital presence to new heights? Whether it's Social Media Management, Web Development, or SEO, we're here to craft a strategy that helps you succeed online. Our team of experts is dedicated to helping businesses like yours build a strong and impactful digital footprint. Reach out to us today and let's turn your vision into reality.
      </p>
    </div>
    <ul className="list-style-two">
      <li>Customized digital marketing strategies</li>
      <li>Expert solutions in SEO, Social Media, and Web Development</li>
      <li>Comprehensive support for growing your business</li>
      <li>Client-focused approach for measurable results</li>
    </ul>
  </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
              <form onSubmit={handleSubmit}>
                <div className="row mar-contact-top">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Please enter your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name" className="for-icon">
                        <i className="far fa-user" />
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Please enter your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email" className="for-icon">
                        <i className="far fa-envelope" />
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone_number">Phone Number</label>
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        placeholder="Please enter your Phone Number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="phone_number" className="for-icon">
                        <i className="far fa-phone" />
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject" className="for-icon">
                        <i className="far fa-text" />
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Write your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn">
                        Send Us Message <i className="far fa-angle-right" />
                      </button>
                    </div>
                    {status && <p>{status}</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// export const Contact2 = () => {
//   return (
//     <section id="contact" className="contact-area py-115 rpy-100 rel z-1">
//       <div className="container">
//         <div className="row align-items-center justify-content-between">
//           <div className="col-xl-7 col-lg-8">
//             <div className="contact-two-content pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
//               <div className="section-title mb-25">
//                 <span className="sub-title mb-15">
//                   <i className="flaticon-asterisk-1" /> let’s work together
//                 </span>
//                 <h2>let’s Work Together</h2>
//               </div>
//               <div className="row align-items-center">
//                 <div className="col-sm-8">
//                   <h3>i,m avaiable at</h3>
//                   <h5>
//                     <i className="far fa-envelope" />ahmadmujtabanaeem@gmail.com
//                   </h5>
//                   <h5>
//                     <i className="far fa-phone" />+44-7405380735
//                   </h5>
//                 </div>
//                 <div className="col-sm-4">
//                   <div className="arrow">
//                     <i className="fal fa-arrow-right" />
//                   </div>
//                 </div>
//               </div>
//               <div className="social-flow">
//                 <h4>Follow :</h4>
//                 <div className="social-style-one">
//                   <a href="#">
//                     <i className="fab fa-twitter" />
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-facebook-f" />
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-instagram" />
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-pinterest-p" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div className="contact-form-two form-style-one wow fadeInUp delay-0-4s">
//               <form
//                 id="contactForm"
//                 className="contactForm"
//                 name="contactForm"
//                 action="assets/php/form-process.php"
//                 method="post"
//               >
//                 <div className="form-group">
//                   <label className="for-title" htmlFor="email">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="form-control"
//                     required=""
//                     data-error="Please enter your Email"
//                   />
//                   <label htmlFor="email" className="for-icon">
//                     <i className="far fa-envelope" />
//                   </label>
//                   <div className="help-block with-errors" />
//                 </div>
//                 <div className="form-group">
//                   <label className="for-title" htmlFor="name">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="form-control"
//                     required=""
//                     data-error="Please enter your Name"
//                   />
//                   <label htmlFor="name" className="for-icon">
//                     <i className="far fa-user" />
//                   </label>
//                   <div className="help-block with-errors" />
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     name="message"
//                     id="message"
//                     className="form-control"
//                     rows={7}
//                     placeholder="Write Messege....."
//                     required=""
//                     data-error="Please enter your Message"
//                     defaultValue={""}
//                   />
//                   <div className="help-block with-errors" />
//                 </div>
//                 <div className="form-group mb-0">
//                   <button type="submit" className="theme-btn">
//                     <i className="far fa-envelope" /> Messege me
//                   </button>
//                   <div id="msgSubmit" className="hidden" />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
