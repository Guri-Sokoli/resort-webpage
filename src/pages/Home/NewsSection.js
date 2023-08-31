import Quotes from "../../img/quotes.svg";
const NewsSection = () => {
    return (
        <div className="flex flex-col items-center w-full h-max bg-white pb-32">
            <div className="flex flex-col items-center text-gray-600 p-5">
                <h1 className="text-6xl font-bold p-12">Stay Tuned</h1>
                <p className="text-3xl py-2">Our News</p>
                <div className="horizontalDivider"></div>
                <div class="container mx-auto p-4">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-10">
                        <div class="grid gap-4">
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/03/Kashi_Vishwanath_Temple_Banaras.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center bg-green-400 text-3xl text-center text-white rounded-md">
                                <h1 className="pt-16">
                                    "Peaceful place paired up with a beautiful
                                    scenery!"
                                </h1>
                                <div className="horizontalDividerAuto"></div>

                                <div className="flex flex-row justify-center items-center pb-16">
                                    <img
                                        src={Quotes}
                                        alt="quotes"
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                                    <p className="">Guri S</p>
                                </div>
                            </div>
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://pbs.twimg.com/media/FGRnNpAVUAYqRYv?format=jpg&name=large"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://pbs.twimg.com/media/FGRnP_TUUAAttG3?format=jpg&name=large"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg/1280px-Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="grid gap-4">
                            <img
                                class="h-auto rounded-lg"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg"
                                alt=""
                            />
                            <div>
                                <img
                                    class="h-auto max-w-full rounded-lg"
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/25/Chet_Singh_Ghat_in_Varanasi.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
