import { useState } from "react";

const GuestsCounter = () => {
    const [guestCount, setGuestCount] = useState(1);

    const handleIncrement = () => {
        if (guestCount < 15) {
            setGuestCount(guestCount + 1);
        }
    };

    const handleDecrement = () => {
        if (guestCount > 1) {
            setGuestCount(guestCount - 1);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl">Number of Guests</h1>
            <div className="flex flex-row items-center pt-4">
                <h3 className="flex justify-center items-center text-3xl text-white bg-primary rounded-md mr-6 w-12 h-12">
                    {guestCount}
                </h3>
                <div className="flex flex-col">
                    <button
                        type="button"
                        className="border border-black px-3 text-4xl"
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                    <button
                        type="button"
                        className="border border-black px-3 text-4xl"
                        onClick={handleDecrement}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GuestsCounter;
