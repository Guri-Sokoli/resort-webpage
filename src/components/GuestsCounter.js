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
            <h1 className="text-4xl pb-4">Number of Guests</h1>
            <div className="flex flex-row items-center">
                <div className="flex justify-center items-center text-3xl text-white bg-primary rounded-md pb-2 mr-6 w-12 h-12 outline outline-black outline-2 outline-offset-2">
                    {guestCount}
                </div>
                <div className="flex flex-col">
                    <button
                        type="button"
                        className="outline outline-black text-4xl rounded-md mb-2 w-10 text-primary"
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                    <button
                        type="button"
                        className="outline outline-black text-4xl rounded-md text-red-800"
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
