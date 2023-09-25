import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

const SelectStayTime = () => {
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
        <div className="flex bg-gray-500 w-96 h-96">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl mb-2">Check-In</h1>
                <div className="rounded-md outline outline-1 outline-offset-2">
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
                        placeholder=" "
                        useRange={false}
                        startWeekOn="sun"
                        // minDate={new Date("2023-01-05")}
                        // maxDate={new Date("2030-01-30")}
                        startFrom={"today"}
                        inputClassName={`${checkInInputClassName} text-center text-black h-12 rounded-md text-md w-32`}
                        primaryColor={"emerald"}
                        popoverDirection="down"
                        asSingle={true}
                        value={inValue}
                        onChange={handleInValueChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default SelectStayTime;
