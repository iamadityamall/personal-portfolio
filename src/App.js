import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home/HeroSection";
import AboutSection from "./components/Home/AboutSection";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ProjectsSection from "./components/Home/ProjectsSection";
import ContactSection from "./components/Home/ContactSection";

const App = () => {
  return (
    <main className="bg-primary">
      <Navbar />
      <section className="w-[90vw] mx-auto">
        <Sidebar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection/>
        <Footer />
      </section>
    </main>
  );
};

export default App;
