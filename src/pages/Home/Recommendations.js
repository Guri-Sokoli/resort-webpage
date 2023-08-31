import DiningImg from "../../img/dining0.jpg";
import HikingImg from "../../img/hiking0.jpg";
const Recommendations = () => {
    return (
        <div className="flex flex-row justify-center items-center py-16 pt-32">
            <div className="flex flex-col justify-center items-center pr-24 text-black">
                <img src={DiningImg} alt="Dining Image" width={350} />
                <h2 className="text-5xl pt-10 pb-6">Dining</h2>
                <h3 className="text-xl pb-10">Amazing Restaurants</h3>
                <button className="border-gray-400 border py-4 px-8 rounded-sm transition duration-250 hover:bg-gray-400 hover:text-white">
                    <a href="/dining">View Details</a>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center text-black">
                <img src={HikingImg} alt="Rectangle-2" width={350} />
                <h2 className="text-5xl pt-10 pb-6">Hiking</h2>
                <h3 className="text-xl pb-10">Epic Trails</h3>
                <button className="border-gray-400 border py-4 px-8 rounded-sm transition duration-250 hover:bg-gray-400 hover:text-white">
                    <a href="/dining">View Details</a>
                </button>
            </div>
        </div>
    );
};

export default Recommendations;
