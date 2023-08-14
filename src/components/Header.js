import Logo from "../img/Resort-logos_white.png";
import InstagramLogo from "../img/Instagram-Logo.svg";
import FacebookLogo from "../img/Facebook-Logo.svg";

const Header = () => {
    return (
        <header className="flex flex-row justify-center align-middle bg-accent w-full text-">
            <a className="pr-32" href="#home">
                <img
                    src={Logo}
                    alt="logo"
                    width={125}
                    height={125}
                    className=""
                />
            </a>
            <ul className="flex items-center">
                <button className="px-12 group flex transition duration-300">
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
                <button className="px-8 group transition duration-300">
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
            <div className="flex px-4">
                <button class="text-lg px-6 py-4 my-12 relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-primary text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-56 hover:before:w-56">
                    <span class="relative z-10">Book Now</span>
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
