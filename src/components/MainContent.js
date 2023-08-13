import React, { useState, useEffect } from "react";
import first from "../img/first.jpg";
import second from "../img/second.jpg";
import third from "../img/third.jpg";
import "../index.css"; // Assuming you have a styles.css file for your custom styles

const MainContent = () => {
    const imgUrls = [first, second, third];
    const [currentZIndex, setCurrentZIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentZIndex((prevZIndex) => (prevZIndex + 1) % imgUrls.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full" id="root">
            <div className="flex w-full h-full" id="slider-container">
                {imgUrls.map((url, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full animate-imageTransition ${
                            currentZIndex === index
                                ? "z-10 opacity-100"
                                : "z-0 opacity-0"
                        }`}
                        style={{
                            backgroundImage: `url(${url})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainContent;
