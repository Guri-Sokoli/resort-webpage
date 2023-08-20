import Header from "./Header";
import MainContent from "./MainContent";
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
