import About from "@/components/About";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import Testimonial from "@/components/Testimonial";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Service from "@/components/Service";
import DigitalMarketing from "@/components/DigitalMarketing";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
export default function Home() {
  return (
    <>
    <NoxfolioLayout>
      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}
      {/* About Area start */}
      <Service />
      {/* About Area end */}
      {/* Resume Area start */}
      <DigitalMarketing/>
      {/* Resume Area end */}
      {/* Services Area start */}
      {/* <Services />
      Services Area end */}
      {/* Skill Area start */}
      {/* <Skill /> */}
      {/* Skill Area end */}
      {/* Projects Area start */}
      <Projects />
      {/* Projects Area end */}
      {/* Testimonial Area start */}
      <Testimonial />
      <About />
      {/* Testimonial Area end */}
      {/* Pricing Area start */}
      {/* <Pricing /> */}
      {/* Pricing Area end */}
      {/* Contact Area start */}
      <Contact />
      {/* Contact Area end */}
      {/* Blog Area start */}
      {/* <Blog /> */}
      {/* Blog Area end */}
      {/* Client Log start */}
      {/* <Clients /> */}
      {/* Client Log end */}
    </NoxfolioLayout>
    <ToastContainer position={"top-right"} autoClose={5000} hideProgressBar={false} />
    </>
  );
}
