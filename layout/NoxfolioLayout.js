"use client";
import { noxfolioUtilits } from "@/utility";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
const NoxfolioLayout = ({
  children,
  header,
  footer,
  noFooter,
  onePageMenu,
}) => {
  useEffect(() => {
    noxfolioUtilits.animaiton();
  }, []);

  return (
    <div className="page-wrapper">
      <Header header={header} onePageMenu={onePageMenu} />
      <SideBar />
      {children}
      {!noFooter && <Footer footer={footer} />}
    </div>
  );
};
export default NoxfolioLayout;
