import Logo from "../../img/Resort-logos_white.png";
import InstagramLogo from "../../img/Instagram-Logo.js";
import FacebookLogo from "../../img/Facebook-Logo.js";
import TwitterIcon from "../../img/Twitter-Logo.js";
import RightArrowIcon from "../../img/RightArrowIcon.js";

const HomeQuickLinks = () => {
    const bgView =
        "https://mountainviewmanitoulin.com/wp-content/uploads/2022/07/footer-2.jpg?id=1882";

    const containerStyle = {
        position: "relative",
        backgroundImage: `url(${bgView})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
    };

    return (
        <div
            className="flex flex-col items-center bg-white py-24 px-24"
            style={containerStyle}
        >
            <div className="flex flex-row justify-center items-center bg-white w-full mx-24 text-black">
                <div className="flex flex-col p-8 pl-12 w-7/12">
                    <img
                        src={Logo}
                        alt="logo"
                        width={85}
                        height={85}
                        className=" bg-accent rounded-full"
                    />
                    <p className="text-xl tracking-widest leading-10 pt-12">
                        Come and visit Mountain View Resort on beautiful Lake
                        Manitou! We have the perfect spot for a holiday that the
                        entire family will enjoy.
                    </p>
                    <div className="flex flex-row pt-8">
                        <button className="px-2">
                            <a href="https://www.instagram.com/">
                                <InstagramLogo fill="#000" />
                            </a>
                        </button>
                        <button className="px-2">
                            <a href="https://www.facebook.com/">
                                <FacebookLogo fill="#000" />
                            </a>
                        </button>
                        <button
                            className="px-2"
                            href="https://www.twitter.com/"
                            fill="#000"
                        >
                            <a href="https://www.twitter.com/">
                                <TwitterIcon />
                            </a>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col justify-center w-5/12 h-max">
                    <div className="flex flex-row justify-center items-center align-center">
                        <div className="flex flex-col justify-start w-full h-full">
                            <p className="text-xl font-bold">Quick Links</p>
                            <br />
                            <ul className="flex flex-col space-y-2">
                                <p className="flex flex-row items-center">
                                    <RightArrowIcon fill="#878787" />
                                    <button>
                                        <a>
                                            <p className="pl-1">About Us</p>
                                        </a>
                                    </button>
                                </p>
                                <p className="flex flex-row items-center">
                                    <RightArrowIcon fill="#878787" />
                                    <button>
                                        <a>
                                            <p className="pl-1">News</p>
                                        </a>
                                    </button>
                                </p>
                                <p className="flex flex-row items-center">
                                    <RightArrowIcon fill="#878787" />
                                    <button>
                                        <a>
                                            <p className="pl-1">Contact</p>
                                        </a>
                                    </button>
                                </p>
                                <p className="flex flex-row items-center">
                                    <RightArrowIcon fill="#878787" />
                                    <button>
                                        <a>
                                            <p className="pl-1">Book Now</p>
                                        </a>
                                    </button>
                                </p>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-start w-full h-full">
                            <p className="text-xl font-bold">Our Cabins</p>
                            <br />
                            <ul className="flex flex-col space-y-2">
                                <p className="flex flex-row items-center">
                                    <RightArrowIcon fill="#878787" />
                                    <button>
                                        <a>
                                            <p className="pl-1">Cabin One</p>
                                        </a>
                                    </button>
                                </p>
                                <p className="flex flex-row items-center">
                                    <RightArrowIcon fill="#878787" />
                                    <button>
                                        <a>
                                            <p className="pl-1">Cabin Two</p>
                                        </a>
                                    </button>
                                </p>
                                <p className="flex flex-row items-center">
                                    <RightArrowIcon fill="#878787" />
                                    <button>
                                        <a>
                                            <p className="pl-1">Cabin Three</p>
                                        </a>
                                    </button>
                                </p>
                                <p className="flex flex-row items-center">
                                    <RightArrowIcon fill="#878787" />
                                    <button>
                                        <a>
                                            <p className="pl-1">Cabin Four</p>
                                        </a>
                                    </button>
                                </p>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-start w-full h-full">
                            <br />
                            <br />
                            <ul className="flex flex-col space-y-2">
                                <p className="flex flex-row items-center">
                                    <RightArrowIcon fill="#878787" />
                                    <button>
                                        <a>
                                            <p className="pl-1">Cabin Five</p>
                                        </a>
                                    </button>
                                </p>
                                <p className="flex flex-row items-center">
                                    <RightArrowIcon fill="#878787" />
                                    <button>
                                        <a>
                                            <p className="pl-1">Cabin Six</p>
                                        </a>
                                    </button>
                                </p>
                                <p className="flex flex-row items-center">
                                    <RightArrowIcon fill="#878787" />
                                    <button>
                                        <a>
                                            <p className="pl-1">Cabin Seven</p>
                                        </a>
                                    </button>
                                </p>
                                <p className="flex flex-row items-center">
                                    <RightArrowIcon fill="#878787" />
                                    <button>
                                        <a>
                                            <p className="pl-1">Cabin Eight</p>
                                        </a>
                                    </button>
                                </p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between bg-accent py-6 w-full h-max px-8">
                <p>© 2023 Webpage Resort</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
};

export default HomeQuickLinks;
