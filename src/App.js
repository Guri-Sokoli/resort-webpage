import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
    return (
        <div className="flex flex-col max-w-full text-white font-raleway bg-gray-100">
            <Header />
            <MainContent />
        </div>
    );
}

export default App;
