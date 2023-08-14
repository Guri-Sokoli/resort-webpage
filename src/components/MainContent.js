import React, { useState, useEffect } from "react";
import first from "../img/first.jpg";
import second from "../img/second.jpg";
import third from "../img/third.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../index.css"; // Assuming you have a styles.css file for your custom styles

const MainContent = () => {
    const imgUrls = [first, second, third];
    const [currentZIndex, setCurrentZIndex] = useState(0);

    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const onChange = (range) => {
        const [startDate, endDate] = range;
        setStartDate(startDate);
        setEndDate(endDate);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentZIndex((prevZIndex) => (prevZIndex + 1) % imgUrls.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [imgUrls.length]);

    return (
        <div
            className="flex items-center justify-center relative w-full h-screen overflow-hidden"
            id="root"
        >
            <div className="flex w-full h-full" id="slider-container">
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
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="flex flex-col justify-center items-center w-full h-full relative z-20">
                                <div className="flex justify-center items-center">
                                    <svg className="w-screen">
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
                                    {/* resort description placeholder */}
                                    You are a few clicks away from the best
                                    vacation of your life.
                                </h2>
                                <button class="text-lg px-6 py-4 my-12 relative flex h-[50px] w-42 items-center justify-center overflow-hidden bg-primary text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56">
                                    <span class="relative">
                                        View Our Villas
                                    </span>
                                </button>
                                <DatePicker
                                    selected={startDate}
                                    onChange={onChange}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange
                                    dateFormat="dd/MM/yyyy"
                                    className="text-black"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainContent;
