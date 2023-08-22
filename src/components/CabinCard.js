import Cabin1 from "../img/cabin1.jpg";
export const CabinCard = (props) => {
    return (
        <div className="flex flex-col justify-center items-center border">
            <div className="w-full">
                <img
                    src={Cabin1}
                    alt="cabin1"
                    width={325}
                    height={325}
                    className="object-cover h-max"
                />
            </div>
            {/* now down here there are info for the cabin organized well with title and prince and everything to the right */}
            <div className="flex flex-col justify-center text-gray-600 text-left pb-12">
                <h1 className="text-4xl font-bold p-12 text-left">Cabin 1</h1>
                <div className="flex flex-row">
                    <p className="text-2xl py-2">4 Guests</p>
                    <p className="text-2xl py-2 pl-12">2 Bedrooms</p>
                </div>
                {/* <div className="flex flex-row">
                    <p
                        className="text-2xl py-2 text-wrap
                    "
                    >
                        The 2 bedrooms are perfect for a family or friends
                        getaway
                    </p>
                </div> */}
                {/* this up here does a big bad, needs fix ^^^ */}
            </div>
        </div>
    );
};
