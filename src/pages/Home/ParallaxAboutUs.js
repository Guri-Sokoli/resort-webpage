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
            className="flex w-full h-screen bg-fixed bg-cover bg-center"
            style={containerStyle}
        >
            <div style={overlayStyle}></div>
            <div
                className="flex flex-row justify-around items-center"
                style={textStyle}
            >
                <div className="flex flex-col">
                    <h2 className="text-6xl pb-8">About Us</h2>
                    <p>Waterfront Cottages on Island Time</p>
                    <div className="horizontalDivider"></div>
                </div>
                <p className="text-xl w-1/2 tracking-widest leading-10">
                    Come and visit Mountain View Resort on beautiful Lake
                    Manitou! We have the perfect spot for a holiday that the
                    entire family will enjoy. Our comfortable cottages are set
                    amid the trees and offer a splendid view of Lake Manitou and
                    surrounding countryside. Relax by fishing, boating,
                    swimming, sun-bathing, or take a short drive to explore some
                    of the sites and wonders the island has to offer. You can
                    end the day with a spectacular sunset that brings warmth and
                    beauty and a celebration to the end of a perfect day!
                    Mountain View Resort is located on Manitoulin Island,
                    Ontario, Canada, on the shores of Lake Manitou, the largest
                    fresh water island in the world. The island is a 120-mile
                    long panorama of nature, history and undisturbed rugged
                    beauty. We believe that once you stay at Mountain View
                    Resort you will return year after year for your family
                    vacation.
                </p>
            </div>
        </div>
    );
};

export default ParallaxAboutUs;
