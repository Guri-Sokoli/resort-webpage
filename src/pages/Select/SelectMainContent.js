import test from "../../img/selectSearchImg.jpg";

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
                <div className="flex justify-center items-center">
                    <svg className="w-screen z-20">
                        <text
                            x="50%"
                            y="60%"
                            textAnchor="middle"
                            className="svg-text"
                        >
                            Search
                        </text>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SelectMainContent;
