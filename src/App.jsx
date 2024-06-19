import React from "react";
// it is necessary to import these sections
import NavBar from "./components/NavBar";
import Home from "./components/home";
import SocialLinks from "./components/socialLinks";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contacts from "./components/contact";

const App = () => {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 
    selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* <div className='container mx-auto px-8'> */}
      <NavBar />
      {/* lets load our home to app.jsx, in order to bring the import */}
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contacts />

      <SocialLinks />
      {/* </div> */}
    </div>
  );
};

export default App;
