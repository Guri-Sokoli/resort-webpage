import InstagramLogo from "../img/Instagram-Logo.js";
import FacebookLogo from "../img/Facebook-Logo.js";
import TwitterIcon from "../img/Twitter-Logo.js";
export const SocialMediaLinks = () => {
    return (
        <div className="flex flex-row justify-center items-center px-8">
            <button className="px-2">
                <a href="https://www.instagram.com/">
                    <InstagramLogo fill="#fff" />
                </a>
            </button>
            <button className="px-2">
                <a href="https://www.facebook.com/">
                    <FacebookLogo fill="#fff" />
                </a>
            </button>
            <button
                className="px-2"
                href="https://www.twitter.com/"
                fill="#fff"
            >
                <a href="https://www.twitter.com/">
                    <TwitterIcon />
                </a>
            </button>
        </div>
    );
};
