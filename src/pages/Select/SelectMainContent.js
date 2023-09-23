import test from "../../img/selectSearchImg.jpg";
import RightArrowIcon from "../../img/RightArrowIcon.js";

const SelectMainContent = () => {
    const containerStyle = {
        backgroundImage: `url(${test})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div
            className="flex items-center justify-center relative w-full h-96 overflow-hidden"
            style={containerStyle}
        >
            <div className="flex flex-col justify-center items-center w-full h-full relative z-20 text-white">
                <div className="flex justify-center items-center text-white text-6xl font-bold tracking-widest">
                    Search
                </div>
            </div>
        </div>
    );
};

export default SelectMainContent;
