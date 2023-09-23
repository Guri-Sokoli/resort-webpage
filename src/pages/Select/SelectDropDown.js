import RightArrowIcon from "../../img/RightArrowIcon.js";
import { useState } from "react";

const SelectDropDown = () => {
    const [openStayPrice, setOpenStayPrice] = useState(false);
    const [openOtherDropdown, setOpenOtherDropdown] = useState(false);

    return (
        <div className="flex w-full h-32 bg-gray-700 justify-center items-center">
            <ul className="flex justify-around items-center w-full">
                <div className="flex flex-row">
                    <div
                        onMouseLeave={() => setOpenStayPrice(false)}
                        className="relative px-10"
                    >
                        <button
                            onMouseOver={() => setOpenStayPrice(true)}
                            className="flex flex-row"
                        >
                            Stay Price
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-6 h-6 ml-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </button>
                        {openStayPrice && (
                            <ul
                                className={`absolute w-40 z-30 bg-primary text-white shadow-white shadow`}
                            >
                                <li className="flex w-full items-center px-3 py-2 text-lg border-b hover:bg-secondary">
                                    Lowest Price
                                </li>
                                <li className="flex w-full items-center px-3 py-2 text-lg border-b hover:bg-secondary">
                                    Highest Price
                                </li>
                            </ul>
                        )}
                    </div>
                    <div
                        onMouseLeave={() => setOpenOtherDropdown(false)}
                        className="relative px-10"
                    >
                        <button
                            onMouseOver={() => setOpenOtherDropdown(true)}
                            className="flex flex-row"
                        >
                            Other Dropdown
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-6 h-6 ml-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </button>
                        {openOtherDropdown && (
                            <ul
                                className={`absolute w-40 z-30 bg-primary text-white shadow-white shadow`}
                            >
                                <li className="flex w-full items-center px-3 py-2 text-lg border-b hover:bg-secondary">
                                    Larger (5+)
                                </li>
                                <li className="flex w-full items-center px-3 py-2 text-lg border-b hover:bg-secondary">
                                    Smaller (5-)
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default SelectDropDown;
