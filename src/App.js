import Hero from "./component/Hero";
import Navigation from "./component/Navigation";
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
    </div>
  );
}

export default App;
