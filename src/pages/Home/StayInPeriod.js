import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import { ActionButton } from "../../components/ActionButton";
import GuestsCounter from "../../components/GuestsCounter";

const StayInPeriod = () => {
    const [isValid, setIsValid] = useState(false);

    const [inValue, setInValue] = useState({
        startDate: null,
        endDate: null,
    });
    const [outValue, setOutValue] = useState({
        startDate: null,
        endDate: null,
    });
    const handleInValueChange = (newValue) => {
        setInValue(newValue);
        if (outValue.endDate && outValue.endDate <= newValue.startDate) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    };
    const handleOutValueChange = (newValue) => {
        setOutValue(newValue);
        if (newValue.endDate && newValue.endDate <= inValue.startDate) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    };
    const checkInSelected = !!inValue.startDate;
    const checkOutSelected = !!outValue.startDate;

    const isButtonDisabled = !checkInSelected || !checkOutSelected || !isValid;

    const buttonBgColor = isButtonDisabled
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-primary";

    const checkInInputClassName = `text-center h-12 rounded-md text-2xl ${
        inValue.startDate ? "bg-primary text-white" : ""
    }`;

    const checkOutInputClassName = `text-center h-12 rounded-md text-2xl ${
        outValue.startDate
            ? outValue.endDate <= inValue.startDate
                ? "bg-red-500 text-black"
                : "bg-primary text-white"
            : ""
    }`;

    return (
        <div className="bg-white text-black">
            <form className="flex flex-row justify-around align-middle bg-secondary border-2 border-black mx-32 my-32 py-16">
                <div className="flex flex-col justify-center items-center ml-20">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-4xl mb-6">Check-In</h1>
                        <div className="rounded-md outline outline-2 outline-offset-2">
                            <Datepicker
                                disabledDates={[
                                    {
                                        startDate: "2023-08-22",
                                        endDate: "2023-08-23",
                                    },
                                    {
                                        startDate: "2023-08-28",
                                        endDate: "2023-08-31",
                                    },
                                ]}
                                placeholder="Year-Month-Day"
                                useRange={false}
                                startWeekOn="sun"
                                // minDate={new Date("2023-01-05")}
                                // maxDate={new Date("2030-01-30")}
                                startFrom={"today"}
                                inputClassName={`${checkInInputClassName} text-center text-black h-12 rounded-md text-2xl`}
                                primaryColor={"emerald"}
                                popoverDirection="down"
                                asSingle={true}
                                value={inValue}
                                onChange={handleInValueChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center align-middle">
                    <div className="verticalDivider"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl mb-6">Check-Out</h1>
                    <div
                        className={
                            "rounded-md outline-offset-2 outline outline-2"
                        }
                    >
                        <Datepicker
                            placeholder="Year-Month-Day"
                            useRange={false}
                            startWeekOn="sun"
                            minDate={new Date("2023-01-05")}
                            maxDate={new Date("2030-01-30")}
                            startFrom={"today"}
                            inputClassName={`${checkOutInputClassName} text-center h-12 rounded-md text-2xl`}
                            primaryColor={!isValid ? "red" : "emerald"}
                            popoverDirection="down"
                            asSingle={true}
                            value={outValue}
                            onChange={handleOutValueChange}
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center align-middle">
                    <div className="verticalDivider"></div>
                </div>
                <GuestsCounter />
                <div className="flex justify-center items-center align-middle">
                    <div className="verticalDivider"></div>
                </div>
                <div className="flex flex-col justify-center items-center mr-10">
                    <ActionButton
                        text="Check Availability"
                        padx="px-1"
                        pady="py-1"
                        disabled={isButtonDisabled}
                        buttonBgColor={buttonBgColor}
                    />
                    {/* https://flowbite.com/docs/components/tooltips/ */}
                    {/* ^^^ this is needed for tooltip on hover ^^^ */}
                </div>
            </form>
        </div>
    );
};

export default StayInPeriod;
