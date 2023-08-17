const StayInPeriod = () => {
    return (
        <div className="bg-secondary text-black border-2">
            <form className="flex flex-row justify-around align-middle my-20 bg-white border-2 border-black mx-64 py-20">
                <div className="flex flex-col justify-center items-center mx-10 pl-20">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-xl">Check-In</h1>
                        <h3 className="text-xl">14</h3>
                    </div>
                </div>
                <div className="flex justify-center items-center align-middle">
                    <div className="divider"></div>
                </div>
                <div className="flex flex-col justify-center items-center mx-10">
                    <h1 className="text-xl">Check-Out</h1>
                    <h3 className="text-xl">14</h3>
                </div>
                <div className="flex justify-center items-center align-middle">
                    <div className="divider"></div>
                </div>
                <div className="flex flex-col justify-center items-center mx-10">
                    <h1 className="text-xl">Number of Guests</h1>
                    <div className="flex flex-row justify-center items-center">
                        <h3 className="text-xl pr-4">1</h3>
                        <div className="flex flex-col">
                            <button className="border border-black px-3 text-4xl">
                                +
                            </button>
                            <button className="border border-black px-3 text-4xl">
                                -
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center align-middle">
                    <div className="divider"></div>
                </div>
                {/* button under this comment needs better fitting, i need to componentinize this code later */}
                <button class="text-lg px-6 py-4 my-12 relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-primary text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56">
                    <span class="relative z-10">Check Avalibility</span>
                </button>
            </form>
        </div>
    );
};

export default StayInPeriod;
