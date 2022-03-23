import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home/HeroSection";
import AboutSection from "./components/Home/AboutSection";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ProjectsSection from "./components/Home/ProjectsSection";
import ContactSection from "./components/Home/ContactSection";
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import VerticalEmailSection from "./components/Home/VerticalEmailSection";
import SocialSection from "./components/Home/SocialSection";

const App = () => {
  useEffect(() => {
    scroll.scrollToTop("hero");
  }, []);

  return (
    <main className="bg-primary">
      <section className="w-[90vw] mx-auto">
        <Navbar />
        <Sidebar />
        <VerticalEmailSection />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <SocialSection />
        <Footer />
      </section>
    </main>
  );
};

export default App;
