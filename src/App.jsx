import Workflow from "./components/Workflow";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
       <Navbar/>
       <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
       </div>
       <FeatureSection/>
       <Workflow/>
       <Pricing/>
    </>
  )
}

export default App
