import { ActionButton } from "./ActionButton";
import { HeaderLink } from "./HeaderLink";
import { ResortLogo } from "./ResortLogo";
import { SocialMediaLinks } from "./SocialMediaLinks";

const Header = () => {
    return (
        <header className="flex flex-row justify-center align-middle bg-accent w-full">
            <ResortLogo />
            <ul className="flex items-center">
                <HeaderLink href="#home">Home</HeaderLink>
                <HeaderLink href="#accommodations">Accommodations</HeaderLink>
                <HeaderLink href="#activities">Activities</HeaderLink>
                <HeaderLink href="#aboutus">About Us</HeaderLink>
                <HeaderLink href="#news">News</HeaderLink>
                <HeaderLink href="#contact">Contact Us</HeaderLink>
            </ul>
            <ActionButton text="Book Now" />

            <div className="flex justify-center items-center pl-32">
                <SocialMediaLinks />
            </div>
        </header>
    );
};

export default Header;
