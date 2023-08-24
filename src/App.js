import Header from "./Header";
import MainContent from "./MainContent";
import StayInPeriod from "./StayInPeriod";
import AccomodationRec from "./AccomodationRec";
import ParallaxAboutUs from "./ParallaxAboutUs";

function App() {
    return (
        <div
            className="flex flex-col max-w-full text-white font-raleway bg-gray-700 
            pb-32"
        >
            <Header />
            <MainContent />
            <StayInPeriod />
            <AccomodationRec />
            <ParallaxAboutUs />
        </div>
    );
}

export default App;
