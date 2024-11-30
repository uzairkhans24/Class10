import Navbar from "./components/Navbar";
import Hero  from "./components/HeroSec"
import Course from "./components/CoursesSec";
import FooterSection from "./components/Footer"
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Course/>
      <FooterSection/>
    </div>
  );
}

