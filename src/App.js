import Header from "./components/Header";
import MainContent from "./components/MainContent";
import StayInPeriod from "./components/StayInPeriod";

function App() {
    return (
        <div className="flex flex-col max-w-full text-white font-raleway bg-gray-700">
            <Header />
            <MainContent />
            <StayInPeriod />
        </div>
    );
}

export default App;
