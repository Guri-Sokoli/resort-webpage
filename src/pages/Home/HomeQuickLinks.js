import Logo from "../../img/Resort-logos_white.png";
import InstagramLogo from "../../img/Instagram-Logo.js";
import FacebookLogo from "../../img/Facebook-Logo.js";

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
            className="flex justify-around items-center bg-white py-32"
            style={containerStyle}
        >
            <div className="flex flex-row bg-white w-full h-max mx-24 text-black">
                <div className="flex flex-col p-16">
                    <img
                        src={Logo}
                        alt="logo"
                        width={125}
                        height={125}
                        className=" bg-accent rounded-full"
                    />
                    <p className="text-xl w-1/2 tracking-widest leading-10">
                        Come and visit Mountain View Resort on beautiful Lake
                        Manitou! We have the perfect spot for a holiday that the
                        entire family will enjoy.
                    </p>
                    <div className="flex flex-row">
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={25}
                                    height={25}
                                    fill="currentColor"
                                    className="bi bi-twitter"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M15.938 3.056a5.572 5.572 0 0 1-1.6.438 2.782 2.782 0 0 0 1.219-1.531 5.564 5.564 0 0 1-1.766.672 2.78 2.78 0 0 0-4.75 2.531 7.9 7.9 0 0 1-5.75-2.922 2.78 2.78 0 0 0 .86 3.703A2.77 2.77 0 0 1 2.5 5.875v.031a2.78 2.78 0 0 0 2.219 2.719 2.775 2.775 0 0 1-.719.094 2.47 2.47 0 0 1-.531-.063 2.78 2.78 0 0 0 2.594 1.922A5.57 5.57 0 0 1 2 12.25a7.85 7.85 0 0 0 4.25 1.25c5.125 0 7.938-4.25 7.938-7.937 0-.125 0-.25-.008-.375A5.65 5.65 0 0 0 16 3.563c-.563.25-1.063.5-1.562.875z"
                                    />
                                </svg>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeQuickLinks;
