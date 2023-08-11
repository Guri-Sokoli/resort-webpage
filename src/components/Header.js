const Header = () => {
    return (
        <header className="flex justify-center align-middle bg-accent px-72 py-7 w-full text-xl">
            <h1 className="mr-12 pl-8">Resort Logo</h1>
            <ul className="flex items-center">
                <button className="">
                    <li className="group px-12 transition duration-300">
                        <a href="#home">
                            Home
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                    </li>
                </button>
                <button>
                    <li className="group flex px-12 transition duration-300">
                        <a href="#accommodations">
                            Accommodations
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                    </li>
                </button>
                <button>
                    <li className="group px-12 transition duration-300">
                        <a href="#activities">
                            Activities
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                    </li>
                </button>
                <button>
                    <li className="group px-12 transition duration-300">
                        <a href="#aboutus">
                            About Us
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                    </li>
                </button>
                <button>
                    <li className="group px-12 transition duration-300">
                        <a href="#news">
                            News
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                    </li>
                </button>
                <button>
                    <li className="group px-12 transition duration-300">
                        <a href="#contact">
                            Contact
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                    </li>
                </button>
            </ul>
            <div className="flex px-12">
                <button className="group relative flex justify-items-center items-center bg-primary text-lg px-6 py-2">
                    <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-700 group-hover:w-full"></span>
                    <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-700 group-hover:h-full"></span>
                    <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-700 group-hover:w-full"></span>
                    <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-700 group-hover:h-full"></span>
                    <p className="">Book Now</p>
                </button>
            </div>
        </header>
    );
};

export default Header;
