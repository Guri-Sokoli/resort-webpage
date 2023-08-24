const ParallaxAboutUs = () => {
    const backgroundImageUrl =
        "https://mountainviewmanitoulin.com/wp-content/uploads/2022/07/about-home-4.jpg";

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
            className="w-full h-screen bg-fixed bg-cover bg-center flex justify-between items-center "
            style={containerStyle}
        >
            <div style={overlayStyle}></div>
            <div
                className="flex flex-row justify-between pl-32"
                style={textStyle}
            >
                <div className="flex-col w-full justify-center items-center">
                    <h2 className="text-6xl pb-8">About Us</h2>
                    <p>Waterfront Cottages on Island Time</p>
                    <div className="horizontalDivider"></div>
                </div>
                <div className="flex pl-32 justify-center items-center">
                    <p className="text-xl w-8/12 tracking-widest leading-10">
                        Come and visit Mountain View Resort on beautiful Lake
                        Manitou! We have the perfect spot for a holiday that the
                        entire family will enjoy. Our comfortable cottages are
                        set amid the trees and offer a splendid view of Lake
                        Manitou and surrounding countryside. Relax by fishing,
                        boating, swimming, sun-bathing, or take a short drive to
                        explore some of the sites and wonders the island has to
                        offer. You can end the day with a spectacular sunset
                        that brings warmth and beauty and a celebration to the
                        end of a perfect day! Mountain View Resort is located on
                        Manitoulin Island, Ontario, Canada, on the shores of
                        Lake Manitou, the largest fresh water island in the
                        world. The island is a 120-mile long panorama of nature,
                        history and undisturbed rugged beauty. We believe that
                        once you stay at Mountain View Resort you will return
                        year after year for your family vacation.
                    </p>
                </div>
            </div>
            {/* i gotta fix some paddin/margin/fitting te divav se shum i vogel po del divi ku osht pak text, garant veq do padding me ja jep edhe ndreqet */}
        </div>
    );
};

export default ParallaxAboutUs;
