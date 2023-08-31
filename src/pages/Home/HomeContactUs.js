import AboutUsCabin from "../../img/contactHome.jpg";

const HomeContactUs = () => {
    return (
        <div className="flex flex-row justify-around items-center bg-white py-32">
            <div className="flex">
                <a>
                    <img
                        src={AboutUsCabin}
                        alt="Cabin"
                        className="object-cover"
                        width={500}
                        height={500}
                    ></img>
                </a>
            </div>
            <div className="flex flex-col items-center bg-gray-200 py-12 px-10 w-6/12">
                <p className="text-3xl pb-8 text-accent">Contact Us</p>
                <p className="text-5xl pb-8 text-accent">Get In Touch</p>
                <form className="w-full">
                    <div className="pb-4">
                        <p className="text-2xl text-gray-500 pb-1">Name</p>
                        <input
                            type="text"
                            className="bg-white w-full p-4 text-lg text-gray-800 rounded-md"
                        ></input>
                    </div>
                    <div className="pb-4">
                        <p className="text-2xl text-gray-500  pb-1">Email</p>
                        <input
                            type="text"
                            className="bg-white w-full p-4 text-lg text-gray-800 rounded-md"
                        ></input>
                    </div>
                    <div className="pb-4">
                        <p className="text-2xl text-gray-500 pb-1">Message</p>
                        <textarea
                            rows={7}
                            type="text"
                            className="bg-white w-full p-4 text-lg text-gray-800 rounded-md"
                        />
                    </div>
                    <button className="text-white text-2xl w-full bg-accent py-3">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};
export default HomeContactUs;
