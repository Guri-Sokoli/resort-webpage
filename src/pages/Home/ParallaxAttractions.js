import { ActionButton } from "../../components/ActionButton";
const ParallaxAttractions = () => {
    const backgroundImageUrl =
        "https://mountainviewmanitoulin.com/wp-content/uploads/2022/07/attractions-home-2.jpg";

    const containerStyle = {
        position: "relative",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
    };

    const textStyle = {
        zIndex: 2,
    };

    return (
        <div
            className="flex flex-col justify-center w-full h-screen bg-fixed bg-cover bg-center"
            style={containerStyle}
        >
            <div style={overlayStyle}></div>
            <div
                className="flex flex-col justify-center items-center"
                style={textStyle}
            >
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-6xl">Local Attractions</h2>
                    <div className="horizontalDivider"></div>
                    <p className="font-thin tracking-widest">
                        PLACES WE THINK YOU'D LOVE.
                    </p>
                </div>
                <ActionButton
                    text="View All"
                    buttonBgColor="bg-primary text-lg"
                />
            </div>
        </div>
    );
};

export default ParallaxAttractions;
