"use client";
import { Fragment, useState } from "react";
import { toast } from 'react-toastify';
const SideBar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const toggleSidebar = () => {
    document.querySelector("body").classList.remove("side-content-visible");
  };

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
    <Fragment>
      {/* Form Back Drop */}
      <div className="form-back-drop" onClick={toggleSidebar} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={toggleSidebar}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/* Appointment Form */}
          <div className="appointment-form">
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Email Field */}
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Phone Number Field */}
              <div className="form-group">
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Subject Field */}
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Message Field */}
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/* Social Icons */}
          <div className="social-style-one">
            <a
              href="https://www.linkedin.com/in/muhammad-azhar-730289215/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
      {/* End Hidden Sidebar */}
      {status && <p>{status}</p>}
    </Fragment>
  );
};

export default SideBar;
