import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navigation from "./component/Navigation";
import SectionFive from "./component/SectionFive";
import SectionFour from "./component/SectionFour";
import SectionThree from "./component/SectionThree";
import SectionTwo from "./component/SectionTwo";
import Subscribe from "./component/Subscribe";

function App() {
  return (
    <div
      className="bg-[#0D0D2B] w-full h-full
     text-white "
    >
      <Navigation />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
