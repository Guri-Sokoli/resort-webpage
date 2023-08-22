import Header from "./Header";
import MainContent from "./MainContent";
import StayInPeriod from "./StayInPeriod";
import AccomodationRec from "./AccomodationRec";

function App() {
    return (
        <div className="flex flex-col max-w-full text-white font-raleway bg-gray-700">
            <Header />
            <MainContent />
            <StayInPeriod />
            <AccomodationRec />
        </div>
    );
}

export default App;
