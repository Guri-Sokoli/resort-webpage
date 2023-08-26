import { useState, useEffect } from "react";
import first from "../img/first.jpg";
import second from "../img/second.jpg";
import third from "../img/third.jpg";
import { ActionButton } from "./ActionButton";

export const ImageAnimation = (props) => {
    const imgUrls = [first, second, third];
    const [currentZIndex, setCurrentZIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentZIndex((prevZIndex) => (prevZIndex + 1) % imgUrls.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [imgUrls.length]);
    return (
        <div className="flex w-full h-full">
            {imgUrls.map((url, index) => (
                <div className="">
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
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="flex flex-col justify-center items-center w-full h-full relative z-20">
                            <div className="flex justify-center items-center">
                                <svg className="w-screen z-20">
                                    <text
                                        x="50%"
                                        y="60%"
                                        textAnchor="middle"
                                        className="svg-text"
                                    >
                                        Welcome To the Resort of your Life
                                    </text>
                                </svg>
                            </div>
                            <h2 className="text-white text-3xl p-12">
                                You are a few clicks away from the best vacation
                                of your life.
                            </h2>
                            <ActionButton
                                text="View Options"
                                buttonBgColor="bg-primary"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
