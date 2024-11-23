import Image from "next/image";
// import TypewriterWithDialog from "./_components/Projects";
import Projects from "./_components/Projects";
import Nav from "./_components/Nav";
import StarsCanvas from "./_components/_/StarCanvas";
import Overview from "./_components/Intro";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  // project is a redesign of my current portfolio website with an implmented backend for getting information instead of having everything disorganized in frontend
  return (
    <div className=" mt-20 ">
      <Overview/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
