import Cabin1 from "../img/cabin1.jpg";
export const CabinCard = (props) => {
    return (
        <div className="flex flex-col border mx-16">
            <div className="">
                <img
                    src={Cabin1}
                    alt="cabin1"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex-col text-gray-500 pb-64 mx-12">
                {/* qikjo pb-64 veq sa mem jap hapsir o*/}
                <h1 className="text-left text-4xl pt-12">Cabin One</h1>
                <div className="flex-row py-12 text-left justify-around">
                    {/* need some icons for these 2mfs */}
                    <p className="text-2xl text-left">4 Guests 2 Bedrooms</p>
                </div>
                <div className="flex-row pb-12">
                    <p
                        className="text-2xl text-wrap break-words
                    "
                    >
                        The 2 bedrooms are perfect for a family or friends
                        getaway
                    </p>
                </div>
                <div className="flex justify-center">
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span class="px-16 relative py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                            Cyan to blue
                        </span>
                    </button>
                </div>
                {/* vrehet qa kom me bo qitu */}
            </div>
        </div>
    );
};
