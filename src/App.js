import Hero from "./component/Hero";
import Navigation from "./component/Navigation";
import SectionFour from "./component/SectionFour";
import SectionThree from "./component/SectionThree";
import SectionTwo from "./component/SectionTwo";

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
    </div>
  );
}

export default App;
