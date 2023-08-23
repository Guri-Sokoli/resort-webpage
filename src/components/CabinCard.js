import Cabin1 from "../img/cabin1.jpg";
import PeopleIcon from "../img/People-Icon.svg";
import RoomIcon from "../img/Room-Icon.svg";

export const CabinCard = (props) => {
    return (
        <div
            className="flex flex-col border mx-10 transform
        transition duration-300 hover:scale-105"
        >
            <div className="">
                <img
                    src={Cabin1}
                    alt="cabin1"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="text-gray-500 mx-12">
                {/* qikjo pb-64 veq sa mem jap hapsir o*/}
                <h1 className="text-left text-4xl pt-12">Cabin One</h1>
                <div className="flex py-12 text-left text-lg">
                    {/* need some icons for these 2mfs */}
                    <img
                        src={PeopleIcon}
                        alt="people icon"
                        width={20}
                        height={20}
                        className="mr-2"
                        fill="#fff"
                    />
                    <p>4 Guests</p>
                    <img
                        src={RoomIcon}
                        alt="room icon"
                        width={20}
                        height={20}
                        className="ml-6 mr-2"
                        fill="#fff"
                    />
                    <p>2 Bedrooms</p>
                </div>
                <div className="flex-row pb-12">
                    <p
                        className="text-xl text-wrap break-words
                    "
                    >
                        The 2 bedrooms are perfect for a family or friends
                        getaway
                    </p>
                </div>
                <div className="flex justify-start">
                    <button class="text-cyan-500 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span class="px-16 relative py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                            BOOK NOW FROM 175 $
                        </span>
                    </button>
                </div>
                <div className="horizontalDividerAuto mb-12"></div>
                <div className="flex mb-12">
                    <a title="Electric Stove">
                        <img
                            alt="Electric Stove"
                            width="23"
                            height="23"
                            src="https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-stove.png"
                            className="mr-2"
                        ></img>
                    </a>
                    <a title="Picnic Table">
                        <img
                            alt="Picnic Table"
                            width="23"
                            height="23"
                            src="https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-picnic-table.png"
                            className="mx-2"
                        ></img>
                    </a>
                    <a title="Microwave">
                        <img
                            alt="Microwave"
                            width="23"
                            height="23"
                            src="https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-microwave.png"
                            className="mx-2"
                        ></img>
                    </a>
                    <a title="4 Piece Bath">
                        <img
                            alt="4 Piece Bath"
                            width="23"
                            height="23"
                            src="https://mountainviewmanitoulin.com/wp-content/uploads/2019/04/icon-10.png"
                            className="mx-2"
                        ></img>
                    </a>
                    <a title="Toaster">
                        <img
                            alt="Toaster"
                            width="23"
                            height="23"
                            src="https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-toaster.png"
                            className="mx-2"
                        ></img>
                    </a>
                    <a title="Fridge">
                        <img
                            alt="Fridge"
                            width="23"
                            height="23"
                            src="https://mountainviewmanitoulin.com/wp-content/uploads/2017/06/icon-fridge.png"
                            className="mx-2"
                        ></img>
                    </a>
                    <a title="BBQ">
                        <img
                            alt="BBQ"
                            width="23"
                            height="23"
                            src="https://mountainviewmanitoulin.com/wp-content/uploads/2017/06/icon-bbq.png"
                            className="mx-2"
                        ></img>
                    </a>
                    <a title="Coffee Maker">
                        <img
                            alt="Coffee Maker"
                            width="23"
                            height="23"
                            src="https://mountainviewmanitoulin.com/wp-content/uploads/2017/06/icon-coffee.png"
                            className="mx-2"
                        ></img>
                    </a>
                    <a title="Pets (+ $20/d or $100/wk)">
                        <img
                            alt="Pets (+ $20/d or $100/wk)"
                            width="23"
                            height="23"
                            src="https://mountainviewmanitoulin.com/wp-content/uploads/2017/07/icon-pets.png"
                            className="ml-2"
                        ></img>
                    </a>
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
