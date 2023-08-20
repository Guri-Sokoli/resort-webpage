import "react-datepicker/dist/react-datepicker.css";
import "../src/index.css";
import { ImageAnimation } from "./components/ImageAnimation";

const MainContent = () => {
    return (
        <div className="flex items-center justify-center relative w-full h-screen overflow-hidden">
            <ImageAnimation />
        </div>
    );
};

export default MainContent;
