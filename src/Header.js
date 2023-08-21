import { ActionButton } from "./components/ActionButton";
import { HeaderLink } from "./components/HeaderLink";
import { ResortLogo } from "./components/ResortLogo";
import { SocialMediaLinks } from "./components/SocialMediaLinks";

const Header = () => {
    return (
        <header className="flex flex-row justify-center items-center bg-accent h-32">
            <ResortLogo />
            <ul className="flex items-center">
                <HeaderLink href="#home">Home</HeaderLink>
                <HeaderLink href="#accommodations">Accommodations</HeaderLink>
                <HeaderLink href="#activities">Activities</HeaderLink>
                <HeaderLink href="#aboutus">About Us</HeaderLink>
                <HeaderLink href="#news">News</HeaderLink>
                <HeaderLink href="#contact">Contact Us</HeaderLink>
            </ul>
            <ActionButton text="Book Now" buttonBgColor="bg-primary" />
            <SocialMediaLinks />
        </header>
    );
};

export default Header;