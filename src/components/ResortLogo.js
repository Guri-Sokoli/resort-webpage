import Logo from "../img/Resort-logos_white.png";
export const ResortLogo = (props) => {
    return (
        <a className="px-12" href="#home">
            <img src={Logo} alt="logo" width={125} height={125} className="" />
        </a>
    );
};
