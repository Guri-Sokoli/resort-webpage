import Header from "./pages/Home/Header";
import HomeMainContent from "./pages/Home/HomeMainContent";
import StayInPeriod from "./pages/Home/StayInPeriod";
import AccomodationRec from "./pages/Home/AccomodationRec";
import ParallaxAboutUs from "./pages/Home/ParallaxAboutUs";
import HomeContactUs from "./pages/Home/HomeContactUs";
import ParallaxAttractions from "./pages/Home/ParallaxAttractions";
import Recommendations from "./pages/Home/Recommendations";
import NewsSection from "./pages/Home/NewsSection";
import HomeQuickLinks from "./pages/Home/HomeQuickLinks";

const HomePage = () => {
    return (
        <div className="flex flex-col max-w-full text-white font-raleway bg-white">
            <Header />
            <HomeMainContent />
            <StayInPeriod />
            <AccomodationRec />
            <ParallaxAboutUs />
            <HomeContactUs />
            <ParallaxAttractions />
            <Recommendations />
            <NewsSection />
            <HomeQuickLinks />
        </div>
    );
};

export default HomePage;
