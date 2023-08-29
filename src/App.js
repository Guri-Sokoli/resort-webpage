import Header from "./pages/Home/Header";
import MainContent from "./pages/Home/MainContent";
import StayInPeriod from "./pages/Home/StayInPeriod";
import AccomodationRec from "./pages/Home/AccomodationRec";
import ParallaxAboutUs from "./pages/Home/ParallaxAboutUs";
import HomeContactUs from "./pages/Home/HomeContactUs";

function App() {
    return (
        <div
            className="flex flex-col max-w-full text-white font-raleway bg-white 
            pb-32"
        >
            <Header />
            <MainContent />
            <StayInPeriod />
            <AccomodationRec />
            <ParallaxAboutUs />
            <HomeContactUs />
        </div>
    );
}

export default App;
