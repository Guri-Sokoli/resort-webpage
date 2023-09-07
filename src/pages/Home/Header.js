import { useState, useEffect } from "react";
import { ActionButton } from "../../components/ActionButton";
import { HeaderLink } from "../../components/HeaderLink";
import { ResortLogo } from "../../components/ResortLogo";
import { SocialMediaLinks } from "../../components/SocialMediaLinks";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const shouldSticky = scrollPosition > 1000; // Adjust the scroll position threshold as needed

        setIsSticky(shouldSticky);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`flex flex-row justify-around items-center bg-accent h-32 ${
                isSticky ? "sticky top-0 z-50" : ""
                // duhet qitu me ndreq me bo ma smooth, edhe mundsisht mos me downloadu libraria
            }`}
        >
            <ResortLogo />
            <ul className="flex items-center">
                <HeaderLink href="#home">Home</HeaderLink>
                <div onMouseLeave={() => setOpen(false)} className="relative">
                    <button onMouseOver={() => setOpen(true)}>
                        <HeaderLink href="#accommodations">
                            Accommodations
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-6 h-6 ml-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                            <ul
                                className={`absolute mt-7 w-40 z-30 bg-primary text-white shadow-white shadow ${
                                    open ? "block" : "hidden"
                                }`}
                            >
                                <li className="flex w-full items-center px-3 py-2 text-2xl border-b hover:bg-secondary">
                                    Cabin 1
                                </li>
                                <li className="flex w-full items-center px-3 py-2 text-2xl border-b hover:bg-secondary">
                                    Cabin 2
                                </li>
                                <li className="flex w-full items-center px-3 py-2 text-2xl border-b hover:bg-secondary">
                                    Cabin 3
                                </li>
                                <li className="flex w-full items-center px-3 py-2 text-2xl border-b hover:bg-secondary">
                                    Cabin 4
                                </li>
                                <li className="flex w-full items-center px-3 py-2 text-2xl border-b hover:bg-secondary">
                                    Cabin 5
                                </li>
                                <li className="flex w-full items-center px-3 py-2 text-2xl border-b hover:bg-secondary">
                                    Cabin 6
                                </li>
                                <li className="flex w-full items-center px-3 py-2 text-2xl border-b hover:bg-secondary">
                                    Cabin 7
                                </li>
                                <li className="flex w-full items-center px-3 py-2 text-2xl border-b hover:bg-secondary">
                                    Cabin 8
                                </li>
                            </ul>
                        </HeaderLink>
                    </button>
                </div>

                <HeaderLink href="#activities">Activities</HeaderLink>
                <HeaderLink href="#aboutus">About Us</HeaderLink>
                <HeaderLink href="#news">News</HeaderLink>
                <HeaderLink href="#contact">Contact Us</HeaderLink>
            </ul>
            <div className="flex">
                <ActionButton
                    href="/booking"
                    text="Book Now"
                    buttonBgColor="bg-primary"
                />
                <SocialMediaLinks />
            </div>
        </header>
    );
};

export default Header;
