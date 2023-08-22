import { CabinCard } from "./components/CabinCard";
const AccomodationRec = () => {
    return (
        <div className="flex flex-col items-center w-full h-max bg-white">
            <div className="flex flex-col items-center text-gray-700 p-5">
                <h1 className="text-6xl font-bold p-12">
                    Accomodation Recommendations
                </h1>
                <p className="text-3xl py-2">Choose the best.</p>
                <div className="horizontalDivider"></div>
            </div>
            <div className="flex flex-row justify-around items-center w-full h-max">
                <CabinCard />
                <CabinCard />
                <CabinCard />
            </div>
        </div>
    );
};

export default AccomodationRec;
