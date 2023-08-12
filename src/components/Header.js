import Logo from "../img/Resort-logos_white.png";
import InstagramLogo from "../img/Instagram-Logo.svg";
import FacebookLogo from "../img/Facebook-Logo.svg";

const Header = () => {
    return (
        <header className="flex justify-center align-middle bg-accent w-full text-md">
            <a className="pr-64">
                <img
                    src={Logo}
                    alt="logo"
                    width={125}
                    height={125}
                    className=""
                />
            </a>
            <ul className="flex items-center">
                <button className="px-12 group flex  transition duration-300">
                    <li className="">
                        <a href="#home">
                            Home
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                    </li>
                </button>
                <button className="px-12 group transition duration-300">
                    <li className="">
                        <a href="#accommodations">
                            Accommodations
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                    </li>
                </button>
                <button className="px-12 group transition duration-300">
                    <li className="">
                        <a href="#activities">
                            Activities
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                    </li>
                </button>
                <button className="px-12 group transition duration-300">
                    <li className="">
                        <a href="#aboutus">
                            About Us
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                    </li>
                </button>
                <button className="px-12 group transition duration-300">
                    <li className="">
                        <a href="#news">
                            News
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                    </li>
                </button>
                <button className="px-12 group transition duration-300">
                    <li className="">
                        <a href="#contact">
                            Contact
                            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                        </a>
                    </li>
                </button>
            </ul>
            <div className="flex px-12">
                <button className="group relative flex justify-items-center items-center bg-primary text-lg px-8 my-8">
                    <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-700 group-hover:w-full"></span>
                    <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-700 group-hover:h-full"></span>
                    <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-700 group-hover:w-full"></span>
                    <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-700 group-hover:h-full"></span>
                    <p className="">Book Now</p>
                </button>
            </div>

            {/*down here are the 3 social media logos, instagram, facebook, and twitter*/}
            <div className="flex justify-center items-center">
                <button className="px-2">
                    <a href="https://www.instagram.com/">
                        <img
                            src={InstagramLogo}
                            alt="instagram logo"
                            width={25}
                            height={25}
                            className=""
                            fill="#fff"
                        />
                    </a>
                </button>
                <button className="px-2">
                    <a href="https://www.facebook.com/">
                        <img
                            src={FacebookLogo}
                            alt="facebook logo"
                            width={25}
                            height={25}
                            className=""
                        />
                    </a>
                </button>
            </div>
        </header>
    );
};

export default Header;
