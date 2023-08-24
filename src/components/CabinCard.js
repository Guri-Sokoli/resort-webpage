import React from "react";
import PeopleIcon from "../img/People-Icon.svg";
import RoomIcon from "../img/Room-Icon.svg";

const CabinCard = (props) => {
    const {
        pictureUrl,
        name,
        guestNumber,
        roomNumber,
        description,
        buttonColor,
        buttonPrice,
        icons,
    } = props;

    return (
        <div className="flex flex-col border mx-10 transform transition duration-300 hover:scale-105">
            <div className="">
                <img
                    src={pictureUrl}
                    alt={name}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="text-gray-500 mx-12">
                <h1 className="text-left text-4xl pt-12">{name}</h1>
                <div className="flex py-12 text-left text-lg">
                    <img
                        src={PeopleIcon}
                        alt="people icon"
                        width={20}
                        height={20}
                        className="mr-2"
                        fill="#fff"
                    />
                    <p>{guestNumber} Guests</p>
                    <img
                        src={RoomIcon}
                        alt="room icon"
                        width={20}
                        height={20}
                        className="ml-6 mr-2"
                        fill="#fff"
                    />
                    <p>{roomNumber} Bedrooms</p>
                </div>
                <div className="flex-row pb-12">
                    <p className="text-xl text-wrap break-words">
                        {description}
                    </p>
                </div>
                <div className="flex justify-start">
                    <button
                        className={`text-${buttonColor} relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium group bg-gradient-to-br from-${buttonColor} to-blue-500 group-hover:from-${buttonColor} group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800`}
                    >
                        <span
                            className={`px-16 relative py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0`}
                        >
                            BOOK NOW FROM {buttonPrice} $
                        </span>
                    </button>
                </div>
                <div className="horizontalDividerAuto mb-12"></div>
                <div className="flex mb-12">
                    {icons.map((icon, index) => (
                        <a key={index} title={icon.title}>
                            <img
                                alt={icon.title}
                                width="23"
                                height="23"
                                src={icon.url}
                                className="mx-2"
                            ></img>
                        </a>
                    ))}
                </div>
                <div className="flex justify-end mb-10">
                    <button>
                        <h1>FULL INFO ></h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CabinCard;
