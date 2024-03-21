"use client";
import FlareCursor from "@/components/FlareCursor/FlareCursor";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "./HeroSection";
import Main from "@/components/Herosection/Main";
import About from "./About";
import Projects from "./Projects";

const index = () => {
  return (
    <>
      <FlareCursor />
      <Header />
      <div className="lg:mx-[70px] mx-[25px] grid gridrows-[1fr]">
        <div className="glitch flex">
          <Main />
          {/* <HeroSection /> */}
          {/* <About /> */}
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
