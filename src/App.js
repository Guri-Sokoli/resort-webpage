import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
    return (
        <div className="flex flex-col max-w-full text-white font-raleway">
            <Header />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <MainContent />
            </div>
        </div>
    );
}

export default App;
