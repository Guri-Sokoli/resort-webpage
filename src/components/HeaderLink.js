import { Link } from "react-router-dom";

export const HeaderLink = (props) => {
    return (
        <button className="px-12 group flex transition duration-300">
            <li className="">
                <Link to={props.to} className="flex flex-row">
                    {props.children}
                </Link>
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white "></span>
            </li>
        </button>
    );
};
